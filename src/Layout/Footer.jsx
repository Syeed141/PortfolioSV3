import { Github, Linkedin, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Syeed141", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/syeed141", label: "LinkedIn" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3 md:items-center">
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <img
                src="/logo.png"
                alt="Syeed logo"
                className="h-12 w-auto object-contain"
              />
              <span className="text-2xl font-bold tracking-tight">
                Syeed<span className="text-primary">.</span>
              </span>
            </a>

            <p className="text-sm text-muted-foreground mt-3 max-w-xs mx-auto md:mx-0">
              Frontend developer focused on building modern, responsive, and user-friendly web experiences.
            </p>

            <p className="text-sm text-muted-foreground mt-3">
              © {currentYear} Syeed. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-5 md:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;