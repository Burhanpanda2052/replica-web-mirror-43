
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageOff } from "lucide-react";
import { GalleryImage } from "@/types/gallery";

interface GalleryImageCardProps {
  image: GalleryImage;
  onImageClick: (image: GalleryImage) => void;
  imageErrors: Set<string>;
  imageLoading: Set<string>;
  onImageError: (imageId: string) => void;
  onImageLoad: (imageId: string) => void;
  onImageLoadStart: (imageId: string) => void;
}

const GalleryImageCard = ({
  image,
  onImageClick,
  imageErrors,
  imageLoading,
  onImageError,
  onImageLoad,
  onImageLoadStart
}: GalleryImageCardProps) => {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
      onClick={() => onImageClick(image)}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg h-64">
          {imageErrors.has(image.id) ? (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <ImageOff className="h-12 w-12 mx-auto mb-2" />
                <p className="text-sm">Image not available</p>
                <p className="text-xs opacity-70 mt-1">
                  {image.src.split('/').pop()}
                </p>
              </div>
            </div>
          ) : (
            <>
              {imageLoading.has(image.id) && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              )}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
                onLoad={() => onImageLoad(image.id)}
                onError={() => onImageError(image.id)}
                onLoadStart={() => onImageLoadStart(image.id)}
              />
            </>
          )}
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
  );
};

export default GalleryImageCard;
