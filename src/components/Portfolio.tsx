import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Smartphone, Cpu } from "lucide-react";

const projects = [
  {
    title: "Glims Farms & Food",
    category: "Web Development",
    description: "Professional business website with modern design, responsive layout, and optimized performance for enhanced user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    icon: Globe,
    type: "Website",
    link: "https://glims.netlify.app"
  },
  {
    title: "Zavolah",
    category: "Web Development", 
    description: "Advanced web platform with complex functionality, user management, and data visualization for business operations.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    icon: Globe,
    type: "Website",
    link: "https://zavolah.com"
  },
  {
    title: "ALIVE App",
    category: "Mobile Development",
    description: "Feature-rich mobile application with real-time functionality, user authentication, and seamless cross-platform experience.",
    technologies: ["Flutter", "Firebase", "Dart"],
    icon: Smartphone,
    type: "Mobile App",
    link: "https://play.google.com/store/apps/dev?id=6930207690396649880"
  },
  {
    title: "ZavCharge System",
    category: "Mobile Development",
    description: "Smart charging management application with IoT integration, payment processing, and real-time monitoring capabilities.",
    technologies: ["Flutter", "Arduino", "IoT"],
    icon: Smartphone,
    type: "Mobile App",
    link: "https://zavolah.com/zavcharge"
  },
  {
    title: "RealtyPro App",
    category: "Mobile Development",
    description: "Real estate management mobile application with property listings, virtual tours, and client management features.",
    technologies: ["React Native", "Firebase"],
    icon: Smartphone,
    type: "Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.niotron.getfunedu.RealtyPro"
  },
  {
    title: "ZavZone",
    category: "Arduino Development",
    description: "Smart Charging and Digital SAFE and control system using Arduino with remote monitoring and tamper proof security system.",
    technologies: ["Arduino", "IoT", "Sensors"],
    icon: Cpu,
    type: "Arduino Project",
    link: "https://zavolah.com/zavcharge"
  },
  {
    title: "PumpCast App",
    category: "Web App Development",
    description: "Cryptocurrency trading application with real-time market data, secure transactions, and portfolio management.",
    technologies: ["PAW", "Blockchain", "APIs"],
    icon: Globe,
    type: "Crypto App",
    link: "https://dev.fun/app/d26ad7d140f4eb4890e2"
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 section-fade-in px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-4 md:mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcasing successful projects across web development, mobile applications, 
            Arduino programming, and renewable energy solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="hover-lift group border-none shadow-lg bg-card overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-accent font-medium">
                    {project.category}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-primary/20 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-smooth"
                    onClick={() => project.link && window.open(project.link, '_blank')}
                    disabled={!project.link}
                  >
                    {project.link ? 'View Project' : 'Coming Soon'}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;