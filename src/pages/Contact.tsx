
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { useScrollToTop } from "@/hooks/useGSAPAnimations";

const Contact = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen pt-20">
      <Header />
      
      {/* Page Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Contact Us
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get in touch with Zanzibar's premier construction materials supplier. We're here to help with all your building needs.
            </p>
            
            {/* Breadcrumb Navigation */}
            <nav className="flex justify-center mt-8">
              <ol className="flex items-center space-x-2 text-sm opacity-80">
                <li><a href="/" className="hover:text-yellow transition-colors">Home</a></li>
                <li>/</li>
                <li className="text-yellow">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Contact;
