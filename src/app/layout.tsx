import type { Metadata } from "next";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruno Ismael | Portfolio",
  description: "Portfolio de développement",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-poppins">
        <NavBar />
        <div className="pt-20">{children}</div>
         <Footer />
      </body>
    </html>
  );
}