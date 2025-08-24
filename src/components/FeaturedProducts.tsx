import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Sage Green Throw Pillow",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=300",
    category: "Living Room",
    isNew: true
  },
  {
    id: 2,
    name: "Ceramic Table Lamp",
    price: 89.99,
    rating: 4.9,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300",
    category: "Bedroom",
    isBestseller: true
  },
  {
    id: 3,
    name: "Wooden Cutting Board Set",
    price: 45.99,
    rating: 4.7,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    category: "Kitchen"
  },
  {
    id: 4,
    name: "Bamboo Bath Caddy",
    price: 34.99,
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    category: "Bathroom"
  },
  {
    id: 5,
    name: "Woven Storage Basket",
    price: 24.99,
    rating: 4.5,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    category: "Living Room"
  },
  {
    id: 6,
    name: "Cotton Duvet Cover",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=300",
    category: "Bedroom",
    isNew: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites that our customers love most
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer hover:shadow-medium transition-all duration-300 overflow-hidden bg-card border-border/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-accent text-accent-foreground px-2 py-1 text-xs font-semibold rounded-full">
                      New
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded-full">
                      Bestseller
                    </span>
                  )}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-3 right-3 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-primary font-medium">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button size="sm" className="shadow-soft hover:shadow-medium">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;