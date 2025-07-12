
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
  { id: "all", name: "All Products", count: 46 },
  { id: "safety", name: "Safety Equipment", count: 5 },
  { id: "tools", name: "Tools & Equipment", count: 11 },
  { id: "materials", name: "Building Materials", count: 25 },
  { id: "electrical", name: "Electrical Supplies", count: 5 }
];

export const products: Product[] = [
  // Safety Equipment
  {
    id: "safety-vest-reflective",
    name: "Reflective Safety Vest",
    description: "High-visibility safety vest with reflective strips for enhanced worker visibility on construction sites.",
    category: "Safety Equipment",
    price: "17,000 TZS",
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
    price: "40,000 TZS",
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
    price: "2,900 TZS",
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
    price: "40,000 TZS",
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
    price: "12,000 TZS",
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
  },
  
  // Tools & Equipment
  {
    id: "pan-mixer-diesel",
    name: "Pan Mixer with Diesel Engine",
    description: "Heavy-duty diesel-powered pan mixer for large-scale concrete and mortar mixing operations.",
    category: "Tools & Equipment",
    price: "12,500,000 TZS",
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
    description: "Electric portable concrete mixer for hire with wheeled design for easy site mobility and concrete preparation. Hired with an experienced operator. Transportation of the mixer can be arranged.",
    category: "Tools & Equipment",
    price: "90,000 TZS",
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
    price: "50,000 TZS",
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
    id: "pneumatic-rammer",
    name: "Pneumatic Rammer",
    description: "Air-powered rammer for hire for soil compaction and ground preparation in construction projects. Hired with an experienced operator. Transportation can be arranged.",
    category: "Tools & Equipment",
    price: "80,000 TZS",
    unit: "per day",
    specifications: [
      "Pneumatic operation",
      "125mm compaction foot",
      "Lightweight design",
      "Ergonomic handles",
      "Includes operator service",
      "Transportation available"
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
    description: "Heavy-duty plate compactor for hire for asphalt and soil compaction with powerful engine and reversible operation. Hired with an experienced operator. Transportation can be arranged.",
    category: "Tools & Equipment",
    price: "150,000 TZS",
    unit: "per day",
    specifications: [
      "20/45 model specification",
      "Reversible operation",
      "Powerful gasoline engine",
      "Heavy-duty steel plate",
      "Includes operator service",
      "Transportation available"
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
  {
    id: "wheelbarrow-construction",
    name: "Construction Wheelbarrow",
    description: "Heavy-duty wheelbarrow for transporting materials around construction sites.",
    category: "Tools & Equipment", 
    price: "110,000 TZS",
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
    price: "10,500 TZS",
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
  },
  {
    id: "dump-truck-blue",
    name: "Dump Truck - Blue",
    description: "Heavy-duty dump truck for construction material transportation and site logistics",
    category: "Tools & Equipment",
    price: "600,000 TZS",
    unit: "per unit",
    specifications: [
      "6x4 drive configuration",
      "15 cubic meter capacity",
      "Hydraulic lifting system",
      "Heavy-duty chassis",
      "Professional driver cab"
    ],
    image: "/lovable-uploads/d38e0e00-0889-4b6e-8659-72dca5e1eb54.png",
    inStock: true,
    icon: Truck
  },
  
  // Building Materials
  {
    id: "power-cement-50kg",
    name: "Power Cement 50kg",
    description: "Power Cement OPC (Ordinary Portland Cement) with ultimate strength formula for superior construction quality.",
    category: "Building Materials",
    price: "17,500 TZS",
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
    id: "dangote-cement-50kg",
    name: "Dangote Portland Cement 50kg",
    description: "Premium Dangote Portland cement with 3X strength for all construction applications.",
    category: "Building Materials", 
    price: "17,000 TZS",
    unit: "per bag",
    specifications: [
      "Grade 42.5R strength",
      "3X strength formula",
      "Fast setting time",
      "Superior quality cement"
    ],
    image: "/lovable-uploads/440de601-9f5e-4780-af1e-1800d54a6f1f.png",
    inStock: true,
    icon: Package
  },
  {
    id: "raysut-cement-50kg", 
    name: "Raysut Cement 50kg",
    description: "Premium Raysut Portland cement suitable for all construction applications including foundations and structures.",
    category: "Building Materials",
    price: "18,500 TZS",
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
    price: "2,500,000 TZS",
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
  },
  {
    id: "concrete-blocks-6inch",
    name: "Concrete Blocks 6\"",
    description: "Standard concrete masonry blocks for wall construction with excellent thermal properties.",
    category: "Building Materials",
    price: "2,100 TZS",
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
    id: "steel-drywall-profiles",
    name: "Steel Drywall Profiles",
    description: "Galvanized steel profiles for drywall framing systems, ideal for interior wall construction.",
    category: "Building Materials",
    price: "13,000 TZS",
    unit: "per meter",
    specifications: [
      "Galvanized steel construction",
      "Various profile sizes available",
      "Corrosion resistant",
      "Easy installation system"
    ],
    image: "/lovable-uploads/111b930b-46ec-4786-8664-a05955cd4c80.png",
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
    id: "gypsum-drywall-boards",
    name: "Gypsum Drywall Boards",
    description: "Standard gypsum plasterboard sheets for interior wall and ceiling construction.",
    category: "Building Materials",
    price: "20,000 TZS",
    unit: "per sheet",
    specifications: [
      "12.5mm thickness",
      "Standard 1200x2400mm size",
      "Fire resistant properties",
      "Smooth finish surface"
    ],
    image: "/lovable-uploads/10e2766f-0ce2-45ea-a95f-145326af96b3.png",
    inStock: true,
    icon: Square
  },
  {
    id: "binding-wire",
    name: "Binding Wire",
    description: "Galvanized binding wire for reinforcement bar tying and construction applications.",
    category: "Building Materials",
    price: "82,000 TZS",
    unit: "per coil",
    specifications: [
      "1.6mm wire diameter",
      "25kg coil weight",
      "Galvanized coating",
      "High tensile strength"
    ],
    image: "/lovable-uploads/fd7160c5-928d-4f98-ac4f-4a12c5ceb8b1.png",
    inStock: true,
    icon: Activity
  },
  {
    id: "metal-cutting-disc",
    name: "Metal Cutting Disc",
    description: "Professional metal cutting disc for angle grinders, suitable for steel and metal cutting applications.",
    category: "Tools & Equipment",
    price: "10,000 TZS",
    unit: "per piece",
    specifications: [
      "115mm diameter",
      "1mm thickness",
      "22.23mm bore",
      "Aluminum oxide abrasive"
    ],
    image: "/lovable-uploads/d4144f83-30c6-4954-8de8-521de8d27a67.png",
    inStock: true,
    icon: Settings
  },
  {
    id: "marine-plywood",
    name: "Marine Plywood",
    description: "High-quality marine-grade plywood suitable for construction and marine applications.",
    category: "Building Materials",
    price: "47,500 TZS",
    unit: "per sheet",
    specifications: [
      "18mm thickness",
      "1220x2440mm size",
      "Waterproof phenolic glue",
      "Hardwood construction"
    ],
    image: "/lovable-uploads/3fe13db2-cf16-43ce-a335-d8287c1760ba.png",
    inStock: true,
    icon: Square
  },
  {
    id: "construction-timber",
    name: "Construction Timber",
    description: "Premium construction timber for structural framing and general building applications.",
    category: "Building Materials",
    price: "14,500 TZS",
    unit: "per piece",
    specifications: [
      "50x100mm section",
      "3m standard length",
      "Kiln dried",
      "Grade A timber"
    ],
    image: "/lovable-uploads/c6e4d049-0860-4ce6-afd4-3d594f6ec007.png",
    inStock: true,
    icon: Square
  },
  {
    id: "square-timber-beams",
    name: "Square Timber Beams",
    description: "Square section timber beams for structural construction and framing applications.",
    category: "Building Materials", 
    price: "21,000 TZS",
    unit: "per piece",
    specifications: [
      "100x100mm square section",
      "4m standard length",
      "Treated hardwood",
      "Structural grade"
    ],
    image: "/lovable-uploads/f645c6a8-35d5-423c-89a7-ef24348c5a6d.png",
    inStock: true,
    icon: Square
  },
  {
    id: "construction-nails",
    name: "Construction Nails",
    description: "Galvanized construction nails for general building and carpentry applications.",
    category: "Building Materials",
    price: "82,000 TZS",
    unit: "per kg",
    specifications: [
      "4-inch length",
      "Galvanized coating",
      "Round wire nails",
      "Bulk packaging"
    ],
    image: "/lovable-uploads/c68ad5be-5ec0-4c62-9bac-6247f257d9db.png",
    inStock: true,
    icon: Hammer
  },

  // Electrical Supplies
  {
    id: "electrical-socket-outlet",
    name: "Double Socket Outlet",
    description: "Professional double socket outlet for electrical installations.",
    category: "Electrical Supplies",
    price: "12,000 TZS",
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
    id: "electrical-junction-box",
    name: "Electrical Junction Box",
    description: "Weather-resistant electrical junction box for outdoor and indoor wiring applications.",
    category: "Electrical Supplies",
    price: "2,000 TZS",
    unit: "per piece",
    specifications: [
      "IP65 weather rating",
      "Multiple cable entries",
      "Terminal block included",
      "Flame retardant material"
    ],
    image: "/lovable-uploads/49dfd48f-d334-4b8e-88f8-6943f3860f5e.png",
    inStock: true,
    icon: Zap
  },
  {
    id: "pvc-electrical-conduit",
    name: "PVC Electrical Conduit",
    description: "PVC electrical conduit pipe for cable protection and routing in building installations.",
    category: "Electrical Supplies",
    price: "60,000 TZS",
    unit: "per meter",
    specifications: [
      "20mm diameter",
      "Heavy duty PVC",
      "3m standard length",
      "Flame retardant"
    ],
    image: "/lovable-uploads/845cc3f4-9f86-47da-9d5a-dbe2f35fe20e.png",
    inStock: true,
    icon: Zap
  },
  {
    id: "house-wiring-cable",
    name: "House Wiring Cable",
    description: "Standard house wiring cable for domestic electrical installations.",
    category: "Electrical Supplies",
    price: "490,000 TZS",
    unit: "per meter",
    specifications: [
      "2.5mm² conductor",
      "PVC insulation",
      "Single core",
      "Red/Black/Earth colors"
    ],
    image: "/lovable-uploads/85aba7b4-9e8d-495d-8586-902446318105.png",
    inStock: true,
    icon: Zap
  },
  {
    id: "3-core-electrical-cable",
    name: "3-Core Electrical Cable",
    description: "3-core electrical cable for power distribution and electrical installations.",
    category: "Electrical Supplies",
    price: "12,500 TZS",
    unit: "per meter",
    specifications: [
      "4.0mm² conductor",
      "3-core configuration",
      "PVC insulation",
      "Armored construction"
    ],
    image: "/lovable-uploads/cb5f22bc-a159-4a86-b167-611de46a8faf.png",
    inStock: true,
    icon: Zap
  },
  {
    id: "drywall-screws",
    name: "Drywall Screws",
    description: "Professional drywall screws for plasterboard and drywall installation.",
    category: "Building Materials",
    price: "9,000 TZS",
    unit: "per box",
    specifications: [
      "25mm length",
      "Fine thread",
      "Bugle head design",
      "Phosphate coating"
    ],
    image: "/lovable-uploads/2bb08acf-0c87-4f3c-8738-7595a9952545.png",
    inStock: true,
    icon: Bolt
  },
  {
    id: "sandpaper-assorted",
    name: "Sandpaper Assorted Grits",
    description: "Assorted grit sandpaper pack for surface preparation and finishing work.",
    category: "Tools & Equipment",
    price: "30,000 TZS",
    unit: "per pack",
    specifications: [
      "Assorted grit sizes",
      "230x280mm sheets",
      "Aluminum oxide abrasive",
      "Multi-pack variety"
    ],
    image: "/lovable-uploads/53ac14b9-35b0-423c-a843-e328388937c3.png",
    inStock: true,
    icon: Settings
  },
  {
    id: "welded-wire-mesh",
    name: "Welded Wire Mesh",
    description: "Galvanized welded wire mesh for concrete reinforcement and construction applications.",
    category: "Building Materials",
    price: "25,000 TZS",
    unit: "per m²",
    specifications: [
      "6mm wire diameter",
      "150x150mm mesh size",
      "Galvanized coating",
      "2x3m standard sheets"
    ],
    image: "/lovable-uploads/7f751d59-9b5a-4007-91f2-b3e86fb1a8cf.png",
    inStock: true,
    icon: Grid3X3
  },
  {
    id: "diesel-concrete-mixer",
    name: "Diesel Concrete Mixer",
    description: "Powerful diesel-powered concrete mixer for large construction projects.",
    category: "Tools & Equipment",
    price: "3,500,000 TZS",
    unit: "per unit",
    specifications: [
      "Diesel engine powered",
      "350L mixing capacity",
      "Heavy-duty construction",
      "Portable design"
    ],
    image: "/lovable-uploads/79910aee-f660-4536-a684-e8530cd56da1.png",
    inStock: true,
    icon: RotateCcw
  },
  {
    id: "plastic-sheeting-heavy-duty",
    name: "Heavy Duty Plastic Sheeting",
    description: "Heavy-duty plastic sheeting for moisture barriers and construction protection.",
    category: "Building Materials",
    price: "390,000 TZS",
    unit: "per roll",
    specifications: [
      "1000 gauge thickness",
      "4m width x 25m length",
      "UV stabilized",
      "Black color"
    ],
    image: "/lovable-uploads/12d6aafb-da39-4a6d-9bee-243ba1eed7ba.png",
    inStock: true,
    icon: Package
  },
  {
    id: "galvanized-nails",
    name: "Galvanized Construction Nails",
    description: "Premium galvanized construction nails for outdoor and indoor building applications.",
    category: "Building Materials",
    price: "15,000 TZS",
    unit: "per kg",
    specifications: [
      "3-inch length",
      "Hot-dip galvanized",
      "Round head design",
      "High carbon steel"
    ],
    image: "/lovable-uploads/274bb2c8-e22d-4d09-a1aa-b7e16693ec9d.png",
    inStock: true,
    icon: Hammer
  },
  {
    id: "hollow-concrete-blocks",
    name: "Hollow Concrete Blocks",
    description: "Standard hollow concrete blocks for construction and masonry work.",
    category: "Building Materials",
    price: "1,100 TZS",
    unit: "per block",
    specifications: [
      "8-inch thickness",
      "Hollow core design",
      "390x190x190mm size",
      "Grade A concrete"
    ],
    image: "/lovable-uploads/651a1f31-cc8c-4836-b991-05485f822891.png",
    inStock: true,
    icon: Square
  },
  {
    id: "insulation-panels",
    name: "Insulation Panels",
    description: "Thermal insulation panels for energy-efficient construction and building applications.",
    category: "Building Materials",
    price: "35,000 TZS",
    unit: "per m²",
    specifications: [
      "50mm thickness",
      "Polyurethane core",
      "Metal facing",
      "Fire resistant"
    ],
    image: "/lovable-uploads/dd4b23c6-8f35-4c8d-9f70-c118254ef022.png",
    inStock: true,
    icon: Square
  },
  {
    id: "fiber-cement-boards",
    name: "Fiber Cement Boards",
    description: "Durable fiber cement boards for exterior and interior construction applications.",
    category: "Building Materials",
    price: "155,000 TZS",
    unit: "per sheet",
    specifications: [
      "Fiber reinforced cement",
      "Weather resistant",
      "Fire resistant properties",
      "Smooth finish surface"
    ],
    image: "/lovable-uploads/4e3aea04-5021-4c67-9a8a-ec6d2d15cd3e.png",
    inStock: true,
    icon: Square
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
