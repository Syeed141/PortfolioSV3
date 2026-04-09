import { useMemo } from "react";
import { motion } from "framer-motion";
import {
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
      { name: "Framer Motion", icon: Sparkles },
      // { name: "GSAP", icon: Wand2 },
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

const heroContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.01,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 0.8,
    },
  },
};

const socialVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.72,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 13,
      mass: 0.7,
    },
  },
};

export const Hero = () => {
  const dots = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/85 to-background" />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-40"
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

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Frontend Developer
            </span>
          </div> */}

          <motion.div className="mt-6 space-y-4" variants={fadeUpVariants}>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Hi, I am Syeed !
            </h1>

            {/* <p className="text-base md:text-lg text-muted-foreground leading-8 max-w-2xl mx-auto">
              I am a frontend developer focused on building clean, responsive,
              and user-friendly web applications. I enjoy turning ideas into
              practical digital experiences and solving real problems through
              code.
            </p> */}
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            variants={fadeUpVariants}
          >
            <motion.a
              href="CV_of_Syeed.pdf"
              download="CV_of_Syeed.pdf"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-6 flex items-center justify-center gap-4"
            initial="hidden"
            animate="visible"
            transition={{
              staggerChildren: 0.12,
              delayChildren: 0.7,
            }}
          >
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
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                variants={socialVariants}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-14 glass-strong rounded-3xl p-6 md:p-8 glow-border text-left"
            variants={fadeUpVariants}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
              My Tech Stack
            </h2>

            <div className="space-y-5">
              {techCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="text-sm md:text-base font-semibold text-primary mb-2">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.name}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl glass text-sm text-foreground hover:text-primary transition-all duration-300"
                        >
                          <Icon className="w-4 h-4 text-primary" />
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-5"></div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.18,
            type: "spring",
            stiffness: 120,
            damping: 20,
            mass: 0.8,
          }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <span className="text-xs uppercase tracking-wider ">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
