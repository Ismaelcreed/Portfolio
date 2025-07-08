"use client"
import React from 'react';
import CircularText from "../CircularText/CircularText";
import { Github, Facebook, Phone, Mail, Download, ArrowDown, Sparkles, BrainCircuit, Lightbulb } from 'lucide-react';

// Composant CircularText simulé (remplacez par votre composant réel)
// const CircularText = ({ text, spinDuration, className }) => (
// //     <div className={`animate-spin ${className}`} style={{animationDuration: `${spinDuration}s`}}>
// //         <div className="w-32 h-32 border-2 border-dashed border-blue-400 rounded-full flex items-center justify-center">
// //             <span className="text-xs text-blue-600 text-center">CIRCULAR TEXT</span>
// //         </div>
// //     </div>
// // );

const Hero = () => {
    // Simulation des traductions
    const t = (key) => {
        const translations = {
            "Hero.span": "Bonjour, je suis",
            "Hero.span1": "Développeur",
            "Hero.span2": "passionné par l'innovation technologique"
        };
        return translations[key] || key;
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
            </div>

            {/* Dots SVG Pattern Background */}
            <div className="absolute inset-0 opacity-[0.4] z-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1.5" fill="url(#dotGradient)" opacity="0.6"/>
                            <circle cx="10" cy="10" r="1" fill="url(#dotGradient)" opacity="0.3"/>
                            <circle cx="30" cy="10" r="1" fill="url(#dotGradient)" opacity="0.3"/>
                            <circle cx="10" cy="30" r="1" fill="url(#dotGradient)" opacity="0.3"/>
                            <circle cx="30" cy="30" r="1" fill="url(#dotGradient)" opacity="0.3"/>
                        </pattern>
                        <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 0.8}} />
                            <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 0.4}} />
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>

            {/* Animated dots overlay */}
            <div className="absolute inset-0 opacity-[0.2] z-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="animatedDots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="2" fill="#3b82f6" opacity="0.5">
                                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="15" cy="15" r="1" fill="#8b5cf6" opacity="0.3">
                                <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                            </circle>
                            <circle cx="45" cy="15" r="1" fill="#06b6d4" opacity="0.3">
                                <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2.5s" repeatCount="indefinite" begin="1s"/>
                            </circle>
                            <circle cx="15" cy="45" r="1" fill="#10b981" opacity="0.3">
                                <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2.2s" repeatCount="indefinite" begin="1.5s"/>
                            </circle>
                            <circle cx="45" cy="45" r="1" fill="#f59e0b" opacity="0.3">
                                <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2.8s" repeatCount="indefinite" begin="2s"/>
                            </circle>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#animatedDots)" />
                </svg>
            </div>

            {/* Subtle geometric dots */}
            <div className="absolute inset-0 opacity-[0.1] z-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="geometricDots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="50" cy="50" r="3" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6"/>
                            <circle cx="25" cy="25" r="1.5" fill="#8b5cf6" opacity="0.4"/>
                            <circle cx="75" cy="25" r="1.5" fill="#8b5cf6" opacity="0.4"/>
                            <circle cx="25" cy="75" r="1.5" fill="#8b5cf6" opacity="0.4"/>
                            <circle cx="75" cy="75" r="1.5" fill="#8b5cf6" opacity="0.4"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#geometricDots)" />
                </svg>
            </div>

            {/* Main content */}
            <div className="relative z-10 pt-24 pb-16 px-6" style={{ paddingTop: '6rem' }}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">

                        {/* Left content */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="text-center lg:text-left space-y-6">
                                {/* Greeting */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 backdrop-blur-sm">
                                    <Sparkles className="w-4 h-4 text-blue-600" />
                                    {t("Hero.span")}
                                </div>

                                {/* Profile image for mobile */}
                              <div className="flex justify-center lg:hidden mb-8">
                                    <div className="relative">
                                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-2xl">
                                            <img
                                                src="/images/coding.png"
                                                alt="Profile"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Main heading */}
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    <span className="text-gray-800">{t("Hero.span1")}</span>
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        RAZAFINDRATSIMBA
                                    </span>
                                    <br />
                                    <span className="text-gray-800">Bruno Ismael</span>
                                </h1>

                                {/* Subtitle */}
                                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
                                    {t("Hero.span2")}
                                </p>

                                {/* Specialties */}
                                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 rounded-full font-medium">
                                        <BrainCircuit className="w-4 h-4" />
                                        Développement Web
                                    </span>
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/80 backdrop-blur-sm text-purple-700 rounded-full font-medium">
                                        <Sparkles className="w-4 h-4" />
                                        Intelligence Artificielle
                                    </span>
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 backdrop-blur-sm text-green-700 rounded-full font-medium">
                                        <Lightbulb className="w-4 h-4" />
                                        Innovation
                                    </span>
                                </div>

                            </div>

                            {/* Action buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                                    <Download className="w-5 h-5" />
                                    Télécharger CV
                                </button>
                                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/50">
                                    Voir mes projets
                                </button>
                            </div>

                            {/* Social links */}
                            <div className="space-y-4">
                                <p className="text-gray-600 font-medium text-center lg:text-left">
                                    Connectez-vous avec moi
                                </p>
                                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                                    <a
                                        href="https://www.facebook.com/xan.travis"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                                    >
                                        <Facebook className="w-5 h-5" />
                                        <span className="hidden sm:inline">Facebook</span>
                                    </a>

                                    <a
                                        href="https://github.com/search?q=IsmaelCreed&type=users"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span className="hidden sm:inline">GitHub</span>
                                    </a>

                                    <a
                                        href="mailto:razafindratsimbabrunoismael@gmail.com"
                                        className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110"
                                    >
                                        <Mail className="w-5 h-5" />
                                        <span className="hidden sm:inline">Email</span>
                                    </a>

                                    <div className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-all duration-300 hover:scale-110">
                                        <Phone className="w-5 h-5" />
                                        <span className="hidden sm:inline text-sm">
                                            +261 34 58 997 43
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right content - Desktop only */}
                        <div className="hidden lg:flex justify-center items-center relative">
                            <div className="relative w-full max-w-lg">
                                {/* Profile Image */}
                                <div className="relative z-10">
                                    <div className="w-80 h-80 overflow-hidden mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-2 shadow-2xl">
                                        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                                            <span className="text-white text-6xl font-bold">BI</span>
                                        </div>
                                    </div>

                                    {/* CircularText positioned top-right */}
                                    <div className="absolute -top-6 -right-6">
                                        <CircularText
                                            text="INNOVATION • TECHNOLOGIE • DÉVELOPPEMENT •"
                                            spinDuration={20}
                                            className="w-32 h-32 text-blue-700"
                                        />
                                    </div>

                                    {/* Online status badge */}
                                    <div className="absolute top-4 left-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-md"></div>
                                </div>

                                {/* Subtle background glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -z-10 scale-125"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                <span className="text-sm text-gray-500">Scroll pour découvrir</span>
                <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center animate-bounce">
                    <ArrowDown className="w-5 h-5 text-gray-400" />
                </div>
            </div>
        </section>
    );
};

export default Hero;