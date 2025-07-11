
import { 
  HardHat, Shield, Hammer, Wrench, Zap, Truck, Square, 
  Home, Settings, Package, Activity, Car, Cog
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  unit?: string;
  specifications: string[];
  image?: string;
  inStock: boolean;
  icon: any;
  technicalSpecs?: Record<string, string>;
  features?: string[];
}

export const productCategories = [
  { id: "all", name: "All Products", count: 42 },
  { id: "safety", name: "Safety Equipment", count: 8 },
  { id: "tools", name: "Tools & Equipment", count: 12 },
  { id: "materials", name: "Building Materials", count: 15 },
  { id: "electrical", name: "Electrical Supplies", count: 7 }
];

export const products: Product[] = [
  // Safety Equipment
  {
    id: "safety-helmet-white",
    name: "Safety Helmet - White",
    description: "High-impact ABS safety helmet with adjustable suspension system for construction workers.",
    category: "Safety Equipment",
    price: "15,000 TZS",
    unit: "per piece",
    specifications: [
      "EN 397 certified protection",
      "Adjustable 6-point suspension",
      "Impact resistant ABS shell",
      "Available in multiple colors"
    ],
    image: "/lovable-uploads/8d2522bb-acd3-41ca-a0e4-6dfb83d0e13b.png",
    inStock: true,
    icon: HardHat,
    technicalSpecs: {
      "Material": "ABS Plastic",
      "Weight": "350g",
      "Size": "Adjustable 52-62cm",
      "Standard": "EN 397"
    },
    features: [
      "Shock absorbing suspension",
      "Sweat-resistant headband",
      "Chin strap compatible",
      "Ventilation slots"
    ]
  },
  {
    id: "safety-vest-reflective",
    name: "Reflective Safety Vest",
    description: "High-visibility safety vest with reflective strips for enhanced worker visibility on construction sites.",
    category: "Safety Equipment",
    price: "8,500 TZS",
    unit: "per piece",
    specifications: [
      "Class 2 high-visibility",
      "Reflective tape strips",
      "Breathable polyester fabric",
      "Multiple pocket design"
    ],
    image: "/lovable-uploads/8d2522bb-acd3-41ca-a0e4-6dfb83d0e13b.png",
    inStock: true,
    icon: Shield,
    technicalSpecs: {
      "Material": "100% Polyester",
      "Visibility Class": "Class 2",
      "Sizes": "S, M, L, XL, XXL",
      "Standard": "ISO 20471"
    }
  },
  {
    id: "safety-goggles",
    name: "Safety Goggles",
    description: "Clear polycarbonate safety goggles with anti-fog coating for eye protection during construction work.",
    category: "Safety Equipment",
    price: "12,000 TZS",
    unit: "per piece",
    specifications: [
      "Polycarbonate lens material",
      "Anti-fog coating",
      "Adjustable elastic strap",
      "Side ventilation system"
    ],
    image: "/lovable-uploads/8d2522bb-acd3-41ca-a0e4-6dfb83d0e13b.png",
    inStock: true,
    icon: Shield
  },
  
  // Tools & Equipment
  {
    id: "drill-cordless-18v",
    name: "18V Cordless Drill",
    description: "Professional cordless drill with lithium-ion battery, suitable for drilling and driving applications.",
    category: "Tools & Equipment",
    price: "185,000 TZS",
    unit: "per set",
    specifications: [
      "18V Li-ion battery",
      "13mm keyless chuck",
      "LED work light",
      "2-speed gearbox"
    ],
    image: "/lovable-uploads/cce695f5-5076-41c9-9898-de24b0d0e071.png",
    inStock: true,
    icon: Hammer,
    technicalSpecs: {
      "Voltage": "18V",
      "Chuck Size": "13mm",
      "Torque": "50 Nm",
      "Battery": "2.0Ah Li-ion"
    }
  },
  {
    id: "angle-grinder-9inch",
    name: "9\" Angle Grinder",
    description: "Heavy-duty angle grinder for cutting and grinding applications in construction and metalwork.",
    category: "Tools & Equipment",
    price: "145,000 TZS",
    unit: "per piece",
    specifications: [
      "2200W powerful motor",
      "9-inch disc capacity",
      "Side handle included",
      "Protective guard"
    ],
    image: "/lovable-uploads/cce695f5-5076-41c9-9898-de24b0d0e071.png",
    inStock: true,
    icon: Settings
  },
  {
    id: "welding-machine-200a",
    name: "Welding Machine 200A",
    description: "Inverter welding machine suitable for electrode welding with digital display and overload protection.",
    category: "Tools & Equipment",
    price: "485,000 TZS",
    unit: "per unit",
    specifications: [
      "200A maximum output",
      "Digital display",
      "Overload protection",
      "Portable design"
    ],
    image: "/lovable-uploads/15c3f008-047f-4005-a11d-8f194db66dd8.png",
    inStock: true,
    icon: Zap
  },
  
  // Building Materials
  {
    id: "portland-cement-50kg",
    name: "Portland Cement 50kg",
    description: "High-grade Portland cement suitable for all construction applications including foundations and structures.",
    category: "Building Materials",
    price: "20,000 TZS",
    unit: "per bag",
    specifications: [
      "Grade 42.5N strength",
      "ISO 9001 certified",
      "Low alkali content",
      "Fast setting time"
    ],
    image: "/lovable-uploads/453707ca-24de-4f44-a596-17fcb63b38c0.png",
    inStock: true,
    icon: Package
  },
  {
    id: "steel-rebar-12mm",
    name: "Steel Rebar 12mm",
    description: "High tensile strength steel reinforcement bars for concrete reinforcement in construction projects.",
    category: "Building Materials",
    price: "1,495,000 TZS",
    unit: "per ton",
    specifications: [
      "Grade 60 steel",
      "12mm diameter",
      "6m standard length",
      "Ribbed surface"
    ],
    image: "/lovable-uploads/0eb9f44d-9d4c-404e-8419-58f2b233f99e.png",
    inStock: true,
    icon: Activity
  },
  {
    id: "concrete-blocks-6inch",
    name: "Concrete Blocks 6\"",
    description: "Standard concrete masonry blocks for wall construction with excellent thermal properties.",
    category: "Building Materials",
    price: "1,150 TZS",
    unit: "per block",
    specifications: [
      "6-inch thickness",
      "Hollow core design",
      "Standard size 200x200x400mm",
      "Compressive strength 7 MPa"
    ],
    image: "/lovable-uploads/0eb9f44d-9d4c-404e-8419-58f2b233f99e.png",
    inStock: true,
    icon: Square
  },
  {
    id: "roofing-sheets-iron",
    name: "Iron Roofing Sheets",
    description: "Galvanized corrugated iron sheets for roofing applications with rust-resistant coating.",
    category: "Building Materials",
    price: "27,600 TZS",
    unit: "per m²",
    specifications: [
      "0.5mm thickness",
      "Galvanized coating",
      "3m standard length",
      "Corrugated profile"
    ],
    image: "/lovable-uploads/0e304325-f9f3-4d30-a763-126666017f29.png",
    inStock: true,
    icon: Home
  },
  
  // Electrical Supplies
  {
    id: "electrical-cable-2.5mm",
    name: "Electrical Cable 2.5mm²",
    description: "PVC insulated copper electrical cable suitable for domestic and commercial electrical installations.",
    category: "Electrical Supplies",
    price: "8,500 TZS",
    unit: "per meter",
    specifications: [
      "2.5mm² cross-section",
      "Copper conductor",
      "PVC insulation",
      "Rated voltage 450/750V"
    ],
    image: "/lovable-uploads/f3fe01a7-7a32-4147-8517-2747054b616a.png",
    inStock: true,
    icon: Zap
  },
  {
    id: "circuit-breaker-20a",
    name: "Circuit Breaker 20A",
    description: "Single pole MCB circuit breaker for electrical protection in residential and commercial applications.",
    category: "Electrical Supplies",
    price: "15,500 TZS",
    unit: "per piece",
    specifications: [
      "20A current rating",
      "Single pole design",
      "Din rail mounting",
      "Breaking capacity 6kA"
    ],
    image: "/lovable-uploads/f3fe01a7-7a32-4147-8517-2747054b616a.png",
    inStock: true,
    icon: Cog
  }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  if (categoryId === "all") return products;
  
  const categoryMap: Record<string, string> = {
    "safety": "Safety Equipment",
    "tools": "Tools & Equipment", 
    "materials": "Building Materials",
    "electrical": "Electrical Supplies"
  };
  
  return products.filter(product => product.category === categoryMap[categoryId]);
};

export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return products;
  
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.specifications.some(spec => spec.toLowerCase().includes(searchTerm))
  );
};
