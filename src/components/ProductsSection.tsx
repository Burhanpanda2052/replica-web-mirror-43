
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ProductCard from "./ProductCard";
import ProductDetailsModal from "./ProductDetailsModal";
import { products, productCategories, getProductsByCategory, searchProducts, Product } from "@/data/products";
import { Search, Filter, Grid, List } from "lucide-react";
import { useQuote } from "@/contexts/QuoteContext";

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { setSelectedProduct: setQuoteProduct, scrollToQuote } = useQuote();

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let result = getProductsByCategory(selectedCategory);
    
    if (searchQuery.trim()) {
      result = searchProducts(searchQuery).filter(product => 
        selectedCategory === "all" || product.category === getProductsByCategory(selectedCategory)[0]?.category
      );
    }
    
    return result;
  }, [selectedCategory, searchQuery]);

  const handleViewDetails = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  const handleQuickQuote = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      // Set the selected product data for the quote context
      setQuoteProduct({
        productId: product.id,
        productName: product.name,
        category: product.category,
        specifications: product.specifications
      });
      
      // Scroll to quote section
      scrollToQuote();
      
      console.log(`Quote request initiated for product: ${product.name}`);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Our Products & Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional construction materials and equipment delivered across Zanzibar. 
            Quality guaranteed, competitive pricing, reliable service.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4 mr-1" />
                Grid
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4 mr-1" />
                List
              </Button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {productCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="relative"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className={
          viewMode === "grid" 
            ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
        }>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onViewDetails={handleViewDetails}
              onQuickQuote={handleQuickQuote}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Filter className="h-12 w-12 mx-auto mb-2" />
              <p>No products found matching your criteria.</p>
              <p className="text-sm">Try adjusting your search or filter options.</p>
            </div>
            <Button variant="outline" onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Product Details Modal */}
        <ProductDetailsModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onQuickQuote={handleQuickQuote}
        />
      </div>
    </section>
  );
};

export default ProductsSection;
