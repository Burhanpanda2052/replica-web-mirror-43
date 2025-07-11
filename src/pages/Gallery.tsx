
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const galleryImages: GalleryImage[] = [
    {
      id: "1",
      src: "/lovable-uploads/0bb16ccc-f9c6-4eb6-b0fb-20e45ffbef01.png",
      title: "Block Making Machine Production",
      category: "Construction Materials",
      description: "Automated block making machine producing high-quality concrete blocks for construction projects"
    },
    {
      id: "2",
      src: "/lovable-uploads/8b0a8b0f-1cde-498a-bae2-0b86fca33b85.png",
      title: "Stone Crusher & Processing Plant",
      category: "Heavy Equipment",
      description: "Industrial stone crushing and aggregate processing facility with conveyor systems"
    },
    {
      id: "3",
      src: "/lovable-uploads/90b0c5b9-46c6-4f45-8a37-7da2b75dcfdb.png",
      title: "Heavy Duty Wheel Loader",
      category: "Heavy Equipment",
      description: "CAT wheel loader for material handling and site preparation work"
    },
    {
      id: "4",
      src: "/lovable-uploads/2adf0eff-2b9a-4e66-a1e6-db6e93b1df1b.png",
      title: "Brick Production Facility",
      category: "Construction Materials",
      description: "Large-scale brick manufacturing with stacked finished products ready for delivery"
    },
    {
      id: "5",
      src: "/lovable-uploads/69f1cfa3-3e87-48fc-983b-cdcfbf8a6b21.png",
      title: "Construction Aggregate Stockpiles",
      category: "Construction Materials",
      description: "Organized stone and aggregate stockpiles for various construction applications"
    },
    {
      id: "6",
      src: "/lovable-uploads/12c15f3b-6d2e-4577-8b8c-a37bc9c96cc1.png",
      title: "Active Construction Site",
      category: "Project Sites",
      description: "Ongoing construction project with material delivery and site development"
    },
    {
      id: "7",
      src: "/lovable-uploads/05fd4b72-ac5c-4b83-9dca-a28b2d6ccdb6.png",
      title: "Cement & Material Delivery",
      category: "Construction Materials",
      description: "Bulk cement and construction material storage and delivery operations"
    },
    {
      id: "8",
      src: "/lovable-uploads/2b1b8ab4-dd63-49ec-bb2c-9f00e0c0b4c3.png",
      title: "Block Production Line",
      category: "Tools & Machinery",
      description: "Automated concrete block production line with quality control systems"
    },
    {
      id: "9",
      src: "/lovable-uploads/88c2cd04-9eb9-4b28-a4be-39b7b41e5e8a.png",
      title: "Material Processing Equipment",
      category: "Tools & Machinery",
      description: "Specialized equipment for material processing and preparation"
    },
    {
      id: "10",
      src: "/lovable-uploads/7e4b2cac-f22c-43d5-9d62-4b95d02f9c5e.png",
      title: "Construction Material Warehouse",
      category: "Project Sites",
      description: "Large warehouse facility for construction material storage and distribution"
    }
  ];

  const categories = ["all", "Heavy Equipment", "Construction Materials", "Tools & Machinery", "Project Sites"];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (image: GalleryImage) => {
    const index = filteredImages.findIndex(img => img.id === image.id);
    setSelectedImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (direction === "prev" && lightboxIndex > 0) {
      const newIndex = lightboxIndex - 1;
      setLightboxIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    } else if (direction === "next" && lightboxIndex < filteredImages.length - 1) {
      const newIndex = lightboxIndex + 1;
      setLightboxIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Equipment & Project Gallery
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore our comprehensive collection of construction equipment, materials, and completed projects across Zanzibar.
            </p>
            
            {/* Breadcrumb Navigation */}
            <nav className="flex justify-center mt-8">
              <ol className="flex items-center space-x-2 text-sm opacity-80">
                <li><Link to="/" className="hover:text-yellow transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-yellow">Gallery</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Filter Controls */}
          <div className="mb-12 space-y-6">
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search equipment, materials, or projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category === "all" ? "All Categories" : category}
                </Button>
              ))}
            </div>

            <div className="text-center text-muted-foreground">
              Showing {filteredImages.length} of {galleryImages.length} items
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={() => openLightbox(image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {image.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                      {image.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {image.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No items found matching your search criteria.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
            >
              <X className="h-6 w-6" />
            </Button>

            {lightboxIndex > 0 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateLightbox("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            )}

            {lightboxIndex < filteredImages.length - 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateLightbox("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            )}

            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                  <Badge>{selectedImage.category}</Badge>
                </div>
                <p className="text-muted-foreground">{selectedImage.description}</p>
                <div className="mt-4 text-sm text-muted-foreground">
                  Image {lightboxIndex + 1} of {filteredImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
