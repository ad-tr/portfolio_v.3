import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Adrien Tranchant - Portfolio IA",
  description: "Portfolio d'Adrien Tranchant, étudiant passionné par l'intelligence artificielle et le deep learning",
  keywords: ["Adrien Tranchant", "Intelligence Artificielle", "Deep Learning", "Machine Learning", "Portfolio", "IA"],
  authors: [{ name: "Adrien Tranchant" }],
  openGraph: {
    title: "Adrien Tranchant - Portfolio IA",
    description: "Portfolio d'Adrien Tranchant, étudiant passionné par l'intelligence artificielle",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
