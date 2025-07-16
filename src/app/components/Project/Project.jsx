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
    darkColor: "from-blue-600 to-purple-700",
    techno: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "MongoDB", icon: "🍃" },
      { name: "GraphQL", icon: "🔗" },
      { name: "NestJS", icon: "🧥" },
    ],
  },
  {
    id: 2,
    project: "Gestion de vote côté administrateur",
    desc: "Un système de gestion des élections permettant aux administrateurs de créer, suivre et analyser les résultats des votes.",
    img: "/images/project/vote_project.png",
    category: "Admin Panel",
    color: "from-green-500 to-teal-600",
    darkColor: "from-green-600 to-teal-700",
    techno: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "PostgreSQL", icon: "🐐" },
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
    darkColor: "from-red-600 to-pink-700",
    techno: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Spring", icon: "🌱" },
      { name: "PostgreSQL", icon: "🐐" },
      { name: "Leaflet", icon: "🗽️" },
    ],
  },
  {
    id: 4,
    project: "Interface de chatting",
    desc: "Une interface de messagerie en temps réel avec envoi de messages, d'images et notifications instantanées.",
    img: "/images/project/empty.png",
    category: "Mobile App",
    color: "from-orange-500 to-yellow-600",
    darkColor: "from-orange-600 to-yellow-700",
    techno: [
      { name: "JavaScript", icon: "⚡" },
      { name: "React-native", icon: "⚛️" },
      { name: "Expo", icon: "📱" },
    ],
  },
  {
    id: 5,
    project: "Edden App",
    desc: "Site vitrine dédié aux fantaisies des artefacts et mythes antiques, offrant une expérience immersive dans l'univers des légendes anciennes.",
    img: "/images/project/Edden.png",
    category: "Showcase",
    color: "from-indigo-500 to-purple-600",
    darkColor: "from-indigo-600 to-purple-700",
    techno: [
      { name: "ReactJS", icon: "⚛️" },
      { name: "Vite", icon: "⚡" },
      { name: "NestJS", icon: "🧥" },
      { name: "REST API", icon: "🔗" },
      { name: "JavaScript", icon: "⚡" },
      { name: "CSS3", icon: "🎨" },
    ],
  },
  {
    id: 6,
    project: "Médical Prédiction",
    desc: "Système de prédiction médicale utilisant l'intelligence artificielle pour analyser les données de santé et fournir des prédictions précises.",
    img: "/images/project/Medical.png",
    category: "AI/ML",
    color: "from-cyan-500 to-blue-600",
    darkColor: "from-cyan-600 to-blue-700",
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
    img: "/images/project/Diet.png",
    category: "Health & Wellness",
    color: "from-emerald-500 to-green-600",
    darkColor: "from-emerald-600 to-green-700",
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

const Project = () => {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTitleVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden transition-colors duration-300 bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]">
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400 bg-clip-text text-transparent">
            MES PROJETS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full my-4" />
          <p className="text-lg text-gray-600 dark:text-white max-w-2xl mx-auto">
            Découvrez mes réalisations techniques et créatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectItems.map((project, index) => (
            <div
              key={project.id}
              className="transform transition-all h-full duration-700 translate-y-0 opacity-100"
            >
              <div className="relative group">
                <div className={`relative rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 bg-white dark:bg-gray-800`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} dark:${project.darkColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.color} dark:${project.darkColor} z-10`}>
                    {project.category}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                    <div className="relative group/image">
                      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gray-700 h-64 flex items-center justify-center">
                        {project.img !== "/images/project/empty.png" ? (
                          <img
                            src={project.img}
                            alt={project.project}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover/image:scale-110"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                            <svg className="w-16 h-16 mb-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span className="text-sm font-medium">Projet en cours</span>
                          </div>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-black dark:bg-white opacity-0 group-hover/image:opacity-20 transition-opacity duration-300 rounded-xl" />
                    </div>

                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {project.project}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.desc}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"></span>
                          Technologies utilisées
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techno.map((tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="group/tech flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105 bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white dark:bg-gray-700 dark:text-gray-200"
                            >
                              <span className="text-sm">{tech.icon}</span>
                              <span>{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent dark:via-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} dark:${project.darkColor} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
