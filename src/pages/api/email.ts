import type { NextApiRequest, NextApiResponse } from 'next';
import emailjs from '@emailjs/nodejs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validation des champs
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "Tous les champs sont obligatoires" 
      });
    }

    // Configuration EmailJS
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        from_name: name,
        from_email: email,
        message: message
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY, // Maintenant requis
        privateKey: process.env.EMAILJS_PRIVATE_KEY // Toujours nécessaire
      }
    );

    return res.status(200).json({ 
      success: true,
      message: "Email envoyé avec succès"
    });

  } catch (error: any) {
    console.error('Erreur EmailJS complète:', error);
    
    // Message d'erreur plus détaillé
    const errorMessage = error.response?.data?.message 
      || error.message 
      || "Erreur lors de l'envoi de l'email";

    return res.status(500).json({
      success: false,
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}