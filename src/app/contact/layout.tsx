import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Memories by Lee Travels — Dar es Salaam, Tanzania",
  description:
    "Get in touch with Memories by Lee Travels. Call, WhatsApp, or message us to start planning your dream holiday. Based in Dar es Salaam, Tanzania — serving travellers worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Memories by Lee Travels",
    description:
      "Reach us via WhatsApp, phone, or our contact form. Based in Dar es Salaam, Tanzania. Ready to plan your next adventure.",
    url: "https://memoriesbylee.co.tz/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
