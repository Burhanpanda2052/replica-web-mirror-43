

import ServiceCard from "./ServiceCard";
import { Hammer, Truck, Zap, Wrench, Square, Home } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      title: "Premium Cement",
      description: "High-grade Portland cement for superior strength and durability in all construction projects.",
      color: "gray" as const,
      icon: Hammer,
      features: ["42.5N & 52.5N grades", "ISO certified quality", "Bulk & bag options"],
      price: "20,000 TZS/bag"
    },
    {
      title: "Steel & Rebar",
      description: "Quality reinforcement steel bars and structural steel for robust construction foundations.",
      color: "slate" as const,
      icon: Zap, // Changed from Shield to Zap to represent steel strength
      features: ["Various grades available", "Cut to size service", "Corrosion resistant"],
      price: "1,495,000 TZS/ton"
    },
    {
      title: "Aggregates",
      description: "Premium sand, gravel, and crushed stone for concrete mixing and construction applications.",
      color: "yellow" as const, // Changed from amber to yellow to match Sand & Gravel
      icon: Truck, // Keep Truck as it represents delivery/transport of aggregates
      features: ["Washed & graded", "Multiple sizes", "Delivery included"],
      price: "57,500 TZS/m³"
    },
    {
      title: "Building Blocks",
      description: "Durable concrete blocks and bricks for residential and commercial construction projects.",
      color: "red" as const, // Changed from brick to red to match Pavement Blocks
      icon: Square, // Changed from Home to Square to represent blocks
      features: ["Standard & custom sizes", "Hollow & solid options", "Weather resistant"],
      price: "1,150 TZS/block"
    },
    {
      title: "Roofing Materials",
      description: "Complete roofing solutions including tiles, sheets, and waterproofing materials.",
      color: "zinc" as const,
      icon: Home, // Changed from Shield to Home to represent roofing
      features: ["Metal & clay tiles", "Waterproof membranes", "Installation support"],
      price: "27,600 TZS/m²"
    },
    {
      title: "Hardware & Tools",
      description: "Professional construction tools, fasteners, and hardware for all your building needs.",
      color: "steel" as const,
      icon: Wrench,
      features: ["Power & hand tools", "Fasteners & fixtures", "Safety equipment"],
      price: "11,500+ TZS"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Premium Construction Materials</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality construction materials, sourced from trusted suppliers and delivered across Zanzibar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ServiceCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

