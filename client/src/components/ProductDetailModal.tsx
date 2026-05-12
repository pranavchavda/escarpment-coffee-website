import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { ExternalLink, X } from "lucide-react";
import { parseCoffeeAttributes } from "@/lib/tags";
import { useState } from "react";
import StrataRule from "./StrataRule";

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    price: string | number;
    image: string;
    description?: string;
    tags?: string[];
    productUrl: string;
  };
}

export default function ProductDetailModal({
  isOpen,
  onClose,
  product,
}: ProductDetailModalProps) {
  const attributes = parseCoffeeAttributes(product.tags || []);
  const [imageBroken, setImageBroken] = useState(false);

  const specRows: { label: string; value: string }[] = [
    attributes.region && { label: "Origin", value: attributes.region },
    attributes.varietal?.length && { label: "Varietal", value: attributes.varietal.join(", ") },
    attributes.elevation && { label: "Elevation", value: attributes.elevation },
    attributes.processing && { label: "Process", value: attributes.processing },
    attributes.roast && { label: "Roast", value: attributes.roast },
    attributes.brew && { label: "Brew", value: attributes.brew },
    attributes.harvest && { label: "Harvest", value: attributes.harvest },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-background/80 backdrop-blur-sm" />
      <DialogContent
        className="w-[min(96vw,1280px)] sm:max-w-none max-h-[calc(100vh-4rem)] p-0 gap-0 overflow-hidden bg-card border border-border rounded-none"
        showCloseButton={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh]">
          {/* Image — left 5/12 */}
          <div className="relative md:col-span-5 bg-muted/40 min-h-[280px] md:min-h-[420px] flex items-center justify-center border-b md:border-b-0 md:border-r border-border/60">
            <DialogClose asChild>
              <button
                type="button"
                className="absolute top-3 right-3 z-10 inline-flex h-8 w-8 items-center justify-center bg-background/85 backdrop-blur text-foreground border border-border hover:border-primary hover:text-primary transition-colors md:hidden"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </DialogClose>

            {/* Plate stamp */}
            <div className="absolute top-3 left-3 z-10 font-mono text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground">
              <div>Plate</div>
              <div className="text-foreground/80">SPEC_001</div>
            </div>

            {product.image && !imageBroken ? (
              <img
                src={product.image}
                alt={product.title}
                onError={() => setImageBroken(true)}
                className="w-full h-full object-contain p-8"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 text-muted-foreground">
                <div className="font-sans text-6xl tracking-tight text-foreground/60">
                  {product.title.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase() || "EC"}
                </div>
                <div className="font-mono text-[0.625rem] uppercase tracking-[0.3em]">
                  No Image
                </div>
              </div>
            )}
          </div>

          {/* Spec sheet — right 7/12 */}
          <div className="md:col-span-7 flex flex-col overflow-y-auto">
            <DialogClose asChild>
              <button
                type="button"
                className="absolute top-3 right-3 z-10 hidden md:inline-flex h-8 w-8 items-center justify-center bg-background/85 backdrop-blur text-foreground border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </DialogClose>

            <DialogHeader className="p-6 md:p-10 pb-6 space-y-4 pr-14 md:pr-14">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground">
                <span>Specification Sheet</span>
                <span className="text-primary tabular-nums text-sm">{product.price}</span>
              </div>

              <DialogTitle className="font-sans uppercase text-3xl md:text-4xl leading-[0.95] tracking-stratum text-foreground">
                {product.title}
              </DialogTitle>

              {attributes.notes && attributes.notes.length > 0 && (
                <p className="font-serif italic text-lg md:text-xl text-muted-foreground leading-snug">
                  {attributes.notes.join(", ")}.
                </p>
              )}
            </DialogHeader>

            <div className="px-6 md:px-10">
              <StrataRule className="text-border" />
            </div>

            {specRows.length > 0 && (
              <div className="px-6 md:px-10 py-6">
                <div className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-primary mb-4">
                  ¶ Attributes
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 font-mono text-sm">
                  {specRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border/40 pb-2"
                    >
                      <dt className="uppercase tracking-[0.18em] text-[0.7rem] text-muted-foreground shrink-0">
                        {row.label}
                      </dt>
                      <dd className="text-foreground text-right uppercase tracking-tight break-words">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {product.description && (
              <div className="px-6 md:px-10 py-2 pb-6">
                <div className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-primary mb-3">
                  ¶ Description
                </div>
                <p className="font-serif text-base leading-relaxed text-foreground/90">
                  {product.description.replace(/…$/, "").trim()}
                </p>
              </div>
            )}

            <div className="mt-auto px-6 md:px-10 py-6 border-t border-border/60 bg-background/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground max-w-[60%]">
                Fulfilled through iDrinkCoffee.com
              </div>
              <a
                href={product.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-sans uppercase tracking-[0.18em] text-xs hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Buy at iDrinkCoffee
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
