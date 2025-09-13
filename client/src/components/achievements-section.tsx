import { Trophy, GraduationCap, Code, Award, Medal, Heart, Activity } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "DEVJAM 2024",
      year: "2024",
      description: "My team \"Web Buddy\" created FixBuddy and was among the top teams. The college's flagship tech fest recognition.",
      icon: Trophy,
      iconColor: "text-accent-foreground",
      bgColor: "bg-accent"
    },
    {
      title: "Softathalon",
      year: "2024", 
      description: "Selected for the interview Round and recognized among the college's flagship tech fest participants.",
      icon: GraduationCap,
      iconColor: "text-primary-foreground",
      bgColor: "bg-primary"
    },
    {
      title: "LeetCode",
      year: "Ongoing",
      description: "Solved 400+ questions and participated in multiple contests, demonstrating strong problem-solving skills.",
      icon: Code,
      iconColor: "text-accent-foreground",
      bgColor: "bg-accent"
    },
    {
      title: "JEE Mains 24",
      year: "2024",
      description: "Achieved AIR 10561 99.34 percentile in the competitive examination.",
      icon: Award,
      iconColor: "text-primary-foreground",
      bgColor: "bg-primary"
    },
    {
      title: "Olympiad",
      year: "Multiple Years",
      description: "Multiple-time medalist in various Olympiads, showcasing academic excellence.",
      icon: Medal,
      iconColor: "text-accent-foreground",
      bgColor: "bg-accent"
    },
    {
      title: "Red Cross",
      year: "2-Year Certification",
      description: "Completed 2-year school certification program, demonstrating commitment to community service.",
      icon: Heart,
      iconColor: "text-primary-foreground",
      bgColor: "bg-primary"
    }
  ];

  const sportsActivities = ["Badminton", "Backslip", "Chess", "Athletics"];

  return (
    <section id="achievements" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground" data-testid="achievements-title">
            Achievements
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement) => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={achievement.title}
                    className="achievement-badge bg-card rounded-xl p-6 shadow-lg border border-border"
                    data-testid={`achievement-${achievement.title.toLowerCase().replace(' ', '-')}`}
                  >
                    <div className="text-center mb-4">
                      <div className={`w-16 h-16 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className={`w-8 h-8 ${achievement.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground" data-testid={`achievement-title-${achievement.title.toLowerCase().replace(' ', '-')}`}>
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-primary font-medium" data-testid={`achievement-year-${achievement.title.toLowerCase().replace(' ', '-')}`}>
                        {achievement.year}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-center" data-testid={`achievement-description-${achievement.title.toLowerCase().replace(' ', '-')}`}>
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Sports Achievements */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-center mb-8 text-foreground" data-testid="sports-achievements-title">
                Sports Achievements
              </h3>
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Activity className="w-10 h-10 text-accent-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4" data-testid="sports-participation-title">
                    Divisional Level Participation
                  </h4>
                  <p className="text-muted-foreground mb-6" data-testid="sports-description">
                    Participated at divisional level in multiple sports demonstrating athletic versatility and competitive spirit.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {sportsActivities.map((sport, index) => (
                      <span 
                        key={sport}
                        className={`px-4 py-2 rounded-full font-medium ${
                          index % 2 === 0 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-accent/10 text-accent'
                        }`}
                        data-testid={`sport-${sport.toLowerCase()}`}
                      >
                        {sport}
                      </span>
                    ))}
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
