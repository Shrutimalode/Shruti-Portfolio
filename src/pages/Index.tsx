
import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Internship from "@/components/Internship";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Achievements from "@/components/Achievements";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const internshipRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation 
        onAboutClick={() => scrollToSection(aboutRef)}
        onInternshipClick={() => scrollToSection(internshipRef)}
        onExperienceClick={() => scrollToSection(experienceRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      
      <main>
        <section ref={heroRef}>
          <Hero />
        </section>
        
        <section ref={aboutRef}>
          <About />
        </section>
        
         <section ref={internshipRef}>
          <Internship />
        </section>

        <section ref={projectsRef}>
          <Projects />
        </section>

        <section ref={experienceRef}>
          <Experience />
        </section>

        <section>
          <Achievements />
        </section>
        
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
