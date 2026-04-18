import React, { useState } from "react";
import { motion } from "motion/react";
import { Badge } from "../components/ui/badge";
import { Timeline } from "../components/ui/timeline";
import { ExternalLink, Briefcase, Lightbulb, BadgeCheck, Github, Globe, Chrome } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface Project {
  id: number;
  title: string;
  client?: string;
  industry?: string;
  image: string;
  imageFit?: "cover" | "contain";
  tags: string[];
  description: string;
  type: "client" | "independent";
  websiteUrl?: string;
  extensionUrl?: string;
}

interface Certification {
  id: number;
  title: string;
  issuerLabel: string;
  credentialUrl: string;
  logoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "NASA L'SPACE NPWEE",
    client: "L'SPACE Program",
    industry: "Autonomy, AI & Space Robotics",
    image: "https://www.nasa.gov/wp-content/uploads/2023/03/nasa-logo-web-rgb.png",
    imageFit: "contain",
    tags: ["Autonomy", "AI Systems", "Space Robotics"],
    description: "Current work in the NPWEE program focused on autonomy, intelligent systems, and space robotics research.",
    type: "client"
  },
  {
    id: 2,
    title: "Tab Saver",
    image: "/tabsaver.png",
    tags: ["Chrome Extension", "TypeScript", "AI Integration"],
    description: "Save and restore browser tabs with AI-powered summaries, auto-save, and smart organization",
    type: "independent",
    websiteUrl: "https://tab-saver-website.vercel.app/",
    extensionUrl: "https://chromewebstore.google.com/detail/tab-saver/nonbbacblhbkhblenjgljomlllcppidp"
  },
  {
    id: 3,
    title: "CoverLetterAI",
    image: "/cover-letter.png",
    imageFit: "contain",
    tags: ["AI", "Next.js", "OpenAI"],
    description: "AI-powered cover letter generator that creates personalized cover letters tailored to job applications",
    type: "independent",
    websiteUrl: "https://cover-letterai.vercel.app/"
  },
  {
    id: 4,
    title: "Algorithm Visualizer",
    image: "/algorithm-visualizer.png",
    imageFit: "contain",
    tags: ["React", "Data Structures", "Education"],
    description: "Interactive CS learning platform for visualizing and understanding key algorithms and data structures",
    type: "independent",
    websiteUrl: "https://algorithm-visuals.vercel.app/"
  },
  {
    id: 5,
    title: "Extra / Other Work",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGNpcmN1aXR8ZW58MXx8fHwxNzA3MDkxMTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["GitHub", "Projects", "Open Source"],
    description: "Explore additional experiments, prototypes, and open-source builds on my GitHub.",
    type: "independent",
    websiteUrl: "https://github.com/omarayman23"
  },
];

