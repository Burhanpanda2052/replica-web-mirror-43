import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MapPin, Search, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { useSearch } from "@/contexts/SearchContext";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [mobileSearchInput, setMobileSearchInput] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isVisible, isScrolled } = useStickyHeader();
  const { performSearch } = useSearch();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Header: Auth state changed:', event, session?.user?.email);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Header: Initial session check:', session?.user?.email);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleQuoteClick = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      performSearch(searchInput);
    }
  };

  const handleMobileSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileSearchInput.trim()) {
      performSearch(mobileSearchInput);
      setMobileMenuOpen(false);
    }
  };

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm text-secondary-foreground transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'shadow-lg' : ''}`}
    >
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/src/assets/total-builders-logo.png" 
              alt="TOTAL BUILDERS Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="hover:text-yellow transition-colors">Home</Link>
            <Link to="/products-services" className="hover:text-yellow transition-colors">Products & Services</Link>
            <Link to="/gallery" className="hover:text-yellow transition-colors">Gallery</Link>
            <Link to="/about" className="hover:text-yellow transition-colors">About</Link>
            <Link to="/contact" className="hover:text-yellow transition-colors">Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="relative hidden md:flex">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 pr-10 text-secondary-foreground placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-yellow"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-4 w-4 text-white/60" />
              </button>
            </form>
            <Button 
              className="bg-yellow text-yellow-foreground hover:bg-yellow/90 font-semibold"
              onClick={handleQuoteClick}
            >
              Request Quote
            </Button>
            {!loading && user && (
              <Link to="/admin">
                <Button variant="outline" size="icon" title={`Signed in as ${user.email}`}>
                  <User className="h-4 w-4" />
                </Button>
              </Link>
            )}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-secondary text-secondary-foreground">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-4 border-b border-white/20">
                    <h2 className="text-lg font-semibold">Navigation</h2>
                  </div>
                  
                  {/* Mobile Search */}
                  <form onSubmit={handleMobileSearchSubmit} className="mt-6 mb-6">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search products..." 
                        value={mobileSearchInput}
                        onChange={(e) => setMobileSearchInput(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 pr-10 text-secondary-foreground placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-yellow"
                      />
                      <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <Search className="h-4 w-4 text-white/60" />
                      </button>
                    </div>
                  </form>

                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-4 flex-1">
                    <Link 
                      to="/" 
                      className="text-lg hover:text-yellow transition-colors py-2"
                      onClick={handleNavLinkClick}
                    >
                      Home
                    </Link>
                    <Link 
                      to="/products-services" 
                      className="text-lg hover:text-yellow transition-colors py-2"
                      onClick={handleNavLinkClick}
                    >
                      Products & Services
                    </Link>
                    <Link 
                      to="/gallery" 
                      className="text-lg hover:text-yellow transition-colors py-2"
                      onClick={handleNavLinkClick}
                    >
                      Gallery
                    </Link>
                    <Link 
                      to="/about" 
                      className="text-lg hover:text-yellow transition-colors py-2"
                      onClick={handleNavLinkClick}
                    >
                      About
                    </Link>
                    <Link 
                      to="/contact" 
                      className="text-lg hover:text-yellow transition-colors py-2"
                      onClick={handleNavLinkClick}
                    >
                      Contact
                    </Link>
                    
                    {!loading && user && (
                      <Link 
                        to="/admin" 
                        className="text-lg hover:text-yellow transition-colors py-2"
                        onClick={handleNavLinkClick}
                      >
                        Admin Panel
                      </Link>
                    )}
                  </nav>

                  {/* Request Quote Button */}
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <Button 
                      className="w-full bg-yellow text-yellow-foreground hover:bg-yellow/90 font-semibold"
                      onClick={() => {
                        handleQuoteClick();
                        setMobileMenuOpen(false);
                      }}
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
