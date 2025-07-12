
import { CheckCircle, Building2, Wrench, Users, Target, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const services = [
    {
      icon: Building2,
      title: "Premium Materials",
      description: "From aggregates, cement, and sand to roofing, mortar, and beyond—every product meets rigorous standards."
    },
    {
      icon: Users,
      title: "Expert Engineering Support",
      description: "Our in-house engineers provide technical expertise, ensuring structural integrity and efficiency at every phase."
    },
    {
      icon: Wrench,
      title: "Machinery & Equipment Hire",
      description: "Need tools? We offer state-of-the-art machinery to keep your project on track."
    },
    {
      icon: Target,
      title: "End-to-End Project Guidance",
      description: "We collaborate with you from initial planning to the final finishes, turning visions into reality."
    }
  ];

  const whyChooseUs = [
    "Holistic Expertise: Materials, machinery, engineering, and planning—all under one roof.",
    "Client-Centric Approach: We listen, adapt, and deliver solutions tailored to your unique goals.",
    "Quality Without Compromise: Every product and service reflects our commitment to excellence."
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-6">
            <BreadcrumbList className="text-primary-foreground/80">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="hover:text-primary-foreground">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary-foreground">About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Partner in Building Excellence
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              At TOTAL BUILDERS, we don't just supply materials—we build possibilities. As a premier provider of construction solutions, we empower projects from blueprint to completion, ensuring every foundation laid is a testament to quality, reliability, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Deliver</h2>
            <h3 className="text-xl md:text-2xl text-primary font-semibold mb-6">Comprehensive Construction Solutions</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are your single-source partner for all building needs:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Supply Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Beyond Supply: Your Strategic Partner
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              We understand that great projects start long before ground is broken. That's why we go further:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary">Site Selection Assistance</h4>
                  <p className="text-muted-foreground">We help investors identify and secure the ideal plots for commercial ventures.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary">Seamless Project Execution</h4>
                  <p className="text-muted-foreground">From permits to finishing touches, we streamline complexity so you can focus on results.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary">Reliability You Can Build On</h4>
                  <p className="text-muted-foreground">With transparent processes and dedicated support, we ensure timelines, budgets, and expectations are consistently met.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us?</h2>
            
            <div className="space-y-6 mb-12">
              {whyChooseUs.map((point, index) => (
                <div key={index} className="flex items-start text-left max-w-3xl mx-auto">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl leading-relaxed">
              To redefine construction partnerships by providing unwavering support, unparalleled resources, and the expertise to bring ambitious projects to life—efficiently, responsibly, and flawlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Let's Build Together Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're an investor launching a commercial venture or a contractor tackling complex builds, TOTAL BUILDERS is your foundation for success. Partner with us—from start to finish.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Request Quote
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/products-services">View Our Services</Link>
              </Button>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Malawi Road, Stone Town, Zanzibar</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>+255 123 456 789</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>info@totalbuilders.co.tz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
