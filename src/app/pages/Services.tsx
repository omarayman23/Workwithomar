import { motion } from "motion/react";
import {
  CheckCircle,
  Lightbulb,
  Palette,
  Code,
  Rocket,
  Shield,
  DollarSign,
  Wallet,
  Gift,
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

const serviceTiers: ServiceTier[] = [
  {
    name: "MVP Development",
    description: "Perfect for startups looking to validate ideas quickly",
    icon: <Lightbulb className="w-6 h-6" />,
    features: [
      "User research & wireframing",
      "High-fidelity mockups",
      "Interactive prototype",
      "Design system basics",
      "Multiple revision rounds",
    ],
  },
  {
    name: "Full-Stack Solutions",
    description: "End-to-end product development from design to deployment",
    icon: <Code className="w-6 h-6" />,
    popular: true,
    features: [
      "Complete UI/UX design",
      "Frontend & Backend development",
      "API integration & security",
      "Database architecture",
      "Cloud deployment",
      "Post-launch support",
    ],
  },
  {
    name: "AI & Agent Systems",
    description: "Intelligent systems with autonomous capabilities",
    icon: <Rocket className="w-6 h-6" />,
    features: [
      "Multi-agent orchestration",
      "RAG implementation",
      "LLM fine-tuning",
      "Predictive ML pipelines",
      "Real-time inference",
    ],
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep dive into your goals, target audience, and competitive landscape",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes, prototypes, and high-fidelity designs with your feedback",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Clean, scalable code with regular updates and transparent communication",
    icon: <Code className="w-8 h-8" />,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Deployment, testing, and handoff with documentation and support",
    icon: <Rocket className="w-8 h-8" />,
  },
];

const paymentOptions = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Split Payment",
    description: "50% upfront, 50% upon completion",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Free Demo",
    description: "Complimentary demo for interested clients",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Flexible Options",
    description: "Crypto, wire transfer, or suggest your preferred method",
  },
];

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Custom solutions tailored to your project needs. Every project is unique, and pricing reflects the scope and complexity.
          </p>
        </motion.div>

        {/* Service Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {serviceTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 ${
                tier.popular
                  ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400">
                  {tier.icon}
                </div>
              </div>

              <h3 className="text-2xl mb-2">{tier.name}</h3>
              <p className="text-3xl mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Custom Quote
              </p>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {tier.description}
              </p>

              <div className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-full transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/30 text-white"
                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
                onClick={() => onNavigate("contact")}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Payment Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4">Payment Options</h3>
            <p className="text-gray-400 text-lg">
              Flexible payment structures designed around your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 w-fit mb-4">
                  {option.icon}
                </div>
                <h4 className="text-xl mb-2">{option.title}</h4>
                <p className="text-gray-400 text-sm">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-purple-500/20 mb-6">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-200">Proven Process</span>
            </div>
            <h3 className="text-4xl mb-4">How We Work Together</h3>
            <p className="text-gray-400 text-lg">
              A transparent, collaborative approach that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20"></div>

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm z-10 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-4 text-purple-400 group-hover:text-purple-300 transition-colors">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h4 className="text-xl mb-2 group-hover:text-purple-200 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
