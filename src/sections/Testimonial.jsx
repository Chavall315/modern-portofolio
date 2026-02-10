import { Code2, Rocket, Layout, RefreshCcw } from "lucide-react";

const principles = [
  {
    icon: Code2,
    title: "Structured & Scalable Code",
    description:
      "I design modular component systems in React and TypeScript so features can scale without refactoring the entire codebase.",
  },
  {
    icon: Rocket,
    title: "Performance-Oriented Mindset",
    description:
      "I prioritize efficient rendering and predictable state flows to avoid performance bottlenecks as applications grow.",
  },
  {
    icon: Layout,
    title: "Design Consistency",
    description:
      "I maintain consistent spacing systems and reusable UI patterns to ensure faster iteration and visual consistency across features.",
  },
  {
    icon: RefreshCcw,
    title: "Continuous Improvement",
    description:
      "I continuously refactor existing code to reduce technical debt and keep projects aligned with modern standards.",
  },
];

export const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 lg:py-36 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-125 h-125 md:w-175 md:h-175 lg:w-225 lg:h-225 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"/>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            My Approach
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-secondary-foreground leading-tight">
            Building Digital Products with{" "}
            <span className="font-serif italic font-normal text-white">
              clarity & structure.
            </span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            I don’t just create interfaces — I design scalable systems that are
            structured, maintainable, and built for real-world performance.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass p-6 md:p-8 lg:p-10 rounded-2xl
                glow-border hover:scale-[1.02]
                transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl 
                  bg-primary/10 flex items-center justify-center mb-6"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};