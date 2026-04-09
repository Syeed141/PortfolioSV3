import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

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

const aboutViewport = {
  once: true,
  amount: 0.52,
  margin: "0px 0px -10% 0px",
};

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={aboutViewport}
        >
          <motion.div variants={fadeUpVariants}>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-4 text-secondary-foreground"
            variants={fadeUpVariants}
          >
            A frontend developer focused on building practical and user-friendly web applications.
          </motion.h2>

          <motion.div
            className="mt-6 space-y-4 text-muted-foreground max-w-3xl mx-auto"
            variants={fadeUpVariants}
          >
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
          </motion.div>

          <motion.div
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={cardsContainerVariants}
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                className="glass p-5 rounded-2xl text-left"
                variants={cardVariants}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 180, damping: 24 }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-base font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground leading-6">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
