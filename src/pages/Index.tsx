
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CalculatorSection from "@/components/CalculatorSection";
import QuoteConfigurator from "@/components/QuoteConfigurator";
import DeliverySection from "@/components/DeliverySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import EnhancedQuoteSection from "@/components/EnhancedQuoteSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { QuoteProvider } from "@/contexts/QuoteContext";

const Index = () => {
  return (
    <QuoteProvider>
      <div className="min-h-screen pt-20">
        <Header />
        <Hero />
        <CalculatorSection />
        <QuoteConfigurator />
        <DeliverySection />
        <TestimonialsSection />
        <StatsSection />
        <EnhancedQuoteSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </QuoteProvider>
  );
};

export default Index;
