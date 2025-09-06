import { 
  SiCplusplus, 
  SiC, 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql, 
  SiGit 
} from "react-icons/si";
import { Lightbulb, MessageCircle, Clock, CheckSquare } from "lucide-react";

export default function SkillsSection() {
  const programmingLanguages = [
    { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
    { name: "C", icon: SiC, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Python", icon: SiPython, color: "text-yellow-500" },
  ];

  const technologies = [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "SQL", icon: SiMysql, color: "text-blue-600" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb, color: "text-yellow-500" },
    { name: "Communication", icon: MessageCircle, color: "text-blue-600" },
    { name: "Time Management", icon: Clock, color: "text-green-600" },
    { name: "Project Management", icon: CheckSquare, color: "text-purple-600" },
  ];

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground" data-testid="skills-title">
            Technical Skills
          </h2>
          
          {/* Programming Languages */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground" data-testid="programming-languages-title">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {programmingLanguages.map((language) => {
                const IconComponent = language.icon;
                return (
                  <div key={language.name} className="text-center">
                    <div className="skill-icon w-20 h-20 mx-auto mb-4 bg-card rounded-full flex items-center justify-center shadow-lg border border-border hover:border-primary">
                      <IconComponent className={`text-3xl ${language.color}`} />
                    </div>
                    <h4 className="font-semibold text-foreground" data-testid={`skill-${language.name.toLowerCase()}`}>
                      {language.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technologies & Tools */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground" data-testid="technologies-title">
              Technologies & Databases
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {technologies.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div key={tech.name} className="text-center">
                    <div className="skill-icon w-20 h-20 mx-auto mb-4 bg-card rounded-full flex items-center justify-center shadow-lg border border-border hover:border-primary">
                      <IconComponent className={`text-3xl ${tech.color}`} />
                    </div>
                    <h4 className="font-semibold text-foreground" data-testid={`tech-${tech.name.toLowerCase().replace('.', '')}`}>
                      {tech.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground" data-testid="competencies-title">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {softSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="bg-card rounded-lg p-6 text-center shadow-lg border border-border hover:border-primary transition-colors">
                    <IconComponent className={`text-2xl ${skill.color} mb-3 mx-auto`} />
                    <h4 className="font-semibold text-foreground" data-testid={`competency-${skill.name.toLowerCase().replace(' ', '-')}`}>
                      {skill.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
