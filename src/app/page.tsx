// app/page.tsx
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
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    // Vérification que toutes les ressources sont chargées
    const checkResources = () => {
      const images = Array.from(document.images);
      const isEverythingLoaded = images.every(img => img.complete);
      
      if (isEverythingLoaded) {
        setResourcesLoaded(true);
      }
    };

    // Timeout de secours (max 3 secondes)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Écouteur d'événement pour le chargement complet de la page
    window.addEventListener('load', () => {
      checkResources();
      setIsLoading(false);
      clearTimeout(timeout);
    });

    // Vérification périodique des ressources
    const interval = setInterval(checkResources, 300);

    // Nettoyage
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      window.removeEventListener('load', () => {});
    };
  }, []);

  // Cache le loader une fois que tout est prêt
  useEffect(() => {
    if (resourcesLoaded) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Petit délai pour l'animation de disparition
      return () => clearTimeout(timer);
    }
  }, [resourcesLoaded]);

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