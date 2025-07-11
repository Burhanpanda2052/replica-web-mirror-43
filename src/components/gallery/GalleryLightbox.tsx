
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { GalleryImage } from "@/types/gallery";

interface GalleryLightboxProps {
  selectedImage: GalleryImage | null;
  lightboxIndex: number;
  filteredImagesLength: number;
  imageErrors: Set<string>;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
  onImageError: (imageId: string) => void;
}

const GalleryLightbox = ({
  selectedImage,
  lightboxIndex,
  filteredImagesLength,
  imageErrors,
  onClose,
  onNavigate,
  onImageError
}: GalleryLightboxProps) => {
  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-6xl max-h-full">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
        >
          <X className="h-6 w-6" />
        </Button>

        {lightboxIndex > 0 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate("prev")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        )}

        {lightboxIndex < filteredImagesLength - 1 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate("next")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        )}

        <div className="bg-white rounded-lg overflow-hidden">
          {imageErrors.has(selectedImage.id) ? (
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <ImageOff className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Image not available</p>
                <p className="text-sm opacity-70 mt-2">
                  {selectedImage.src.split('/').pop()}
                </p>
              </div>
            </div>
          ) : (
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-contain"
              onError={() => onImageError(selectedImage.id)}
            />
          )}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
              <Badge>{selectedImage.category}</Badge>
            </div>
            <p className="text-muted-foreground">{selectedImage.description}</p>
            <div className="mt-4 text-sm text-muted-foreground">
              Image {lightboxIndex + 1} of {filteredImagesLength}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;
