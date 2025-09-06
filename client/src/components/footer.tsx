export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-secondary-foreground/80" data-testid="footer-copyright">
          © 2024 <span data-testid="footer-name">Rishi Raj Jaiswal</span>. All rights reserved.
        </p>
        <p className="text-secondary-foreground/60 mt-2" data-testid="footer-tagline">
          Built with passion for technology and innovation.
        </p>
      </div>
    </footer>
  );
}
