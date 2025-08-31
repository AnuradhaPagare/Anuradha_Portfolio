import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, CreditCard, Brain, UserCheck } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Online Vehicle Rental Platform",
      company: "Celebal",
      period: "Jun–Jul 2025",
      icon: CreditCard,
      description: "Built a comprehensive full-stack rental platform with real-time booking capabilities, user dashboard, and secure checkout system.",
      achievements: [
        "Integrated Razorpay payment gateway with JWT authentication for secure transactions",
        "Scaled APIs to handle 1K+ bookings with optimized performance",
        "Implemented real-time booking system with conflict prevention"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Firebase", "JWT"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Sentiment Analysis & Text Mining",
      company: "Research Project",
      period: "Nov 2024",
      icon: Brain,
      description: "Advanced machine learning project for analyzing Amazon product reviews and classifying sentiment patterns.",
      achievements: [
        "Classified Amazon product reviews as positive, negative, or neutral",
        "Implemented comprehensive text preprocessing and feature extraction",
        "Achieved high accuracy using ensemble learning techniques"
      ],
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "TensorFlow", "NLTK"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "SkillMaster Web Platform",
      company: "Personal Project",
      period: "Jun–Aug 2024",
      icon: UserCheck,
      description: "Comprehensive platform for soft skill assessment and interview scheduling with modern web technologies.",
      achievements: [
        "Built responsive frontend using Loveble AI for enhanced user experience",
        "Developed custom backend API with Node.js and Express.js",
        "Implemented MongoDB for efficient data management"
      ],
      technologies: ["Loveble AI", "Node.js", "Express.js", "MongoDB", "React.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-section-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise through real-world applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-tech-border shadow-card-shadow hover:shadow-glow transition-all duration-300 group h-full flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/20">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/20">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.period}</span>
                    <span className="mx-2">•</span>
                    <span className="font-medium">{project.company}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-tech-bg border-tech-border text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;