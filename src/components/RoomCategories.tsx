import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import bedroomImage from "@/assets/bedroom-decor.jpg";
import kitchenImage from "@/assets/kitchen-decor.jpg";
import bathroomImage from "@/assets/bathroom-decor.jpg";

const categories = [
  {
    id: "living-room",
    name: "Living Room",
    image: "/placeholder.svg?height=400&width=600",
    description: "Create a welcoming space for family and friends",
    itemCount: 127
  },
  {
    id: "bedroom",
    name: "Bedroom",
    image: bedroomImage,
    description: "Design your perfect sanctuary for rest and relaxation",
    itemCount: 89
  },
  {
    id: "kitchen",
    name: "Kitchen",
    image: kitchenImage,
    description: "Essential tools and decor for the heart of your home",
    itemCount: 156
  },
  {
    id: "bathroom",
    name: "Bathroom",
    image: bathroomImage,
    description: "Transform your daily routine with stylish essentials",
    itemCount: 73
  }
];

const RoomCategories = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Shop by Room
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find everything you need to create beautiful, functional spaces throughout your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer hover:shadow-large transition-all duration-300 overflow-hidden bg-gradient-card border-0"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={`${category.name} decor and furniture`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">
                    {category.itemCount} items
                  </span>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-primary hover:bg-primary/10"
                  >
                    Browse →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomCategories;