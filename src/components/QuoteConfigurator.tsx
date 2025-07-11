import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus, Calculator } from "lucide-react";

interface QuoteItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  pricePerUnit: number;
  category: string;
}

const QuoteConfigurator = () => {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const products = {
    cement: [
      { name: "Premium Cement 42.5N", price: 20000, unit: "bag" },
      { name: "Premium Cement 52.5N", price: 22000, unit: "bag" },
    ],
    steel: [
      { name: "Steel Rebar Grade 60", price: 1495000, unit: "ton" },
      { name: "Structural Steel", price: 1650000, unit: "ton" },
    ],
    aggregates: [
      { name: "Washed Sand", price: 57500, unit: "m³" },
      { name: "Crushed Stone", price: 62000, unit: "m³" },
      { name: "Gravel", price: 55000, unit: "m³" },
    ],
    blocks: [
      { name: "6 inch Concrete Block", price: 1150, unit: "block" },
      { name: "8 inch Concrete Block", price: 1350, unit: "block" },
      { name: "9 inch Concrete Block", price: 1500, unit: "block" },
    ],
    roofing: [
      { name: "Metal Roofing Sheets", price: 27600, unit: "m²" },
      { name: "Clay Tiles", price: 32000, unit: "m²" },
      { name: "Waterproof Membrane", price: 15000, unit: "m²" },
    ],
  };

  const addItem = () => {
    if (!selectedCategory || !selectedProduct || quantity <= 0) return;

    const categoryProducts = products[selectedCategory as keyof typeof products];
    const product = categoryProducts.find(p => p.name === selectedProduct);
    if (!product) return;

    const newItem: QuoteItem = {
      id: Date.now().toString(),
      name: product.name,
      quantity,
      unit: product.unit,
      pricePerUnit: product.price,
      category: selectedCategory,
    };

    setItems([...items, newItem]);
    setQuantity(1);
    setSelectedProduct("");
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalCost = items.reduce((sum, item) => sum + (item.quantity * item.pricePerUnit), 0);
  const deliveryFee = totalCost >= 1150000 ? 0 : 50000; // Free delivery over 1,150,000 TZS
  const grandTotal = totalCost + deliveryFee;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calculator className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Live Quote Generator</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build your custom quote in real-time with dynamic pricing and instant calculations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Add Materials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Material Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cement">Cement</SelectItem>
                    <SelectItem value="steel">Steel & Rebar</SelectItem>
                    <SelectItem value="aggregates">Aggregates</SelectItem>
                    <SelectItem value="blocks">Building Blocks</SelectItem>
                    <SelectItem value="roofing">Roofing Materials</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectedCategory && (
                <div>
                  <Label>Product</Label>
                  <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent>
                      {products[selectedCategory as keyof typeof products].map((product) => (
                        <SelectItem key={product.name} value={product.name}>
                          {product.name} - {product.price.toLocaleString()} TZS/{product.unit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <Label>Quantity</Label>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min="1"
                />
              </div>

              <Button onClick={addItem} className="w-full" disabled={!selectedCategory || !selectedProduct}>
                <Plus className="h-4 w-4 mr-2" />
                Add to Quote
              </Button>
            </CardContent>
          </Card>

          {/* Quote Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Quote Summary</span>
                <ShoppingCart className="h-5 w-5" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              {items.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Add materials to start building your quote
                </p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.pricePerUnit.toLocaleString()} TZS/{item.unit}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <Badge variant="secondary">
                          {item.quantity} {item.unit}
                        </Badge>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        
                        <div className="font-medium min-w-[100px] text-right">
                          {(item.quantity * item.pricePerUnit).toLocaleString()} TZS
                        </div>
                      </div>
                    </div>
                  ))}

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="font-medium">{totalCost.toLocaleString()} TZS</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Delivery:</span>
                      <span className={deliveryFee === 0 ? "text-green-600 font-medium" : "font-medium"}>
                        {deliveryFee === 0 ? "FREE" : `${deliveryFee.toLocaleString()} TZS`}
                      </span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-primary">{grandTotal.toLocaleString()} TZS</span>
                    </div>
                  </div>

                  <Button className="w-full mt-4">
                    Request Final Quote
                  </Button>

                  {totalCost < 1150000 && (
                    <p className="text-sm text-muted-foreground text-center">
                      Add {(1150000 - totalCost).toLocaleString()} TZS more for free delivery
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteConfigurator;
