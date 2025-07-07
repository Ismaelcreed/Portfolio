"use client";
import React from 'react';
import { FaCode } from "react-icons/fa";

const projectItems = [
  {
    id: 1,
    project: "Gestion des Infractions routières",
    desc: "Une application permettant de suivre, enregistrer et gérer les infractions routières commises avec une interface moderne.",
    img: "/images/project/AGIR.png",
    techno: [
      "/images/techno/html5.svg",
      "/images/techno/css.svg",
      "/images/techno/javascript.svg",
      "/images/techno/antdesign.svg",
      "/images/techno/react.svg",
      "/images/techno/vite.svg",
      "/images/techno/nestjs.svg",
      "/images/techno/mongodb.svg",
      "/images/techno/graphql.svg",
      "/images/techno/typeorm.svg",
      "/images/techno/leaflet.svg",
      "/images/techno/nodedotjs.svg",
    ],
  },
  {
    id: 2,
    project: "Gestion de vote côté administrateur",
    desc: "Un système de gestion des élections permettant aux administrateurs de créer, suivre et analyser les résultats des votes.",
    img: "/images/project/vote_project.png",
    techno: [
      "/images/techno/html5.svg",
      "/images/techno/css.svg",
      "/images/techno/javascript.svg",
      "/images/techno/mui.svg",
      "/images/techno/react.svg",
      "/images/techno/vite.svg",
      "/images/techno/nodedotjs.svg",
      "/images/techno/express.svg",
      "/images/techno/postgresql.svg",
    ],
  },
  {
    id: 3,
    project: "Préstation médicale",
    desc: "Une plateforme facilitant la gestion des consultations, prescriptions et dossiers médicaux des patients en milieu hospitalier.",
    img: "/images/project/medical_project.png",
    techno: [
      "/images/techno/html5.svg",
      "/images/techno/css.svg",
      "/images/techno/javascript.svg",
      "/images/techno/antdesign.svg",
      "/images/techno/react.svg",
      "/images/techno/vite.svg",
      "/images/techno/spring.svg",
      "/images/techno/postgresql.svg",
      "/images/techno/leaflet.svg",
    ],
  },
  {
    id: 4,
    project: "Interface de chatting",
    desc: "Une interface de messagerie en temps réel avec envoi de messages, d’images et notifications instantanées.",
    img: "/images/project/empty.png",
    techno: [
      "/images/techno/html5.svg",
      "/images/techno/css.svg",
      "/images/techno/javascript.svg",
      "/images/techno/mui.svg",
      "/images/techno/react.svg",
      "/images/techno/expo.svg",
    ],
  },
];

const Project = () => {
  return (
    <section className="bg-white overflow-hidden text-[#214a72]">
      <div className="container pb-14 pt-16">
        {/* Entête */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <FaCode className="w-8 h-8" />
          <h1 className="text-3xl font-bold text-center">MY PROJECT</h1>
          <FaCode className="w-8 h-8" />
        </div>

        {/* Liste des projets en grille */}
        <div className="space-y-8">
          {projectItems.map((item) => (
            <div key={item.id} className="grid grid-cols-[1fr_2px_2fr] shadow-black gap-4 items-center">
              {/* Colonne gauche : Image */}
              <div>
                <img
                  src={item.img}
                  alt={item.project}
                  className="w-full h-60 object-contain rounded-lg shadow-md"
                />
              </div>

              {/* Ligne verticale */}
              <div className="h-full border-l-2 border-dark1"></div>

              {/* Colonne droite : Détails */}
              <div className="pl-4">
                <h2 className="text-2xl font-bold">{item.project}</h2>
                <p className="mt-2 text-black">{item.desc}</p>

                {/* Technologies utilisées */}
                {Array.isArray(item.techno) && item.techno.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-3 items-center">
                    {item.techno.map((icon, index) => (
                      <img key={index} src={icon} alt="Tech icon" className="w-10 h-10" />
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-gray-300">Aucune technologie spécifiée</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
