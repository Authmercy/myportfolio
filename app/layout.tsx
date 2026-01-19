import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nahsang Mercy | Data & Fullstack Developer",
    template: "%s | Nahsang Mercy",
  },
  description:
    "Portfolio de Nahsang Mercy, développeuse Data & Fullstack. Projets en Data Analysis, Web Development, IA et solutions digitales modernes.",
  keywords: [
    "Nahsang Mercy",
    "Data Analyst",
    "Data Engineer",
    "Fullstack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Python",
    "Power BI",
    "SQL",
    "IA",
  ],
  authors: [{ name: "Nahsang Mercy" }],
  creator: "Nahsang Mercy",
  openGraph: {
    title: "Nahsang Mercy | Data & Fullstack Developer",
    description:
      "Découvrez les projets et compétences de Nahsang Mercy en Data, Web et Intelligence Artificielle.",
    url: "https://nahsangmercytangham.vercel.app/",
    siteName: "Portfolio Nahsang Mercy",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
