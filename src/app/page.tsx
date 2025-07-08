"use client";
import dynamic from 'next/dynamic';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import HorizontalScroll from './components/Hard/HardSkills';
import { AudioProvider } from "./components/Animation/AudioContext";
import "./components/Animation/i18n";

// Chargement dynamique pour éviter les problèmes SSR
const FloatingCursor = dynamic(
  () => import('./components/FloatingCursor/FloatingCursor'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="font-poppins overflow-x-hidden bg-white text-dark">
      {/* <FloatingCursor /> */}
      <AudioProvider>
        <Hero />
        <About />
        <Project />
        <HorizontalScroll />
        {/* <Skills /> */}
        <Contact />
      </AudioProvider>
    </main>
  );
}