const certifications: Certification[] = [
  {
    id: 1,
    title: "Software Engineering Job Simulation",
    issuerLabel: "JPMorgan Chase",
    credentialUrl: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_68a670ec822c06a70cc8d662_1767551371688_completion_certificate.pdf",
    logoUrl: "/certifications/jpmorgan.jpeg"
  },
  {
    id: 2,
    title: "Machine Learning with Python Professional",
    issuerLabel: "Anaconda",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4D22AQGSZZut7ZUhNQ/feedshare-shrink_1280/B4DZpfyTohIMAs-/0/1762543614771?e=1772064000&v=beta&t=dfHkm8LTafWbxZvbHDcdfqlNizIJ9GhBY29ULVYyFng",
    logoUrl: "/certifications/anaconda.jpeg"
  },
  {
    id: 3,
    title: "Vector Databases Professional",
    issuerLabel: "Weaviate",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4D22AQGdOPyOyvfGrQ/feedshare-shrink_1280/B4DZpb58cLIAAs-/0/1762478508077?e=1772064000&v=beta&t=iR752d0Lj-478eSKf0C8dId4l-TkaeaFvTJRpaHABRo",
    logoUrl: "/certifications/weaviate.jpeg"
  },
  {
    id: 4,
    title: "Ubuntu Linux Professional",
    issuerLabel: "Ubuntu",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4D22AQGoOLq8hkIffA/feedshare-shrink_1280/B4DZoJ6NkzGgAs-/0/1761102846512?e=1772064000&v=beta&t=QWdpvronozeGKw989FjCZPfLxxJg2AGoddb66GhQDN0",
    logoUrl: "/certifications/canonical.jpeg"
  },
  {
    id: 5,
    title: "Software Testing Professional",
    issuerLabel: "LambdaTest",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4D22AQF_aZcoFMKIWQ/feedshare-shrink_1280/B4DZnqgz3OJIAs-/0/1760576093916?e=1772064000&v=beta&t=md24XoRLX4tRNXSjFJW5-BLm99iTJQTNcVJupT4lcJs",
    logoUrl: "/certifications/lambdatest.jpeg"
  },
  {
    id: 6,
    title: "Machine Learning Statistical Foundations",
    issuerLabel: "Wolfram",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4D22AQE7zWsUaSFzFg/feedshare-shrink_1280/B4DZnkmg2vIEAs-/0/1760476925648?e=1772064000&v=beta&t=R-i50efk8w9Ta6bF9_W0xLSRNh5lhcdMt3OhiJAUP-w",
    logoUrl: "/certifications/wolfram.jpeg"
  },
  {
    id: 7,
    title: "Azure AI",
    issuerLabel: "Microsoft",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4D22AQFv1FnxxmQP_A/feedshare-shrink_1280/B4DZnKm12CGQAw-/0/1760040804001?e=1772064000&v=beta&t=sTebA6yTQznB35OqsuECXSeh1Fyc1s_H_GXPOLZsI48",
    logoUrl: "/certifications/microsoft.jpeg"
  },
];

interface WorkProps {
  onNavigate: (page: string) => void;
}

