import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

const WA_NUMBER = "255742243243";
const WA_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in booking a trip with Memories by Lee Travels. Could you please help me?"
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/memories by lee desktop view logo.png"
                alt="Memories by Lee Travels"
                width={160}
                height={60}
                className="h-12 w-auto mb-5"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Tanzania&apos;s premier luxury travel agency. Led by a CEO with 10+ years of
              aviation expertise, we craft bespoke journeys that become lifelong memories.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={16} className="text-[#f5921e] flex-shrink-0 mt-0.5" />
                <span>Kijitonyama / Polisi Mabatini, Dar es Salaam, Tanzania</span>
              </div>
              <a
                href="tel:+255742243243"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} className="text-[#f5921e]" />
                +255 742 243 243
              </a>
              <a
                href="tel:+255754243207"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} className="text-[#f5921e]" />
                +255 754 243 207
              </a>
              <a
                href="mailto:memoriesbyleetravels@gmail.com"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Mail size={16} className="text-[#f5921e]" />
                memoriesbyleetravels@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/memoriesbylee/", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                {
                  icon: MessageCircle,
                  href: `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`,
                  label: "WhatsApp",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f5921e] flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Meet the CEO", href: "/about#ceo" },
                { label: "Our Story", href: "/about#story" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Flight Bookings", href: "/services#flights" },
                { label: "Honeymoon Packages", href: "/honeymoon" },
                { label: "Corporate Travel", href: "/services#corporate" },
                { label: "Private Charters", href: "/services#charters" },
                { label: "VIP Ground Services", href: "/services#vip" },
                { label: "Luxury Stays", href: "/services#stays" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Destinations
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Zanzibar", href: "/destinations#zanzibar" },
                { label: "Serengeti", href: "/destinations#serengeti" },
                { label: "Mafia Island", href: "/destinations#mafia" },
                { label: "Dubai", href: "/destinations#dubai" },
                { label: "Bali", href: "/destinations#bali" },
                { label: "Turkey", href: "/destinations#turkey" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-3">
          <a
            href="https://www.driftmark.co.tz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-sm hover:text-white/40 transition-colors text-center sm:text-left"
            style={{ textDecoration: "none" }}
          >
            © {year} Memories by Lee Travels. All rights reserved.
          </a>
          <p className="text-white/40 text-sm italic text-center sm:text-right">
            Travel made simple, memorable, and personalized.
          </p>
        </div>
      </div>
    </footer>
  );
}
