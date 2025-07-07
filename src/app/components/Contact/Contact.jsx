import React, { useState } from "react";
import LeafletMap from "../Map/Map.jsx"; 
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
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
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="max-w-md w-full flex flex-col items-center justify-center space-y-4 p-4 mx-auto"
          >
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
            />

            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
            />

            <textarea
              placeholder="Your message . . ."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
            />

            <input
              value={sending ? "Sending..." : "Send your message"}
              type="submit"
              disabled={sending}
              className="px-10 py-4 rounded-md shadow-lg bg-primary text-white border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
            />

            {feedback && (
              <p className="text-center text-sm text-accent mt-2">{feedback}</p>
            )}
          </form>

          {/* Carte */}
          <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-md shadow-lg overflow-hidden">
            <LeafletMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
