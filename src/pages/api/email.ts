import type { NextApiRequest, NextApiResponse } from 'next';
import emailjs from '@emailjs/nodejs';

interface EmailJSError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
  stack?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "Tous les champs sont obligatoires" 
      });
    }

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        from_name: name,
        from_email: email,
        reply_to: email,  
        message: message,
        time: new Date().toLocaleString('fr-FR', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY
      }
    );

    return res.status(200).json({ 
      success: true,
      message: "Email envoyé avec succès"
    });

  } catch (error: unknown) {
    console.error('Erreur EmailJS complète:', error);
    
    // Vérification du type de l'erreur
    let errorMessage = "Erreur lors de l'envoi de l'email";
    let stack: string | undefined;

    if (typeof error === 'object' && error !== null) {
      const emailjsError = error as EmailJSError;
      errorMessage = emailjsError.response?.data?.message 
        || emailjsError.message 
        || errorMessage;
      stack = emailjsError.stack;
    }

    return res.status(500).json({
      success: false,
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? stack : undefined
    });
  }
}