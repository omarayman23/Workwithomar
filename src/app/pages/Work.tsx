import { useState } from "react";
import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Briefcase, Lightbulb } from "lucide-react";

interface Project {
  id: number;
  title: string;
  client?: string;
  industry?: string;
  image: string;
  tags: string[];
  description: string;
  type: "client" | "independent";
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    client: "TechStyle Co.",
    industry: "Fashion & Retail",
    image: "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY3OTM4MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["UI/UX", "Next.js", "Stripe API"],
    description: "Complete platform overhaul with real-time inventory and payment integration",
    type: "client"
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    client: "DataFlow Analytics",
    industry: "Data & Analytics",
    image: "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njc5MDkyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Python", "ML Pipeline"],
    description: "Real-time analytics with predictive insights and custom ML models",
    type: "client"
  },
  {
    id: 3,
    title: "Microservices Architecture Migration",
    client: "FinTech Innovations",
    industry: "Financial Services",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3OTY2NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Microservices", "Kafka", "Docker"],
    description: "Migrated monolith to scalable microservices with event streaming",
    type: "client"
  },
  {
    id: 4,
    title: "Open Source RAG Framework",
    image: "https://images.unsplash.com/photo-1765408217738-39fac9c0b3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0d29ya3xlbnwxfHx8fDE3Njc5NTMxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "LangChain", "Vector DB"],
    description: "Intelligent retrieval system for AI agents with context-aware reasoning",
    type: "independent"
  },
  {
    id: 5,
    title: "Multi-Agent Orchestration System",
    image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3Njc5NzY2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["AI Agents", "TypeScript", "Autonomous"],
    description: "Self-planning agent system with reflection loops and task orchestration",
    type: "independent"
  },
  {
    id: 6,
    title: "Edge-Optimized API Gateway",
    image: "https://images.unsplash.com/photo-1580837428500-74aa7eefc672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWdufGVufDF8fHx8MTc2Nzg4NjAwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Cloudflare", "GraphQL", "Security"],
    description: "Globally distributed gateway with sub-100ms latency and rate limiting",
    type: "independent"
  },
];

interface WorkProps {
  onNavigate: (page: string) => void;
}

export function Work({ onNavigate }: WorkProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"client" | "independent">("client");

  const filteredProjects = projects.filter(p => p.type === activeTab);

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mb-10">
            A curated selection of projects showcasing technical expertise and creative solutions.
          </p>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("client")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "client"
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30"
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
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
              }`}
            >
              <Lightbulb className="w-4 h-4" />
              Independent Work
            </button>
          </div>
        </motion.div>

        <Masonry columnsCount={2} gutter="24px">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
          ))}
        </Masonry>
      </div>
    </section>
  );
}
