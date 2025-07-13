
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ShoppingCart, Calculator, Truck, Shield, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedTruck from "@/components/AnimatedTruck";

const Hero = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProductsClick = () => {
    navigate('/products-services');
  };

  return (
    <section className="bg-secondary text-secondary-foreground py-20 relative overflow-hidden">
      <AnimatedTruck />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Zanzibar's Premier
                <span className="block text-yellow">Construction Materials</span>
                Supplier
              </h1>
              <p className="text-xl opacity-90 max-w-lg">
                Your trusted partner for premium sand, gravel, cement, iron rods, and pavement blocks. Fast delivery across Stone Town and beyond.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-yellow text-yellow-foreground hover:bg-yellow/90"
                onClick={handleQuoteClick}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Get your Quote today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-black bg-white hover:bg-white/90"
                onClick={handleProductsClick}
              >
                <Calculator className="mr-2 h-5 w-5" />
                View our Products
              </Button>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-yellow" />
                <span>Same Day Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-yellow" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-yellow" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Quick Product Access */}
          <div className="relative">
            <div className="bg-white/95 rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">Quick Product Access</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="relative p-6 rounded-lg text-center hover:opacity-90 transition-opacity cursor-pointer overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-200 min-h-[120px] flex items-center justify-center hover:scale-105 transition-transform"
                    onClick={handleProductsClick}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-lg font-semibold text-white drop-shadow-lg">Sand & Gravel</div>
                  </div>
                  <div 
                    className="relative p-6 rounded-lg text-center hover:opacity-90 transition-opacity cursor-pointer overflow-hidden bg-gradient-to-br from-gray-300 to-gray-500 min-h-[120px] flex items-center justify-center hover:scale-105 transition-transform"
                    onClick={handleProductsClick}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-lg font-semibold text-white drop-shadow-lg">Cement</div>
                  </div>
                  <div 
                    className="relative p-6 rounded-lg text-center hover:opacity-90 transition-opacity cursor-pointer overflow-hidden bg-gradient-to-br from-blue-600 to-gray-700 min-h-[120px] flex items-center justify-center hover:scale-105 transition-transform"
                    onClick={handleProductsClick}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-lg font-semibold text-white drop-shadow-lg">Iron Rods</div>
                  </div>
                  <div 
                    className="relative p-6 rounded-lg text-center hover:opacity-90 transition-opacity cursor-pointer overflow-hidden bg-gradient-to-br from-red-400 to-gray-600 min-h-[120px] flex items-center justify-center hover:scale-105 transition-transform"
                    onClick={handleProductsClick}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-lg font-semibold text-white drop-shadow-lg">Pavement Blocks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
