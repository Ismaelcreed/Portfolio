"use client"
import React from 'react';
import CircularText from "../CircularText/CircularText";
import TrueFocus from "../TrueFocus/TrueFocus";
import { Facebook, Github, Phone, Mail, Download, ArrowDown, Sparkles, BrainCircuit, Lightbulb, Code, Zap, Target } from 'lucide-react';

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
        <section className="relative min-h-screen transition-all duration-300 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-[#0a0f1c] dark:via-[#1e293b] dark:to-[#0f172a] overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {/* Primary gradient orbs */}
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Secondary floating elements */}
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-300/10 to-purple-300/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-emerald-300/10 to-teal-300/5 rounded-full blur-2xl"></div>

                {/* Animated particles */}
                <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/60 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 right-20 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Premium Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] z-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="premiumGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
                            <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#premiumGrid)" className="text-slate-900 dark:text-slate-100" />
                </svg>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 opacity-5 animate-float">
                    <Code className="w-12 h-12 text-blue-500" />
                </div>
                <div className="absolute top-3/4 right-1/4 opacity-5 animate-float" style={{ animationDelay: '2s' }}>
                    <Zap className="w-10 h-10 text-purple-500" />
                </div>
                <div className="absolute bottom-1/4 left-1/3 opacity-5 animate-float" style={{ animationDelay: '4s' }}>
                    <Target className="w-8 h-8 text-cyan-500" />
                </div>
            </div>

            {/* TrueFocus Integration - Moved to left */}
            <div className="absolute top-14 left-[25rem] z-20 hidden lg:block dark:text-white">
                <TrueFocus />
            </div>




            {/* Main content */}
            <div className="relative z-10 pt-20 lg:pt-24 pb-16 px-4 sm:px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">

                        {/* Left content */}
                        <div className="flex flex-col justify-center space-y-4 lg:space-y-8 order-2 lg:order-1">

                            {/* Profile image for mobile */}
                            <div className="flex justify-center lg:hidden mb-6 order-1">
                                <div className="relative">
                                    <div className="w-48 h-48 overflow-hidden rounded-full shadow-2xl mx-auto">
                                        <img
                                            src="/images/profil.png"
                                            alt="Profile Bruno Ismael RAZAFINDRATSIMBA"
                                            className="w-60 h-w-60 object-cover"
                                        />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center lg:text-left space-y-6 order-2">
                                {/* Greeting Badge */}
                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-200 backdrop-blur-md border border-white/20 shadow-lg">
                                    <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {t("Hero.span")}
                                    </span>
                                </div>

                                {/* Main Heading */}
                                <div className="space-y-2 px-2">
                                    <h1 className="font-black leading-tight tracking-tight">
                                        <div className="text-slate-800 dark:text-slate-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2">
                                            {t("Hero.span1")}
                                        </div>

                                        {/* RAZAFINDRATSIMBA - Correction responsive */}
                                        <div className="relative">
                                            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight break-words hyphens-auto">
                                                RAZAFINDRATSIMBA
                                            </div>
                                        </div>

                                        <div className="text-slate-800 dark:text-slate-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                                            Bruno Ismael
                                        </div>
                                    </h1>

                                    <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl font-light leading-relaxed">
                                        {t("Hero.span2")}
                                    </p>
                                </div>


                                {/* Enhanced Specialties */}
                                <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                    <span className="group inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 backdrop-blur-md text-blue-700 dark:text-blue-300 rounded-2xl font-semibold border border-blue-200/50 dark:border-blue-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-100 hover:to-blue-200">
                                        <BrainCircuit className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                        <span className="hidden sm:inline">Développement Web</span>
                                        <span className="sm:hidden">Dev Web</span>
                                    </span>
                                    <span className="group inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 backdrop-blur-md text-purple-700 dark:text-purple-300 rounded-2xl font-semibold border border-purple-200/50 dark:border-purple-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-purple-100 hover:to-purple-200">
                                        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                        <span className="hidden sm:inline">Intelligence Artificielle</span>
                                        <span className="sm:hidden">IA</span>
                                    </span>
                                    <span className="group inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 backdrop-blur-md text-emerald-700 dark:text-emerald-300 rounded-2xl font-semibold border border-emerald-200/50 dark:border-emerald-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-emerald-100 hover:to-emerald-200">
                                        <Lightbulb className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                        Innovation
                                    </span>
                                </div>

                                {/* Enhanced Action Button - Unique et responsive */}
                                <div className="flex justify-center lg:justify-start animate-fade-in-up pt-4" style={{ animationDelay: '0.8s' }}>
                                    <a
                                        href="/CV_Bruno Ismael.pdf"
                                        download
                                        className="group relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-bold text-sm lg:text-base flex items-center gap-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 border border-white/10 backdrop-blur-md overflow-hidden"
                                    >
                                        {/* Content */}
                                        <span className="relative z-10 flex items-center gap-2">
                                            <Download className="w-4 h-4 lg:w-5 lg:h-5 group-hover:animate-bounce" />
                                            <span>Télécharger mon CV</span>
                                        </span>

                                        {/* Shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-full opacity-0 group-hover:animate-shine"></div>
                                    </a>
                                </div>

                                {/* Enhanced Social Links */}
                                <div className="space-y-4 animate-fade-in-up pt-4" style={{ animationDelay: '1.0s' }}>
                                    <p className="text-slate-600 dark:text-slate-300 font-semibold text-center lg:text-left text-base">
                                        Connectez-vous avec moi
                                    </p>
                                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                        {[
                                            { icon: Facebook, href: "https://www.facebook.com/xan.travis", label: "Facebook", color: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30" },
                                            { icon: Github, href: "https://github.com/search?q=IsmaelCreed&type=users", label: "GitHub", color: "hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30" },
                                            { icon: Mail, href: "mailto:razafindratsimbabrunoismael@gmail.com", label: "Email", color: "hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30" }
                                        ].map((social, index) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target={social.href.includes('mailto') ? '_self' : '_blank'}
                                                rel={social.href.includes('mailto') ? '' : 'noopener noreferrer'}
                                                className={`group flex items-center gap-2 px-3 py-2 text-slate-600 dark:text-slate-300 transition-all duration-300 rounded-lg backdrop-blur-sm border border-transparent ${social.color} hover:scale-110 hover:shadow-md`}
                                            >
                                                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                                <span className="hidden sm:inline text-sm font-medium">{social.label}</span>
                                            </a>
                                        ))}
                                        <div className="group flex items-center gap-2 px-3 py-2 text-slate-600 dark:text-slate-300 transition-all duration-300 rounded-lg hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:scale-110 hover:shadow-md">
                                            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                            <span className="hidden sm:inline text-sm font-medium">+261 34 58 997 43</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right content - Desktop Profile Image */}
                        <div className="hidden lg:flex justify-end items-center relative order-1 lg:order-2">
                            <div className="relative w-full max-w-md mr-8">
                                {/* Main Profile Container */}
                                <div className="relative z-10 group">
                                    <div className="relative w-full max-w-fit mx-auto">
                                        {/* Profile Image with Simple Shadow */}
                                        <div className="relative overflow-hidden drop-shadow-md">
                                            <img
                                                src="/images/profil.png"
                                                alt="Profile Bruno Ismael RAZAFINDRATSIMBA"
                                                className="w-80 h-w-80 object-cover transition-all duration-500 group-hover:scale-105 drop-shadow-[0_5px_10px_rgba(0,11,118,0.6)]"
                                            />
                                        </div>

                                        {/* Enhanced CircularText */}
                                        <div className="absolute -top-6 -right-6 group-hover:scale-105 transition-transform duration-400">
                                            <CircularText
                                                text="INNOVATION • TECHNOLOGIE • DÉVELOPPEMENT •"
                                                spinDuration={20}
                                                className="w-40 h-48 text-blue-600 dark:text-blue-400"
                                            />
                                        </div>

                                        {/* Premium Status Badge */}
                                        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full border-2 border-white shadow-lg animate-float bg-transparent">
                                            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div> {/* agrandi le point */}
                                            <img
                                                src="/JS.svg"
                                                alt="Statut en ligne"
                                                className="h-14 w-auto"  // agrandi le SVG
                                            />
                                        </div>

                                        {/* Floating Achievement Badges */}
                                        <div className="absolute -bottom-0 -left-4 text-white px-3 py-1 rounded-full border-2 border-white text-xs font-bold shadow-lg animate-float bg-transparent">
                                            <img
                                                src="/balise.svg"
                                                alt="Badge Full-Stack"
                                                className="h-12 w-auto" // agrandi le SVG
                                            />
                                        </div>

                                        <div className="absolute top-1/2 -right-8 text-white px-3 py-1 rounded-full border-2 border-white text-xs font-bold shadow-lg animate-float bg-transparent" style={{ animationDelay: '2s' }}>
                                            <img
                                                src="/python.svg"
                                                alt="Badge AI Expert"
                                                className="h-12 w-auto" // agrandi le SVG
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className="absolute bottom-8 left-2/4 transform -translate-x-1/2 flex flex-col items-center gap-3 z-20 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                <div className="group w-8 h-8 lg:w-10 lg:h-10 border-2 border-slate-400 rounded-full flex items-center justify-center animate-bounce hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300 cursor-pointer">
                    <ArrowDown className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-8px) rotate(3deg); }
                }
                
                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }
                
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-shine {
                    animation: shine 2s ease-in-out;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Hero;