export function Work({ onNavigate }: WorkProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"client" | "independent" | "certifications">("client");

  const filteredProjects = projects.filter(p => p.type === activeTab);
  return (
    <section className="min-h-screen bg-black text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.h2 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
          >
            {activeTab === "client" ? "Client Work" : activeTab === "independent" ? "Independent Work" : "Certifications"}
          </motion.h2>
          <motion.p 
            key={`${activeTab}-desc`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mb-10"
          >
            {activeTab === "client" 
              ? "A collection of real projects I've built for clients, delivering custom solutions that solve real business challenges."
              : activeTab === "independent"
              ? "Personal projects and independent work I've created to explore new technologies, solve interesting problems, and build innovative solutions."
              : "Credentials and professional certifications that validate my technical and applied engineering skills."}
          </motion.p>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("client")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "client"
                  ? "bg-gradient-to-r from-[#FF7A1A] to-[#7C5CFF] text-white shadow-lg shadow-white/10"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Client Work
            </button>
            <button
              onClick={() => setActiveTab("independent")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "independent"
                  ? "bg-gradient-to-r from-[#FF7A1A] to-[#7C5CFF] text-white shadow-lg shadow-white/10"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
              }`}
            >
              <Lightbulb className="w-4 h-4" />
              Independent Work
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "certifications"
                  ? "bg-gradient-to-r from-[#FF7A1A] to-[#7C5CFF] text-white shadow-lg shadow-white/10"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
              }`}
            >
              <BadgeCheck className="w-4 h-4" />
              Certifications
            </button>
          </div>
        </motion.div>

        {activeTab === "client" ? (
          <Timeline data={[
            {
              title: "Feb 2026 – Present",
              content: (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex items-center justify-center shrink-0">
                        <img src="/mynaturalme.png" alt="My Natural Me logo" className="w-full h-full object-contain bg-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-1">Web Developer Intern</h3>
                        <p className="text-sm text-gray-400">My Natural Me · Manassas, VA</p>
                      </div>
                    </div>
                    <a href="https://dementiacaregiversupport.org/" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#FFB15C] hover:text-[#FFD166] border border-[#FFB15C]/30 hover:border-[#FFD166]/50 rounded-full px-3 py-1.5 transition-colors">
                      <Globe className="w-3.5 h-3.5" /> Website
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-sm text-gray-300 space-y-2 mb-6 leading-relaxed">
                    <li>Developed and maintained responsive web interfaces to support dementia caregivers.</li>
                    <li>Improved website performance, accessibility, and overall user experience.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Web Development", "UI/UX", "Performance"].map(tag => (
                      <span key={tag} className="text-[11px] text-gray-300 bg-white/10 border border-white/10 rounded-full px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              title: "Jan 2026 – Apr 2026",
              content: (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex items-center justify-center shrink-0">
                        <img src="/nasa.png" alt="NASA logo" className="w-full h-full object-contain bg-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-1">AI/ML Engineer</h3>
                        <p className="text-sm text-gray-400">NASA L'Space NPWEE · Remote</p>
                      </div>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-sm text-gray-300 space-y-2 mb-6 leading-relaxed">
                    <li>Proposed a framework for evaluating and improving trust in autonomous systems by integrating explainability, risk assessment, and confidence scoring into agent decision workflows</li>
                    <li>Reviewed current state-of-the-art validation approaches, identified reliability gaps, and defined measurable metrics to strengthen verification, safety, and mission readiness</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Autonomy", "AI Systems", "Space Robotics"].map(tag => (
                      <span key={tag} className="text-[11px] text-gray-300 bg-white/10 border border-white/10 rounded-full px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              title: "Feb 2026 – Mar 2026",
              content: (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex items-center justify-center shrink-0">
                        <img src="/wayfair.png" alt="Wayfair logo" className="w-full h-full object-contain bg-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-1">AI Automation Extern</h3>
                        <p className="text-sm text-gray-400">Wayfair · Remote</p>
                      </div>
                    </div>
                    <a href="https://media.licdn.com/dms/image/v2/D4E2DAQGYIL_d3nY5Kw/profile-treasury-image-shrink_8192_8192/B4EZ1qDvA6JEAg-/0/1775600858444?e=1777078800&v=beta&t=hU5AYpPeeWOqFz1_M_cyKq4Ow1-N1GZ_9YOYNmm-FmQ" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#FFB15C] hover:text-[#FFD166] border border-[#FFB15C]/30 hover:border-[#FFD166]/50 rounded-full px-3 py-1.5 transition-colors">
                      <BadgeCheck className="w-3.5 h-3.5" /> Certificate
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-sm text-gray-300 space-y-2 mb-6 leading-relaxed">
                    <li>Built and orchestrated AI agents using n8n and large-language-model tooling to automate ingestion, analysis, and routing of retail trend data</li>
                    <li>Developed end-to-end workflows that transformed unstructured web and social inputs into structured insights and actionable business recommendations</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["AI Agents", "n8n", "LLM", "Automation"].map(tag => (
                      <span key={tag} className="text-[11px] text-gray-300 bg-white/10 border border-white/10 rounded-full px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              title: "Oct 2025 – Jan 2026",
              content: (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex items-center justify-center shrink-0">
                        <img src="/yapn.png" alt="Yapn logo" className="w-full h-full object-contain bg-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-1">Software Engineer Intern</h3>
                        <p className="text-sm text-gray-400">Yapn · Springfield, VA</p>
                      </div>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-sm text-gray-300 space-y-2 mb-6 leading-relaxed">
                    <li>Built full-stack call analytics dashboard using React, Express.js, AWS DynamoDB, and Retell AI API to track 150+ restaurant phone calls with real-time filtering, success metrics, and data visualization</li>
                    <li>Developed RESTful API backend with paginated data fetching, rate limiting, and error handling; integrated AWS DynamoDB and third-party AI services for restaurant call management system</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["React", "Express.js", "AWS DynamoDB", "Retell AI"].map(tag => (
                      <span key={tag} className="text-[11px] text-gray-300 bg-white/10 border border-white/10 rounded-full px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              ),
            },
          ]} />
        ) : activeTab === "independent" ? (
          <Timeline data={[
            {
              title: "Jan 2026 – Present",
              content: (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">Ad Immunity - Ad Blocker</h3>
                      <p className="text-sm text-gray-400">Browser Extension · Privacy</p>
                    </div>
                    <a href="https://chromewebstore.google.com/detail/ad-immunity-ad-blocker/lnoponmddlnbkgkmpkmdpjgclpinplkk" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#FFB15C] hover:text-[#FFD166] border border-[#FFB15C]/30 hover:border-[#FFD166]/50 rounded-full px-3 py-1.5 transition-colors">
                      <Chrome className="w-3.5 h-3.5" /> Extension
                    </a>
                  </div>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    Ad Immunity is a browser extension that automatically removes ads, pop-ups, and trackers from websites, creating a faster and distraction-free browsing experience. It works in the background on every site, including video platforms, without requiring any setup from the user. Built with a strong focus on privacy, it keeps all data on the user's device and never collects or shares personal information.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Browser Extension", "Privacy", "Ad Blocker"].map(tag => (
                      <span key={tag} className="text-[11px] text-gray-300 bg-white/10 border border-white/10 rounded-full px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              title: "Jun 2025 – Jan 2026",
              content: (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">Tab Saver</h3>
                      <p className="text-sm text-gray-400">Chrome Extension · TypeScript · AI Integration</p>
                    </div>
                    <div className="flex gap-3">
                      <a href="https://tab-saver-website.vercel.app/" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#FFB15C] hover:text-[#FFD166] border border-[#FFB15C]/30 hover:border-[#FFD166]/50 rounded-full px-3 py-1.5 transition-colors">
                        <Globe className="w-3.5 h-3.5" /> Website
                      </a>
                      <a href="https://chromewebstore.google.com/detail/tab-saver/nonbbacblhbkhblenjgljomlllcppidp" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#FFB15C] hover:text-[#FFD166] border border-[#FFB15C]/30 hover:border-[#FFD166]/50 rounded-full px-3 py-1.5 transition-colors">
                        <Chrome className="w-3.5 h-3.5" /> Extension
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    Save and restore browser tabs with AI-powered summaries, auto-save, and smart organization. Built to eliminate tab chaos and help users stay focused.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Chrome Extension", "TypeScript", "AI Integration", "React"].map(tag => (
                      <span key={tag} className="text-[11px] text-gray-300 bg-white/10 border border-white/10 rounded-full px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              title: "Apr – Jun 2025",
              content: (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">CoverLetterAI</h3>
                      <p className="text-sm text-gray-400">AI · Next.js · OpenAI</p>
                    </div>
                    <a href="https://cover-letterai.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#FFB15C] hover:text-[#FFD166] border border-[#FFB15C]/30 hover:border-[#FFD166]/50 rounded-full px-3 py-1.5 transition-colors">
                      <Globe className="w-3.5 h-3.5" /> Website
                    </a>
                  </div>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    AI-powered cover letter generator that creates personalized, job-tailored cover letters in seconds. Paste a job description and your resume — it does the rest.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {["AI", "Next.js", "OpenAI", "Tailwind CSS"].map(tag => (
                      <span key={tag} className="text-[11px] text-gray-300 bg-white/10 border border-white/10 rounded-full px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              title: "Feb – Jun 2025",
              content: (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">Algorithm Visualizer</h3>
                      <p className="text-sm text-gray-400">React · Data Structures · Education</p>
                    </div>
                    <a href="https://algorithm-visuals.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#FFB15C] hover:text-[#FFD166] border border-[#FFB15C]/30 hover:border-[#FFD166]/50 rounded-full px-3 py-1.5 transition-colors">
                      <Globe className="w-3.5 h-3.5" /> Website
                    </a>
                  </div>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    Interactive CS learning platform for visualizing and understanding key algorithms and data structures. Designed to make abstract concepts tangible and intuitive.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {["React", "Data Structures", "Algorithms", "Education"].map(tag => (
                      <span key={tag} className="text-[11px] text-gray-300 bg-white/10 border border-white/10 rounded-full px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              title: "Other Work",
              content: (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-2">More on GitHub</h3>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    Additional experiments, prototypes, and open-source builds — smaller projects and explorations that don't have a dedicated page yet.
                  </p>
                  <a
                    href="https://github.com/omarayman23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black shadow-lg hover:bg-white/90 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View GitHub Profile
                  </a>
                </div>
              ),
            },
          ]} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.03] to-transparent p-6 hover:border-white/20"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.15),transparent_60%)]" />
                  <div className="relative flex items-start gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-white border border-white/10 flex items-center justify-center p-2 shadow-sm">
                      <ImageWithFallback
                        src={cert.logoUrl}
                        alt={`${cert.issuerLabel} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl">{cert.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{cert.issuerLabel}</p>
                      <div className="mt-4">
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm text-black shadow-lg shadow-white/10 hover:bg-white/90 transition-colors"
                        >
                          Show Credentials
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
