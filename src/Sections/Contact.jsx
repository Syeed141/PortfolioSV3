import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../Components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shahariarsyeed2026@gmail.com",
    href: "mailto:shahariarsyeed2026@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801766-891322",
    href: "tel:+8801766891322",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pabna Sadar, Pabna",
    href: "https://maps.google.com/?q=Pabna+Sadar,+Pabna",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/your-username",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/your-username",
    href: "https://linkedin.com/in/your-username",
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

const columnsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.22,
    },
  },
};

const columnVariants = {
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

const contactHeaderViewport = {
  once: true,
  amount: 0.5,
  margin: "0px 0px -12% 0px",
};

const contactColumnsViewport = {
  once: true,
  amount: 0.32,
  margin: "0px 0px -8% 0px",
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. I’ll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err?.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={contactHeaderViewport}
        >
          <motion.span
            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase block"
            variants={fadeUpVariants}
          >
            Get In Touch
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
            variants={fadeUpVariants}
          >
            Let&apos;s build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </motion.h2>

          <motion.p className="text-muted-foreground" variants={fadeUpVariants}>
            Looking for a frontend developer for a freelance project, internship,
            or full-time role? Send me a message and I&apos;ll get back to you
            as soon as possible.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto"
          variants={columnsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={contactColumnsViewport}
        >
          <motion.div
            className="glass p-8 rounded-3xl border border-primary/30"
            variants={columnVariants}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              <AnimatePresence mode="wait">
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      type: "spring",
                      stiffness: 170,
                      damping: 20,
                    }}
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          <motion.div className="space-y-6" variants={columnVariants}>
            <motion.div className="glass rounded-3xl p-8" variants={fadeUpVariants}>
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.label === "Location" ? "_blank" : undefined}
                    rel={
                      item.label === "Location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                    whileHover={{ y: -1 }}
                    transition={{ type: "spring", stiffness: 180, damping: 24 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium break-all">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass rounded-3xl p-8 border border-primary/30"
              variants={fadeUpVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>

              <p className="text-muted-foreground text-sm">
                Open to freelance projects, internships, and frontend
                development opportunities. If you have an idea or role in mind,
                feel free to reach out.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
