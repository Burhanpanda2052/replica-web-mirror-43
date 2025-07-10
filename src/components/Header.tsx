
import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-secondary text-secondary-foreground">
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow rounded-lg p-2">
              <div className="text-yellow-foreground font-bold text-xl">🔨</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">TOTAL BUILDERS</h1>
              <p className="text-sm opacity-80">Construction & Material Supply</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="hover:text-yellow transition-colors">Home</Link>
            <Link to="/products-services" className="hover:text-yellow transition-colors">Products & Services</Link>
            <a href="#about" className="hover:text-yellow transition-colors">About</a>
            <a href="#contact" className="hover:text-yellow transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:flex">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 pr-10 text-secondary-foreground placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-yellow"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
            </div>
            <Button className="bg-yellow text-yellow-foreground hover:bg-yellow/90 font-semibold">
              Request Quote
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
