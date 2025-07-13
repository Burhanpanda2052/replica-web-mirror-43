
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useFAQRevealAnimation } from "@/hooks/useGSAPAnimations";
import { useNavigate } from "react-router-dom";

const FAQSection = () => {
  const containerRef = useFAQRevealAnimation();
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What types of construction materials do you supply?",
      answer: "We supply a comprehensive range of construction materials including cement, steel and rebar, aggregates (sand, gravel, crushed stone), building blocks, roofing materials, and construction hardware. We also offer specialized materials for specific construction needs."
    },
    {
      question: "Do you deliver across all of Zanzibar?",
      answer: "Yes, we provide island-wide delivery services covering all major areas of Zanzibar. Delivery times vary by location: same-day for Stone Town, next-day for most coastal areas, and 2-3 days for remote locations. Free delivery is available for orders over 1,150,000 TZS."
    },
    {
      question: "How do I get a quote for my project?",
      answer: "You can request a quote by filling out our online form, calling us directly, or visiting our office. Provide project details including type, location, materials needed, and timeline. We'll respond with a detailed quote within 24 hours."
    },
    {
      question: "Do you offer technical consultation services?",
      answer: "Yes, our experienced team provides technical consultation including material selection advice, quantity estimation, and construction guidance. We also offer site visits for complex projects to ensure optimal material recommendations."
    },
    {
      question: "What are your payment terms?",
      answer: "We accept various payment methods including cash, bank transfers, and mobile money. For large orders, we offer flexible payment terms with approved credit. Down payments may be required for custom orders or bulk purchases."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we offer installation support for specialized materials and systems. Our skilled technicians can assist with complex installations and provide on-site technical support to ensure proper material application and quality results."
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our products, services, and processes.
          </p>
        </div>
        
        <div ref={containerRef} className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-lg border-0 shadow-sm"
                data-faq-item
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleContactClick}
          >
            Contact Our Support Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
