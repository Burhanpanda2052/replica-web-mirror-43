import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-2 text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+255 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Stone Town, Zanzibar</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-yellow rounded-lg p-2">
              <div className="text-yellow-foreground font-bold text-xl">EDEM</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">EDEM GROUP</h1>
              <p className="text-sm opacity-90">Construction Materials</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="hover:text-yellow transition-colors">Home</a>
            <a href="#products" className="hover:text-yellow transition-colors">Products</a>
            <a href="#services" className="hover:text-yellow transition-colors">Services</a>
            <a href="#about" className="hover:text-yellow transition-colors">About</a>
            <a href="#contact" className="hover:text-yellow transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="secondary" className="bg-yellow text-yellow-foreground hover:bg-yellow/90">
              Get Quote
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;