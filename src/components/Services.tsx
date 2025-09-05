import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Cpu, 
  Code, 
  Layers, 
  Server, 
  Smartphone,
  Zap
} from "lucide-react";

const services = [
  
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern, responsive web interfaces using HTML, CSS, JavaScript, React, and other cutting-edge frameworks for exceptional user experiences."
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "Complete web applications with React frontend and Node.js/Python backend. Scalable, robust solutions from concept to deployment."
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Powerful server-side solutions using Python (Django/Flask), Node.js, database management, and RESTful API development."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using Flutter and native Android development with Kotlin/Java for optimal performance."
  },
  {
    icon: Cpu,
    title: "Arduino Programming",
    description: "Custom Arduino solutions for automation, IoT devices, and smart systems. Expert in sensors, actuators, and embedded programming."
  },
  {
    icon: Zap,
    title: "Renewable Energy Solutions",
    description: "Smart energy management systems, solar panel monitoring dashboards, and sustainable technology integrations."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 section-fade-in px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-4 md:mb-6">
            Expert <span className="text-primary">Technical Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive technology solutions tailored to your business needs, 
            from hardware programming to full-scale software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-lift hover-glow group border-none shadow-lg bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;