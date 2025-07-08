import React, { useState } from "react";
import ScrollVelocity from "../ScrollVelocity/Scroll";
import SparklesText from "../SparkleText/SparkleText"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setFeedback("");

    try {
      const res = await fetch("/Services/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

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
    <section className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <ScrollVelocity
        texts={['Collaboration', 'For Future']}
        velocity={100}
        className="custom-scroll-text"
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Texte gauche */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <SparklesText className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                CONFIEZ-MOI <span className="text-blue-900">vos projets</span>
              </SparklesText>


              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Transformons ensemble vos idées en réalité numérique exceptionnelle
              </p>
            </div>

            <div className="space-y-6">
              {/* Bloc 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Solutions Innovantes</h3>
                  <p className="text-gray-600">Des technologies de pointe pour des résultats extraordinaires</p>
                </div>
              </div>

              {/* Bloc 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Accompagnement Personnalisé</h3>
                  <p className="text-gray-600">Un suivi sur mesure pour chaque étape de votre projet</p>
                </div>
              </div>

              {/* Bloc 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Qualité Garantie</h3>
                  <p className="text-gray-600">Excellence et performance au cœur de chaque réalisation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire à droite */}
          <div className="w-full">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Parlons de votre projet</h2>
                <p className="text-gray-600">Décrivez-moi votre vision et recevez une réponse personnalisée</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-gray-800 font-medium">Nom complet</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-800 font-medium">Email professionnel</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-800 font-medium">Détails du projet</label>
                  <textarea
                    placeholder="Décrivez votre projet, vos objectifs, et vos attentes..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 px-6 rounded-xl bg-indigo-600 text-white font-semibold text-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 disabled:opacity-50"
                >
                  {sending ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
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
                  <div className={`p-4 rounded-xl text-center font-medium ${feedback.includes('✅')
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-red-100 text-red-700 border border-red-200'
                    }`}>
                    {feedback}
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm text-center">
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