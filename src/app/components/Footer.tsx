import React from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Work", href: "work" },
    { name: "Services", href: "services" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <footer className="bg-[#0a0a0f] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Status */}
          <div className="flex flex-col md:flex-row items-center gap-4"></div>

          {/* Center - Navigation Links */}
          <div className="flex gap-8">
            {footerLinks.map((link, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  onNavigate(link.href);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* Right - Made with love */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} Omar Hamdan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
