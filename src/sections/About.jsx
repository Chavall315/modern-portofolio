import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing structured, easy-to-read code across both frontend and backend to ensure maintainability and clarity.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Prioritizing responsiveness and efficiency, optimizing both UI experiences and backend logic for fast, reliable applications.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Communicating openly, working in teams, and contributing responsibly to achieve shared goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Continuously learning new technologies and improving solutions through experimentation and curiosity.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative scroll-mt-28 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into complete,
              <span className="font-serif italic font-normal text-white">
                {" "}
                real-world web applications.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a full-stack web developer passionate about building both user-centered frontend interfaces and robust backend systems. 
                I work across the stack — from designing interactive UI with React/Next.js to implementing server logic and APIs with Laravel/PHP, 
                and integrating databases to deliver reliable and maintainable applications.
              </p>
              <p>
                I enjoy solving real problems through code, keeping performance and structure in mind, and continuously learning better tools and patterns to improve my workflows. 
                My projects reflect a balance between clean design, scalable architecture, and practical functionality.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “I build applications that are not just functional, but also maintainable and efficient — from user interface to server logic and data systems.”
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};  