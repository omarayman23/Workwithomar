import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { ShaderAnimation } from "../components/ui/shader-animation";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const lines = useMemo(
    () => [
      "// Hey, I'm Omar.",
      "// I'm a junior at George Mason University and a Web Developer Intern.",
      "// Major: Computer Science.",
      "// I build clean, reliable software and AI systems with 2+ years of experience in the field.",
    ],
    []
  );

  const focusAreas = [
    {
      label: "AI Systems",
      summary: "Smart features that automate work and make products feel intelligent.",
      highlights: ["RAG search", "Agent workflows", "Automation"],
    },
    {
      label: "Full-Stack",
      summary: "Clean UI and solid engineering that works fast and scales well.",
      highlights: ["React + TS", "APIs", "Performance"],
    },
    {
      label: "Product Design",
      summary: "Simple, modern design that helps users finish tasks quickly.",
      highlights: ["UX flows", "Prototypes", "Usability"],
    },
  ];

  const [activeFocus, setActiveFocus] = useState(0);

  const fullText = useMemo(() => lines.join("\n"), [lines]);
  const [typedText, setTypedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const speed = 40;
    const interval = setInterval(() => {
      index += 1;
      setTypedText(fullText.slice(0, index));
      if (index >= fullText.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="min-h-screen text-white relative overflow-hidden">
      <ShaderAnimation />
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-[#FFB15C]" />
                <span className="text-sm text-[#FFD6A5]">About Me</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight">
                Turning Visual Dreams into Digital Reality
              </h1>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>intro.ts</span>
                  {!isDone && <span className="text-[#FFD166]">typing…</span>}
                </div>
                <pre className="text-sm md:text-base text-gray-200 font-mono leading-relaxed whitespace-pre-wrap min-h-[170px]">
                  {typedText}
                  {!isDone && <span className="inline-block w-2 h-5 bg-[#FFD166] align-middle ml-1 animate-pulse" />}
                </pre>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white rounded-full px-8 shadow-lg shadow-white/10 transition-colors duration-300 border border-transparent hover:border-white/30"
                  onClick={() => onNavigate("work")}
                >
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/20 text-white bg-transparent hover:bg-white hover:text-black rounded-full px-8 transition-colors duration-300"
                  onClick={() => onNavigate("contact")}
                >
                  Start a Project
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="relative"
            >
              <div className="space-y-6">
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4 gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-[#FFB15C]" />
                      Leesburg, VA
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0b0b14] relative h-[300px] sm:h-[340px]">
                    <div className="absolute top-0 left-0 w-full h-[calc(100%+50px)] pointer-events-none">
                      <iframe
                        title="Leesburg VA Map"
                        className="w-full h-full"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-77.66%2C39.06%2C-77.47%2C39.18&layer=mapnik&marker=39.1157%2C-77.5636"
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-3">
                    Drag to move the map or scroll to zoom.
                  </p>
                </div>


              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
