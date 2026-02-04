import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const [isBackgroundLive, setIsBackgroundLive] = useState(true);
  const lines = useMemo(
    () => [
      "// Hey, I'm Omar.",
      "// I am a sophomore at George Mason University.",
      "// Major: Computer Science.",
      "// I build clean, reliable software and AI systems.",
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
    const speed = 22;
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
    <section className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,26,0.18),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(124,92,255,0.18),transparent_40%),radial-gradient(circle_at_50%_70%,rgba(32,198,255,0.12),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:84px_84px]"></div>
      <div className={`absolute inset-0 opacity-60 ${isBackgroundLive ? "moving-web" : "static-web"}`}></div>

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

              <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">
                Turning Visual Dreams into Digital Reality
              </h1>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>intro.ts</span>
                  <span className="text-[#FFD166]">typing…</span>
                </div>
                <pre className="text-sm md:text-base text-gray-200 font-mono leading-relaxed whitespace-pre-wrap min-h-[170px]">
                  {typedText}
                  {!isDone && <span className="inline-block w-2 h-5 bg-[#FFD166] align-middle ml-1 animate-pulse" />}
                </pre>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 rounded-full px-8 shadow-lg shadow-white/10"
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
                    <button
                      type="button"
                      onClick={() => setIsBackgroundLive((prev) => !prev)}
                      className="text-xs text-gray-200 bg-white/10 border border-white/10 rounded-full px-3 py-1 hover:bg-white/20 transition-colors"
                      aria-pressed={!isBackgroundLive}
                    >
                      {isBackgroundLive ? "Pause background" : "Play background"}
                    </button>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0b0b14]">
                    <iframe
                      title="Leesburg VA Map"
                      className="w-full h-[300px] sm:h-[340px]"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-77.66%2C39.06%2C-77.47%2C39.18&layer=mapnik&marker=39.1157%2C-77.5636"
                      loading="lazy"
                    ></iframe>
                  </div>

                  <p className="text-xs text-gray-400 mt-3">
                    Drag to move the map or scroll to zoom.
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-300">Focus Mode</span>
                    <span className="text-xs text-gray-400">Click to switch</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {focusAreas.map((area, index) => (
                      <button
                        key={area.label}
                        type="button"
                        onClick={() => setActiveFocus(index)}
                        className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                          activeFocus === index
                            ? "bg-white text-black border-white"
                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        {area.label}
                      </button>
                    ))}
                  </div>

                  <motion.div
                    key={activeFocus}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-white/10 bg-[#0b0b14] p-4"
                  >
                    <p className="text-sm text-gray-200 mb-3">{focusAreas[activeFocus].summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {focusAreas[activeFocus].highlights.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] text-gray-200 bg-white/10 border border-white/10 rounded-full px-3 py-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
