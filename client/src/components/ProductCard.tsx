import { cn } from "@/lib/utils";
import { parseCoffeeAttributes, shouldDisplayTag } from "@/lib/tags";
import { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";

function ImageFallback({ title }: { title: string }) {
  const seed = title.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase() || "EC";
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-muted/30 text-muted-foreground">
      <div className="font-sans text-5xl tracking-tight text-foreground/60">{seed}</div>
      <div className="font-mono text-[0.625rem] uppercase tracking-[0.3em]">No Image</div>
    </div>
  );
}

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  description?: string;
  tags?: string[];
  isNew?: boolean;
  className?: string;
  productUrl?: string;
  index?: number;
}

export default function ProductCard({
  title,
  price,
  image,
  description,
  tags = [],
  isNew,
  className,
  productUrl = "https://idrinkcoffee.com/collections/coffee",
  index,
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageBroken, setImageBroken] = useState(false);
  const attributes = parseCoffeeAttributes(tags);

  const specRows: { label: string; value?: string }[] = [
    { label: "Origin", value: attributes.region },
    { label: "Process", value: attributes.processing },
    { label: "Elev.", value: attributes.elevation },
    { label: "Roast", value: attributes.roast },
  ].filter((r) => Boolean(r.value)) as { label: string; value: string }[];

  const notes = attributes.notes?.slice(0, 3);
  const productType = shouldDisplayTag(tags[0] ?? "") ? tags[0] : undefined;

  return (
    <>
      <article
        onClick={() => setIsModalOpen(true)}
        className={cn(
          "group relative flex flex-col h-full bg-card text-card-foreground border border-border hover:border-primary/70 transition-colors duration-300 cursor-pointer overflow-hidden",
          className,
        )}
      >
        {/* Index + status meta strip */}
        <div className="flex items-center justify-between px-4 pt-3 pb-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="tabular-nums">
            {typeof index === "number"
              ? `№ ${String(index + 1).padStart(2, "0")}`
              : "№ —"}
          </span>
          {isNew ? (
            <span className="text-primary tracking-[0.25em]">● New</span>
          ) : productType ? (
            <span className="opacity-80">{productType}</span>
          ) : null}
        </div>

        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-muted/40 mx-4 border border-border/60">
          {image && !imageBroken ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              onError={() => setImageBroken(true)}
              className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <ImageFallback title={title} />
          )}
          {/* Hover stamp */}
          <div className="absolute bottom-2 right-2 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-foreground bg-background/85 backdrop-blur-sm px-2 py-1 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            View Specs →
          </div>
        </div>

        {/* Title row */}
        <div className="px-4 pt-5 pb-2">
          <h3 className="font-sans uppercase text-[1.05rem] leading-[1.05] tracking-[0.01em] text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem]">
            {title}
          </h3>
        </div>

        {/* Tasting notes (editorial italic) */}
        {notes && notes.length > 0 && (
          <p className="px-4 pb-3 font-serif italic text-[0.95rem] leading-snug text-muted-foreground line-clamp-2">
            {notes.join(", ")}.
          </p>
        )}

        {/* Spec rail */}
        {specRows.length > 0 && (
          <dl className="mx-4 mb-3 border-t border-border/70 pt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 font-mono text-[0.7rem] uppercase tracking-wider">
            {specRows.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-2">
                <dt className="text-muted-foreground/80 tracking-[0.18em]">
                  {row.label}
                </dt>
                <dd className="text-foreground truncate">{row.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {/* Description (compact) */}
        {description && !notes?.length && (
          <p className="px-4 pb-3 text-xs text-muted-foreground line-clamp-2 font-mono leading-relaxed">
            {description}
          </p>
        )}

        {/* Spacer pushes price strip to bottom */}
        <div className="flex-1" />

        {/* Bottom price + cta strip */}
        <div className="border-t border-border/70 px-4 py-3 flex items-baseline justify-between gap-3 mt-auto">
          <span className="font-sans text-xl tracking-tight text-foreground">{price}</span>
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-primary transition-colors">
            Details →
          </span>
        </div>
      </article>

      <ProductDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{ title, price, image, description, tags, productUrl }}
      />
    </>
  );
}
