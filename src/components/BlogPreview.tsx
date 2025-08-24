import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Play } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Ways to Create a Cozy Living Room",
    excerpt: "Transform your living space into a warm, inviting haven with these simple tips and tricks.",
    image: "/placeholder.svg?height=200&width=300",
    date: "Dec 15, 2024",
    readTime: "3 min read",
    category: "Living Room",
    isVideo: false
  },
  {
    id: 2,
    title: "Kitchen Organization Hacks",
    excerpt: "Maximize your kitchen space and keep everything organized with these clever storage solutions.",
    image: "/placeholder.svg?height=200&width=300",
    date: "Dec 12, 2024",
    readTime: "4 min read",
    category: "Kitchen",
    isVideo: true,
    tiktokViews: "125K"
  },
  {
    id: 3,
    title: "Creating a Spa-Like Bathroom",
    excerpt: "Turn your bathroom into a relaxing retreat with these affordable upgrades and accessories.",
    image: "/placeholder.svg?height=200&width=300",
    date: "Dec 10, 2024",
    readTime: "2 min read",
    category: "Bathroom",
    isVideo: false
  }
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Home Inspiration Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get inspired with our latest home decor tips, trends, and TikTok content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="group cursor-pointer hover:shadow-medium transition-all duration-300 overflow-hidden bg-card border-border/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {post.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
                      <Play className="h-6 w-6" />
                    </div>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="bg-background/90 text-foreground px-2 py-1 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                {post.tiktokViews && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-accent text-accent-foreground px-2 py-1 text-xs font-semibold rounded-full">
                      {post.tiktokViews} views
                    </span>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 text-primary hover:text-primary-hover font-medium"
                >
                  {post.isVideo ? 'Watch Video' : 'Read More'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="px-8">
              View All Blog Posts
            </Button>
            <Button className="px-8 bg-gradient-accent hover:opacity-90">
              Follow on TikTok
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;