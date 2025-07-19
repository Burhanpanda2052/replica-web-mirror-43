import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleQuoteClick = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no quote section is found on current page, navigate to products page
      window.location.href = '/products-services#quote';
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/5a223750-1ff5-4108-9cf1-250ae46e42e7.png" 
                alt="TOTAL BUILDERS Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Zanzibar's premier construction materials supplier since 2015. 
              Building the future with quality materials and reliable service.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer" />
              <Instagram className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer" />
              <Linkedin className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-90 hover:opacity-100 hover:text-yellow">Home</Link></li>
              <li><Link to="/products-services" className="opacity-90 hover:opacity-100 hover:text-yellow">Products</Link></li>
              <li><Link to="/products-services" className="opacity-90 hover:opacity-100 hover:text-yellow">Services</Link></li>
              <li><Link to="/about" className="opacity-90 hover:opacity-100 hover:text-yellow">About Us</Link></li>
              <li><Link to="/contact" className="opacity-90 hover:opacity-100 hover:text-yellow">Contact</Link></li>
              <li><button onClick={handleQuoteClick} className="opacity-90 hover:opacity-100 hover:text-yellow text-left">Get Quote</button></li>
            </ul>
          </div>
          
          {/* Our Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products-services" className="opacity-90 hover:opacity-100 hover:text-yellow">Cement & Concrete</Link></li>
              <li><Link to="/products-services" className="opacity-90 hover:opacity-100 hover:text-yellow">Steel & Rebar</Link></li>
              <li><Link to="/products-services" className="opacity-90 hover:opacity-100 hover:text-yellow">Aggregates</Link></li>
              <li><Link to="/products-services" className="opacity-90 hover:opacity-100 hover:text-yellow">Building Blocks</Link></li>
              <li><Link to="/products-services" className="opacity-90 hover:opacity-100 hover:text-yellow">Roofing Materials</Link></li>
              <li><Link to="/products-services" className="opacity-90 hover:opacity-100 hover:text-yellow">Hardware & Tools</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 opacity-70" />
                <span className="opacity-90">Taveta, Zanzibar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-70" />
                <span className="opacity-90">+255 769 391 802</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-70" />
                <span className="opacity-90">info@totalbuilders.co.tz</span>
              </div>
            </div>
            <div className="bg-white/10 p-3 rounded-lg">
              <div className="text-sm font-medium mb-1">Business Hours</div>
              <div className="text-xs opacity-90">
                Mon-Fri: 8AM-6PM<br />
                Sat: 8AM-4PM<br />
                Sun: Closed
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-90">© 2025 TOTAL BUILDERS. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-yellow">Privacy Policy</a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-yellow">Terms of Service</a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-yellow">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
