import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import StrataRule from "@/components/StrataRule";
import CoordinateStamp from "@/components/CoordinateStamp";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { fetchCoffeeProducts, type Product } from "@/lib/api";

// Handles to pull from the live JSON so image URLs stay current.
const FEATURED_HANDLES = ["essential-espresso", "essential-espresso-decaf"] as const;

function productToCard(p: Product) {
  return {
    id: p.id,
    title: p.title,
    price: `$${p.priceRange.minVariantPrice.amount}`,
    image: p.featuredImage?.url || "",
    description: p.description.replace(/<[^>]*>?/gm, "").substring(0, 100) + "…",
    tags: p.tags,
    isNew: false,
    productUrl: `https://idrinkcoffee.com/products/${p.handle}`,
  };
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

  const featured = FEATURED_HANDLES
    .map((handle) => products.find((p) => p.handle === handle))
    .filter((p): p is Product => Boolean(p))
    .map(productToCard);

  const featuredHandles = new Set(FEATURED_HANDLES);
  const dynamicProducts = products
    .filter((p) => !featuredHandles.has(p.handle as (typeof FEATURED_HANDLES)[number]))
    .slice(0, 8);

  return (
    <Layout>
      {/* HERO — typographic, asymmetric 7/5 split */}
      <section className="relative overflow-hidden">
        <div className="container relative grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-10 pt-12 lg:pt-20 pb-20 lg:pb-32">
          {/* Sidestamp */}
          <div className="hidden lg:block absolute right-2 top-24 sidestamp">
            ISSUE 03 · LATE SPRING · NIAGARA ESCARPMENT
          </div>

          {/* Left column: editorial type */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 relative z-10">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary reveal">
              Vol. 01 · Issue 03 · Roastery dispatch
            </div>

            <h1
              className="font-sans font-medium uppercase text-foreground tracking-stratum leading-[0.9] reveal"
              style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)", animationDelay: "60ms" }}
            >
              Roasted at the
              <br />
              edge of an
              <br />
              <span className="text-primary">ancient sea.</span>
            </h1>

            <p
              className="font-serif text-xl md:text-2xl leading-snug text-muted-foreground max-w-xl reveal"
              style={{ animationDelay: "180ms" }}
            >
              An independent roastery in Milton, Ontario — the town the Niagara Escarpment runs
              through — sourcing and roasting coffees in <em>modest batches</em>, for the
              people who pay attention.
            </p>

            <div
              className="flex flex-wrap items-center gap-3 pt-2 reveal"
              style={{ animationDelay: "260ms" }}
            >
              <a
                href="https://idrinkcoffee.com/collections/coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 font-sans uppercase tracking-[0.18em] text-sm hover:bg-primary/90 transition-colors"
              >
                Shop the Catalogue
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 border border-border px-6 py-3.5 font-sans uppercase tracking-[0.18em] text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Field Notes
              </Link>
            </div>

            <div className="pt-6">
              <CoordinateStamp meta="EST. SMALL-BATCH ROASTERY" />
            </div>
          </div>

          {/* Right column: image with caption block */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-border">
              <img
                src="/images/hero-bg-2.webp"
                alt="The Niagara Escarpment in autumn"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-background/20" />

              {/* Top-left ID stamp */}
              <div className="absolute top-3 left-3 flex flex-col gap-1 font-mono text-[0.625rem] uppercase tracking-[0.25em] text-foreground/90">
                <span className="opacity-80">PLATE_001</span>
                <span className="opacity-60">N. ESCARPMENT · 540M</span>
              </div>

              {/* Bottom data block */}
              <div className="absolute bottom-0 left-0 right-0 p-4 grid grid-cols-3 gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-foreground/90">
                <div className="border-t border-foreground/40 pt-2">
                  <div className="text-muted-foreground/70">Stratum</div>
                  <div>Limestone</div>
                </div>
                <div className="border-t border-foreground/40 pt-2">
                  <div className="text-muted-foreground/70">Age</div>
                  <div>~430 Ma</div>
                </div>
                <div className="border-t border-foreground/40 pt-2">
                  <div className="text-muted-foreground/70">Length</div>
                  <div>725 km</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <StrataRule className="text-border" />
      </section>

      {/* MANIFESTO — parchment band */}
      <section className="band-parchment py-20 md:py-28 relative">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary">
              ¶ 01 — Method
            </div>
            <h2 className="font-sans uppercase mt-3 text-3xl md:text-4xl leading-tight tracking-stratum">
              What we do.
            </h2>
            <div className="mt-4">
              <StrataRule className="text-border w-24" />
            </div>
          </div>

          <div className="lg:col-span-9 grid md:grid-cols-2 gap-10 md:gap-14">
            <p className="font-serif text-lg md:text-xl leading-relaxed dropcap">
              We source green coffee with deliberate restraint — fewer farms, longer
              relationships. Each lot is cupped, roasted in test batches, then released only
              when the cup matches the intent on the bag.
            </p>
            <p className="font-serif text-lg md:text-xl leading-relaxed">
              <em>Industrial in approach, agrarian in patience.</em> We use a small
              production roaster and a methodical schedule — no rush, no shortcuts, no
              "ethically sourced" platitudes. The work is the proof.
            </p>
          </div>
        </div>
      </section>

      {/* CATALOGUE STRIP */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary">
                ¶ 02 — Catalogue
              </div>
              <h2 className="font-sans uppercase mt-3 text-4xl md:text-5xl leading-[0.95] tracking-stratum">
                Currently
                <br />
                <span className="font-serif italic font-normal normal-case text-primary lowercase tracking-normal">
                  roasting.
                </span>
              </h2>
            </div>
            <a
              href="https://idrinkcoffee.com/collections/coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono uppercase tracking-[0.25em] text-xs text-muted-foreground hover:text-primary transition-colors self-start md:self-end"
            >
              Full catalogue
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <StrataRule className="text-border mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item, i) => (
              <ProductCard key={item.id} {...item} index={i} />
            ))}

            {!loading &&
              dynamicProducts.map((product, i) => {
                const card = productToCard(product);
                return <ProductCard key={card.id} {...card} index={featured.length + i} />;
              })}
          </div>

          {loading && (
            <div className="flex justify-center py-12">
              <div className="h-1 w-32 bg-primary/30 overflow-hidden">
                <div className="h-full w-1/3 bg-primary animate-pulse" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SPECIFICATIONS — three "stamps" on charcoal */}
      <section className="border-t border-border bg-card/40 py-20 md:py-24">
        <div className="container">
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary mb-3">
            ¶ 03 — Specifications
          </div>
          <h2 className="font-sans uppercase text-3xl md:text-4xl tracking-stratum mb-12 max-w-2xl leading-tight">
            How we get it to your kitchen.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
            <SpecStamp
              index="S/01"
              label="Shipping"
              title="$75+ ships free"
              body="Across Canada. Bagged within days of roast, dispatched with care."
            />
            <SpecStamp
              index="S/02"
              label="Standard"
              title="Specialty coffee only"
              body="No commodity-grade beans. Sourced through long-relationship importers and the farms behind them."
              accent
            />
            <SpecStamp
              index="S/03"
              label="Freshness"
              title="Small-batch cadence"
              body="No stockpiling. Bags rest seven days off-roast — then they're yours."
            />
          </div>
        </div>
      </section>

      {/* CLOSING DISPATCH */}
      <section className="band-parchment py-24 md:py-32 relative overflow-hidden">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary">
                ¶ 04 — Subscriptions
              </div>
              <h2 className="font-sans uppercase text-4xl md:text-6xl leading-[0.95] tracking-stratum max-w-3xl">
                A standing order for
                <span className="font-serif italic font-normal normal-case text-primary lowercase tracking-normal">
                  {" "}
                  the people who pay attention.
                </span>
              </h2>
              <p className="font-serif text-lg md:text-xl max-w-2xl leading-relaxed">
                Choose your tier. Choose your coffees. We send a different selection every
                cycle — single origins, blends, and the occasional rare lot we couldn't help
                ourselves with.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/subscriptions"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 font-sans uppercase tracking-[0.18em] text-sm hover:bg-primary/90 transition-colors"
              >
                See the tiers
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function SpecStamp({
  index,
  label,
  title,
  body,
  accent = false,
}: {
  index: string;
  label: string;
  title: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <div
      className={[
        "relative p-8 md:p-10 border-border",
        "md:[&:not(:last-child)]:border-r border-b md:border-b-0",
      ].join(" ")}
    >
      <div className="flex items-baseline justify-between mb-6">
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-muted-foreground">
          {index}
        </span>
        <span
          className={`font-mono text-[0.625rem] uppercase tracking-[0.3em] ${
            accent ? "text-primary" : "text-muted-foreground/70"
          }`}
        >
          {label}
        </span>
      </div>
      <h3 className="font-sans uppercase text-2xl md:text-3xl leading-tight tracking-stratum mb-3">
        {title}
      </h3>
      <p className="font-serif italic text-base text-muted-foreground leading-relaxed">
        {body}
      </p>
    </div>
  );
}
