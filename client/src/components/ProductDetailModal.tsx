import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Droplets, MapPin, ExternalLink, Mountain, Coffee, Wheat, Sprout, X } from "lucide-react";
import { parseCoffeeAttributes } from "@/lib/tags";

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    price: number;
    image: string;
    description?: string;
    tags?: string[];
    productUrl: string;
  };
}

export default function ProductDetailModal({ isOpen, onClose, product }: ProductDetailModalProps) {
  const attributes = parseCoffeeAttributes(product.tags || []);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className=" bg-accent-foreground/55 backdrop-blur-3xl shadow-2xl opacity-70" />
      <DialogContent
        className="w-full rounded-2xl  opacity-90 bg-blend-color-dodge backdrop-blur-3xl max-w-7xl max-h-[calc(100vh-4rem)] p-0 overflow-y-auto bg-card border-border min-w-[calc(100vw-10rem)]"
        showCloseButton={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto overflow-x-clip min-w-fit">
          {/* Image Section */}
          <div className="relative h-64 md:h-auto md:min-h-[400px] bg-muted flex items-center justify-center">
            <DialogClose asChild>
              <button
                type="button"
                className="absolute top-4 right-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-md bg-background/80 text-foreground shadow-sm ring-1 ring-border backdrop-blur transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </DialogClose>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-scale-down"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 flex flex-col h-full min-h-0 min-w-0">
            <DialogHeader className="mb-6 shrink-0">
              <div className="flex justify-between items-start gap-4 mb-2">
                <Badge variant="outline" className="font-mono text-xs uppercase tracking-wider text-primary border-primary">
                  {attributes.roast ? `${attributes.roast} Roast` : 'Specialty Coffee'}
                </Badge>
                <span className="font-mono font-bold text-xl text-primary">{product.price}</span>
              </div>
              <DialogTitle className="relative z-10 font-sans font-bold text-2xl md:text-3xl uppercase tracking-wide leading-normal pb-4">
                {product.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 flex-1 min-h-fit min-w-fit overflow-y-auto pr-2">
              {/* Tasting Notes */}
              {attributes.notes && attributes.notes.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-muted-foreground">Tasting Notes</h4>
                  <div className="flex flex-wrap gap-2">
                    {attributes.notes.map((note) => (
                      <Badge key={note} variant="secondary" className="font-mono text-xs uppercase tracking-tight">
                        {note}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Attributes List */}
              <div className="py-4 border-y border-border">
                <table className="w-full">
                  <tbody className="divide-y divide-border/50">
                    {attributes.elevation && (
                      <tr>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-3">
                            <Mountain className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            <span className="font-sans font-bold text-sm">Elevation</span>
                          </div>
                        </td>
                        <td className="py-3 text-right font-mono text-sm text-muted-foreground">{attributes.elevation}</td>
                      </tr>
                    )}
                    {attributes.brew && (
                      <tr>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-3">
                            <Coffee className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            <span className="font-sans font-bold text-sm">Brew</span>
                          </div>
                        </td>
                        <td className="py-3 text-right font-mono text-sm text-muted-foreground">{attributes.brew}</td>
                      </tr>
                    )}
                    {attributes.harvest && (
                      <tr>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-3">
                            <Wheat className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            <span className="font-sans font-bold text-sm">Harvesting</span>
                          </div>
                        </td>
                        <td className="py-3 text-right font-mono text-sm text-muted-foreground">{attributes.harvest}</td>
                      </tr>
                    )}
                    {attributes.roast && (
                      <tr>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-3">
                            <Flame className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            <span className="font-sans font-bold text-sm">Roast</span>
                          </div>
                        </td>
                        <td className="py-3 text-right font-mono text-sm text-muted-foreground">{attributes.roast}</td>
                      </tr>
                    )}
                    {attributes.processing && (
                      <tr>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-3">
                            <Droplets className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            <span className="font-sans font-bold text-sm">Processing</span>
                          </div>
                        </td>
                        <td className="py-3 text-right font-mono text-sm text-muted-foreground">{attributes.processing}</td>
                      </tr>
                    )}
                    {attributes.region && (
                      <tr>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            <span className="font-sans font-bold text-sm">Region</span>
                          </div>
                        </td>
                        <td className="py-3 text-right font-mono text-sm text-muted-foreground">{attributes.region}</td>
                      </tr>
                    )}
                    {attributes.varietal && attributes.varietal.length > 0 && (
                      <tr>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-3">
                            <Sprout className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            <span className="font-sans font-bold text-sm">Varietal</span>
                          </div>
                        </td>
                        <td className="py-3 text-right font-mono text-sm text-muted-foreground">{attributes.varietal.join(", ")}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Description */}
              {product.description && (
                <div className="prose prose-sm dark:prose-invert font-mono text-muted-foreground leading-relaxed max-h-[150px] overflow-y-auto pr-2">
                  <p>{product.description}</p>
                </div>
              )}
            </div>

            {/* Action Footer */}
            <div className="mt-8 pt-4 pb-8 shrink-0">
              <a href={product.productUrl} target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button className="w-full rounded-full font-stretch-semi-expanded font-bold uppercase tracking-widest text-xs gap-2 px-6 py-4">
                  Buy at iDrinkCoffee.com <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
