import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import logo from "@/assets/homebasics-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="HomeBasics" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#living-room" className="text-foreground hover:text-primary transition-colors">
              Living Room
            </a>
            <a href="#bedroom" className="text-foreground hover:text-primary transition-colors">
              Bedroom
            </a>
            <a href="#kitchen" className="text-foreground hover:text-primary transition-colors">
              Kitchen
            </a>
            <a href="#bathroom" className="text-foreground hover:text-primary transition-colors">
              Bathroom
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-64"
                />
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#living-room" className="text-foreground hover:text-primary transition-colors">
                Living Room
              </a>
              <a href="#bedroom" className="text-foreground hover:text-primary transition-colors">
                Bedroom
              </a>
              <a href="#kitchen" className="text-foreground hover:text-primary transition-colors">
                Kitchen
              </a>
              <a href="#bathroom" className="text-foreground hover:text-primary transition-colors">
                Bathroom
              </a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <div className="pt-4 border-t border-border">
                <Input placeholder="Search products..." />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;