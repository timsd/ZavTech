import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 1000);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 section-fade-in px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-4 md:mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your technical vision to life? Get in touch to discuss your project 
            and discover how I can help transform your ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto px-4">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold font-montserrat">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new projects and opportunities. 
                Whether you need web development, mobile apps, Arduino programming,
                or renewable energy solutions, let's talk about how I can help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:08066404608" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    08066404608
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:tech@zavolah.com" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    tech@zavolah.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Nigeria & Global Remote</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-xl hover-lift">
            <CardHeader className="px-4 md:px-6">
              <CardTitle className="text-xl md:text-2xl">Send a Message</CardTitle>
              <CardDescription className="text-sm md:text-base">
                Tell me about your project and I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 md:px-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm md:text-base">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your full name" 
                      required 
                      className="h-10 md:h-12 border-primary/20 focus:border-primary text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      className="h-10 md:h-12 border-primary/20 focus:border-primary text-sm md:text-base"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm md:text-base">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Project inquiry, consultation, etc." 
                    required 
                    className="h-10 md:h-12 border-primary/20 focus:border-primary text-sm md:text-base"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm md:text-base">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project, requirements, timeline, and budget..." 
                    rows={4}
                    required 
                    className="border-primary/20 focus:border-primary resize-none text-sm md:text-base min-h-20 md:min-h-24"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full gradient-primary hover:shadow-xl hover:scale-105 transition-smooth py-4 md:py-6 text-base md:text-lg font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;