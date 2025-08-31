import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anuradhamrp4@gmail.com",
      href: "mailto:anuradhamrp4@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9021955799",
      href: "tel:+919021955799"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "#",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <section className="py-20 px-6 bg-section-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to contribute to innovative projects and collaborate on exciting opportunities. 
            Feel free to reach out for collaborations or opportunities!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="bg-card/50 backdrop-blur-sm border-tech-border shadow-card-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Send className="h-6 w-6 text-primary" />
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a 
                      key={index} 
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-tech-bg rounded-lg border border-tech-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-tech-border">
                <p className="text-sm text-muted-foreground mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-3 bg-tech-bg rounded-lg border border-tech-border hover:border-primary/50 transition-all duration-300 ${social.color}`}
                        aria-label={social.label}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-card/50 backdrop-blur-sm border-tech-border shadow-card-shadow">
            <CardContent className="p-8 h-full flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Available for Opportunities</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm actively seeking full-time opportunities as a Software Development Engineer. 
                  Open to discussing innovative projects, collaborations, and exciting challenges.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-tech-border hover:bg-tech-bg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reference */}
        <Card className="mt-8 bg-card/30 backdrop-blur-sm border-tech-border/50">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-center">Professional Reference</h4>
            <div className="text-center text-sm text-muted-foreground">
              <p className="font-medium">Dr. S.R. Deshmukh (M.E., Ph.D)</p>
              <p>Assistant Professor, Dept. of Computer Engineering</p>
              <p>Sanjivani College of Engineering, Kopargaon</p>
              <p className="mt-2">
                <a href="mailto:deshmukhshashikantcomp@sanjivani.org.in" className="text-primary hover:underline">
                  deshmukhshashikantcomp@sanjivani.org.in
                </a>
                {" • "}
                <a href="tel:+919665651000" className="text-primary hover:underline">
                  +91 9665651000
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;