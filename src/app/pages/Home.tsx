import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap, Brain, Cloud, Code2 } from "lucide-react";
import { Button } from "../components/ui/button";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "API Integration & Backend",
      description: "REST & GraphQL expertise, OAuth/JWT security, microservices architecture, and event streaming with Kafka.",
      gradient: "from-purple-500/20 to-purple-500/5 border-purple-500/20"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Agentic Workflows & AI",
      description: "Multi-agent systems with autonomous orchestration, Agentic RAG for intelligent retrieval, and custom LLM fine-tuning.",
      gradient: "from-blue-500/20 to-blue-500/5 border-blue-500/20"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Type-safe architecture with Next.js & TypeScript, premium UX design with motion-rich interfaces and Apple-grade aesthetics.",
      gradient: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & Infrastructure",
      description: "Edge-first deployment, serverless architecture for sub-100ms latency, and automated DevOps with zero-downtime CI/CD.",
      gradient: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20"
    }
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full border border-green-500/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-200">Available for Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent leading-tight"
            >
              Turning Vision into Digital Reality
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-400 mb-10 leading-relaxed"
            >
              Full-stack engineer specializing in AI-powered systems, scalable backend architecture, 
              and premium user experiences. From intelligent workflows to edge-first infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full px-8 shadow-lg shadow-purple-500/30"
                onClick={() => onNavigate("work")}
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/10 rounded-full px-8"
                onClick={() => onNavigate("contact")}
              >
                Start a Project
              </Button>
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl text-center mb-12 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Core Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer group`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/5 text-purple-400 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2 group-hover:text-purple-200 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                &lt;100ms
              </div>
              <div className="text-gray-400 text-sm">Average Latency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-gray-400 text-sm">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Global
              </div>
              <div className="text-gray-400 text-sm">Edge Deployment</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
