import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Memories by Lee Travels | Luxury Travel & Honeymoon Specialists Tanzania",
  description:
    "Tanzania's premier luxury travel agency. Bespoke honeymoon packages to Zanzibar, Mafia Island & beyond, corporate travel, private charters, and unforgettable experiences. Led by CEO Hellen Rhobi with 10+ years of aviation expertise.",
  keywords:
    "luxury travel Tanzania, honeymoon packages Zanzibar, Mafia Island Tanzania, Tanzania travel agency, Serengeti safari, private charter flights, corporate travel Tanzania, Memories by Lee, Hellen Rhobi",
  metadataBase: new URL("https://www.memoriesbylee.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Memories by Lee Travels | Luxury Travel & Honeymoon Specialists",
    description:
      "Tanzania's premier luxury travel agency. Bespoke honeymoon packages, safari adventures, and unforgettable journeys curated by aviation expert Hellen Rhobi.",
    url: "https://www.memoriesbylee.com",
    siteName: "Memories by Lee Travels",
    locale: "en_TZ",
    type: "website",
    images: [
      {
        url: "/images/HERO IMAGE.png",
        width: 1200,
        height: 630,
        alt: "Memories by Lee Travels — Luxury Travel Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memories by Lee Travels | Luxury Travel Tanzania",
    description:
      "Bespoke honeymoon packages, Serengeti safaris, Mafia Island escapes & more. Tanzania's premier luxury travel agency.",
    images: ["/images/HERO IMAGE.png"],
  },
  verification: {
    google: "googlec84a6bc1ef92d42b",
  },
  icons: {
    icon: "/images/memories by lee favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="google-site-verification" content="googlec84a6bc1ef92d42b" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
