
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryFilters from "@/components/gallery/GalleryFilters";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import { galleryImages, categories } from "@/data/galleryImages";
import { GalleryImage } from "@/types/gallery";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [imageLoading, setImageLoading] = useState<Set<string>>(new Set());

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleImageError = (imageId: string) => {
    console.log(`Failed to load image: ${imageId}`);
    setImageErrors(prev => new Set(prev).add(imageId));
    setImageLoading(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageId);
      return newSet;
    });
  };

  const handleImageLoad = (imageId: string) => {
    console.log(`Successfully loaded image: ${imageId}`);
    setImageLoading(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageId);
      return newSet;
    });
  };

  const handleImageLoadStart = (imageId: string) => {
    setImageLoading(prev => new Set(prev).add(imageId));
  };

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

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
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
          <GalleryFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            filteredCount={filteredImages.length}
            totalCount={galleryImages.length}
          />

          <GalleryGrid
            filteredImages={filteredImages}
            onImageClick={openLightbox}
            imageErrors={imageErrors}
            imageLoading={imageLoading}
            onImageError={handleImageError}
            onImageLoad={handleImageLoad}
            onImageLoadStart={handleImageLoadStart}
            onClearFilters={clearFilters}
          />
        </div>
      </section>

      <GalleryLightbox
        selectedImage={selectedImage}
        lightboxIndex={lightboxIndex}
        filteredImagesLength={filteredImages.length}
        imageErrors={imageErrors}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
        onImageError={handleImageError}
      />

      <Footer />
    </div>
  );
};

export default Gallery;
