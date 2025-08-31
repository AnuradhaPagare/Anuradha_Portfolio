import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cloud, Brain, Wrench, Trophy } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      skills: ["C++", "Java", "Python", "JavaScript", "TypeScript", "React.js", "Node.js", "Express.js", "SQL"]
    },
    {
      icon: Database,
      title: "Databases & Storage",
      skills: ["MongoDB", "MySQL", "Firebase"]
    },
    {
      icon: Cloud,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "AWS", "Postman", "RESTful APIs", "JWT Authentication"]
    },
    {
      icon: Brain,
      title: "Data Science & AI",
      skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "TensorFlow", "NLTK", "Keras", "Machine Learning"]
    },
    {
      icon: Wrench,
      title: "Backend & Systems",
      skills: ["Distributed Systems", "Functional Programming", "Payment Integration", "Reliability Engineering"]
    },
    {
      icon: Trophy,
      title: "Problem Solving",
      skills: ["DSA", "LeetCode", "HackerRank", "100+ Problems Solved"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-section-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning full-stack development, data science, and system architecture
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-tech-border shadow-card-shadow hover:shadow-glow transition-all duration-300 group"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-tech-bg border-tech-border hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
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

export default SkillsSection;