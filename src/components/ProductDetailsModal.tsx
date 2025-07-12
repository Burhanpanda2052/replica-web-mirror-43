import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/data/products";
import { ShoppingCart, Calculator, Truck, X } from "lucide-react";
import { useState } from "react";
import CalculatorModal from "./CalculatorModal";
import DeliveryInfoModal from "./DeliveryInfoModal";
interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onQuickQuote?: (productId: string) => void;
}
const ProductDetailsModal = ({
  product,
  isOpen,
  onClose,
  onQuickQuote
}: ProductDetailsModalProps) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);

  if (!product) return null;
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{product.name}</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              {product.image ? <img src={product.image} alt={`${product.name} - Total Builders`} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
                  <product.icon className="h-16 w-16 text-muted-foreground" />
                </div>}
            </div>
            
            {/* Stock Status */}
            <div className="flex justify-center">
              
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-3">
                {product.category}
              </Badge>
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Pricing */}
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary mb-1">{product.price}</div>
              <div className="text-sm text-muted-foreground">{product.unit || "per unit"}</div>
            </div>

            {/* Key Specifications */}
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <div className="grid gap-2">
                {product.specifications.map((spec, index) => <div key={index} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {spec}
                  </div>)}
              </div>
            </div>

            {/* Technical Specifications */}
            {product.technicalSpecs && <div>
                <h3 className="font-semibold mb-3">Technical Specifications</h3>
                <div className="space-y-2">
                  {Object.entries(product.technicalSpecs).map(([key, value]) => <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>)}
                </div>
              </div>}

            <Separator />

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex-1" onClick={() => onQuickQuote?.(product.id)}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Get Quote
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => setShowCalculator(true)}>
                <Calculator className="h-4 w-4 mr-2" />
                Calculate
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => setShowDeliveryInfo(true)}>
                <Truck className="h-4 w-4 mr-2" />
                Delivery Info
              </Button>
            </div>
          </div>
        </div>

        {/* Calculator Modal */}
        <CalculatorModal 
          isOpen={showCalculator} 
          onClose={() => setShowCalculator(false)}
          productName={product.name}
        />

        {/* Delivery Info Modal */}
        <DeliveryInfoModal 
          isOpen={showDeliveryInfo} 
          onClose={() => setShowDeliveryInfo(false)}
          productName={product.name}
        />
      </DialogContent>
    </Dialog>;
};
export default ProductDetailsModal;