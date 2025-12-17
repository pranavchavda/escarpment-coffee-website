import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { parseCoffeeAttributes, shouldDisplayTag } from "@/lib/tags";
import { Flame, Droplets, MapPin, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  description?: string;
  tags?: string[];
  isNew?: boolean;
  onAddToCart?: () => void;
  className?: string;
  productUrl?: string;
}

export default function ProductCard({ 
  title, 
  price, 
  image, 
  description, 
  tags = [], 
  isNew, 
  onAddToCart,
  className,
  productUrl = "https://idrinkcoffee.com/collections/coffee"
}: ProductCardProps) {
  const attributes = parseCoffeeAttributes(tags);
  const displayTags = tags.filter(shouldDisplayTag).slice(0, 3);

  return (
    <Card className={cn("group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/50 flex flex-col h-full", className)}>
      <div className="relative aspect-square overflow-hidden bg-muted">
        {isNew && (
          <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground hover:bg-primary/90 font-sans uppercase tracking-wider text-xs rounded-none px-2 py-1">
            New Arrival
          </Badge>
        )}
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Attributes on Image Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white space-y-3 z-20 pointer-events-none">
          {attributes.roast && (
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs uppercase tracking-wider">{attributes.roast} Roast</span>
            </div>
          )}
          {attributes.processing && (
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs uppercase tracking-wider">{attributes.processing} Process</span>
            </div>
          )}
          {attributes.region && (
            <div className="flex items-center gap-2 text-center">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="font-mono text-xs uppercase tracking-wider">{attributes.region}</span>
            </div>
          )}
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 p-4 bg-background/90 backdrop-blur-sm border-t border-border z-30">
          <a href={productUrl} target="_blank" rel="noopener noreferrer">
            <Button 
              className="w-full font-sans uppercase tracking-wider text-xs font-bold" 
            >
              View on iDrinkCoffee
            </Button>
          </a>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-sans font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <span className="font-mono font-medium text-primary whitespace-nowrap">
            {price}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0 flex-1 flex flex-col">
        {/* Tasting Notes Highlight */}
        {attributes.notes && attributes.notes.length > 0 && (
          <div className="mb-2 text-xs font-mono text-primary uppercase tracking-tight font-bold">
            {attributes.notes.slice(0, 3).join(" • ")}
          </div>
        )}

        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3 font-mono leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="flex flex-wrap gap-1 mt-auto">
          {displayTags.length > 0 ? (
            displayTags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground font-mono uppercase tracking-tight"
              >
                {tag}
              </span>
            ))
          ) : (
            /* Fallback to showing roast/region if no other tags exist */
            <>
              {attributes.roast && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-border text-muted-foreground font-mono uppercase tracking-tight">
                  {attributes.roast}
                </span>
              )}
              {attributes.region && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-border text-muted-foreground font-mono uppercase tracking-tight">
                  {attributes.region}
                </span>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
