
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const TestimonialsSection = () => {
  const ratingCounter = useCounterAnimation({ end: 4.9, decimals: 1, suffix: "/5" });
  const clientsCounter = useCounterAnimation({ end: 500, suffix: "+" });
  const satisfactionCounter = useCounterAnimation({ end: 98, suffix: "%" });

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Hotel Owner",
      content: "Total Builders provided exceptional service for our hotel renovation. Quality materials and timely delivery made all the difference.",
      rating: 5,
      project: "Luxury Resort Renovation"
    },
    {
      name: "Fatima Ali",
      role: "Residential Builder",
      content: "Reliable supplier with competitive prices. Their technical support helped us optimize our material usage significantly.",
      rating: 5,
      project: "Residential Complex"
    },
    {
      name: "John Morrison",
      role: "Construction Manager",
      content: "Outstanding customer service and product quality. Total Builders has been our go-to supplier for 3 years running.",
      rating: 5,
      project: "Commercial Development"
    },
    {
      name: "Mwalimu Said",
      role: "School Administrator",
      content: "Professional team that understood our budget constraints and delivered excellent value for our school expansion project.",
      rating: 5,
      project: "School Expansion"
    },
    {
      name: "Sarah Johnson",
      role: "Architect",
      content: "Their material expertise and consultation services are invaluable. Always recommend them to my clients.",
      rating: 5,
      project: "Multiple Projects"
    },
    {
      name: "Hassan Omar",
      role: "Contractor",
      content: "Fast delivery and consistent quality. Total Builders makes our job easier with their reliable service.",
      rating: 5,
      project: "Various Construction Projects"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by hundreds of construction professionals across Zanzibar for quality and reliability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border-0 h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow text-yellow" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary/20" />
                </div>
                
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary font-medium mt-1">{testimonial.project}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 bg-gray-50 px-8 py-4 rounded-lg">
            <div className="text-center">
              <div ref={ratingCounter.elementRef} className="text-3xl font-bold text-primary">
                {ratingCounter.displayValue}
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="text-center">
              <div ref={clientsCounter.elementRef} className="text-3xl font-bold text-primary">
                {clientsCounter.displayValue}
              </div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="text-center">
              <div ref={satisfactionCounter.elementRef} className="text-3xl font-bold text-primary">
                {satisfactionCounter.displayValue}
              </div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
