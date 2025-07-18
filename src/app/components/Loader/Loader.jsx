// components/Loader.jsx
// Copyright © 2025 RAZAFINDRATSIMBA Bruno Ismael. All rights reserved.

"use client";

import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 300);

    // Message après 3 secondes si le chargement dure trop longtemps
    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(messageTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 z-50">
      {/* Effet de particules en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Conteneur principal avec effet glassmorphism */}
      <div className="relative backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/20 space-y-8">
        
        {/* Spinner principal avec effets améliorés */}
        <div className="relative w-32 h-32 mx-auto">
          {/* Cercle externe avec gradient */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800"></div>
          </div>
          
          {/* Spinner animé */}
          <div className="absolute inset-2 border-4 border-transparent border-t-blue-500 border-r-purple-500 border-b-pink-500 rounded-full animate-spin"></div>
          
          {/* Cercle intérieur avec pulsation */}
          <div className="absolute inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse opacity-20"></div>
          
          {/* Pourcentage au centre avec style amélioré */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {progress}%
            </span>
          </div>
        </div>

        {/* Barre de progression moderne */}
        <div className="w-80 mx-auto space-y-2">
          <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            >
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          {/* Texte de progression */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              Chargement en cours...
            </p>
          </div>
        </div>

        {/* Message d'attente avec animation */}
        {showMessage && (
          <div className="animate-fade-in">
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded-r-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-amber-400 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-amber-700 dark:text-amber-200 text-sm font-medium">
                    Le chargement prend plus de temps que prévu...
                  </p>
                  <p className="text-amber-600 dark:text-amber-300 text-xs mt-1">
                    Vérifiez votre connexion internet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Copyright discret en bas */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-400 dark:text-gray-500">
        © 2025 RAZAFINDRATSIMBA Bruno Ismael
      </div>

      {/* Styles CSS personnalisés pour les animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}