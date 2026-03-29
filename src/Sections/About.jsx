import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast and responsive user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working well with teams to build better products.",
  },
  {
    icon: Lightbulb,
    title: "Learning",
    description: "Improving through practice and new technologies.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 animate-fade-in animation-delay-100 text-secondary-foreground">
            A frontend developer focused on building practical and user-friendly web applications.
          </h2>

          <div className="mt-6 space-y-4 text-muted-foreground animate-fade-in animation-delay-200 max-w-3xl mx-auto">
            <p>
              I am a frontend developer who enjoys building clean, responsive,
              and practical web applications. My interest in web development
              started from curiosity about how websites work and has grown into
              hands-on experience with modern web technologies.
            </p>

            <p>
              I mainly work with React, JavaScript, Tailwind CSS, Node.js,
              Express, and MongoDB. I enjoy turning ideas into working products
              and improving my problem-solving skills through real projects.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-5 rounded-2xl text-left animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-base font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground leading-6">
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

export default About;