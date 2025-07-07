"use client"
import About from "./components/About/About"
import Hero from './components/Hero/Hero'
import Project from "./components/Project/Project"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"
import HorizontalScroll from "./components/Hard/HardSkills"
import "./components/Animation/i18n";
import {AudioProvider} from "./components/Animation/AudioContext";

export default function Home() {
  return (
    <main className="font-poppins overflow-x-hidden bg-white text-dark">
       <AudioProvider>
            <Hero/>
            <About/>
            <Project/>
            <HorizontalScroll/>
            <Skills/>
            <Contact/>
        </AudioProvider>
    </main>
  );
}
