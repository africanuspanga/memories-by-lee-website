import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Memories by Lee Travels — Flights, Honeymoons & More",
  description:
    "From international flight bookings and private charters to bespoke honeymoon packages and VIP ground services — Memories by Lee Travels handles every detail of your journey.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Travel Services | Memories by Lee Travels",
    description:
      "Flight bookings, private charters, honeymoon packages, corporate travel, and VIP ground services. Tanzania's full-service luxury travel agency.",
    url: "https://memoriesbylee.co.tz/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
