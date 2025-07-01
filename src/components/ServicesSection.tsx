import ServiceCard from "./ServiceCard";
import { Calculator, Truck, Users, Wrench, ClipboardList, MapPin } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Material Estimation",
      description: "Professional quantity surveying and material estimation services for accurate project planning.",
      color: "orange" as const,
      icon: Calculator,
      features: ["Detailed quantity takeoffs", "Cost optimization", "Material specifications"],
    },
    {
      title: "Island-wide Delivery",
      description: "Reliable delivery services covering all areas of Zanzibar with our modern fleet.",
      color: "blue" as const,
      icon: Truck,
      features: ["Same-day delivery", "Scheduled deliveries", "GPS tracking"],
    },
    {
      title: "Technical Consultation",
      description: "Expert advice on material selection, construction techniques, and project optimization.",
      color: "red" as const,
      icon: Users,
      features: ["Site visits", "Material recommendations", "Problem solving"],
    },
    {
      title: "Installation Support",
      description: "Professional installation services and on-site technical support for complex materials.",
      color: "green" as const,
      icon: Wrench,
      features: ["Skilled technicians", "Quality assurance", "Warranty support"],
    },
    {
      title: "Project Management",
      description: "End-to-end project management services for large-scale construction projects.",
      color: "purple" as const,
      icon: ClipboardList,
      features: ["Timeline management", "Quality control", "Progress reporting"],
    },
    {
      title: "Site Surveys",
      description: "Comprehensive site assessment and surveying services for optimal project planning.",
      color: "yellow" as const,
      icon: MapPin,
      features: ["Topographical surveys", "Soil analysis", "Feasibility studies"],
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Comprehensive Construction Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond materials, we offer complete construction services to support your project from conception to completion.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;