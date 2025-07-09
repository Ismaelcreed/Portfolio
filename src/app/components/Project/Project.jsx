"use client";
import React, { useState, useEffect } from 'react';

const projectItems = [
  {
    id: 1,
    project: "Gestion des Infractions routières",
    desc: "Une application permettant de suivre, enregistrer et gérer les infractions routières commises avec une interface moderne.",
    img: "/images/project/AGIR.png",
    category: "Web App",
    color: "from-blue-500 to-purple-600",
    techno: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "MongoDB", icon: "🍃" },
      { name: "GraphQL", icon: "🔗" },
      { name: "NestJS", icon: "🦅" },
    ],
  },
  {
    id: 2,
    project: "Gestion de vote côté administrateur",
    desc: "Un système de gestion des élections permettant aux administrateurs de créer, suivre et analyser les résultats des votes.",
    img: "/images/project/vote_project.png",
    category: "Admin Panel",
    color: "from-green-500 to-teal-600",
    techno: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Express", icon: "🚀" },
    ],
  },
  {
    id: 3,
    project: "Préstation médicale",
    desc: "Une plateforme facilitant la gestion des consultations, prescriptions et dossiers médicaux des patients en milieu hospitalier.",
    img: "/images/project/medical_project.png",
    category: "Healthcare",
    color: "from-red-500 to-pink-600",
    techno: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Spring", icon: "🌱" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Leaflet", icon: "🗺️" },
    ],
  },
  {
    id: 4,
    project: "Interface de chatting",
    desc: "Une interface de messagerie en temps réel avec envoi de messages, d'images et notifications instantanées.",
    img: "/images/project/empty.png",
    category: "Mobile App",
    color: "from-orange-500 to-yellow-600",
    techno: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Expo", icon: "📱" },
    ],
  },
  {
    id: 5,
    project: "Edden App",
    desc: "Site vitrine dédié aux fantaisies des artefacts et mythes antiques, offrant une expérience immersive dans l'univers des légendes anciennes.",
    img: "/images/project/empty.png",
    category: "Showcase",
    color: "from-indigo-500 to-purple-600",
    techno: [
      { name: "ReactJS", icon: "⚛️" },
      { name: "Vite", icon: "⚡" },
      { name: "NestJS", icon: "🦅" },
      { name: "REST API", icon: "🔗" },
      { name: "JavaScript", icon: "⚡" },
      { name: "CSS3", icon: "🎨" },
    ],
  },
  {
    id: 6,
    project: "Médical Prédiction",
    desc: "Système de prédiction médicale utilisant l'intelligence artificielle pour analyser les données de santé et fournir des prédictions précises.",
    img: "/images/project/empty.png",
    category: "AI/ML",
    color: "from-cyan-500 to-blue-600",
    techno: [
      { name: "ReactJS", icon: "⚛️" },
      { name: "Vite", icon: "⚡" },
      { name: "Flask", icon: "🐍" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "Sklearn", icon: "🔬" },
      { name: "Pandas", icon: "🐼" },
      { name: "Keras", icon: "🤖" },
      { name: "NumPy", icon: "🔢" },
    ],
  },
  {
    id: 7,
    project: "Diet Recommender",
    desc: "Application intelligente de recommandation diététique qui suggère des régimes et plats personnalisés selon vos objectifs de perte ou de prise de poids.",
    img: "/images/project/empty.png",
    category: "Health & Wellness",
    color: "from-emerald-500 to-green-600",
    techno: [
      { name: "ReactTS", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Vite", icon: "⚡" },
      { name: "Flask", icon: "🐍" },
      { name: "NumPy", icon: "🔢" },
      { name: "Sklearn", icon: "🔬" },
    ],
  },
];

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="w-full h-full" viewBox="0 0 1000 1000">
      {/* Particules animées */}
      {[...Array(20)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 1000}
          cy={Math.random() * 1000}
          r={Math.random() * 3 + 1}
          fill="rgba(99, 102, 241, 0.3)"
          className="animate-pulse"
          style={{
            animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Lignes de connexion animées */}
      <g className="opacity-20">
        {[...Array(5)].map((_, i) => (
          <path
            key={i}
            d={`M${Math.random() * 1000},${Math.random() * 1000} Q${Math.random() * 1000},${Math.random() * 1000} ${Math.random() * 1000},${Math.random() * 1000}`}
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{
              animation: `draw ${Math.random() * 5 + 3}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </g>
      
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const CodeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"/>
  </svg>
);

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`transform transition-all h-full duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        {/* Carte principale */}
        <div className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 ${
          isHovered ? 'scale-105' : ''
        }`}>
          {/* Gradient de fond animé */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
          
          {/* Badge catégorie */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.color} z-10`}>
            {project.category}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Section image */}
            <div className="relative group/image">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 h-64 flex items-center justify-center">
                {project.img !== "/images/project/empty.png" ? (
                  <img
                    src={project.img}
                    alt={project.project}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover/image:scale-110"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <svg className="w-16 h-16 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-sm font-medium">Projet en cours</span>
                  </div>
                )}
              </div>
              
              {/* Effet de survol */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover/image:opacity-20 transition-opacity duration-300 rounded-xl" />
            </div>

            {/* Section contenu */}
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {project.project}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {project.desc}
              </p>

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techno.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group/tech flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-sm">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ligne décorative animée */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>

        {/* Effet de lueur */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`} />
      </div>
    </div>
  );
};

const Project = () => {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTitleVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Arrière-plan animé */}
      <AnimatedBackground />
      
      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* En-tête avec animation */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="relative">
              <CodeIcon className="w-12 h-12 text-blue-600 animate-pulse" />
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-30 animate-ping" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-600 bg-clip-text text-transparent md:text-2xl">
              MES PROJETS
            </h1>
            <div className="relative">
              <CodeIcon className="w-12 h-12 text-purple-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-0 bg-purple-600 rounded-full blur-md opacity-30 animate-ping" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations techniques et créatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectItems.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>

      {/* Styles CSS personnalisés */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes draw {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Project;