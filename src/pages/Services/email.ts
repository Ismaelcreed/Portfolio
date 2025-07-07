import type { NextApiRequest, NextApiResponse } from "next";
import emailjs from "@emailjs/browser";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const result = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID as string,
        process.env.EMAILJS_TEMPLATE_ID as string,
        {
          from_name: name,
          from_email: email,
          message,
        },
        process.env.EMAILJS_PUBLIC_KEY as string
      );

      res.status(200).json({ success: true, result });
    } catch (error: any) {
      console.error("Erreur EmailJS :", error);
      res.status(500).json({ success: false, error: error.text || "Erreur inconnue" });
    }
  } else {
    res.status(405).json({ success: false, message: "Méthode non autorisée" });
  }
}
