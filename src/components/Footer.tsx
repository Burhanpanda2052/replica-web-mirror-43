import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-yellow rounded-lg p-2">
                <div className="text-yellow-foreground font-bold text-lg">EDEM</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">EDEM GROUP</h3>
                <p className="text-sm opacity-90">Construction Materials</p>
              </div>
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
              <li><a href="#home" className="opacity-90 hover:opacity-100 hover:text-yellow">Home</a></li>
              <li><a href="#products" className="opacity-90 hover:opacity-100 hover:text-yellow">Products</a></li>
              <li><a href="#services" className="opacity-90 hover:opacity-100 hover:text-yellow">Services</a></li>
              <li><a href="#about" className="opacity-90 hover:opacity-100 hover:text-yellow">About Us</a></li>
              <li><a href="#contact" className="opacity-90 hover:opacity-100 hover:text-yellow">Contact</a></li>
              <li><a href="#quote" className="opacity-90 hover:opacity-100 hover:text-yellow">Get Quote</a></li>
            </ul>
          </div>
          
          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-90 hover:opacity-100 hover:text-yellow">Cement & Concrete</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 hover:text-yellow">Steel & Rebar</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 hover:text-yellow">Aggregates</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 hover:text-yellow">Building Blocks</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 hover:text-yellow">Roofing Materials</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 hover:text-yellow">Hardware & Tools</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 opacity-70" />
                <span className="opacity-90">Malawi Road, Stone Town, Zanzibar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-70" />
                <span className="opacity-90">+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-70" />
                <span className="opacity-90">info@edemgroup.co.tz</span>
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
            <p className="text-sm opacity-90">
              © 2024 EDEM Group. All rights reserved.
            </p>
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