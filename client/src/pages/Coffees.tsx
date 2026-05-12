import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import StrataRule from "@/components/StrataRule";
import { useEffect, useMemo, useState } from "react";
import { fetchCoffeeProducts, type Product } from "@/lib/api";
import { parseCoffeeAttributes } from "@/lib/tags";

type Filter = "all" | "decaf" | "espresso" | "single-origin" | "blend";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "single-origin", label: "Single Origin" },
  { id: "blend", label: "Blends" },
  { id: "espresso", label: "Espresso" },
  { id: "decaf", label: "Decaf" },
];

function matchesFilter(p: Product, filter: Filter): boolean {
  if (filter === "all") return true;
  const tags = p.tags.map((t) => t.toLowerCase());
  const title = p.title.toLowerCase();
  if (filter === "decaf") return title.includes("decaf") || tags.some((t) => t.includes("decaf"));
  if (filter === "espresso") return tags.some((t) => t.includes("espresso")) || title.includes("espresso");
  if (filter === "blend") return tags.some((t) => t.includes("blend"));
  if (filter === "single-origin") {
    const isEspresso = tags.some((t) => t.includes("espresso")) || title.includes("espresso");
    const isBlend = tags.some((t) => t.includes("blend"));
    const isDecaf = title.includes("decaf");
    return !isEspresso && !isBlend && !isDecaf;
  }
  return true;
}

export default function Coffees() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<Filter>("all");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await fetchCoffeeProducts();
      if (!cancelled) {
        setProducts(data);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(
    () => products.filter((p) => matchesFilter(p, active)),
    [products, active],
  );

  const stats = useMemo(() => {
    const regions = new Set<string>();
    const processes = new Set<string>();
    for (const p of products) {
      const a = parseCoffeeAttributes(p.tags);
      if (a.region) regions.add(a.region);
      if (a.processing) processes.add(a.processing);
    }
    return { regions: regions.size, processes: processes.size, total: products.length };
  }, [products]);

  return (
    <Layout>
      {/* Hero — editorial spec sheet for the catalogue */}
      <section className="relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10 pt-14 lg:pt-24 pb-14 lg:pb-20">
          <div className="lg:col-span-8">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary reveal">
              Catalogue · Currently Roasting
            </div>
            <h1
              className="mt-4 font-sans uppercase text-foreground tracking-stratum leading-[0.9] reveal"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", animationDelay: "60ms" }}
            >
              The full
              <br />
              <span className="font-serif italic font-normal normal-case text-primary lowercase tracking-normal">
                shelf.
              </span>
            </h1>
            <p
              className="mt-6 font-serif text-xl md:text-2xl text-muted-foreground max-w-2xl leading-snug reveal"
              style={{ animationDelay: "160ms" }}
            >
              Every coffee we are roasting today. A working index — updated as lots arrive,
              retired as they go. Filter by approach or browse the whole shelf.
            </p>
          </div>

          {/* Spec rail with running totals */}
          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 flex flex-col justify-end">
            <div className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Inventory
            </div>
            <div className="grid grid-cols-3 gap-4 font-mono">
              <Stat label="Lots" value={loading ? "…" : String(stats.total)} />
              <Stat label="Origins" value={loading ? "…" : String(stats.regions)} />
              <Stat label="Methods" value={loading ? "…" : String(stats.processes)} />
            </div>
          </aside>
        </div>

        <StrataRule className="text-border" />
      </section>

      {/* Filter strip */}
      <section className="border-b border-border/60">
        <div className="container py-4 flex flex-wrap items-center gap-x-1 gap-y-2">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground mr-3">
            Filter
          </span>
          {FILTERS.map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={
                  "px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] border transition-colors " +
                  (isActive
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary")
                }
              >
                {f.label}
              </button>
            );
          })}
          <span className="ml-auto font-mono text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground tabular-nums">
            {loading ? "…" : `${filtered.length} of ${products.length}`}
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 md:py-20">
        <div className="container">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="h-1 w-32 bg-primary/30 overflow-hidden">
                <div className="h-full w-1/3 bg-primary animate-pulse" />
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState onReset={() => setActive("all")} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={`$${product.priceRange.minVariantPrice.amount}`}
                  image={product.featuredImage?.url || ""}
                  description={
                    product.description.replace(/<[^>]*>?/gm, "").substring(0, 100) + "…"
                  }
                  tags={product.tags}
                  productUrl={`https://idrinkcoffee.com/products/${product.handle}`}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-sans text-3xl md:text-4xl text-foreground tabular-nums leading-none">
        {value}
      </div>
      <div className="mt-2 font-mono text-[0.625rem] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="border border-border p-12 md:p-20 text-center max-w-xl mx-auto">
      <div className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-primary mb-4">
        ¶ Empty Shelf
      </div>
      <h2 className="font-sans uppercase text-2xl md:text-3xl tracking-stratum mb-4">
        Nothing matches that yet.
      </h2>
      <p className="font-serif italic text-muted-foreground mb-6">
        Try a broader view of the catalogue.
      </p>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 border border-border px-5 py-2.5 font-sans uppercase tracking-[0.18em] text-xs hover:border-primary hover:text-primary transition-colors"
      >
        Show All →
      </button>
    </div>
  );
}
