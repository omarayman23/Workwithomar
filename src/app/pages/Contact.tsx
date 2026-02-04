import React, { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail as MailIcon, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
    const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
    const ownerTemplateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID_OWNER || templateId;
    const autoReplyTemplateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID_AUTOREPLY || templateId;
    const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey || 
        serviceId === "YOUR_SERVICE_ID" || 
        templateId === "YOUR_TEMPLATE_ID" || 
        publicKey === "YOUR_PUBLIC_KEY") {
      console.error("EmailJS is not configured. Please set up environment variables.");
      setSubmitStatus("error");
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    const ownerMessage = `New contact form submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.project}\n\nMessage:\n${formData.message}`;

    const ownerParams = {
      to_email: "o.18hamdan@outlook.com",
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      subject: `New inquiry: ${formData.project}`,
      message: ownerMessage,
      user_name: formData.name,
      user_email: formData.email,
      user_project: formData.project,
      user_message: formData.message,
    };

    const autoReplyMessage = `Dear ${formData.name},\n\nI appreciate you taking the time to reach out to me. I will get in touch with you as soon as possible.\n\nBest,\nOmar Hamdan`;

    const autoReplyParams = {
      to_email: formData.email,
      from_name: "Omar Hamdan",
      from_email: "o.18hamdan@outlook.com",
      reply_to: "o.18hamdan@outlook.com",
      subject: "Thanks for your message",
      message: autoReplyMessage,
      user_name: formData.name,
    };

    // Send email automatically using EmailJS
    try {
      await emailjs.send(serviceId, ownerTemplateId, ownerParams, publicKey);
      await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", project: "", message: "" });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen bg-[#0a0a0f] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - CTA & Social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/30 mb-6 w-fit">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-sm text-green-200 flash-pulse">
                Available for Work
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl mb-6 leading-tight">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-[#FF7A1A] to-[#7C5CFF] bg-clip-text text-transparent">
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
                <MailIcon className="w-5 h-5 text-[#FFB15C]" />
                <a href="mailto:o.18hamdan@outlook.com" className="hover:text-white transition-colors">
                  o.18hamdan@outlook.com
                </a>
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
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="mailto:o.18hamdan@outlook.com"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <MailIcon className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://github.com/omarayman23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all duration-300"
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
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7A1A]/20 to-[#7C5CFF]/20 rounded-3xl blur-xl opacity-50"></div>

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
                    className="bg-white/5 border-white/10 focus:border-white/40 text-white placeholder:text-gray-500 rounded-xl"
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
                    className="bg-white/5 border-white/10 focus:border-white/40 text-white placeholder:text-gray-500 rounded-xl"
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
                    className="bg-white/5 border-white/10 focus:border-white/40 text-white placeholder:text-gray-500 rounded-xl"
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
                    className="bg-white/5 border-white/10 focus:border-white/40 text-white placeholder:text-gray-500 rounded-xl resize-none"
                  />
                </div>

                <div className="text-xs text-gray-400">
                  Note: The auto-reply email might land in your spam folder. Please check there if you don&apos;t see it.
                </div>

                <div className="space-y-3">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#FF7A1A] to-[#7C5CFF] hover:opacity-90 text-white rounded-xl shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                  
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-300 text-sm text-center"
                    >
                      ✓ Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 text-sm text-center"
                    >
                      ✗ Failed to send message. Please try again or email me directly.
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
