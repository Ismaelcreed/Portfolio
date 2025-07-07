"use client"
import React from "react";
import { FaComputer } from "react-icons/fa6";
import Particle from "../../assets/Animation/Particles";

const skills = [
  { icon: "/images/techno/react.svg", name: "React" },
  { icon: "/images/techno/nodedotjs.svg", name: "NodeJS" },
  { icon: "/images/techno/html5.svg", name: "HTML5" },
  { icon: "/images/techno/css.svg", name: "CSS3" },
  { icon: "/images/techno/javascript.svg", name: "JavaScript" },
  { icon: "/images/techno/python.svg", name: "Python" },
  { icon: "/images/techno/figma.svg", name: "Figma" },

  { icon: "/images/techno/antdesign.svg", name: "antDesign" },
  { icon: "/images/techno/bootstrap.svg", name: "Bootstrap" },
  { icon: "/images/techno/expo.svg", name: "Expo" },
  { icon: "/images/techno/express.svg", name: "ExpressJS" },
  { icon: "/images/techno/git.svg", name: "Git" },

  { icon: "/images/techno/github.svg", name: "Github" },
  { icon: "/images/techno/gitlab.svg", name: "GitLab" },
  { icon: "/images/techno/graphql.svg", name: "Graphql" },
  { icon: "/images/techno/leaflet.svg", name: "Leaflet" },
  { icon: "/images/techno/mongodb.svg", name: "Mongodb" },
  { icon: "/images/techno/mui.svg", name: "Mui" },

  { icon: "/images/techno/mysql.svg", name: "Mysql" },
  { icon: "/images/techno/nextdotjs.svg", name: "Nextdotjs" },
  { icon: "/images/techno/npm.svg", name: "Npm" },
  { icon: "/images/techno/postgresql.svg", name: "Postgresql" },
  
  { icon: "/images/techno/tailwindcss.svg", name: "Tailwindcss" },
  { icon: "/images/techno/vite.svg", name: "Vite" },
 
 
];

const Skills = () => {
  return (
    <section className=" bg-[#f0eff0]">
      <Particle/>
        <div className="container pb-14 pt-16">
            <div className='justify-center items-center flex flex-auto gap-6 p-0 m-auto'>
                    <FaComputer className=' w-8 h-8 mb-8'/>
                        <h1 className="text-3xl font-bold text-center pb-10 p-0  ">
                                SKILLS   
                        </h1>
                    <FaComputer className='w-8 h-8 mb-8'/>
            </div>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-8 relative">
                    {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="hexagon rounded-full flex justify-center items-center
                        bg-white  shadow-lg w-24 h-24 rounded-50 
                        md:w-28 md:h-32 lg:w-32 lg:h-36
                        hover:bg-slate-50 hover:cursor-pointer hover:scale-110
                        duration-200 hover:shadow-3xl"
                    >
                        <img src={skill.icon} alt={skill.name} className="w-16 h-12 object-contain" />
                    </div>
                    ))}
                </div>
      </div>
    </section>
  );
};

export default Skills;
