import { GraduationCap, Calendar, Trophy } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground" data-testid="education-title">
            Education
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-xl p-8 shadow-lg border border-border">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-2" data-testid="education-degree">
                    Bachelor of Technology (B.Tech.)
                  </h3>
                  <h4 className="text-xl font-semibold text-primary mb-2" data-testid="education-field">
                    Computer Science and Engineering
                  </h4>
                  <p className="text-lg text-muted-foreground mb-2" data-testid="education-institution">
                    Motilal Nehru National Institute of Technology, Allahabad
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground" data-testid="education-year">2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-foreground">
                        CGPA: <span data-testid="education-cgpa">8.36</span>
                      </span>
                    </div>
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
