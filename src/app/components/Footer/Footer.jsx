"use client";
import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-white dark:bg-gray-900">
            {/* SVG avec texte intégré */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                 <path
                    fill="url(#footerGradient)"
                    fillOpacity="1"
                    d="M0,128L80,138.7C160,149,320,171,480,176C640,181,800,171,960,144C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                />
                <defs>
                    <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />  {/* blue-500 */}
                        <stop offset="100%" stopColor="#8b5cf6" /> {/* purple-500 */}
                    </linearGradient>
                </defs>

                {/* Texte intégré dans le SVG */}
                <text
                    x="50%"
                    y="85%"
                    textAnchor="middle"
                    fill="white"
                    className="text-[26px] sm:text-sm font-medium font-poppins"
                >
                    © 2025 <tspan fontWeight="600">Portfolio V1</tspan> — Tous droits réservés — Réalisé par <tspan fontWeight="600">RAZAFINDRATSIMBA Bruno Ismael</tspan>
                </text>
            </svg>
        </footer>
    );
};

export default Footer;