import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle,
  Lightbulb,
  Palette,
  Code,
  Rocket,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ServiceTier {
  name: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface VisualService {
  title: string;
  description: string;
  details: string;
  tags: string[];
  accent: string;
  examples: { title: string; description: string }[];
}

const visualServices: VisualService[] = [
  {
    title: "API Integration",
    description: "Connect tools and services with secure APIs.",
    details: "I connect your app to payment, email, and data services with secure, well-documented APIs.",
    tags: ["REST", "GraphQL", "OAuth"],
    accent: "from-[#FF7A1A]/25 to-transparent",
    examples: [
      { title: "Payments", description: "Stripe & billing" },
      { title: "Auth", description: "OAuth + tokens" },
      { title: "Webhooks", description: "Real-time events" },
    ],
  },
  {
    title: "Backend Development",
    description: "Fast, reliable systems that scale.",
    details: "I build the server, database, and business logic that keep your product fast and secure.",
    tags: ["Architecture", "Performance", "Security"],
    accent: "from-[#7C5CFF]/25 to-transparent",
    examples: [
      { title: "APIs", description: "Clean endpoints" },
      { title: "Databases", description: "Stable data layer" },
      { title: "Performance", description: "Caching + speed" },
    ],
  },
  {
    title: "Full-Stack Solutions",
    description: "Clean UI + strong engineering.",
    details: "I design and build the full product: UI, backend, and deployment.",
    tags: ["TypeScript", "React", "UX"],
    accent: "from-[#20C6FF]/25 to-transparent",
    examples: [
      { title: "UI", description: "Responsive screens" },
      { title: "Frontend", description: "React + TS" },
      { title: "Backend", description: "APIs + data" },
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Smart features that drive results.",
    details: "I add ML features like search, recommendations, and automation.",
    tags: ["ML", "RAG", "Automation"],
    accent: "from-[#FFD166]/25 to-transparent",
    examples: [
      { title: "Search", description: "Semantic results" },
      { title: "Predictions", description: "Smart insights" },
      { title: "Automation", description: "Workflow boosts" },
    ],
  },
  {
    title: "Agentic Workflows",
    description: "Autonomous agents that plan and act.",
    details: "I build agents that use tools, plan steps, and complete tasks.",
    tags: ["Agents", "Tools", "Planning"],
    accent: "from-[#FF5DB1]/25 to-transparent",
    examples: [
      { title: "Agents", description: "Multi-step tasks" },
      { title: "Tools", description: "APIs + actions" },
      { title: "RAG", description: "Knowledge context" },
    ],
  },
  {
    title: "Cloud Infrastructure",
    description: "Stable, secure cloud foundations.",
    details: "I deploy, monitor, and scale your app on the cloud.",
    tags: ["CI/CD", "Serverless", "Monitoring"],
    accent: "from-[#69F0AE]/25 to-transparent",
    examples: [
      { title: "Deploy", description: "Zero-downtime" },
      { title: "CI/CD", description: "Automated releases" },
      { title: "Monitoring", description: "Alerts + logs" },
    ],
  },
  {
    title: "Microservices Architecture",
    description: "Modular systems that are easy to grow.",
    details: "I split complex systems into services that scale independently.",
    tags: ["Services", "Scaling", "Events"],
    accent: "from-[#8A2BE2]/25 to-transparent",
    examples: [
      { title: "Services", description: "Clear boundaries" },
      { title: "Events", description: "Async workflows" },
      { title: "Scaling", description: "Independent growth" },
    ],
  },
  {
    title: "UI/UX Design",
    description: "Simple, modern, user-friendly design.",
    details: "I design interfaces that are clean, clear, and easy to use.",
    tags: ["Design", "Prototypes", "Testing"],
    accent: "from-[#FF8A5C]/25 to-transparent",
    examples: [
      { title: "Wireframes", description: "Quick layouts" },
      { title: "UI Design", description: "Polished screens" },
      { title: "Testing", description: "User feedback" },
    ],
  },
  {
    title: "Database Architecture",
    description: "Data models built for speed and safety.",
    details: "I design schemas that keep data fast, secure, and organized.",
    tags: ["SQL", "NoSQL", "Optimization"],
    accent: "from-[#00C2FF]/25 to-transparent",
    examples: [
      { title: "Schemas", description: "Clean structure" },
      { title: "Indexes", description: "Fast queries" },
      { title: "Backups", description: "Safe recovery" },
    ],
  },
  {
    title: "Real-time Systems",
    description: "Live data and instant updates.",
    details: "I build real-time features like chat, tracking, and live dashboards.",
    tags: ["WebSockets", "Streams", "Latency"],
    accent: "from-[#F6C453]/25 to-transparent",
    examples: [
      { title: "WebSockets", description: "Instant updates" },
      { title: "Streams", description: "Live data" },
      { title: "Latency", description: "Low delay" },
    ],
  },
  {
    title: "Security Implementation",
    description: "Best practices that protect your users.",
    details: "I secure apps with proper authentication, access control, and safe data handling.",
    tags: ["Auth", "Access", "Compliance"],
    accent: "from-[#7C5CFF]/25 to-transparent",
    examples: [
      { title: "Auth", description: "Secure login" },
      { title: "Access", description: "Role control" },
      { title: "Compliance", description: "Best practices" },
    ],
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated builds and smooth releases.",
    details: "I set up pipelines that build, test, and deploy reliably.",
    tags: ["Pipelines", "Deploy", "Observability"],
    accent: "from-[#20C6FF]/25 to-transparent",
    examples: [
      { title: "Pipelines", description: "Automated builds" },
      { title: "Deploy", description: "Fast releases" },
      { title: "Observability", description: "System health" },
    ],
  },
];

const serviceTiers: ServiceTier[] = [
  {
    name: "MVP Build",
    description: "Launch fast and test your idea with a clean first version.",
    icon: <Lightbulb className="w-6 h-6" />,
    features: [
      "Simple user research",
      "Wireframes + clean UI",
      "Clickable prototype",
      "Core feature set",
      "2 feedback rounds",
    ],
  },
  {
    name: "Full Product",
    description: "End-to-end build with design, development, and deployment.",
    icon: <Code className="w-6 h-6" />,
    popular: true,
    features: [
      "Full UI/UX design",
      "Frontend + backend",
      "API integration",
      "Database setup",
      "Cloud deployment",
      "Post-launch support",
    ],
  },
  {
    name: "AI Systems",
    description: "Smart workflows, RAG, and autonomous agent features.",
    icon: <Rocket className="w-6 h-6" />,
    features: [
      "Agent workflows",
      "RAG + retrieval",
      "Model fine-tuning",
      "Inference pipelines",
      "Real-time monitoring",
    ],
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "1",
    title: "Share your idea",
    description:
      "We align on goals, users, and a simple plan with timeline and budget.",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    number: "2",
    title: "Design & prototype",
    description:
      "We create visuals and a clickable prototype so you can see it early.",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    number: "3",
    title: "Build & test",
    description:
      "We develop the product, test it, and share weekly updates.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    number: "4",
    title: "Launch & support",
    description:
      "We deploy, document, and make sure everything runs smoothly.",
    icon: <Rocket className="w-8 h-8" />,
  },
];

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<number | null>(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className="min-h-screen bg-[#0a0a0f] text-white py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,122,26,0.16),transparent_40%),radial-gradient(circle_at_75%_10%,rgba(124,92,255,0.18),transparent_40%),radial-gradient(circle_at_60%_75%,rgba(32,198,255,0.12),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:90px_90px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#FFB15C]" />
            <span className="text-sm text-[#FFD6A5]">My Services</span>
          </div>
          <h2 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Clear, focused services with a mission-ready mindset. Simple, fast, and built right.
          </p>
        </motion.div>

        {/* Visual Services - horizontal scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-28"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl">What I Do</h3>
            <span className="text-sm text-gray-400">Scroll for more →</span>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth">
            {visualServices.map((service, index) => (
              <motion.button
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                onClick={() => {
                  setActiveService(index);
                  setIsPopupOpen(true);
                }}
                className={`min-w-[240px] sm:min-w-[280px] lg:min-w-[320px] w-[240px] sm:w-[280px] lg:w-[320px] shrink-0 snap-start text-left rounded-3xl border p-6 transition-all duration-300 group bg-white/5 backdrop-blur-sm hover:border-white/30 hover:-translate-y-1 overflow-hidden ${
                  activeService === index
                    ? "border-white/40 shadow-lg shadow-white/10"
                    : "border-white/10"
                }`}
              >
                <div className={`rounded-2xl border border-white/10 bg-gradient-to-br ${service.accent} p-4 mb-5`}
                >
                  <div className="flex items-center justify-between text-xs text-gray-300 mb-3">
                    <span>Visual</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {service.examples.slice(0, 3).map((example) => (
                      <div key={example.title} className="h-16 rounded-xl bg-white/10 border border-white/10 p-2 overflow-hidden">
                        <div className="h-2 w-2 rounded-full bg-white/40 mb-2"></div>
                        <div className="text-[10px] text-gray-200 leading-tight break-words">{example.title}</div>
                        <div className="text-[9px] text-gray-400 break-words">{example.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <h4 className="text-xl mb-2">{service.title}</h4>
                <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed break-words">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-[10px] sm:text-xs text-gray-200 bg-white/10 border border-white/10 rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {isPopupOpen && activeService !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
                onClick={closePopup}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 20 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#0b0b14] p-6 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.div
                    className="absolute -top-10 -right-12 h-32 w-32 rounded-full bg-[#7C5CFF]/30 blur-3xl pointer-events-none"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-10 -left-12 h-32 w-32 rounded-full bg-[#FF7A1A]/30 blur-3xl pointer-events-none"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.7, 0.35] }}
                    transition={{ duration: 2.6, repeat: Infinity }}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Service Details</p>
                      <h4 className="text-2xl mb-2">{visualServices[activeService].title}</h4>
                      <p className="text-sm text-gray-300">{visualServices[activeService].details}</p>
                    </div>
                    <button
                      type="button"
                      className="text-sm text-gray-400 hover:text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        closePopup();
                      }}
                    >
                      Close
                    </button>
                  </div>

                  <div className={`mt-6 rounded-2xl border border-white/10 bg-gradient-to-br ${visualServices[activeService].accent} p-4`}>
                    <div className="text-xs text-gray-300 mb-3">Examples</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {visualServices[activeService].examples.map((example) => (
                        <div key={example.title} className="rounded-xl bg-white/10 border border-white/10 p-3">
                          <div className="text-xs text-white mb-1">{example.title}</div>
                          <div className="text-[11px] text-gray-300">{example.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {activeService !== null && (
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs sm:text-sm text-gray-300 break-words"
              >
                <span className="text-white">Selected:</span> {visualServices[activeService].title} — {visualServices[activeService].description}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7A1A]/20 to-[#7C5CFF]/20 px-4 py-2 rounded-full border border-[#FF7A1A]/30 mb-6">
              <Shield className="w-4 h-4 text-[#FFB15C]" />
              <span className="text-sm text-gray-200">Proven Process</span>
            </div>
            <h3 className="text-4xl mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">How We Work</h3>
            <p className="text-gray-400 text-lg">Clear steps and steady progress</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF7A1A]/30 via-[#7C5CFF]/30 to-[#20C6FF]/30"></div>

            {processSteps.map((step, index) => {
              const isSelected = selectedStep === index;
              return (
                <div key={index} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="relative"
                  >
                    <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 h-full min-h-[200px] flex flex-col ${
                      isSelected 
                        ? "border-white/40 shadow-lg shadow-white/10" 
                        : "border-white/10 hover:border-white/30"
                    }`}>
                      <motion.button
                        onClick={() => setSelectedStep(isSelected ? null : index)}
                        animate={{
                          scale: isSelected ? 1.1 : [1, 1.05, 1],
                          boxShadow: isSelected 
                            ? "0 0 20px rgba(124, 92, 255, 0.7)" 
                            : "0 0 12px rgba(255, 122, 26, 0.5)"
                        }}
                        transition={{
                          scale: {
                            duration: isSelected ? 0.3 : 2,
                            repeat: isSelected ? 0 : Infinity,
                            ease: "easeInOut"
                          },
                          boxShadow: {
                            duration: 0.3
                          }
                        }}
                        className="absolute -top-4 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF7A1A] to-[#7C5CFF] text-white flex items-center justify-center text-sm z-10 transition-all duration-300 hover:scale-110"
                      >
                        {step.number}
                      </motion.button>

                      <div className={`mt-8 mb-4 transition-colors ${
                        isSelected ? "text-[#FFD166]" : "text-[#FFB15C]"
                      }`}>
                        {step.icon}
                      </div>

                      <h4 className={`text-xl mb-2 transition-colors ${
                        isSelected ? "text-white" : "text-gray-100"
                      }`}>
                        {step.title}
                      </h4>

                      <AnimatePresence>
                        {isSelected && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm text-gray-300 leading-relaxed overflow-hidden mt-auto"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Service Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Pricing
          </h3>
          <p className="text-gray-400">Flexible plans based on scope</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 ${
                tier.popular
                  ? "border-white/40 shadow-lg shadow-white/10"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF7A1A] to-[#7C5CFF] text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-white/10 text-white">
                  {tier.icon}
                </div>
              </div>

              <h3 className="text-2xl mb-2">{tier.name}</h3>
              <p className="text-3xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Custom Quote
              </p>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {tier.description}
              </p>

              <div className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#69F0AE] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-full transition-all duration-300 ${
                  tier.popular
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                }`}
                onClick={() => onNavigate("contact")}
              >
                Get a Quote
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
