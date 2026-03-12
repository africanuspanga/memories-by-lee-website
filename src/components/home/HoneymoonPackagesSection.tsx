"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Crown, Gem, Sparkles } from "lucide-react";

const tiers = [
  {
    tier: 1,
    level: "Economy",
    name: "Silver Package",
    price: "From TZS 2M",
    icon: Star,
    image: "/honeymoon/istockphoto-1454307094-612x612.jpg",
    accent: "#9ca3af",
    accentBg: "from-gray-900/95 via-gray-800/80 to-gray-700/40",
    badge: "bg-gradient-to-r from-gray-400 to-gray-300",
    badgeText: "text-gray-900",
    highlights: ["3–5 nights stay", "Economy class flights", "4-star hotel", "Airport transfers", "Romantic dinner setup"],
  },
  {
    tier: 2,
    level: "Standard",
    name: "Gold Package",
    price: "From TZS 4M",
    icon: Gem,
    image: "/honeymoon/istockphoto-173096906-612x612.jpg",
    accent: "#f5921e",
    accentBg: "from-amber-900/95 via-amber-800/75 to-amber-700/30",
    badge: "bg-gradient-to-r from-[#f5921e] to-amber-400",
    badgeText: "text-white",
    highlights: ["5–7 nights stay", "Business class option", "5-star resort", "VIP airport welcome", "Couples activities included"],
  },
  {
    tier: 3,
    level: "Luxury",
    name: "Platinum Package",
    price: "From TZS 6M",
    icon: Sparkles,
    image: "/honeymoon/istockphoto-178507751-612x612.jpg",
    accent: "#26abe0",
    accentBg: "from-slate-900/95 via-slate-800/80 to-slate-700/40",
    badge: "bg-gradient-to-r from-[#26abe0] to-sky-300",
    badgeText: "text-white",
    highlights: ["7–10 nights stay", "Business class flights", "Private villa option", "Personal concierge", "Premium insurance + hamper"],
  },
  {
    tier: 4,
    level: "Ultra Luxury / VIP",
    name: "Royal Experience",
    price: "From TZS 8M",
    icon: Crown,
    image: "/honeymoon/istockphoto-2222419893-612x612.jpg",
    accent: "#d4af37",
    accentBg: "from-navy/98 via-navy/85 to-navy/50",
    badge: "bg-gradient-to-r from-yellow-600 to-yellow-400",
    badgeText: "text-navy",
    highlights: ["10+ nights luxury", "First / Business class", "Private villa & charter option", "24/7 full concierge", "Exclusive VIP experiences"],
  },
];

export default function HoneymoonPackagesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#f5921e]/10 border border-[#f5921e]/25 text-[#f5921e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
          >
            💍 Romantic Escape Packages
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-navy mb-4"
          >
            Honeymoon Packages{" "}
            <span className="text-[#f5921e]">for Every Dream</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base max-w-lg mx-auto"
          >
            Four tiers of luxury. All fully customisable. Prices adjust by season and destination.
          </motion.p>
        </div>

        {/* Tier cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400"
              >
                {/* Background image */}
                <div className="relative h-72 sm:h-80">
                  <Image
                    src={tier.image}
                    alt={tier.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${tier.accentBg}`} />

                  {/* Tier number top-left */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <span className="text-white font-black text-sm">{tier.tier}</span>
                  </div>

                  {/* Badge top-right */}
                  <div className={`absolute top-4 right-4 ${tier.badge} ${tier.badgeText} text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full`}>
                    {tier.level}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={15} style={{ color: tier.accent }} />
                      <span className="text-white/60 text-xs uppercase tracking-wider font-semibold">{tier.level}</span>
                    </div>
                    <h3 className="text-white font-black text-xl mb-0.5">{tier.name}</h3>
                    <p className="font-bold text-base mb-4" style={{ color: tier.accent }}>{tier.price}</p>

                    <ul className="flex flex-col gap-1.5 mb-5">
                      {tier.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: tier.accent }} />
                          <span className="text-white/75 text-xs leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/honeymoon"
                      className="block text-center py-2.5 rounded-xl font-bold text-xs text-white border border-white/30 hover:bg-white/15 transition-all duration-200 backdrop-blur-sm"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm mb-5 italic">All prices adjust depending on season and destination chosen.</p>
          <Link
            href="/honeymoon"
            className="inline-flex items-center gap-2 bg-[#f5921e] hover:bg-[#d97a10] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/25 hover:scale-105"
          >
            Explore All Honeymoon Packages →
          </Link>
        </div>
      </div>
    </section>
  );
}
