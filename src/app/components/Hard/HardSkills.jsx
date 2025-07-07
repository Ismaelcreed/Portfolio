"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const sections = gsap.utils.toArray(".section");
    
    // Calculer la largeur totale du contenu
    const totalWidth = sections.length * window.innerWidth;
    
    // Définir la largeur du conteneur
    gsap.set(container, { width: totalWidth });

    // Animation principale du défilement horizontal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.parentNode, // Utiliser le parent comme trigger
        start: "top top",
        end: () => `+=${totalWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.to(container, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none"
    });

    sections.forEach((section) => {
      gsap.fromTo(section,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: section,
            containerAnimation: tl,
            start: "left center",
            end: "right center",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Nettoyage
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="container mx-auto overflow-hidden h-screen w-screen min-w-full">-
      <div
        ref={scrollContainerRef}
        className="scroll-container flex h-full relative w-full"
      >
     
     <div className="section flex-none w-screen h-full relative text-[#214a72] flex justify-center items-center text-2xl snap-start">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/emihack.jpeg)', filter: 'blur(1.5px)' }}
      ></div>

      {/* Contenu (texte par-dessus l'image) */}
      <div className="z-10 text-center justify-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Participation à l'EMIhack 3.0
        </motion.h2>

        {/* Animation sur le texte */}
        <motion.p
          className="text-xl text-center mb-4 max-w-2xl mx-auto px-4 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🚀 Cet événement est organisé chaque année par l'Emitech.
          L'EMIHACK 3.0 est une compétition ouverte à tous les étudiants de l'EMIT,
          organisée autour de trois principaux concours : Dev, Algo, et Cybersec. 🚀
        </motion.p>

        {/* Animation sur l'image */}
        <motion.div
          className="w-40 h-40 mx-auto mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/emitech.jpg"
            alt="emitech"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
          />
        </motion.div>
      </div>
    </div>

        <div className="section flex-none w-screen h-full bg-green-500 text-white flex justify-center items-center text-2xl snap-start">
          Section 2
        </div>
        <div className="section flex-none w-screen h-full bg-red-500 text-white flex justify-center items-center text-2xl snap-start">
          Section 3
        </div>
        <div className="section flex-none w-screen h-full bg-purple-500 text-white flex justify-center items-center text-2xl snap-start">
          Section 4
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;