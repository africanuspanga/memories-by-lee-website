import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honeymoon Packages | Memories by Lee Travels — Zanzibar, Maldives & Mafia Island",
  description:
    "Bespoke honeymoon packages to Zanzibar, Mafia Island, Maldives, Bali, and beyond. Romantic beach escapes, private pool villas, and unforgettable moments — curated just for two.",
  alternates: { canonical: "/honeymoon" },
  openGraph: {
    title: "Honeymoon Packages | Memories by Lee Travels",
    description:
      "Zanzibar, Maldives, Mafia Island, Bali — bespoke honeymoon packages crafted for couples by Tanzania's premier luxury travel agency.",
    url: "https://memoriesbylee.co.tz/honeymoon",
  },
};

export default function HoneymoonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
