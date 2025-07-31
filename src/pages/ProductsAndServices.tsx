
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import EnhancedQuoteSection from "@/components/EnhancedQuoteSection";
import { QuoteProvider } from "@/contexts/QuoteContext";
import { useScrollToTop } from "@/hooks/useGSAPAnimations";
import { useSearch } from "@/contexts/SearchContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductsAndServices = () => {
  useScrollToTop();
  const { setSearchQuery } = useSearch();
  const location = useLocation();

  useEffect(() => {
    // Handle search query from URL parameters
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      setSearchQuery(searchQuery);
      // Scroll to products section after a brief delay
      setTimeout(() => {
        const productsSection = document.getElementById('products-section');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.search, setSearchQuery]);

  return (
    <QuoteProvider>
      <div className="min-h-screen pt-20">
        <Header />
        
        {/* Page Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Products & Services
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Comprehensive construction materials and professional services for all your building needs across Zanzibar.
              </p>
              
              {/* Breadcrumb Navigation */}
              <nav className="flex justify-center mt-8">
                <ol className="flex items-center space-x-2 text-sm opacity-80">
                  <li><a href="/" className="hover:text-yellow transition-colors">Home</a></li>
                  <li>/</li>
                  <li className="text-yellow">Products & Services</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <div id="products-section">
          <ProductsSection />
        </div>
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Quote Section */}
        <EnhancedQuoteSection />
        
        <Footer />
      </div>
    </QuoteProvider>
  );
};

export default ProductsAndServices;
