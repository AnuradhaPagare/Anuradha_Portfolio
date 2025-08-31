import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Celebal Technologies Pvt. Ltd.",
      location: "Remote",
      period: "May–Jul 2025",
      type: "React.js Development",
      achievements: [
        "Built scalable backend APIs, optimized data flow for 1K+ users, cutting latency by 25%",
        "Designed reusable service components, streamlining integration with low-code principles",
        "Added logging, monitoring, and error-handling to boost backend reliability"
      ],
      technologies: ["React.js", "Node.js", "APIs", "Backend Architecture"]
    },
    {
      title: "Web Development Intern",
      company: "Origin Software Solution",
      location: "Remote",
      period: "Jul–Aug 2022",
      type: "Full-Stack Development",
      achievements: [
        "Built responsive web interfaces (HTML, CSS, JavaScript, React.js)",
        "Integrated backend features using Java (Servlets, JDBC) and MySQL",
        "Delivered complete web solutions with modern technologies"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Java", "MySQL"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions and gaining valuable experience in software development
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-tech-border shadow-card-shadow hover:shadow-glow transition-all duration-300"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <Briefcase className="h-6 w-6 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-xl font-semibold text-muted-foreground mt-2">{exp.company}</p>
                    <Badge variant="outline" className="mt-2 border-primary text-primary">
                      {exp.type}
                    </Badge>
                  </div>
                  <div className="text-right md:text-left">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-tech-border">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-tech-bg border-tech-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;