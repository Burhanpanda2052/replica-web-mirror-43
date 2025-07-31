import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { sanitizeInput } from "@/utils/security";
import { useQuote } from "@/contexts/QuoteContext";
import { products } from "@/data/products";
import { Plus, Minus, Package, Quote, Send } from "lucide-react";
import { z } from "zod";

// Validation schema
const quoteSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  phone_number: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address"),
  project_type: z.string().min(1, "Please select a project type"),
  project_location: z.string().min(5, "Location must be at least 5 characters"),
  project_details: z.string().optional(),
});

interface QuoteItem {
  product_id: string;
  product_name: string;
  quantity: number;
  unit: string;
}

const EnhancedQuoteSection = () => {
  const { toast } = useToast();
  const { selectedProduct, setSelectedProduct } = useQuote();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form data
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    project_type: "",
    project_location: "",
    project_details: "",
  });

  // Quote items
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([
    { product_id: "", product_name: "", quantity: 1, unit: "" }
  ]);

  // Get all products in a flat array
  const allProducts = Object.values(products).flat();

  useEffect(() => {
    if (selectedProduct) {
      const productExists = quoteItems.some(item => item.product_id === selectedProduct.productId);
      if (!productExists) {
        const product = allProducts.find(p => p.id === selectedProduct.productId);
        if (product) {
          setQuoteItems(prev => [
            ...prev.filter(item => item.product_id !== ""),
            {
              product_id: selectedProduct.productId,
              product_name: selectedProduct.productName,
              quantity: 1,
              unit: product.unit || "per unit"
            }
          ]);
        }
      }
      
      if (selectedProduct.specifications?.length > 0) {
        setFormData(prev => ({
          ...prev,
          project_details: prev.project_details + (prev.project_details ? "\n\n" : "") +
            `Selected Product: ${selectedProduct.productName}\n` +
            `Specifications: ${selectedProduct.specifications.join(", ")}`
        }));
      }
    }
  }, [selectedProduct]);

  const handleInputChange = (field: string, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const addQuoteItem = () => {
    setQuoteItems(prev => [
      ...prev,
      { product_id: "", product_name: "", quantity: 1, unit: "" }
    ]);
  };

  const removeQuoteItem = (index: number) => {
    setQuoteItems(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuoteItem = (index: number, field: string, value: any) => {
    setQuoteItems(prev => prev.map((item, i) => {
      if (i === index) {
        if (field === "product_id") {
          const product = allProducts.find(p => p.id === value);
          return {
            ...item,
            product_id: value,
            product_name: product?.name || "",
            unit: product?.unit || "per unit"
          };
        }
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const clearSelectedProduct = () => {
    setSelectedProduct(null);
  };

  const sendEmailNotification = async (quoteData: typeof formData, items: QuoteItem[]) => {
    try {
      const emailData = {
        ...quoteData,
        items: items.filter(item => item.product_id && item.quantity > 0),
        submitted_at: new Date().toISOString()
      };

      const { error } = await supabase.functions.invoke('send-notification-email', {
        body: emailData
      });

      if (error) {
        console.error('Email notification error:', error);
      }
    } catch (error) {
      console.error('Failed to send email notification:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = quoteSchema.parse(formData);
      
      // Validate quote items
      const validItems = quoteItems.filter(item => item.product_id && item.quantity > 0);
      if (validItems.length === 0) {
        toast({
          title: "Error",
          description: "Please add at least one product to your quote.",
          variant: "destructive",
        });
        return;
      }

      // Save quote to database
      const { data: quoteData, error: quoteError } = await supabase
        .from('quotes')
        .insert({
          full_name: validatedData.full_name,
          phone_number: validatedData.phone_number,
          email: validatedData.email,
          project_type: validatedData.project_type,
          project_location: validatedData.project_location,
          project_details: validatedData.project_details || ""
        })
        .select()
        .single();

      if (quoteError) throw quoteError;

      // Save quote items
      const itemsToInsert = validItems.map(item => ({
        quote_id: quoteData.id,
        product_id: item.product_id,
        product_name: item.product_name,
        quantity: item.quantity,
        unit: item.unit
      }));

      const { error: itemsError } = await supabase
        .from('quote_items')
        .insert(itemsToInsert);

      if (itemsError) throw itemsError;

      // Send email notification
      await sendEmailNotification(formData, validItems);

      toast({
        title: "Quote Submitted Successfully!",
        description: "We'll review your request and get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        full_name: "",
        phone_number: "",
        email: "",
        project_type: "",
        project_location: "",
        project_details: "",
      });
      setQuoteItems([{ product_id: "", product_name: "", quantity: 1, unit: "" }]);
      clearSelectedProduct();

    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error('Quote submission error:', error);
        toast({
          title: "Error",
          description: "Failed to submit quote. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Request Your Custom Quote
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get personalized pricing for your construction project. Select multiple products and specify quantities.
          </p>
        </div>

        {selectedProduct && (
          <Card className="mb-8 border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Selected Product
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearSelectedProduct}
                >
                  Clear
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Badge variant="secondary">{selectedProduct.category}</Badge>
                <span className="font-medium">{selectedProduct.productName}</span>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Quote className="h-6 w-6" />
                Quote Request Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input
                      id="full_name"
                      value={formData.full_name}
                      onChange={(e) => handleInputChange("full_name", e.target.value)}
                      className={errors.full_name ? "border-destructive" : ""}
                    />
                    {errors.full_name && (
                      <p className="text-sm text-destructive">{errors.full_name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone_number">Phone Number *</Label>
                    <Input
                      id="phone_number"
                      value={formData.phone_number}
                      onChange={(e) => handleInputChange("phone_number", e.target.value)}
                      className={errors.phone_number ? "border-destructive" : ""}
                    />
                    {errors.phone_number && (
                      <p className="text-sm text-destructive">{errors.phone_number}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project_type">Project Type *</Label>
                    <Select
                      value={formData.project_type}
                      onValueChange={(value) => handleInputChange("project_type", value)}
                    >
                      <SelectTrigger className={errors.project_type ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Building</SelectItem>
                        <SelectItem value="commercial">Commercial Building</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.project_type && (
                      <p className="text-sm text-destructive">{errors.project_type}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project_location">Project Location *</Label>
                  <Input
                    id="project_location"
                    value={formData.project_location}
                    onChange={(e) => handleInputChange("project_location", e.target.value)}
                    placeholder="e.g., Stone Town, Zanzibar"
                    className={errors.project_location ? "border-destructive" : ""}
                  />
                  {errors.project_location && (
                    <p className="text-sm text-destructive">{errors.project_location}</p>
                  )}
                </div>

                {/* Product Selection */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-lg font-medium">Products Required</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addQuoteItem}
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Product
                    </Button>
                  </div>

                  {quoteItems.map((item, index) => (
                    <Card key={index} className="p-4">
                      <div className="grid md:grid-cols-4 gap-4 items-end">
                        <div className="md:col-span-2 space-y-2">
                          <Label>Product</Label>
                          <Select
                            value={item.product_id}
                            onValueChange={(value) => updateQuoteItem(index, "product_id", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a product" />
                            </SelectTrigger>
                            <SelectContent>
                            {Object.entries(products).map(([category, categoryProducts]) => (
                                <div key={category}>
                                  <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
                                    {category}
                                  </div>
                                  {Array.isArray(categoryProducts) ? categoryProducts.map((product) => (
                                    <SelectItem key={product.id} value={product.id}>
                                      {product.name}
                                    </SelectItem>
                                  )) : null}
                                </div>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Quantity</Label>
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuoteItem(index, "quantity", parseInt(e.target.value) || 1)}
                          />
                        </div>

                        <div className="flex items-end gap-2">
                          {item.unit && (
                            <Badge variant="outline" className="mb-2">
                              {item.unit}
                            </Badge>
                          )}
                          {quoteItems.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => removeQuoteItem(index)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project_details">Project Details</Label>
                  <Textarea
                    id="project_details"
                    value={formData.project_details}
                    onChange={(e) => handleInputChange("project_details", e.target.value)}
                    placeholder="Please provide additional details about your project, timeline, and any specific requirements..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Quote Request
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnhancedQuoteSection;