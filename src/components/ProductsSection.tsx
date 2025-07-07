
import ServiceCard from "./ServiceCard";
import { Hammer, Truck, Shield, Wrench, Home, Cog } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      title: "Premium Cement",
      description: "High-grade Portland cement for superior strength and durability in all construction projects.",
      color: "gray" as const,
      icon: Hammer,
      features: ["42.5N & 52.5N grades", "ISO certified quality", "Bulk & bag options"],
      price: "$15/bag"
    },
    {
      title: "Steel & Rebar",
      description: "Quality reinforcement steel bars and structural steel for robust construction foundations.",
      color: "slate" as const,
      icon: Shield,
      features: ["Various grades available", "Cut to size service", "Corrosion resistant"],
      price: "$650/ton"
    },
    {
      title: "Aggregates",
      description: "Premium sand, gravel, and crushed stone for concrete mixing and construction applications.",
      color: "amber" as const,
      icon: Truck,
      features: ["Washed & graded", "Multiple sizes", "Delivery included"],
      price: "$25/m³"
    },
    {
      title: "Building Blocks",
      description: "Durable concrete blocks and bricks for residential and commercial construction projects.",
      color: "brick" as const,
      icon: Home,
      features: ["Standard & custom sizes", "Hollow & solid options", "Weather resistant"],
      price: "$0.50/block"
    },
    {
      title: "Roofing Materials",
      description: "Complete roofing solutions including tiles, sheets, and waterproofing materials.",
      color: "zinc" as const,
      icon: Shield,
      features: ["Metal & clay tiles", "Waterproof membranes", "Installation support"],
      price: "$12/m²"
    },
    {
      title: "Hardware & Tools",
      description: "Professional construction tools, fasteners, and hardware for all your building needs.",
      color: "steel" as const,
      icon: Wrench,
      features: ["Power & hand tools", "Fasteners & fixtures", "Safety equipment"],
      price: "$5+"
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
