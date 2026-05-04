import "./globals.css";
import { IBM_Plex_Mono, Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Kaki Himavara Sagar — ECE Engineer",
  description:
    "Portfolio of Kaki Himavara Sagar, an Electronics and Communication Engineering graduate from NIT Calicut working across signal systems, VLSI, antenna design, and AI agents.",
  keywords: [
    "Himavara Sagar",
    "Kaki Himavara Sagar",
    "Portfolio",
    "NIT Calicut",
    "Electronics and Communication Engineering",
    "Signal Processing",
    "VLSI",
    "Antenna Design",
    "AI Agents",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
