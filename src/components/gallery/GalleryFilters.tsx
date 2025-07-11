
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

interface GalleryFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
  filteredCount: number;
  totalCount: number;
}

const GalleryFilters = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  filteredCount,
  totalCount
}: GalleryFiltersProps) => {
  return (
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
        Showing {filteredCount} of {totalCount} items
      </div>
    </div>
  );
};

export default GalleryFilters;
