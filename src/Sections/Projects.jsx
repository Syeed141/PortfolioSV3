import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 55,
      damping: 16,
      mass: 1.1,
    },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.28,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 62,
      damping: 16,
      mass: 1,
    },
  },
};

const projectsHeaderViewport = {
  once: true,
  amount: 0.5,
  margin: "0px 0px -12% 0px",
};

const projectsGridViewport = {
  once: true,
  amount: 0.34,
  margin: "0px 0px -8% 0px",
};

const projectsCtaViewport = {
  once: true,
  amount: 0.52,
  margin: "0px 0px -10% 0px",
};

const projects = [
  {
    title: "Budget Sohokari",
    description:
      "A full-stack personal budgeting app built for fresh graduates and early-career professionals to track expenses, monitor savings, view monthly analytics, and export expense reports with a clean, demo-friendly experience.",
    image: "/projects/P5.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Recharts",
    ],
    link: "https://budget-sohokari.vercel.app/",
    github: "https://github.com/Syeed141/Budget_sohokari",
  },
  {
    title: "Skycast AI",
    description:
      "A full-stack AI-powered weather application delivering real-time forecasts, hourly insights, and personalized recommendations with a dynamic, weather-responsive UI.",
    image: "/projects/P1.png",
    tags: ["React", "Vite", "Node.js", "Express", "AI"],
    link: "https://weather-app-delta-gray-67.vercel.app/",
    github: "https://github.com/Syeed141/Weather-app",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered web app that analyzes PDF resumes, evaluates ATS compatibility, scores resume quality, and provides personalized feedback through an interactive AI assistant.",
    image: "/projects/P2.png",
    tags: ["React", "Vite", "TailwindCSS", "Puter AI", "PDF.js"],
    link: "https://simple-resume-analyzer.surge.sh/",
    github: "https://github.com/Syeed141/MyResumeAnalyzer",
  },
  {
    title: "Book Vibe",
    description:
      "A modern book tracking web app where users can browse books, view details, and mark them as read with data stored locally.",
    image: "/projects/P3.png",
    tags: ["React", "Vite", "Tailwind CSS", "DaisyUI", "LocalStorage"],
    link: "https://book-vibe-delta.vercel.app/",
    github: "https://github.com/Syeed141/BookVibe",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mx-auto max-w-3xl mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={projectsHeaderViewport}
        >
          <motion.span
            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase block"
            variants={fadeUpVariants}
          >
            Featured Work
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
            variants={fadeUpVariants}
          >
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </motion.h2>
          <motion.p className="text-muted-foreground" variants={fadeUpVariants}>
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={projectsGridViewport}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group glass rounded-2xl overflow-hidden md:row-span-1"
              variants={cardVariants}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={projectsCtaViewport}
          variants={fadeUpVariants}
        >
          <motion.a
            href="https://github.com/Syeed141"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 180, damping: 24 }}
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
