import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, FileText, Clock } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="py-16 bg-yellow">
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
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input placeholder="+255 xxx xxx xxx" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Type</label>
                  <Select>
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
                  <Input placeholder="e.g., Stone Town, Nungwi, Paje..." />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Details</label>
                  <Textarea 
                    placeholder="Please describe your project, materials needed, quantities (if known), and timeline..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Request Quote
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