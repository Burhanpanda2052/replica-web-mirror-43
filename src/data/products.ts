import { 
  HardHat, Shield, Hammer, Wrench, Zap, Truck, Square, 
  Home, Settings, Package, Activity, Car, Cog, Drill, RotateCcw,
  FileText, Grid3X3, Box, Cylinder, Bolt
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  unit?: string;
  specifications: string[];
  image?: string;
  inStock: boolean;
  icon: any;
  technicalSpecs?: Record<string, string>;
  features?: string[];
}

export const productCategories = [
  { id: "all", name: "All Products", count: 46 },
  { id: "safety", name: "Safety Equipment", count: 5 },
  { id: "tools", name: "Tools & Equipment", count: 10 },
  { id: "materials", name: "Building Materials", count: 26 },
  { id: "electrical", name: "Electrical Supplies", count: 5 }
];

export const products: Record<string, Product[]> = {
  "Safety Equipment": [
    {
      id: "safety-vest-reflective",
      name: "Reflective Safety Vest",
      description: "High-visibility safety vest with reflective strips for enhanced worker visibility on construction sites.",
      category: "Safety Equipment",
      unit: "per piece",
      specifications: [
        "Class 2 high-visibility",
        "Reflective tape strips",
        "Breathable polyester fabric",
        "Multiple pocket design"
      ],
      image: "/lovable-uploads/588e7549-4de8-470e-a627-bae882ebd07f.png",
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
      id: "safety-boots-steel-toe",
      name: "Steel Toe Safety Boots",
      description: "Heavy-duty safety boots with steel toe caps and slip-resistant soles for construction site protection.",
      category: "Safety Equipment",
      unit: "per pair",
      specifications: [
        "Steel toe cap protection",
        "Slip-resistant rubber sole",
        "Waterproof leather upper",
        "Electrical hazard protection"
      ],
      image: "/lovable-uploads/aea9b827-8a0d-41d3-b6ca-aedb588a041c.png",
      inStock: true,
      icon: Shield,
      technicalSpecs: {
        "Material": "Full Grain Leather",
        "Protection": "Steel Toe Cap",
        "Sizes": "39-47 EU",
        "Standard": "EN ISO 20345"
      }
    },
    {
      id: "dust-protection-mask",
      name: "Dust Protection Mask",
      description: "Professional respiratory protection mask for construction dust and particles with replaceable filter cartridges.",
      category: "Safety Equipment",
      unit: "per piece",
      specifications: [
        "P2 filtration efficiency",
        "Replaceable filter cartridges",
        "Adjustable head straps",
        "Comfortable face seal"
      ],
      image: "/lovable-uploads/6677dc9d-45d2-41a2-98f1-759e7e46e0f3.png",
      inStock: true,
      icon: Shield,
      technicalSpecs: {
        "Filter Type": "P2 Particulate",
        "Protection Level": "95% efficiency",
        "Weight": "180g",
        "Standard": "EN 149"
      }
    },
    {
      id: "work-coveralls-navy",
      name: "Work Coveralls Navy Blue",
      description: "Durable navy blue work coveralls for construction and industrial use",
      category: "Safety Equipment",
      unit: "per piece",
      specifications: [
        "100% cotton fabric",
        "Multiple pockets for tools",
        "Reinforced knee areas",
        "Machine washable",
        "Available in multiple sizes"
      ],
      image: "/lovable-uploads/e8c8022f-6ad6-4945-8819-24e0926edfe4.png",
      inStock: true,
      icon: HardHat
    },
    {
      id: "yellow-safety-helmet",
      name: "Yellow Safety Helmet",
      description: "Professional yellow safety helmet with adjustable suspension system",
      category: "Safety Equipment", 
      unit: "per piece",
      specifications: [
        "Impact resistant ABS shell",
        "4-point suspension system",
        "Adjustable headband",
        "Meets international safety standards",
        "Yellow high-visibility color"
      ],
      image: "/lovable-uploads/f86266fa-c538-42f4-9eff-49179ffa4621.png",
      inStock: true,
      icon: HardHat
    }
  ],
  
  "Tools & Equipment": [
    {
      id: "concrete-mixer-portable",
      name: "Portable Concrete Mixer",
      description: "Electric portable concrete mixer for hire with wheeled design for easy site mobility and concrete preparation. Hired with an experienced operator. Transportation of the mixer can be arranged.",
      category: "Tools & Equipment",
      unit: "per day",
      specifications: [
        "Electric motor operation",
        "120L mixing drum capacity",
        "Wheeled for portability",
        "Tipping mechanism",
        "Includes operator service",
        "Transportation available"
      ],
      image: "/lovable-uploads/686e6e48-3ea6-4aec-a6fb-cee0cffa7d52.png",
      inStock: true,
      icon: RotateCcw,
      technicalSpecs: {
        "Motor": "2.2kW Electric",
        "Capacity": "120 Liters",
        "Voltage": "220V",
        "Weight": "85 kg"
      }
    },
    {
      id: "concrete-vibrator",
      name: "Concrete Vibrator",
      description: "High-frequency concrete vibrator for hire for removing air bubbles and ensuring proper concrete consolidation. Hired with an experienced operator. Transportation can be arranged.",
      category: "Tools & Equipment",
      unit: "per day",
      specifications: [
        "High-frequency vibration",
        "35mm vibrator head",
        "4m flexible shaft",
        "Electric motor driven",
        "Includes operator service",
        "Transportation available"
      ],
      image: "/lovable-uploads/0b160646-0527-44a4-9baa-05109e4a451c.png",
      inStock: true,
      icon: Activity,
      technicalSpecs: {
        "Frequency": "12000 VPM",
        "Head Diameter": "35mm",
        "Shaft Length": "4 meters",
        "Motor": "1.5kW"
      }
    },
    {
      id: "wheelbarrow-construction",
      name: "Construction Wheelbarrow",
      description: "Heavy-duty wheelbarrow for transporting materials around construction sites.",
      category: "Tools & Equipment", 
      unit: "per piece",
      specifications: [
        "100L capacity tray",
        "Pneumatic tire wheel",
        "Steel frame construction",
        "Ergonomic handles"
      ],
      image: "/lovable-uploads/838ee4fe-0acf-4824-bb96-72e3bbef6b22.png",
      inStock: true,
      icon: Truck
    },
    {
      id: "construction-shovel",
      name: "Construction Shovel",
      description: "Heavy-duty construction shovel with steel blade for digging and material handling.",
      category: "Tools & Equipment",
      unit: "per piece",
      specifications: [
        "Steel blade construction",
        "Ergonomic wooden handle",
        "Reinforced connection",
        "Pointed blade design"
      ],
      image: "/lovable-uploads/a31b2b3e-b60a-4bcf-8c8e-b4cf5a08065e.png",
      inStock: true,
      icon: Hammer
    }
  ],
  
  "Building Materials": [
    {
      id: "power-cement-50kg",
      name: "Power Cement 50kg",
      description: "Power Cement OPC (Ordinary Portland Cement) with ultimate strength formula for superior construction quality.",
      category: "Building Materials",
      unit: "per bag",
      specifications: [
        "Grade 42.5N strength",
        "OPC formulation",
        "Ultimate strength formula",
        "Premium quality cement"
      ],
      image: "/lovable-uploads/b3ff6a14-f80a-4b77-8bf1-a8f84c6f73b2.png",
      inStock: true,
      icon: Package
    },
    {
      id: "concrete-blocks-6inch",
      name: "Concrete Blocks 6\"",
      description: "Standard concrete masonry blocks for wall construction with excellent thermal properties.",
      category: "Building Materials",
      unit: "per block",
      specifications: [
        "6-inch thickness",
        "Hollow core design",
        "Standard size 200x200x400mm",
        "Compressive strength 7 MPa"
      ],
      image: "/lovable-uploads/693db58b-9801-4231-91aa-3174198e92fc.png",
      inStock: true,
      icon: Square
    },
    {
      id: "steel-rebar-12mm",
      name: "Steel Rebar 12mm",
      description: "High tensile strength steel reinforcement bars for concrete reinforcement in construction projects.",
      category: "Building Materials",
      unit: "per ton",
      specifications: [
        "Grade 60 steel",
        "12mm diameter",
        "6m standard length",
        "Ribbed surface"
      ],
      image: "/lovable-uploads/fb5d46d7-97fe-4da9-88fd-3717077846f3.png",
      inStock: true,
      icon: Activity
    }
  ],
  
  "Electrical Supplies": [
    {
      id: "electrical-socket-outlet",
      name: "Double Socket Outlet",
      description: "Professional double socket outlet for electrical installations.",
      category: "Electrical Supplies",
      unit: "per piece",
      specifications: [
        "13A rating",
        "Double socket design",
        "BS standard",
        "White finish"
      ],
      image: "/lovable-uploads/b7a00b2d-8885-465c-895d-96f2a2fcef57.png",
      inStock: true,
      icon: Zap
    },
    {
      id: "house-wiring-cable",
      name: "House Wiring Cable",
      description: "Standard house wiring cable for domestic electrical installations.",
      category: "Electrical Supplies",
      unit: "per roll",
      specifications: [
        "2.5mm² conductor",
        "PVC insulation",
        "Single core",
        "Red/Black/Earth colors"
      ],
      image: "/lovable-uploads/85aba7b4-9e8d-495d-8586-902446318105.png",
      inStock: true,
      icon: Zap
    }
  ]
};

// Helper functions for backward compatibility
export const getProductsByCategory = (categoryId: string): Product[] => {
  if (categoryId === "all") {
    return Object.values(products).flat();
  }
  
  const categoryMap: Record<string, string> = {
    "safety": "Safety Equipment",
    "tools": "Tools & Equipment", 
    "materials": "Building Materials",
    "electrical": "Electrical Supplies"
  };
  
  const categoryName = categoryMap[categoryId];
  return categoryName ? products[categoryName] || [] : [];
};

export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) {
    return Object.values(products).flat();
  }
  
  const searchTerm = query.toLowerCase();
  return Object.values(products).flat().filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.specifications.some(spec => spec.toLowerCase().includes(searchTerm))
  );
};