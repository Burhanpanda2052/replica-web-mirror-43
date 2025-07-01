import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20">
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
                Quality materials, expert guidance, and reliable delivery for all your construction needs across Zanzibar.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow text-yellow-foreground hover:bg-yellow/90">
                Get Your Quote Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Our Products
              </Button>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow" />
                <span>Island-wide Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Image placeholder */}
          <div className="relative">
            <div className="bg-yellow/10 rounded-lg p-8 backdrop-blur-sm border border-white/20">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Quick Quote Request</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-yellow">500+</div>
                    <div className="text-sm opacity-90">Projects Completed</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-yellow">50+</div>
                    <div className="text-sm opacity-90">Product Lines</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-yellow">24/7</div>
                    <div className="text-sm opacity-90">Support Available</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-yellow">9</div>
                    <div className="text-sm opacity-90">Years Experience</div>
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