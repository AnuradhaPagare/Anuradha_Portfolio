import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, FileText, Trophy } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "Sanjivani College of Engineering, Kopargaon",
      period: "2023-2026",
      grade: "CGPA: 8.6",
      activities: "Chess competitions, paper publications, project competitions"
    },
    {
      degree: "Diploma in Computer Technology",
      institution: "Sanjivani KPB Polytechnic, Kopargaon",
      period: "2020-2023",
      grade: "86%",
      activities: "State/National project competitions, ACTS Association member"
    }
  ];

  const achievements = [
    {
      title: "IEEE Publication",
      description: "Enhancing Cyber Security Through Machine Learning: A Comprehensive Analysis",
      date: "Nov 2024",
      type: "Research"
    },
    {
      title: "Design Registration",
      description: "Solar Panel Switchboard - Filed with Indian Patent Office (App No.: 456500-001)",
      date: "Apr 2025",
      type: "Patent"
    },
    {
      title: "1st Place - College Project Competition",
      description: "Team Lead in college-wide project competition",
      date: "Jan 2024",
      type: "Award"
    }
  ];

  const certifications = [
    "Object Oriented Programming - Coursera (Nov 2023)",
    "Python for Data Science - NPTEL (Feb 2023)",
    "Cloud Computing - NPTEL (Feb 2023)"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A dedicated Software Development Engineer with expertise in backend architecture, API development, 
            and scalable system design. Passionate about building real-time, high-performance applications 
            with strong foundations in Functional Programming and distributed systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="bg-card/50 backdrop-blur-sm border-tech-border shadow-card-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant="outline" className="border-primary text-primary">
                        {edu.period}
                      </Badge>
                      <Badge variant="secondary" className="bg-tech-bg border-tech-border">
                        {edu.grade}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{edu.activities}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-card/50 backdrop-blur-sm border-tech-border shadow-card-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="p-4 bg-tech-bg rounded-lg border border-tech-border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {achievement.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    <p className="text-xs text-primary font-medium">{achievement.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="bg-card/50 backdrop-blur-sm border-tech-border shadow-card-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Award className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 bg-tech-bg rounded-lg border border-tech-border text-center">
                  <FileText className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;