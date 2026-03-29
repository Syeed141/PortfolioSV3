import { useMemo } from "react";
import { Button } from "../Components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
  Facebook,
  FileCode2,
  Atom,
  Wind,
  Server,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Code2,
  Sparkles,
  Wand2,
} from "lucide-react";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";

const techCategories = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Globe },
      { name: "JavaScript", icon: FileCode2 },
      { name: "Tailwind CSS", icon: Wind },
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Layers3 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Code2 },
    ],
  },
  {
    title: "Animation",
    items: [
      { name: "Framer", icon: Sparkles },
      { name: "GSAP", icon: Wand2 },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
    ],
  },
];

export const Hero = () => {
  const dots = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, []);

  const [frontend, ...restCategories] = techCategories;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend Dev • Problem Solver
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Developing
                <span className="text-primary glow-text">
                  {" "}
                  practical web solutions{" "}
                </span>
                through clean code.
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Shahriar Syeed — a Frontend Dev who enjoys solving
                problems by building practical web applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              

              <a href="Syeed_CV.pdf" download="Syeed_CV.pdf">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Add me:</span>

              {[
                { icon: Github, href: "https://github.com/Syeed141" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/syeed141",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/shourdo.sayed",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="pt-4 animate-fade-in animation-delay-500">
              <p className="text-sm text-muted-foreground mb-5">
                Technologies I work with
              </p>

              {/* Row 1: Frontend */}
              <div className="space-y-2 mb-5">
                <h3 className="text-sm font-semibold text-primary">
                  {frontend.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {frontend.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
                      >
                        <Icon className="w-4 h-4 text-primary" />
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Row 2 and 3: Backend | Animation, Database | Tools */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 max-w-3xl">
                {restCategories.map((category) => (
                  <div key={category.title} className="space-y-2">
                    <h3 className="text-sm font-semibold text-primary">
                      {category.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => {
                        const Icon = item.icon;

                        return (
                          <span
                            key={item.name}
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
                          >
                            <Icon className="w-4 h-4 text-primary" />
                            {item.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
                rounded-3xl bg-linear-to-br 
                from-primary/30 via-transparent 
                to-primary/10 blur-2xl animate-pulse"
              />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/s3.png"
                  alt="Shahriar Syeed"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-xs text-muted-foreground">
                    Solving problems, one commit at a time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;