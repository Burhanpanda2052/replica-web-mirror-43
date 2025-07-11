
import { Button } from "@/components/ui/button";
import { GalleryImage } from "@/types/gallery";
import GalleryImageCard from "./GalleryImageCard";

interface GalleryGridProps {
  filteredImages: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
  imageErrors: Set<string>;
  imageLoading: Set<string>;
  onImageError: (imageId: string) => void;
  onImageLoad: (imageId: string) => void;
  onImageLoadStart: (imageId: string) => void;
  onClearFilters: () => void;
}

const GalleryGrid = ({
  filteredImages,
  onImageClick,
  imageErrors,
  imageLoading,
  onImageError,
  onImageLoad,
  onImageLoadStart,
  onClearFilters
}: GalleryGridProps) => {
  if (filteredImages.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">
          No items found matching your search criteria.
        </p>
        <Button 
          variant="outline" 
          onClick={onClearFilters}
          className="mt-4"
        >
          Clear Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredImages.map((image) => (
        <GalleryImageCard
          key={image.id}
          image={image}
          onImageClick={onImageClick}
          imageErrors={imageErrors}
          imageLoading={imageLoading}
          onImageError={onImageError}
          onImageLoad={onImageLoad}
          onImageLoadStart={onImageLoadStart}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
