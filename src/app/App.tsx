import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setTimeout(() => {
      const element = document.getElementById(page);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 10);
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden w-full">
      <ScrollProgress />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <div id="home">
        <Home onNavigate={handleNavigate} />
      </div>
      <div id="work">
        <Work onNavigate={handleNavigate} />
      </div>
      <div id="services">
        <Services onNavigate={handleNavigate} />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
