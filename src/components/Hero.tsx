import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ShoppingCart, Calculator, Truck, Shield, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-secondary text-secondary-foreground py-20">
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
              <Button size="lg" className="bg-yellow text-yellow-foreground hover:bg-yellow/90">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white/90">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Needs
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
                  <div className="bg-primary p-6 rounded-lg text-center hover:bg-primary/90 transition-colors cursor-pointer">
                    <div className="text-4xl mb-2">🏔️</div>
                    <div className="text-lg font-semibold text-primary-foreground">Sand & Gravel</div>
                  </div>
                  <div className="bg-primary p-6 rounded-lg text-center hover:bg-primary/90 transition-colors cursor-pointer">
                    <div className="text-4xl mb-2">🏗️</div>
                    <div className="text-lg font-semibold text-primary-foreground">Cement</div>
                  </div>
                  <div className="bg-primary p-6 rounded-lg text-center hover:bg-primary/90 transition-colors cursor-pointer">
                    <div className="text-4xl mb-2">🔩</div>
                    <div className="text-lg font-semibold text-primary-foreground">Iron Rods</div>
                  </div>
                  <div className="bg-primary p-6 rounded-lg text-center hover:bg-primary/90 transition-colors cursor-pointer">
                    <div className="text-4xl mb-2">🧱</div>
                    <div className="text-lg font-semibold text-primary-foreground">Pavement Blocks</div>
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