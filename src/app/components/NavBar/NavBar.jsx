"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Fadeup = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay,
      ease: "easeInOut"
    }
  }
});

const NavBar = () => {
  const [lang, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const t = (key) => {
    const translations = {
      en: { home: 'Home', about: 'About', project: 'Projects', skills: 'Skills', contact: 'Contact' },
      fr: { home: 'Accueil', about: 'À Propos', project: 'Projets', skills: 'Compétences', contact: 'Contact' }
    };
    return translations[lang][key] || key;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = section === 'home' ? document.body : document.getElementById(section);
        if (element) {
          const top = section === 'home' ? 0 : element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  };

  const selectLanguage = (code) => {
    setLanguage(code);
    setShowLangDropdown(false);
  };

  const handleLinkClick = (e, path, section) => {
    e.preventDefault();
    const offsetTop = section === 'home' ? 0 : document.getElementById(section)?.offsetTop - 80;
    window.scrollTo({ top: offsetTop || 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menu = [
    { id: 1, name: t('home'), path: "/", section: "home" },
    { id: 2, name: t('about'), path: "#about", section: "about" },
    { id: 3, name: t('project'), path: "#projects", section: "projects" },
    { id: 4, name: t('skills'), path: "#skills", section: "skills" },
    { id: 5, name: t('contact'), path: "#contact", section: "contact" },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-poppins fixed w-full top-0 z-50 bg-white dark:bg-[#162e55] backdrop-blur-md border-b border-white/20 dark:border-white/10 transition-all duration-300"
    >
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">RBI</span>
          </div>
          <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent hidden sm:block">
            RAZAFINDRATSIMBA
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center gap-8">
            {menu.map((item, index) => (
              <motion.li key={item.id} variants={Fadeup(0.1 * index)} initial="initial" animate="animate">
                <a
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path, item.section)}
                  className={`relative font-medium transition-colors duration-300 group ${
                    activeSection === item.section
                      ? 'text-blue-600'
                      : 'text-gray-700 dark:text-gray-200 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-900 transition-all duration-300 ${
                    activeSection === item.section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
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
              className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-300 flex items-center gap-2"
            >
              <Globe className="w-5 h-5 text-gray-600 dark:text-white" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200 uppercase">{lang}</span>
            </motion.button>

            <AnimatePresence>
              {showLangDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 bg-white/95 dark:bg-[#1e293b] backdrop-blur-md rounded-lg shadow-xl border border-gray-200/20 dark:border-white/10 overflow-hidden min-w-[140px]"
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => selectLanguage(language.code)}
                      className={`w-full px-4 py-3 text-left hover:bg-white/50 dark:hover:bg-white/10 transition-colors duration-200 flex items-center gap-3 ${
                        lang === language.code ? 'bg-blue-50/80 text-blue-600' : 'text-gray-700 dark:text-gray-200'
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

          {/* Dark mode toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-gray-700 dark:text-white hover:bg-white/20 transition-all duration-300"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-white" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-white" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            className="lg:hidden bg-white/95 dark:bg-[#234377] backdrop-blur-md border-t border-gray-200/20 dark:border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6">
              <ul className="space-y-4">
                {menu.map((item, index) => (
                  <motion.li key={item.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * index }}>
                    <a
                      href={item.path}
                      onClick={(e) => handleLinkClick(e, item.path, item.section)}
                      className={`block py-3 px-4 rounded-lg transition-all duration-300 font-medium ${
                        activeSection === item.section
                          ? 'text-blue-600 bg-blue-50/80'
                          : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-white/50 dark:hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
    