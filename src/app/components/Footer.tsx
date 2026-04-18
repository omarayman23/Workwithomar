import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "home" },
    { name: "Work", href: "work" },
    { name: "Services", href: "services" },
    { name: "Contact", href: "contact" },
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/omarayman23", icon: <Github size={20} /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/omar-hamdan-74674933b", icon: <Linkedin size={20} /> },
    { name: "Email", href: "mailto:o.18hamdan@outlook.com", icon: <Mail size={20} /> },
  ];

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
              Omar Hamdan
            </h2>
            <p className="text-gray-400">Building reliable software & intelligent systems.</p>
          </div>

          <div className="flex flex-wrap gap-8">
            {footerLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavigate(link.href)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <p className="text-sm text-gray-500">
            © {currentYear} Omar Hamdan. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={social.name === "Email" ? undefined : "noopener noreferrer"}
                aria-label={social.name}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
