import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calculator, FileText, Clock, X, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useQuote } from "@/contexts/QuoteContext";
import { sanitizeInput, quoteFormSchema, checkRateLimit, type QuoteFormData } from "@/utils/security";

const QuoteSection = () => {
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    projectType: "",
    projectLocation: "",
    projectDetails: ""
  });
  const { toast } = useToast();
  const { selectedProduct, setSelectedProduct } = useQuote();

  // Auto-populate project details when a product is selected
  useEffect(() => {
    if (selectedProduct) {
      const productInfo = `Product: ${selectedProduct.productName}\nCategory: ${selectedProduct.category}\nSpecifications: ${selectedProduct.specifications.join(', ')}\n\nAdditional Details: `;
      setFormData(prev => ({
        ...prev,
        projectDetails: productInfo
      }));
    }
  }, [selectedProduct]);

  const handleInputChange = (field: string, value: string) => {
    // Sanitize input to prevent XSS
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
    
    // Clear validation error for this field
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const clearSelectedProduct = () => {
    setSelectedProduct(null);
    setFormData(prev => ({ ...prev, projectDetails: "" }));
  };

  const sendEmailNotification = async (quoteData: typeof formData) => {
    try {
      const emailData = {
        type: "quote",
        fullName: quoteData.fullName,
        phoneNumber: quoteData.phoneNumber,
        email: quoteData.email,
        projectType: quoteData.projectType,
        projectLocation: quoteData.projectLocation,
        projectDetails: quoteData.projectDetails,
        selectedProduct: selectedProduct ? {
          productId: selectedProduct.productId,
          productName: selectedProduct.productName,
          category: selectedProduct.category,
          specifications: selectedProduct.specifications
        } : null,
        timestamp: new Date().toLocaleString('en-US', {
          timeZone: 'Africa/Dar_es_Salaam',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const { data, error } = await supabase.functions.invoke('send-notification-email', {
        body: emailData
      });

      if (error) {
        console.error('Email sending error:', error);
        throw error;
      }

      console.log('Email sent successfully:', data);
      return data;
    } catch (error) {
      console.error('Failed to send email notification:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setValidationErrors({});

    try {
      // Rate limiting check
      const userIP = 'user'; // In production, get actual IP
      if (!checkRateLimit(userIP, 3, 300000)) { // 3 requests per 5 minutes
        throw new Error('Too many quote requests. Please wait before submitting again.');
      }

      // Validate form data
      const validationData: QuoteFormData = {
        full_name: formData.fullName,
        phone_number: formData.phoneNumber,
        email: formData.email,
        project_type: formData.projectType,
        project_location: formData.projectLocation,
        project_details: formData.projectDetails
      };

      const validationResult = quoteFormSchema.safeParse(validationData);
      
      if (!validationResult.success) {
        const errors: Record<string, string> = {};
        validationResult.error.errors.forEach(error => {
          errors[error.path[0] as string] = error.message;
        });
        setValidationErrors(errors);
        
        toast({
          title: "Validation Error",
          description: "Please fix the errors in the form and try again.",
          variant: "destructive",
        });
        return;
      }

      // Save to Supabase database with sanitized data
      const { data, error } = await supabase
        .from('quotes')
        .insert({
          full_name: sanitizeInput(formData.fullName),
          phone_number: sanitizeInput(formData.phoneNumber),
          email: formData.email ? sanitizeInput(formData.email) : null,
          project_type: sanitizeInput(formData.projectType),
          project_location: sanitizeInput(formData.projectLocation),
          project_details: sanitizeInput(formData.projectDetails)
        })
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Quote submitted to database successfully:', data);

      // Then, send email notification
      try {
        await sendEmailNotification(formData);
        
        toast({
          title: "Success!",
          description: "Your quote request has been submitted successfully and our sales team has been notified. We'll contact you within 24 hours.",
        });
      } catch (emailError) {
        // Database save succeeded, but email failed - still show success but mention email issue
        console.error('Email notification failed:', emailError);
        
        toast({
          title: "Quote Submitted",
          description: "Your quote request has been saved successfully. We'll contact you within 24 hours.",
        });
      }

      // Reset form and clear selected product
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        projectType: "",
        projectLocation: "",
        projectDetails: ""
      });
      setSelectedProduct(null);

    } catch (error: any) {
      console.error('Error submitting quote:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="py-16 bg-yellow">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-yellow-foreground">Get Your Custom Quote Today</h2>
            <p className="text-xl text-yellow-foreground/80">
              Tell us about your project and receive a detailed quote with competitive pricing and delivery timeline.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calculator className="h-6 w-6 text-yellow-foreground" />
                <span className="text-yellow-foreground">Accurate material calculations</span>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="h-6 w-6 text-yellow-foreground" />
                <span className="text-yellow-foreground">Detailed cost breakdown</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-yellow-foreground" />
                <span className="text-yellow-foreground">24-hour quote turnaround</span>
              </div>
            </div>
          </div>
          
          {/* Quote form */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              {/* Selected Product Display */}
              {selectedProduct && (
                <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{selectedProduct.category}</Badge>
                        <span className="text-sm text-muted-foreground">Selected Product</span>
                      </div>
                      <h4 className="font-semibold text-foreground">{selectedProduct.productName}</h4>
                      <div className="text-xs text-muted-foreground mt-1">
                        {selectedProduct.specifications.slice(0, 2).join(', ')}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearSelectedProduct}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input 
                      placeholder="Your full name" 
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                      className={validationErrors.full_name ? 'border-red-500' : ''}
                    />
                    {validationErrors.full_name && (
                      <p className="text-xs text-red-500">{validationErrors.full_name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input 
                      placeholder="+255 xxx xxx xxx" 
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      required
                      className={validationErrors.phone_number ? 'border-red-500' : ''}
                    />
                    {validationErrors.phone_number && (
                      <p className="text-xs text-red-500">{validationErrors.phone_number}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={validationErrors.email ? 'border-red-500' : ''}
                  />
                  {validationErrors.email && (
                    <p className="text-xs text-red-500">{validationErrors.email}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Type</label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger className={validationErrors.project_type ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Construction</SelectItem>
                      <SelectItem value="commercial">Commercial Building</SelectItem>
                      <SelectItem value="renovation">Renovation/Repair</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {validationErrors.project_type && (
                    <p className="text-xs text-red-500">{validationErrors.project_type}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Location</label>
                  <Input 
                    placeholder="e.g., Stone Town, Nungwi, Paje..." 
                    value={formData.projectLocation}
                    onChange={(e) => handleInputChange('projectLocation', e.target.value)}
                    required
                    className={validationErrors.project_location ? 'border-red-500' : ''}
                  />
                  {validationErrors.project_location && (
                    <p className="text-xs text-red-500">{validationErrors.project_location}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Details</label>
                  <Textarea 
                    placeholder="Please describe your project, materials needed, quantities (if known), and timeline..."
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                    required
                    className={validationErrors.project_details ? 'border-red-500' : ''}
                  />
                  {validationErrors.project_details && (
                    <p className="text-xs text-red-500">{validationErrors.project_details}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Request Quote"}
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3 w-3 text-green-600" />
                  <span>Secure & Encrypted Submission</span>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our terms and privacy policy. We'll contact you within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
