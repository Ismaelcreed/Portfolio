"use client";
import { useEffect, useState } from 'react';
import { AudioProvider } from "./components/Animation/AudioContext";
import dynamic from 'next/dynamic';
import "./components/Animation/i18n";
import Loader from './components/Loader/Loader';

const HorizontalScroll = dynamic(
  () => import('./components/Hard/HardSkills.jsx'),
  { ssr: false, loading: () => <div className="min-h-screen" /> }
);

// Import dynamique pour tous les composants qui utilisent des API navigateur
const DynamicHero = dynamic(() => import('./components/Hero/Hero'), { ssr: false });
const DynamicAbout = dynamic(() => import('./components/About/About'), { ssr: false });
const DynamicProject = dynamic(() => import('./components/Project/Project'), { ssr: false });
const DynamicContact = dynamic(() => import('./components/Contact/Contact'), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Cette fonction ne s'exécute que côté client
    setIsClient(true);
    
    const checkResources = () => {
      try {
        const images = Array.from(document.images);
        const isEverythingLoaded = images.every(img => img.complete);
        return isEverythingLoaded;
      } catch {
        return false;
      }
    };

    const handleLoad = () => {
      if (checkResources()) {
        setIsLoading(false);
      }
    };

    // Vérifier si le document est déjà prêt
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Timeout de secours
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isClient || isLoading) {
    return <Loader />;
  }

  return (
    <main className="font-poppins overflow-x-hidden bg-white text-dark">
      <AudioProvider>
        <section id="home">
          <DynamicHero />
        </section>
        <section id="about">
          <DynamicAbout />
        </section>
        <section id="projects">
          <DynamicProject />
        </section>
        <section id="skills">
          <HorizontalScroll />
        </section>
        <section id="contact">
          <DynamicContact />
        </section>
      </AudioProvider>
    </main>
  );
}