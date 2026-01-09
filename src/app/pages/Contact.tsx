import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail as MailIcon, Send, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", project: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - CTA & Social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full border border-green-500/30 mb-6 w-fit">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-green-200">Available for Work</span>
            </div>

            <h2 className="text-5xl lg:text-6xl mb-6 leading-tight">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                legendary
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Have a project in mind? I'm always excited to discuss new
              opportunities and creative challenges. Let's turn your vision into
              reality.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-300">
                <MailIcon className="w-5 h-5 text-purple-400" />
                <a href="mailto:o.18hamdan@outlook.com" className="hover:text-white transition-colors">
                  o.18hamdan@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Leesburg, VA</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                Connect With Me
              </p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://www.linkedin.com/in/omar-hamdan-74674933b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="mailto:o.18hamdan@outlook.com"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <MailIcon className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://github.com/omarayman23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Glassmorphism Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20"></div>
              
              {/* Gradient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50"></div>

              {/* Form Content */}
              <form
                onSubmit={handleSubmit}
                className="relative z-10 p-8 lg:p-10 space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-500 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-500 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm mb-2 text-gray-300">
                    Project Type
                  </label>
                  <Input
                    id="project"
                    name="project"
                    type="text"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    placeholder="AI system, API integration, Full-stack app, etc."
                    className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-500 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-300">
                    Tell me about your project
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Share your vision, goals, timeline, and budget..."
                    className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-500 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
