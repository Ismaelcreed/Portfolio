"use client"
import React from "react";
import { 
  Monitor, 
  Code, 
  Globe, 
  Palette, 
  Database, 
  GitBranch, 
  Package, 
  Zap,
  ArrowRight,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Star,
  Diamond,
  FileCode,
  Server,
  Layers,
  Cpu,
  BarChart3,
  Brain
} from "lucide-react";

const skills = [
  { icon: Code, name: "React", color: "text-blue-600" },
  { icon: Server, name: "NodeJS", color: "text-green-600" },
  { icon: Globe, name: "HTML5", color: "text-orange-600" },
  { icon: Palette, name: "CSS3", color: "text-blue-500" },
  { icon: FileCode, name: "JavaScript", color: "text-yellow-600" },
  { icon: Code, name: "Python", color: "text-blue-700" },
  { icon: Palette, name: "Figma", color: "text-purple-600" },
  { icon: Package, name: "Ant Design", color: "text-blue-600" },
  { icon: Package, name: "Expo", color: "text-gray-700" },
  { icon: Zap, name: "ExpressJS", color: "text-green-700" },
  { icon: GitBranch, name: "Git", color: "text-orange-600" },
  { icon: GitBranch, name: "Github", color: "text-gray-800" },
  { icon: Database, name: "GraphQL", color: "text-pink-600" },
  { icon: Database, name: "MongoDB", color: "text-green-600" },
  { icon: Layers, name: "MUI", color: "text-blue-600" },
  { icon: Database, name: "MySQL", color: "text-blue-700" },
  { icon: Code, name: "Next.js", color: "text-gray-800" },
  { icon: Package, name: "NPM", color: "text-red-600" },
  { icon: Database, name: "PostgreSQL", color: "text-blue-600" },
  { icon: Layers, name: "TailwindCSS", color: "text-teal-600" },
  { icon: Zap, name: "Vite", color: "text-purple-600" },
  { icon: FileCode, name: "TypeScript", color: "text-blue-600" },
  { icon: Server, name: "Flask", color: "text-gray-700" },
  { icon: Brain, name: "TensorFlow", color: "text-orange-600" },
  { icon: BarChart3, name: "Scikit-learn", color: "text-orange-500" },
  { icon: Cpu, name: "Pandas", color: "text-blue-700" },
];

const FloatingShape = ({ shape: Shape, className, delay = 0 }) => (
  <Shape 
    className={`absolute text-slate-200 opacity-30 ${className}`}
    size={Math.random() * 40 + 25}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }}
  />
);

const Skills = () => {
  const floatingShapes = [
    { shape: Circle, className: "top-16 left-16 animate-pulse", delay: 0 },
    { shape: Square, className: "top-32 right-24 animate-bounce", delay: 0.5 },
    { shape: Triangle, className: "bottom-32 left-24 animate-pulse", delay: 1 },
    { shape: ArrowRight, className: "top-1/2 right-16 animate-bounce", delay: 1.5 },
    { shape: Hexagon, className: "bottom-16 right-1/3 animate-pulse", delay: 2 },
    { shape: Star, className: "top-1/4 left-1/4 animate-bounce", delay: 2.5 },
    { shape: Diamond, className: "bottom-1/3 right-1/4 animate-pulse", delay: 3 },
    { shape: Circle, className: "top-1/3 right-1/2 animate-bounce", delay: 3.5 },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden min-h-screen">
      {/* Floating Shapes */}
      {floatingShapes.map((item, index) => (
        <FloatingShape 
          key={index} 
          shape={item.shape} 
          className={item.className}
          delay={item.delay}
        />
      ))}
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Technical Skills
            </h1>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Expertise in modern technologies and frameworks for full-stack development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-6 md:gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index} 
                className="group relative flex flex-col justify-center items-center
                bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl 
                shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)]
                w-full aspect-square p-4 md:p-6
                hover:scale-105 hover:border-slate-300/50 hover:bg-white
                transition-all duration-300 ease-out cursor-pointer
                hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: `fadeInUp 0.6s ease-out forwards`
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-3">
                  <IconComponent 
                    className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${skill.color} 
                    group-hover:scale-110 transition-transform duration-300`} 
                  />
                </div>
                
                {/* Skill Name */}
                <span className="text-sm md:text-base font-semibold text-slate-700 text-center leading-tight">
                  {skill.name}
                </span>
                
                {/* Hover indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-20">
          <div className="flex items-center gap-4">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-slate-300 to-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-slate-300 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;