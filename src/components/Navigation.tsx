import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    name: "Home",
    href: "#home"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "Portfolio",
    href: "#portfolio"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("#home")}
            className="flex items-center space-x-2 hover:opacity-80 transition-smooth"
          >
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="ZavTech Logo" className="w-full h-full object-contain rounded-md" />
            </div>
            <span className={`text-2xl font-bold font-montserrat transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}>
              <span className="text-accent">Zav</span>Tech
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className={`transition-smooth font-medium ${
              isScrolled ? "text-black" : "text-gray-50"
            }`}>
                {item.name}
              </button>)}
            <Button size="sm" className="gradient-primary hover:shadow-lg hover:scale-105 transition-smooth" onClick={() => scrollToSection("#contact")}>
              <Phone className="h-4 w-4 mr-2" />
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-black hover:text-black/80" : "text-white hover:text-white/80"
            }`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2">
                  {item.name}
                </button>)}
              <Button size="sm" className="gradient-primary self-start" onClick={() => scrollToSection("#contact")}>
                <Phone className="h-4 w-4 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;