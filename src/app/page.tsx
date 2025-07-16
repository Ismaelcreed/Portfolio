"use client";
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import HorizontalScroll from './components/Hard/HardSkills';
import { AudioProvider } from "./components/Animation/AudioContext";
import "./components/Animation/i18n";



export default function Home() {
  return (
     <main className="font-poppins overflow-x-hidden bg-white text-dark">
      <AudioProvider>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="skills">
          <HorizontalScroll />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </AudioProvider>
    </main>
  );
}