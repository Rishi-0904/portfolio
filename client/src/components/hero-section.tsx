export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container mx-auto px-6 text-center text-white">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="hero-name">
            Rishi Raj Jaiswal
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-8 text-white/90" data-testid="hero-title">
            Computer Science & Engineering Student
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-white/80" data-testid="hero-description">
            Passionate about web development, competitive programming, and building innovative solutions. 
            Currently pursuing B.Tech in Computer Science at MNNIT Allahabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
              data-testid="button-view-projects"
            >
              View Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors"
              data-testid="button-see-skills"
            >
              See Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
