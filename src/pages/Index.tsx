import { Navbar } from "@/components/portfolio/Navbar";
import { SpaceBackground } from "@/components/portfolio/SpaceBackground";
import { Hero } from "@/components/portfolio/Hero";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Internships } from "@/components/portfolio/Internships";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Rithika Senthilkumar - Portfolio";
    const desc = "Portfolio of Rithika Senthilkumar  — full-stack developer. Education, skills, projects, internships, certifications and contact.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);
  }, []);

  return (
    <div className="min-h-screen relative">
      <SpaceBackground />
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Internships />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
