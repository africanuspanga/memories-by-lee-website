import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Memories by Lee Travels — Tanzania's Luxury Travel Experts",
  description:
    "Meet CEO Hellen Rhobi and the team behind Tanzania's premier luxury travel agency. Over 10 years of aviation expertise, a passion for Africa, and a commitment to crafting bespoke journeys.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Memories by Lee Travels",
    description:
      "Meet CEO Hellen Rhobi — 10+ years in aviation, now crafting bespoke luxury travel experiences across Tanzania and the world.",
    url: "https://memoriesbylee.co.tz/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
