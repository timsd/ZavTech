import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-tech-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-montserrat leading-tight px-4">
            Professional
            <span className="block gradient-accent bg-clip-text text-transparent">
              Technical Solutions
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed px-4">
            Expert in full-stack development, mobile apps, Arduino programming, and renewable energy systems.  
            Delivering innovative solutions for businesses in Nigeria and globally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
            <Button 
              size="lg" 
              className="gradient-primary hover:shadow-xl hover:scale-105 transition-smooth px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 text-sm w-full sm:w-auto justify-center">
              <a 
                href="tel:08066404608" 
                className="flex items-center justify-center sm:justify-start gap-2 text-white hover:text-accent-light transition-smooth"
              >
                <Phone className="h-4 w-4" />
                08066404608
              </a>
              <a 
                href="mailto:tech@zavolah.com" 
                className="flex items-center justify-center sm:justify-start gap-2 text-white hover:text-accent-light transition-smooth"
              >
                <Mail className="h-4 w-4" />
                tech@zavolah.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;