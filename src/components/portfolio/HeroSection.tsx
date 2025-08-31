import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-background overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
          Available for Full-time Opportunities
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
          Anuradha Pagare
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
          Software Development Engineer
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about building scalable backend systems, real-time applications, and leveraging 
          machine learning to solve complex problems. Experienced in full-stack development with 
          a focus on performance and reliability.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="default" size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="border-tech-border hover:bg-tech-bg">
            <FileText className="mr-2 h-5 w-5" />
            
            <a 
              href="https://drive.google.com/file/d/1nMlueW6xPuSeDI5i_lXx4nXzeKJizguJ/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >View Resume</a>
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href="mailto:anuradhamrp4@gmail.com" className="p-3 rounded-full bg-tech-bg border border-tech-border hover:bg-primary/20 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
          <a href="tel:+919021955799" className="p-3 rounded-full bg-tech-bg border border-tech-border hover:bg-primary/20 transition-colors">
            <Phone className="h-6 w-6" />
          </a>
          <a href="#" className="p-3 rounded-full bg-tech-bg border border-tech-border hover:bg-primary/20 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="p-3 rounded-full bg-tech-bg border border-tech-border hover:bg-primary/20 transition-colors">
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
          <div className="w-1 h-3 bg-muted-foreground rounded-full animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;