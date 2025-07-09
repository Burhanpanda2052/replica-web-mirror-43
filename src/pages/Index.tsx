
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import CalculatorSection from "@/components/CalculatorSection";
import QuoteConfigurator from "@/components/QuoteConfigurator";
import DeliveryTracker from "@/components/DeliveryTracker";
import ServicesSection from "@/components/ServicesSection";
import DeliverySection from "@/components/DeliverySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import QuoteSection from "@/components/QuoteSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductsSection />
      <CalculatorSection />
      <QuoteConfigurator />
      <DeliveryTracker />
      <ServicesSection />
      <DeliverySection />
      <TestimonialsSection />
      <StatsSection />
      <QuoteSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
