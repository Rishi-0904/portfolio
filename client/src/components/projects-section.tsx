import { Wrench, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const technologies = [
    "Node.js",
    "JavaScript", 
    "MongoDB",
    "EJS",
    "JWT",
    "bcrypt.js"
  ];

  return (
    <section id="projects" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground" data-testid="projects-title">
            Personal Projects
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="project-card bg-background rounded-xl p-8 shadow-lg border border-border">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground" data-testid="project-title">
                      Fix Buddy: Service Marketplace Platform
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed" data-testid="project-description">
                    Developed a comprehensive service marketplace using Node.js, JavaScript, MongoDB, EJS, JWT authentication, and bcrypt.js 
                    for hashing. Solves the hassle of finding trusted professionals for services like plumbing, repairs, etc. through a centralized 
                    platform. Implemented robust registration, profile management, service listing, booking system, and request handling with 
                    secure user authentication.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3" data-testid="technologies-used-title">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {technologies.map((tech, index) => (
                        <span 
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            index % 2 === 0 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-accent/10 text-accent'
                          }`}
                          data-testid={`tech-badge-${tech.toLowerCase().replace('.', '')}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      data-testid="button-view-project"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-border hover:bg-muted text-foreground"
                      data-testid="button-view-source"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
