import { Button } from "../Components/Button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

const navbarVariants = {
  hidden: {
    opacity: 0,
    y: -14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 18,
      mass: 0.8,
    },
  },
};

const navItemVariants = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
      mass: 0.7,
    },
  },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 1, 1],
      when: "afterChildren",
    },
  },
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center"
          variants={navItemVariants}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setIsMobileMenuOpen(false);
          }}
          whileHover={{ y: -1 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <img
            src="/logo.png"
            alt="Syeed logo"
            className="h-16 w-auto object-contain"
          />
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          <motion.div
            className="glass rounded-full px-2 py-1 flex items-center gap-1"
            variants={navItemVariants}
          >
            {navLinks.map((link, index) => (
              <motion.a
                href={link.href}
                key={index}
                onClick={(e) => handleNavClick(e, link.href.replace("#", ""))}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div className="hidden md:block" variants={navItemVariants}>
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <Button size="sm">Contact Me</Button>
          </motion.a>
        </motion.div>

        <motion.button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          variants={navItemVariants}
          whileTap={{ scale: 0.96 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden glass-strong overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="container mx-auto px-6 py-6 flex flex-col gap-4"
              variants={mobileMenuVariants}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  href={link.href}
                  key={index}
                  onClick={(e) => handleNavClick(e, link.href.replace("#", ""))}
                  className="text-lg text-muted-foreground hover:text-foreground py-2 transition-colors"
                  variants={navItemVariants}
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div variants={navItemVariants}>
                <Button
                  onClick={(e) => {
                    handleNavClick(e, "contact");
                  }}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
