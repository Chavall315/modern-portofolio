import { Github, Linkedin, Twitter, Mail, ArrowUp, X, Instagram } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-border/40 backdrop-blur-sm">
      <div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/50 to-background pointer-events-none" />

      <div className="relative container mx-auto px-6">
        {/* Main Footer */}
        <div className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">

            {/* Brand */}
            <div className="space-y-5">
              <a
                href="#"
                className="inline-block text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-300"
              >
                Vall<span className="text-primary">.</span>
              </a>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                Building digital experiences with creativity, precision, and long-term scalability.
              </p>

              <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                {[
                  { icon: Github, href: "https://github.com/Chavall315" },
                  { icon: X, href: "https://x.com/NaufalGaskara" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/naufal-bagaskara-budihutama-555ba7377/" },
                  { icon: Instagram, href: "https://www.instagram.com/naufalgaskara_/" },
                ].map((sosial, idx) => (
                  <a
                    key={idx}
                    href={sosial.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300"
                  >
                    <sosial.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-foreground">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-foreground">
                Let's Work Together
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                Open for freelance work, collaborations, or full-time opportunities.
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm font-medium text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Contact Me
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear}{" "}
              <span className="font-medium text-primary">
                Naufal Bagaskara Budihutama
              </span>
              . All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 border border-border/50 text-xs text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              aria-label="Back to top"
            >
              <span className="font-medium">Back to top</span>
              <div className="p-1 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                <ArrowUp className="w-3.5 h-3.5 group-hover:text-primary group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
