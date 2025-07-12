
import { 
  HardHat, Shield, Hammer, Wrench, Zap, Truck, Square, 
  Home, Settings, Package, Activity, Car, Cog, Drill, RotateCcw
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
  { id: "all", name: "All Products", count: 54 },
  { id: "safety", name: "Safety Equipment", count: 13 },
  { id: "tools", name: "Tools & Equipment", count: 19 },
  { id: "materials", name: "Building Materials", count: 18 },
  { id: "electrical", name: "Electrical Supplies", count: 4 }
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
    inStock: true,
    icon: Shield
  },
  {
    id: "safety-boots-steel-toe",
    name: "Steel Toe Safety Boots",
    description: "Heavy-duty safety boots with steel toe caps and slip-resistant soles for construction site protection.",
    category: "Safety Equipment",
    price: "45,000 TZS",
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
    price: "18,000 TZS",
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
    inStock: true,
    icon: Zap
  },
  {
    id: "pan-mixer-diesel",
    name: "Pan Mixer with Diesel Engine",
    description: "Heavy-duty diesel-powered pan mixer for large-scale concrete and mortar mixing operations.",
    category: "Tools & Equipment",
    price: "2,850,000 TZS",
    unit: "per unit",
    specifications: [
      "Diesel engine powered",
      "500L mixing capacity",
      "Heavy-duty steel construction",
      "Mobile design with wheels"
    ],
    image: "/lovable-uploads/686e6e48-3ea6-4aec-a6fb-cee0cffa7d52.png",
    inStock: true,
    icon: Settings,
    technicalSpecs: {
      "Engine Type": "Diesel",
      "Capacity": "500 Liters",
      "Power": "12 HP",
      "Weight": "850 kg"
    }
  },
  {
    id: "concrete-mixer-portable",
    name: "Portable Concrete Mixer",
    description: "Electric portable concrete mixer with wheeled design for easy site mobility and concrete preparation.",
    category: "Tools & Equipment",
    price: "385,000 TZS",
    unit: "per unit",
    specifications: [
      "Electric motor operation",
      "120L mixing drum capacity",
      "Wheeled for portability",
      "Tipping mechanism"
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
    description: "High-frequency concrete vibrator for removing air bubbles and ensuring proper concrete consolidation.",
    category: "Tools & Equipment",
    price: "125,000 TZS",
    unit: "per unit",
    specifications: [
      "High-frequency vibration",
      "35mm vibrator head",
      "4m flexible shaft",
      "Electric motor driven"
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
    id: "pneumatic-rammer",
    name: "Pneumatic Rammer",
    description: "Air-powered rammer for soil compaction and ground preparation in construction projects.",
    category: "Tools & Equipment",
    price: "95,000 TZS",
    unit: "per unit",
    specifications: [
      "Pneumatic operation",
      "125mm compaction foot",
      "Lightweight design",
      "Ergonomic handles"
    ],
    image: "/lovable-uploads/befd5ec3-16ef-4c81-8fde-480dee6f7658.png",
    inStock: true,
    icon: Hammer,
    technicalSpecs: {
      "Type": "Pneumatic",
      "Foot Size": "125x125mm",
      "Weight": "12 kg",
      "Air Consumption": "0.3 m³/min"
    }
  },
  {
    id: "plate-compactor",
    name: "Plate Compactor Altrad PC 20/45",
    description: "Heavy-duty plate compactor for asphalt and soil compaction with powerful engine and reversible operation.",
    category: "Tools & Equipment",
    price: "275,000 TZS",
    unit: "per unit",
    specifications: [
      "20/45 model specification",
      "Reversible operation",
      "Powerful gasoline engine",
      "Heavy-duty steel plate"
    ],
    image: "/lovable-uploads/e8918445-dc15-4113-8c08-add18239f10b.png",
    inStock: true,
    icon: Settings,
    technicalSpecs: {
      "Model": "PC 20/45",
      "Engine": "Gasoline",
      "Plate Size": "450mm",
      "Weight": "75 kg"
    }
  },
  
  // Building Materials
  {
    id: "portland-cement-50kg",
    name: "Raysut Cement 50kg",
    description: "Premium Raysut Portland cement suitable for all construction applications including foundations and structures.",
    category: "Building Materials",
    price: "20,000 TZS",
    unit: "per bag",
    specifications: [
      "Grade 42.5N strength",
      "ISO 9001 certified",
      "Low alkali content",
      "Fast setting time"
    ],
    image: "/lovable-uploads/7225a49c-caf9-4080-87a5-4acdd036c95f.png",
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
    inStock: true,
    icon: Home
  },
  {
    id: "steel-drywall-profiles",
    name: "Steel Drywall Profiles",
    description: "Galvanized steel profiles for drywall framing systems, ideal for interior wall construction.",
    category: "Building Materials",
    price: "8,500 TZS",
    unit: "per meter",
    specifications: [
      "Galvanized steel construction",
      "Various profile sizes available",
      "Corrosion resistant",
      "Easy installation system"
    ],
    inStock: true,
    icon: Square,
    technicalSpecs: {
      "Material": "Galvanized Steel",
      "Thickness": "0.5mm",
      "Profiles": "C-stud, U-track",
      "Length": "3m standard"
    }
  },
  {
    id: "construction-sand",
    name: "Construction Sand",
    description: "Fine aggregate sand for concrete mixing, plastering, and general construction applications.",
    category: "Building Materials",
    price: "45,000 TZS",
    unit: "per cubic meter",
    specifications: [
      "Fine aggregate grade",
      "Washed and screened",
      "Low clay content",
      "Suitable for concrete mixing"
    ],
    image: "/lovable-uploads/198ba982-702a-411b-b16a-4aecff2cfd97.png",
    inStock: true,
    icon: Package,
    technicalSpecs: {
      "Grade": "Fine Aggregate",
      "Size": "0-5mm",
      "Moisture": "<5%",
      "Clay Content": "<3%"
    }
  },
  {
    id: "crushed-stone-aggregate",
    name: "Crushed Stone Aggregate",
    description: "Coarse aggregate crushed stone for concrete production and road construction applications.",
    category: "Building Materials",
    price: "55,000 TZS",
    unit: "per cubic meter",
    specifications: [
      "Coarse aggregate grade",
      "20mm nominal size",
      "Angular shaped particles",
      "High strength properties"
    ],
    image: "/lovable-uploads/b05a4916-ae60-4abe-9e95-091684a4d180.png",
    inStock: true,
    icon: Package,
    technicalSpecs: {
      "Grade": "Coarse Aggregate",
      "Size": "20mm nominal",
      "Shape": "Angular",
      "Strength": "High crushing value"
    }
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
