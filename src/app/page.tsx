"use client";
import { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import HorizontalScroll from './components/Hard/HardSkills';
import { AudioProvider } from "./components/Animation/AudioContext";
import "./components/Animation/i18n";
import Loader from './components/Loader/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
    
    const checkResources = () => {
      const images = Array.from(document.images);
      const isEverythingLoaded = images.every(img => img.complete);
      
      if (isEverythingLoaded) {
        setIsLoading(false);
      }
    };

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const handleLoad = () => {
      checkResources();
      setIsLoading(false);
      clearTimeout(timeout);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    const interval = setInterval(checkResources, 300);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Ne rien afficher côté serveur
  if (!isClient) {
    return null;
  }

  if (isLoading) {
    return <Loader />;
  }

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