
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
      src: "/placeholder.svg",
      title: "Concrete Mixers & Equipment",
      category: "Heavy Equipment",
      description: "Professional concrete mixing equipment for large-scale construction projects"
    },
    {
      id: "2",
      src: "/placeholder.svg",
      title: "Blue Dump Truck Fleet",
      category: "Heavy Equipment",
      description: "Heavy-duty dump trucks for material transportation and delivery"
    },
    {
      id: "3",
      src: "/placeholder.svg",
      title: "Conveyor Belt System",
      category: "Heavy Equipment",
      description: "Advanced conveyor systems for efficient aggregate processing"
    },
    {
      id: "4",
      src: "/placeholder.svg",
      title: "Pneumatic Tools & Generators",
      category: "Tools & Machinery",
      description: "Professional pneumatic hammers and power generation equipment"
    },
    {
      id: "5",
      src: "/placeholder.svg",
      title: "Aggregate Processing Plant",
      category: "Construction Materials",
      description: "Large-scale aggregate processing and material preparation facility"
    },
    {
      id: "6",
      src: "/placeholder.svg",
      title: "Equipment Storage Area",
      category: "Tools & Machinery",
      description: "Organized storage facility for construction tools and machinery"
    },
    {
      id: "7",
      src: "/placeholder.svg",
      title: "Stone Crusher Equipment",
      category: "Heavy Equipment",
      description: "Industrial stone crushing and material processing equipment"
    },
    {
      id: "8",
      src: "/placeholder.svg",
      title: "Active Construction Site",
      category: "Project Sites",
      description: "Ongoing construction project with brick delivery and site preparation"
    },
    {
      id: "9",
      src: "/placeholder.svg",
      title: "Material Supply Stockpiles",
      category: "Construction Materials",
      description: "Large aggregate stockpiles with delivery truck access"
    },
    {
      id: "10",
      src: "/placeholder.svg",
      title: "Block Manufacturing",
      category: "Construction Materials",
      description: "Automated block making machine with finished construction blocks"
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
