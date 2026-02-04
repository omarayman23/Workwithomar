import React, { useState } from "react";
import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Briefcase, Lightbulb, BadgeCheck } from "lucide-react";
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
    <section className="min-h-screen bg-[#0a0a0f] text-white py-32 px-6">
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

        {activeTab !== "certifications" ? (
          <Masonry columnsCount={2} gutter="24px">
            {filteredProjects.map((project, index) => {
              const handleClick = () => {
                if (project.websiteUrl) {
                  window.open(project.websiteUrl, "_blank", "noopener,noreferrer");
                } else if (project.extensionUrl) {
                  window.open(project.extensionUrl, "_blank", "noopener,noreferrer");
                }
              };

              return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={handleClick}
              >
                <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
                  <div className={`relative overflow-hidden ${
                    project.imageFit === "contain" ? "" : "aspect-[4/3]"
                  }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full transition-transform duration-700 group-hover:scale-110 ${
                        project.imageFit === "contain" ? "h-auto object-contain" : "h-full object-cover"
                      }`}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    {/* Hover Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredId === project.id ? 1 : 0,
                        y: hoveredId === project.id ? 0 : 20,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col justify-end p-6"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl mb-1">{project.title}</h3>
                          {project.client && (
                            <>
                              <p className="text-gray-300">{project.client}</p>
                              <p className="text-sm text-gray-400">{project.industry}</p>
                            </>
                          )}
                          {(project.websiteUrl || project.extensionUrl) && (
                            <div className="flex gap-2 mt-2">
                              {project.websiteUrl && (
                                <a
                                  href={project.websiteUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                className="text-xs text-[#FFB15C] hover:text-[#FFD166] underline"
                              >
                                Website
                              </a>
                            )}
                              {project.extensionUrl && (
                                <a
                                  href={project.extensionUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                className="text-xs text-[#FFB15C] hover:text-[#FFD166] underline"
                              >
                                Chrome Extension
                              </a>
                            )}
                            </div>
                          )}
                        </div>
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                    </motion.div>
                  </div>

                  {/* Tags */}
                  <div className="p-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-white/5 text-gray-300 hover:bg-white/10 border-white/10 rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
              );
            })}
          </Masonry>
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
