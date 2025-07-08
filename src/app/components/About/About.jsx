import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaCertificate, FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const educationItems = [
  {
    id: 1,
    year: "2024–2025",
    title: "Master 1 en Data Science et Intelligence Artificielle",
    institution: "EMIT (École de Management et Innovation Technologique)",
    location: "Fianarantsoa, Madagascar",
    type: "master",
    level: "Master",
    color: "from-purple-500 to-indigo-600",
    bgColor: "from-purple-50 to-indigo-50",
    icon: <img src="/images/EMIT.jpg" alt="EMIT" className="w-12 h-12 rounded-full shadow-lg object-cover" />,
  },
  {
    id: 2,
    year: "2023–2024",
    title: "Licence 3 en Développement d'Applications Internet et Intranet",
    institution: "EMIT",
    location: "Fianarantsoa, Madagascar",
    type: "licence",
    level: "Licence 3",
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-50 to-cyan-50",
    icon: <img src="/images/EMIT.jpg" alt="EMIT" className="w-12 h-12 rounded-full shadow-lg object-cover" />,
  },
  {
    id: 3,
    year: "2022–2023",
    title: "Licence 2 en Développement d'Applications Internet et Intranet",
    institution: "EMIT",
    location: "Fianarantsoa, Madagascar",
    type: "licence",
    level: "Licence 2",
    color: "from-green-500 to-teal-600",
    bgColor: "from-green-50 to-teal-50",
    icon: <img src="/images/EMIT.jpg" alt="EMIT" className="w-12 h-12 rounded-full shadow-lg object-cover" />,
  },
  {
    id: 4,
    year: "2021–2022",
    title: "Licence 1 en Développement d'Applications Internet et Intranet",
    institution: "EMIT",
    location: "Fianarantsoa, Madagascar",
    type: "licence",
    level: "Licence 1",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    icon: <img src="/images/EMIT.jpg" alt="EMIT" className="w-12 h-12 rounded-full shadow-lg object-cover" />,
  },
  {
    id: 5,
    year: "2019–2020",
    title: "Baccalauréat série C",
    institution: "Lycée Notre-Dame Mandroseza",
    location: "Antananarivo, Madagascar",
    type: "bac",
    level: "Baccalauréat",
    color: "from-yellow-500 to-orange-600",
    bgColor: "from-yellow-50 to-orange-50",
    icon: <FaGraduationCap className="w-10 h-10 text-yellow-600" />,
  },
  {
    id: 6,
    year: "Octobre 2021",
    title: "Certificat de participation au programme Arduino",
    institution: "TME Education Group",
    location: "Formation intensive (1 semaine)",
    type: "certificate",
    level: "Certificat",
    color: "from-pink-500 to-rose-600",
    bgColor: "from-pink-50 to-rose-50",
    icon: <FaCertificate className="w-10 h-10 text-pink-600" />,
  },
];

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="w-full h-full opacity-30" viewBox="0 0 1000 1000">
      {/* Graduation caps floating */}
      {[...Array(8)].map((_, i) => (
        <g key={i} className="animate-pulse" style={{ animation: `float ${3 + i * 0.5}s ease-in-out infinite` }}>
          <path
            d={`M${100 + i * 120},${100 + (i % 3) * 200} L${120 + i * 120},${80 + (i % 3) * 200} L${140 + i * 120},${100 + (i % 3) * 200} L${120 + i * 120},${120 + (i % 3) * 200} Z`}
            fill={`hsl(${210 + i * 30}, 70%, 60%)`}
            opacity="0.3"
          />
        </g>
      ))}
      
      {/* Academic network connections */}
      <g className="opacity-20">
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1={Math.random() * 1000}
            y1={Math.random() * 1000}
            x2={Math.random() * 1000}
            y2={Math.random() * 1000}
            stroke="url(#academicGradient)"
            strokeWidth="2"
            className="animate-pulse"
            style={{ animation: `draw ${4 + i}s ease-in-out infinite alternate` }}
          />
        ))}
      </g>
      
      <defs>
        <linearGradient id="academicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const TimelineConnector = ({ isLast }) => (
  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200 transform -translate-x-1/2">
    {!isLast && (
      <div className="absolute top-full w-4 h-4 bg-white border-4 border-blue-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg animate-pulse" />
    )}
  </div>
);

const EducationCard = ({ item, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        {/* Main card */}
        <div className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
          isHovered ? 'scale-105 -translate-y-2' : ''
        }`}>
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-50`} />
          
          {/* Top gradient bar */}
          <div className={`h-2 bg-gradient-to-r ${item.color}`} />
          
          {/* Content */}
          <div className="relative p-6">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 relative">
                <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}>
                  {item.icon}
                </div>
                <div className={`absolute -top-1 -right-1 px-2 py-1 text-xs font-bold text-white bg-gradient-to-r ${item.color} rounded-full`}>
                  {item.level}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <FaCalendarAlt className="w-4 h-4 text-blue-600" />
                  <span className={`text-sm font-bold text-transparent bg-gradient-to-r ${item.color} bg-clip-text`}>
                    {item.year}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FaUniversity className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress indicator */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>Progression académique</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < (item.type === 'master' ? 5 : item.type === 'licence' ? 4 : item.type === 'bac' ? 3 : 2)
                          ? `bg-gradient-to-r ${item.color}`
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Hover effect overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        </div>

        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`} />
      </div>
    </div>
  );
};

const About = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <FaUniversity className="w-12 h-12 text-blue-600 animate-pulse" />
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-30 animate-ping" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Parcours Académique
            </h2>
            <div className="relative">
              <FaGraduationCap className="w-12 h-12 text-purple-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-0 bg-purple-600 rounded-full blur-md opacity-30 animate-ping" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un voyage académique marqué par l'excellence et l'innovation technologique
          </p>
        </div>

        {/* Timeline view for larger screens */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-indigo-300 transform -translate-x-1/2 rounded-full" />
          
          <div className="space-y-16">
            {educationItems.map((item, index) => (
              <div
                key={item.id}
                data-index={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                  <EducationCard 
                    item={item} 
                    index={index} 
                    isVisible={visibleCards.has(index)}
                  />
                </div>
                
                {/* Timeline node */}
                <div className="absolute left-1/2 w-6 h-6 bg-white border-4 border-blue-400 rounded-full transform -translate-x-1/2 shadow-lg z-10">
                  <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid view for smaller screens */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <div key={item.id} data-index={index}>
              <EducationCard 
                item={item} 
                index={index} 
                isVisible={visibleCards.has(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes draw {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
      `}</style>
    </section>
  );
};

export default About;