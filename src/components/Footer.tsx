import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="ZavTech Logo" className="w-full h-full object-contain rounded-md" />
              </div>
              <span className="text-2xl font-bold font-montserrat">
                <span className="text-accent">Zav</span>Tech
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Professional technical solutions in web development, mobile applications, 
              Arduino programming, and renewable energy systems for businesses globally.  
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Frontend Development</li>
              <li>Full-Stack Development</li>
              <li>Backend Development</li>
              <li>Mobile App Development</li>
               <li>Arduino Programming</li>
              <li>Renewable Energy Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:08066404608" className="hover:text-accent transition-smooth">
                  08066404608
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:tech@zavolah.com" className="hover:text-accent transition-smooth">
                  tech@zavolah.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Nigeria & Global Remote</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} ZavTech. All rights reserved.
          </p>          
        </div>
      </div>
    </footer>
  );
};

export default Footer;