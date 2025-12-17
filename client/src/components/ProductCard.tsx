import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  description?: string;
  tags?: string[];
  isNew?: boolean;
  onAddToCart?: () => void;
  className?: string;
}

export default function ProductCard({ 
  title, 
  price, 
  image, 
  description, 
  tags, 
  isNew, 
  onAddToCart,
  className 
}: ProductCardProps) {
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
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        
        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 p-4 bg-background/90 backdrop-blur-sm border-t border-border">
          <Button 
            className="w-full font-sans uppercase tracking-wider text-xs font-bold" 
            onClick={onAddToCart}
          >
            Add to Cart
          </Button>
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
      
      <CardContent className="p-4 pt-0 flex-1">
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3 font-mono leading-relaxed">
            {description}
          </p>
        )}
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground font-mono uppercase tracking-tight"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
