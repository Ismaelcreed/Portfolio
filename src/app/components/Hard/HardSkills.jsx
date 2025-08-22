"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {

    if (typeof window === 'undefined' || !ScrollTrigger || !scrollContainerRef.current) {
      return;
    }
    const container = scrollContainerRef.current;
    const sections = gsap.utils.toArray(".section");

    // Calculer la largeur totale en fonction du nombre de sections
    const totalWidth = sections.length * window.innerWidth;

    // Définir la largeur du conteneur
    gsap.set(container, { 
      width: totalWidth,
      overflow: "hidden"
    });

    // Animation principale du défilement horizontal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.parentNode,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    tl.to(container, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none"
    });

    // Animation des sections
    sections.forEach((section, index) => {
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
            toggleActions: "play none none reverse",
            id: `section-${index}`
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
    <div className="parent-container relative w-[6000px] h-screen overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="scroll-container flex h-full relative"
      >
        {/* Section 1 - EMIhack 3.0 */}
        <div className="section flex-none w-screen h-full relative text-[#214a72] dark:text-blue-200 flex justify-center items-center snap-start">
          {/* Background avec image floutée */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(/images/emihack.jpeg)', 
              filter: 'blur(1.5px) brightness(0.8) dark:brightness(0.3)' 
            }}
          ></div>
          
          {/* Overlay dark mode */}
          <div className="absolute inset-0 bg-black/0 dark:bg-black/50"></div>

          {/* Grille de fond animée */}
          <div className="absolute inset-0 opacity-20 dark:opacity-30">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid1" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#214a72" strokeWidth="1" opacity="0.3" className="dark:stroke-blue-300" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid1)" />
            </svg>
          </div>

          {/* Cercles SVG décoratifs */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <circle cx="10%" cy="20%" r="50" fill="none" stroke="#214a72" strokeWidth="2" opacity="0.3" className="dark:stroke-blue-300">
              <animate attributeName="r" values="50;70;50" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="90%" cy="80%" r="30" fill="rgba(33, 74, 114, 0.1)" opacity="0.5" className="dark:fill-blue-300/20">
              <animate attributeName="cy" values="80%;75%;80%" dur="3s" repeatCount="indefinite" />
            </circle>
            <rect x="5%" y="70%" width="40" height="40" fill="none" stroke="#214a72" strokeWidth="1" opacity="0.4" transform="rotate(45 5% 70%)" className="dark:stroke-blue-300">
              <animateTransform attributeName="transform" type="rotate" values="45 5% 70%;90 5% 70%;45 5% 70%" dur="6s" repeatCount="indefinite" />
            </rect>
          </svg>

          {/* Contenu principal */}
          <div className="z-10 text-center justify-center relative px-4 sm:px-6 lg:px-8 w-full">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#214a72] dark:text-blue-200 drop-shadow-lg"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Participation à l'EMIhack 3.0
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-center mb-4 sm:mb-6 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed text-[#214a72] dark:text-blue-200 drop-shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              🚀 Cet événement est organisé chaque année par l'Emitech.
              L'EMIHACK 3.0 est une compétition ouverte à tous les étudiants de l'EMIT,
              organisée autour de trois principaux concours : Dev, Algo, et Cybersec. 🚀
            </motion.p>

            <motion.div
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/images/emitech.jpg"
                alt="emitech"
                className="w-full h-full object-cover rounded-full border-2 sm:border-4 border-white dark:border-gray-300 shadow-2xl"
              />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="bg-blue-900 dark:bg-blue-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">Développement</span>
              <span className="bg-blue-900 dark:bg-blue-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">Algorithmes</span>
              <span className="bg-blue-900 dark:bg-blue-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">Cybersécurité</span>
            </motion.div>
          </div>
        </div>

        {/* Section 2 - Accès Development Hub */}
        <div className="section flex-none w-screen h-full relative text-[#214a72] dark:text-blue-200 flex justify-center items-center snap-start">
          {/* Background avec image floutée */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(/images/acces_Hack.jpeg)', 
              filter: 'blur(1.5px) brightness(0.8) dark:brightness(0.3)' 
            }}
          ></div>
          
          {/* Overlay dark mode */}
          <div className="absolute inset-0 bg-black/0 dark:bg-black/50"></div>

          {/* Grille de fond animée */}
          <div className="absolute inset-0 opacity-20 dark:opacity-30">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#214a72" strokeWidth="1" opacity="0.3" className="dark:stroke-blue-300" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid2)" />
            </svg>
          </div>

          {/* Éléments décoratifs animés */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <circle cx="15%" cy="25%" r="60" fill="none" stroke="#214a72" strokeWidth="2" opacity="0.3" className="dark:stroke-blue-300">
              <animate attributeName="r" values="60;80;60" dur="5s" repeatCount="indefinite" />
            </circle>
            <rect x="80%" y="20%" width="50" height="50" fill="rgba(33, 74, 114, 0.1)" transform="rotate(30 80% 20%)" className="dark:fill-blue-300/20">
              <animateTransform attributeName="transform" type="rotate" values="30 105 70;390 105 70;30 105 70" dur="7s" repeatCount="indefinite" />
            </rect>
          </svg>

          {/* Contenu principal */}
          <div className="z-10 text-center justify-center relative px-4 sm:px-6 lg:px-8 w-full">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-blue-950 dark:text-blue-200 drop-shadow-lg"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              3ème place à l'Hackathon Accès Development Hub
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-center mb-4 sm:mb-6 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed text-blue-950 dark:text-blue-200 drop-shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              🏆 Hackathon organisé par Accès Banque Fianarantsoa pour promouvoir 
              l'innovation technologique dans le secteur bancaire. 
              Notre équipe a développé une solution innovante pour la digitalisation 
              des services financiers. 🏆
            </motion.p>

            <motion.div
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/images/Acces_Banque.jpeg"
                alt="Accès Banque"
                className="w-full h-full object-cover rounded-full border-2 sm:border-4 border-white dark:border-gray-300 shadow-2xl"
              />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="bg-blue-900 dark:bg-blue-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">Innovation</span>
              <span className="bg-blue-900 dark:bg-blue-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">FinTech</span>
              <span className="bg-blue-900 dark:bg-blue-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">Solution bancaire</span>
            </motion.div>
          </div>
        </div>

        {/* Section 3 - Projets & Développement */}
        <div className="section flex-none w-screen h-full bg-white dark:bg-gray-900 text-blue-900 dark:text-blue-100 flex justify-center items-center snap-start relative overflow-hidden">
          {/* Fond géométrique hexagonal */}
          <div className="absolute inset-0 opacity-10 dark:opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexagons" width="60" height="60" patternUnits="userSpaceOnUse">
                  <polygon points="30,5 50,20 50,40 30,55 10,40 10,20" fill="none" stroke="#3b82f6" strokeWidth="1" className="dark:stroke-blue-400" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>

          {/* Éléments SVG décoratifs */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <circle cx="20%" cy="30%" r="80" fill="rgba(59,130,246,0.1)" className="dark:fill-blue-400/20">
              <animate attributeName="cy" values="30%;25%;30%" dur="5s" repeatCount="indefinite" />
            </circle>
            <polygon points="85,15 95,35 85,55 65,55 55,35 65,15" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.3" transform="translate(80% 60%)" className="dark:stroke-blue-400">
              <animateTransform attributeName="transform" type="rotate" values="0 85 35;360 85 35" dur="8s" repeatCount="indefinite" />
            </polygon>
            <rect x="10%" y="75%" width="60" height="60" fill="rgba(59,130,246,0.05)" transform="rotate(45 10% 75%)" className="dark:fill-blue-400/10">
              <animate attributeName="width" values="60;80;60" dur="4s" repeatCount="indefinite" />
            </rect>
          </svg>

          {/* Contenu */}
          <div className="z-10 text-center max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-blue-800 dark:text-blue-200"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Projets & Développement
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed text-blue-700 dark:text-blue-300 max-w-4xl mx-auto"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Passionné par la création d'applications web modernes et innovantes.
              Je développe des solutions complètes avec des technologies de pointe
              comme React, Node.js, et des modèles intelligents.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8 px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-700 rounded-lg p-4 sm:p-6 shadow-md text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">Frontend</h3>
                <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">React, Next.js, Sass, Tailwind CSS, CSS</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-700 rounded-lg p-4 sm:p-6 shadow-md text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">Backend</h3>
                <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">Node.js, Python, Nest, Express, TypeScript</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-700 rounded-lg p-4 sm:p-6 shadow-md text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">Database</h3>
                <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">MongoDB, PostgreSQL, MySQL</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-700 rounded-lg p-4 sm:p-6 shadow-md text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">Web Architecture</h3>
                <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">API RestFull, GraphQL</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 4 - Compétences & Expertise */}
        <div className="section flex-none w-screen h-full bg-gradient-to-br from-blue-500 via-blue-900 to-blue-900 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] text-white flex justify-center items-center snap-start relative overflow-hidden">
          {/* Fond avec triangles */}
          <div className="absolute inset-0 opacity-15 dark:opacity-25">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="triangles" width="100" height="100" patternUnits="userSpaceOnUse">
                  <polygon points="50,10 90,90 10,90" fill="none" stroke="white" strokeWidth="1" className="dark:stroke-blue-300" />
                  <polygon points="25,50 75,50 50,25" fill="rgba(255,255,255,0.1)" className="dark:fill-blue-400/20" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#triangles)" />
            </svg>
          </div>

          {/* Éléments géométriques animés */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <circle cx="15%" cy="20%" r="40" fill="none" stroke="white" strokeWidth="3" opacity="0.4" className="dark:stroke-blue-300">
              <animate attributeName="r" values="40;60;40" dur="3s" repeatCount="indefinite" />
            </circle>
            <polygon points="0,0 40,20 0,40" fill="rgba(255,255,255,0.1)" transform="translate(85% 25%)" className="dark:fill-blue-400/20">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
            </polygon>
            <rect x="5%" y="80%" width="50" height="50" fill="none" stroke="white" strokeWidth="2" opacity="0.3" className="dark:stroke-blue-300">
              <animateTransform attributeName="transform" type="rotate" values="0 30 105;45 30 105;0 30 105" dur="4s" repeatCount="indefinite" />
            </rect>
          </svg>

          <div className="z-10 text-center max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Compétences & Expertise
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Une expertise technique solide combinée à une passion pour l'innovation
              et la résolution de problèmes complexes. Toujours à la recherche de
              nouvelles technologies et méthodes de développement.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {['HTML5', 'CSS3', 'Sass', 'Tailwindcss', 'JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 'AI/ML', 'Tensorflow/Keras', 'SkLearn', 'Linear regression model', 'Pandas', 'MySQL', 'MongoDB', 'PostgreSQL', 'Git', 'Github', 'VSCode', 'JupyterNoteBook', 'Google Colab'].map((skill, index) => (
                <span key={index} className="bg-white/20 dark:bg-blue-400/20 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              💡 "L'innovation distingue un leader d'un suiveur" - Steve Jobs
            </motion.div>
          </div>
        </div>

        {/* Section 5 - Contact & Collaboration */}
        <div className="section flex-none w-screen h-full bg-white dark:bg-gray-900 text-blue-900 dark:text-blue-100 flex justify-center items-center snap-start relative overflow-hidden">
          {/* Fond avec cercles concentriques */}
          <div className="absolute inset-0 opacity-10 dark:opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circles" width="120" height="120" patternUnits="userSpaceOnUse">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#1e3a8a" strokeWidth="1" className="dark:stroke-blue-400" />
                  <circle cx="60" cy="60" r="30" fill="none" stroke="#1e3a8a" strokeWidth="1" className="dark:stroke-blue-400" />
                  <circle cx="60" cy="60" r="10" fill="#1e3a8a" opacity="0.3" className="dark:fill-blue-400" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circles)" />
            </svg>
          </div>

          {/* Éléments décoratifs animés */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <circle cx="25%" cy="25%" r="100" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.2" className="dark:stroke-blue-400">
              <animate attributeName="r" values="100;120;100" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="75%" cy="75%" r="60" fill="rgba(59,130,246,0.1)" className="dark:fill-blue-400/20">
              <animate attributeName="r" values="60;80;60" dur="3s" repeatCount="indefinite" />
            </circle>
            <polygon points="20,20 40,20 30,40" fill="#3b82f6" opacity="0.2" transform="translate(80% 20%)" className="dark:fill-blue-400">
              <animateTransform attributeName="transform" type="rotate" values="0 30 27;360 30 27" dur="6s" repeatCount="indefinite" />
            </polygon>
          </svg>

          {/* Contenu principal */}
          <div className="z-10 text-center max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-blue-800 dark:text-blue-200"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Contact & Collaboration
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed text-blue-700 dark:text-blue-300 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Prêt à collaborer sur des projets innovants et à relever de nouveaux défis.
              Contactez-moi pour discuter de vos idées et créer ensemble quelque chose d'extraordinaire.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8 px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-700 rounded-lg p-4 sm:p-6 shadow-md text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">Services</h3>
                <ul className="space-y-2 text-blue-700 dark:text-white text-sm">
                  <li>• Développement d'applications web</li>
                  <li>• Consultation en IA et Machine Learning</li>
                </ul>
              </div>

              <div className="bg-blue-50 border dark:bg-blue-900/30 dark:border-blue-700 border-blue-100 rounded-lg p-6 shadow-md text-left">
                <h3 className="text-2xl font-bold text-blue-800 mb-4 dark:text-blue-200">Disponibilité</h3>
                <p className="text-sm text-blue-700 dark:text-white">
                  Disponible pour des projets freelance,
                  des collaborations à long terme et
                  des opportunités d'emploi stimulantes.
                </p>
                <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Disponible immédiatement
                </div>
              </div>
            </motion.div>

            <motion.div
              className="text-lg font-medium text-blue-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              📧razafindratsimbabrunoismael@gmail.com
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;