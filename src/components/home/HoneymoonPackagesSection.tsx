"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Crown, Gem, Sparkles } from "lucide-react";

const tiers = [
  {
    tier: 1,
    level: "Silver",
    name: "Silver Package",
    price: "From TZS 2M",
    icon: Star,
    image: "/honeymoon/istockphoto-1454307094-612x612.jpg",
    accent: "#9ca3af",
    badge: "bg-gradient-to-r from-gray-400 to-gray-300",
    badgeText: "text-gray-900",
    highlights: ["3–5 nights stay", "Return flights included", "4-star hotel", "Airport transfers", "Romantic dinner setup"],
  },
  {
    tier: 2,
    level: "Gold",
    name: "Gold Package",
    price: "From TZS 4M",
    icon: Gem,
    image: "/honeymoon/istockphoto-173096906-612x612.jpg",
    accent: "#f5921e",
    badge: "bg-gradient-to-r from-[#f5921e] to-amber-400",
    badgeText: "text-white",
    highlights: ["5–7 nights stay", "Economy or Business class", "5-star resort", "VIP airport welcome", "Couples activities included"],
  },
  {
    tier: 3,
    level: "Platinum",
    name: "Platinum Package",
    price: "From TZS 6M",
    icon: Sparkles,
    image: "/honeymoon/istockphoto-178507751-612x612.jpg",
    accent: "#26abe0",
    badge: "bg-gradient-to-r from-[#26abe0] to-sky-300",
    badgeText: "text-white",
    highlights: ["7–10 nights stay", "Business class flights", "Private villa option", "Personal concierge", "Premium insurance + hamper"],
  },
  {
    tier: 4,
    level: "Royal",
    name: "Royal Experience",
    price: "From TZS 8M",
    icon: Crown,
    image: "/honeymoon/istockphoto-2222419893-612x612.jpg",
    accent: "#d4af37",
    badge: "bg-gradient-to-r from-yellow-600 to-yellow-400",
    badgeText: "text-navy",
    highlights: ["10+ nights luxury stay", "First or Business class", "Private villa & charter option", "24/7 dedicated concierge", "Exclusive private experiences"],
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
            ✦ Honeymoon Packages
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-navy mb-4"
          >
            Your Perfect Honeymoon,{" "}
            <span className="text-[#f5921e]">Your Way</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base max-w-lg mx-auto"
          >
            Every package is fully tailored to your vision. Whether you&apos;re dreaming of beach bliss or a grand escape — we make it happen.
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
                className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Image — decorative only, no text overlay */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <Image
                    src={tier.image}
                    alt={tier.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  {/* Level badge */}
                  <div className={`absolute top-3 left-3 ${tier.badge} ${tier.badgeText} text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md`}>
                    {tier.level}
                  </div>
                  {/* Tier number */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 shadow-md flex items-center justify-center">
                    <span className="font-black text-sm" style={{ color: tier.accent }}>{tier.tier}</span>
                  </div>
                </div>

                {/* Card body — fully readable on white */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={16} style={{ color: tier.accent }} />
                    <h3 className="text-navy font-black text-base leading-tight">{tier.name}</h3>
                  </div>
                  <p className="font-bold text-xl mb-4" style={{ color: tier.accent }}>{tier.price}</p>
                  <ul className="flex flex-col gap-2 mb-5 flex-1">
                    {tier.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-[5px] flex-shrink-0" style={{ background: tier.accent }} />
                        <span className="text-gray-500 text-sm leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/honeymoon"
                    className="block text-center py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                    style={{ background: tier.accent }}
                  >
                    View Details →
                  </Link>
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
