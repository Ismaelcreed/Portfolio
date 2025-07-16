// components/Loader.jsx
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
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50 space-y-6">
      <div className="relative w-24 h-24">
        {/* Spinner amélioré */}
        <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
        <div 
          className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          style={{ animationDuration: '1s' }}
        ></div>
        
        {/* Pourcentage au centre */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-blue-500 font-bold text-lg">{progress}%</span>
        </div>
      </div>
      
      {/* Barre de progression */}
      <div className="w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-blue-500 h-2.5 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Message après délai */}
      {showMessage && (
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center max-w-xs">
          Le chargement prend plus de temps que prévu...<br />
          Vérifiez votre connexion internet.
        </p>
      )}
    </div>
  );
}