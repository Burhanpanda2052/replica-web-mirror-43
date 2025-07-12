import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, FileText, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const QuoteSection = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    projectType: "",
    projectLocation: "",
    projectDetails: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('quotes')
        .insert([
          {
            full_name: formData.fullName,
            phone_number: formData.phoneNumber,
            email: formData.email,
            project_type: formData.projectType,
            project_location: formData.projectLocation,
            project_details: formData.projectDetails
          }
        ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your quote request has been submitted successfully. We'll contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        projectType: "",
        projectLocation: "",
        projectDetails: ""
      });

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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input 
                      placeholder="Your full name" 
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input 
                      placeholder="+255 xxx xxx xxx" 
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Type</label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger>
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
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Location</label>
                  <Input 
                    placeholder="e.g., Stone Town, Nungwi, Paje..." 
                    value={formData.projectLocation}
                    onChange={(e) => handleInputChange('projectLocation', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Details</label>
                  <Textarea 
                    placeholder="Please describe your project, materials needed, quantities (if known), and timeline..."
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Request Quote"}
                </Button>
                
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