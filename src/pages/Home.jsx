import React from "react";

import Navigation from "../components/business/Navigation";
import Hero from "../components/business/Hero";
import About from "../components/business/About";
import Solutions from "../components/business/Solutions";
import Contact from "../components/business/Contact";
import Footer from "../components/business/Footer";

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70; // Adjust for fixed header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white text-slate-800 font-sans">
      <Navigation scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}