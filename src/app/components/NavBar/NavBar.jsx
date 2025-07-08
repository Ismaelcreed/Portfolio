"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Fadeup = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease: "easeInOut"
            }
        }
    }
}

const NavBar = () => {
    const [lang, setLanguage] = useState('en');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showLangDropdown, setShowLangDropdown] = useState(false);
    
    // Simuler les fonctions de traduction
    const t = (key) => {
        const translations = {
            en: {
                home: 'Home',
                about: 'About',
                project: 'Projects',
                skills: 'Skills',
                contact: 'Contact',
                down: 'Download CV'
            },
            fr: {
                home: 'Accueil',
                about: 'À Propos',
                project: 'Projets',
                skills: 'Compétences',
                contact: 'Contact',
                down: 'Télécharger CV'
            }
        };
        return translations[lang][key] || key;
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const selectLanguage = (newLang) => {
        setLanguage(newLang);
        setShowLangDropdown(false);
        
        // Effet confetti simulé
        console.log(`Language changed to ${newLang}`);
    };

    const menu = [
        {
            id: 1,
            name: t('home'),
            path: "/"
        },
        {
            id: 2,
            name: t('about'),
            path: "#about"
        },
        {
            id: 3,
            name: t('project'),
            path: "#projects"
        },
        {
            id: 4,
            name: t('skills'),
            path: "#skills"
        },
        {
            id: 5,
            name: t('contact'),
            path: "#contact"
        }
    ];

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`font-poppins fixed w-full top-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
                    : 'bg-transparent'
            }`}
        >
            <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center"
                >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">RBI</span>
                    </div>
                    <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
                        RAZAFINDRATSIMBA
                    </span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    <ul className="flex items-center gap-8">
                        {menu.map((item, index) => (
                            <motion.li
                                key={item.id}
                                variants={Fadeup(0.1 * index)}
                                initial="initial"
                                animate="animate"
                            >
                                <a
                                    href={item.path}
                                    className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Language Selector */}
                    <div className="relative">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowLangDropdown(!showLangDropdown)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
                        >
                            <Globe className="w-5 h-5 text-gray-600" />
                            <span className="text-sm font-medium text-gray-700 uppercase">{lang}</span>
                        </motion.button>

                        <AnimatePresence>
                            {showLangDropdown && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden min-w-[140px]"
                                >
                                    {languages.map((language) => (
                                        <button
                                            key={language.code}
                                            onClick={() => selectLanguage(language.code)}
                                            className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3 ${
                                                lang === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                            }`}
                                        >
                                            <span className="text-lg">{language.flag}</span>
                                            <span className="font-medium">{language.name}</span>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6 text-gray-700" />
                    ) : (
                        <Menu className="w-6 h-6 text-gray-700" />
                    )}
                </motion.button>
            </div>

            {/* Mobile Menu - Correction principale: animation maxHeight */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, maxHeight: 0 }}
                        animate={{ opacity: 1, maxHeight: 500 }}
                        exit={{ opacity: 0, maxHeight: 0 }}
                        className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-6">
                            <ul className="space-y-4">
                                {menu.map((item, index) => (
                                    <motion.li
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <a
                                            href={item.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium"
                                        >
                                            {item.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Mobile Language Selector */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-gray-600">Language:</span>
                                    <div className="flex gap-2">
                                        {languages.map((language) => (
                                            <button
                                                key={language.code}
                                                onClick={() => selectLanguage(language.code)}
                                                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                                                    lang === language.code
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                            >
                                                {language.flag} {language.code.toUpperCase()}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Download Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg"
                            >
                                <Download className="w-4 h-4" />
                                {t('down')}
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default NavBar;