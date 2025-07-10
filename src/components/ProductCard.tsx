
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, Eye, ShoppingCart, Calculator } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  unit?: string;
  specifications: string[];
  image?: string;
  inStock: boolean;
  icon: LucideIcon;
  onQuickQuote?: (productId: string) => void;
  onViewDetails?: (productId: string) => void;
}

const ProductCard = ({ 
  id, 
  name, 
  description, 
  category, 
  price, 
  unit = "per unit",
  specifications, 
  image, 
  inStock, 
  icon: Icon,
  onQuickQuote,
  onViewDetails 
}: ProductCardProps) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-6 space-y-4">
        {/* Product Image */}
        <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
          {image && !imageError ? (
            <>
              {imageLoading && (
                <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
                  <Icon className="h-8 w-8 text-muted-foreground" />
                </div>
              )}
              <img
                src={image}
                alt={`${name} - Total Builders`}
                className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                  imageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageError(true);
                  setImageLoading(false);
                }}
              />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
              <Icon className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
          
          {/* Stock Status Badge */}
          <div className="absolute top-2 right-2">
            <Badge variant={inStock ? "default" : "secondary"}>
              {inStock ? "In Stock" : "Order"}
            </Badge>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <Badge variant="outline" className="text-xs mb-2">
                {category}
              </Badge>
              <h3 className="font-semibold text-lg leading-tight">{name}</h3>
            </div>
            <div className="text-right ml-4">
              <div className="text-xl font-bold text-primary">{price}</div>
              <div className="text-xs text-muted-foreground">{unit}</div>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          
          {/* Key Specifications */}
          <div className="space-y-1">
            {specifications.slice(0, 3).map((spec, index) => (
              <div key={index} className="text-xs text-muted-foreground flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                {spec}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onViewDetails?.(id)}
          >
            <Eye className="h-4 w-4 mr-1" />
            Details
          </Button>
          <Button 
            size="sm" 
            className="flex-1"
            onClick={() => onQuickQuote?.(id)}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
