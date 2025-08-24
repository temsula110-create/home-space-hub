import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoomCategories from "@/components/RoomCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import BlogPreview from "@/components/BlogPreview";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <RoomCategories />
      <FeaturedProducts />
      <BlogPreview />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
