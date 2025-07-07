"use client";
import React from "react";
import { FaGraduationCap, FaCertificate, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

const educationItems = [
    {
        id: 1,
        year: "2024-2025",
        description:
            "Master One in Data Science and Artificial Intelligence at EMIT (École de Management et Innovation Technologique), Fianarantsoa, Madagascar",
        icon: <img src="/images/EMIT.jpg" className="w-[60px] mb-1" />,
    },
    {
        id: 2,
        year: "2023-2024",
        description:
            "Third year in Licence of Developpement of Internet and Intranet's Application at EMIT (École de Management et Innovation Technologique), Fianarantsoa, Madagascar",
        icon: <img src="/images/EMIT.jpg" className="w-[60px] mb-1" />,
    },
    {
        id: 3,
        year: "2022-2023",
        description:
            "Second year in Licence of Developpement of Internet and Intranet's Application at EMIT (École de Management et Innovation Technologique), Fianarantsoa, Madagascar",
        icon: <img src="/images/EMIT.jpg" className="w-[60px] mb-1" />,
    },
    {
        id: 4,
        year: "2021-2022",
        description:
            "First year in Licence of Developpement of Internet and Intranet's Application at EMIT (École de Management et Innovation Technologique), Fianarantsoa, Madagascar",
        icon: <img src="/images/EMIT.jpg" className="w-[60px] mb-1" />,
    },
    {
        id: 5,
        year: "2019-2020",
        description:
            "Bakalaureat degrees at Lycee Notre Dame Mandroseza (option C) Antananarivo, Madagascar",
        icon: <FaGraduationCap className="w-8 h-8" />,
    },
    {
        id: 6,
        year: "October 2021",
        description:
            "Certificate of participation from TME Education Group in Arduino Programing (one week)",
        icon: <FaCertificate className="w-8 h-8" />,
    },
];

const About = () => {
    return (
        <section className="bg-[#f5f3f5] text-[#295b8d]">
            <div className="container pb-14 pt-16">
                {/* Titre */}
                <div className="justify-center items-center flex flex-auto gap-6 p-0 m-auto">
                    <FaUniversity className="w-8 h-8 mb-8" />
                    <h1 className="text-3xl font-bold text-center pb-10 p-0">
                        ACADEMIC FORMATION
                    </h1>
                    <FaUniversity className="w-8 h-8 mb-8" />
                </div>

                {/* Grid des cartes */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {educationItems.map((item, index) => (
                        <motion.div
                            key={item.id}   
                            className="bg-[#fffcfc] text-[#295b8d] rounded-3xl flex flex-col gap-2 p-4 py-7 m-auto 
                                       justify-center items-center hover:bg-[#214a72] hover: scale-105 hover:cursor-pointer 
                                       hover:text-white duration-200 hover:shadow-3xl"
                            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            {/* Icône */}
                            <div className="text-4xl mb-4 rounded-3xl">{item.icon}</div>

                            {/* Année */}
                            <p className="text-2xl text-grey font-semibold px-3">
                                {item.year}
                            </p>

                            {/* Description */}
                            <span className="text-lg text-center">{item.description}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
