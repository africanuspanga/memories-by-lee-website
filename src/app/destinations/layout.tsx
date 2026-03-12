import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations | Memories by Lee Travels — Zanzibar, Serengeti, Mafia Island & More",
  description:
    "Explore handpicked luxury destinations — Zanzibar beaches, Serengeti safaris, Mafia Island escapes, Dubai luxury, Turkey's Cappadocia, and beyond. Let us craft your perfect journey.",
  alternates: { canonical: "/destinations" },
  openGraph: {
    title: "Top Travel Destinations | Memories by Lee Travels",
    description:
      "Zanzibar, Serengeti, Mafia Island, Dubai, Turkey, Bali, and more. Discover the world's most extraordinary destinations with Tanzania's premier luxury travel agency.",
    url: "https://memoriesbylee.co.tz/destinations",
  },
};

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
