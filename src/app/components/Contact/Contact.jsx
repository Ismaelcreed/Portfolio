import React, { useState, useEffect } from "react";
import ScrollVelocity from "../ScrollVelocity/Scroll";
import SparklesText from "../SparkleText/SparkleText";
import { bouncy } from 'ldrs';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    // Enregistrer le loader ldrs
    bouncy.register();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setFeedback("");

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      console.log("Réponse API:", data);

      if (data.success) {
        setFeedback("✅ Message envoyé avec succès !");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setFeedback("❌ Échec de l'envoi du message.");
      }
    } catch (error) {
      setFeedback("❌ Une erreur est survenue.");
      console.error("Erreur lors de l'envoi du message :", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] text-gray-900 dark:text-white transition-colors duration-300">
      <ScrollVelocity
        texts={['Collaboration', 'For Future']}
        velocity={100}
        className="custom-scroll-text"
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">

          {/* Texte gauche */}
          <div className="space-y-6 lg:space-y-8 lg:pr-8">
            <div className="space-y-4 lg:space-y-6">
              <SparklesText className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                CONFIEZ-MOI <span className="text-blue-600 dark:text-blue-400">vos projets</span>
              </SparklesText>

              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
                Transformons ensemble vos idées en réalité numérique exceptionnelle
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {/* Bloc 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-1">Solutions Innovantes</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Des technologies de pointe pour des résultats extraordinaires
                  </p>
                </div>
              </div>

              {/* Bloc 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-1">Accompagnement Personnalisé</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Un suivi sur mesure pour chaque étape de votre projet
                  </p>
                </div>
              </div>

              {/* Bloc 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-1">Qualité Garantie</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Excellence et performance au cœur de chaque réalisation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire à droite */}
          <div className="w-full">
            <form onSubmit={handleSubmit} className="rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
              <div className="mb-6 lg:mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 text-gray-900 dark:text-white">
                  Parlons de votre projet
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Décrivez-moi votre vision et recevez une réponse personnalisée
                </p>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <div className="space-y-2">
                  <label className="font-medium text-gray-800 dark:text-gray-300">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-3 lg:p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-medium text-gray-800 dark:text-gray-300">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 lg:p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-medium text-gray-800 dark:text-gray-300">
                    Détails du projet
                  </label>
                  <textarea
                    placeholder="Décrivez votre projet, vos objectifs, et vos attentes..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full p-3 lg:p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 lg:py-4 px-6 rounded-xl font-semibold text-base lg:text-lg shadow-lg transition-all duration-300 disabled:opacity-50 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {sending ? (
                    <div className="flex items-center justify-center space-x-3">
                      <l-bouncy
                        size="25"
                        speed="1.75"
                        color="white"
                      ></l-bouncy>
                      <span>Envoi en cours...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Envoyer mon message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                  )}
                </button>

                {feedback && (
                  <div className={`p-3 lg:p-4 rounded-xl text-center font-medium ${
                    feedback.includes('✅')
                      ? 'bg-green-100 text-green-700 border border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-700'
                      : 'bg-red-100 text-red-700 border border-red-200 dark:bg-red-900 dark:text-red-300 dark:border-red-700'
                  }`}>
                    {feedback}
                  </div>
                )}
              </div>

              <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs lg:text-sm text-center text-gray-500 dark:text-gray-400">
                  Réponse garantie sous 24h • Consultation gratuite • Devis personnalisé
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;