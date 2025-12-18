import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Droplets, MapPin, ExternalLink, Mountain, Coffee, Wheat, Sprout } from "lucide-react";
import { parseCoffeeAttributes } from "@/lib/tags";

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    price: string;
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
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-border">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-64 md:h-full bg-muted">
            <img 
              src={product.image} 
              alt={product.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 flex flex-col h-full">
            <DialogHeader className="mb-4">
              <div className="flex justify-between items-start gap-4 mb-2">
                <Badge variant="outline" className="font-mono text-xs uppercase tracking-wider text-primary border-primary">
                  {attributes.roast ? `${attributes.roast} Roast` : 'Specialty Coffee'}
                </Badge>
                <span className="font-mono font-bold text-xl text-primary">{product.price}</span>
              </div>
              <DialogTitle className="font-sans font-bold text-2xl md:text-3xl uppercase tracking-wide leading-tight">
                {product.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 flex-1">
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
              <div className="space-y-4 py-6 border-y border-border">
                {attributes.elevation && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mountain className="h-5 w-5 text-muted-foreground" />
                      <span className="font-sans font-bold text-sm">Elevation</span>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{attributes.elevation}</span>
                  </div>
                )}
                
                {attributes.brew && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Coffee className="h-5 w-5 text-muted-foreground" />
                      <span className="font-sans font-bold text-sm">Brew</span>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{attributes.brew}</span>
                  </div>
                )}

                {attributes.harvest && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Wheat className="h-5 w-5 text-muted-foreground" />
                      <span className="font-sans font-bold text-sm">Harvesting</span>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{attributes.harvest}</span>
                  </div>
                )}

                {attributes.roast && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Flame className="h-5 w-5 text-muted-foreground" />
                      <span className="font-sans font-bold text-sm">Roast</span>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{attributes.roast}</span>
                  </div>
                )}

                {attributes.processing && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Droplets className="h-5 w-5 text-muted-foreground" />
                      <span className="font-sans font-bold text-sm">Processing</span>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{attributes.processing}</span>
                  </div>
                )}

                {attributes.region && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span className="font-sans font-bold text-sm">Region</span>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{attributes.region}</span>
                  </div>
                )}
                
                {attributes.varietal && attributes.varietal.length > 0 && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Sprout className="h-5 w-5 text-muted-foreground" />
                      <span className="font-sans font-bold text-sm">Varietal</span>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground text-right">{attributes.varietal.join(", ")}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              {product.description && (
                <div className="prose prose-sm dark:prose-invert font-mono text-muted-foreground leading-relaxed max-h-[150px] overflow-y-auto pr-2">
                  <p>{product.description}</p>
                </div>
              )}
            </div>

            {/* Action Footer */}
            <div className="mt-8 pt-4">
              <a href={product.productUrl} target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button className="w-full font-sans font-bold uppercase tracking-widest py-6 text-base gap-2">
                  Buy on iDrinkCoffee.com <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
              <p className="text-center text-[10px] text-muted-foreground mt-3 font-mono uppercase tracking-wider">
                Secure checkout provided by our partner iDrinkCoffee.com
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
