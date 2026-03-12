"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Heart, Waves, Star, Sparkles } from "lucide-react";

const WA_NUMBER = "255742243243";
const waMsg = encodeURIComponent(
  "Hello! I'd love to plan a trip to Mafia Island with Memories by Lee Travels. Could you help us?"
);

export default function MafiaSpotlightSection() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/BLACK COUPLE IN MAFIA.jpg"
          alt="Couple on Mafia Island, Tanzania"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
      </div>

      <div className="section-container relative z-10 py-28 lg:py-36">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#f5921e]/15 border border-[#f5921e]/40 text-[#f5921e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            <Sparkles size={13} />
            Tanzania&apos;s Hidden Paradise
          </motion.div>

          {/* Headline — no em dashes */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Mafia Island:{" "}
            <span className="text-[#f5921e]">A Couple&apos;s Paradise</span>{" "}
            Like No Other
          </motion.h2>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/75 text-lg leading-relaxed mb-8"
          >
            While the world rushes to Zanzibar, Mafia Island waits. Untouched,
            unhurried, and breathtakingly beautiful. This is where couples come
            to truly disappear. Powder-white beaches stretching to the horizon,
            crystal-clear Indian Ocean waters, and some of the most intimate
            boutique hotels in all of Africa. No crowds. No noise. Just you,
            your partner, and a paradise made for two.
          </motion.p>

          {/* Highlight pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {[
              { icon: <Waves size={14} />, label: "Pristine Private Beaches" },
              { icon: <Heart size={14} />, label: "Romantic Boutique Hotels" },
              { icon: <Star size={14} />, label: "Whale Shark Diving" },
              { icon: <Sparkles size={14} />, label: "Secluded Honeymoon Escape" },
            ].map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <span className="text-[#f5921e]">{pill.icon}</span>
                {pill.label}
              </span>
            ))}
          </motion.div>

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="border-l-4 border-[#f5921e] pl-5 mb-10"
          >
            <p className="text-white/60 italic text-base leading-relaxed">
              &ldquo;The honeymoon hotspot the world hasn&apos;t discovered yet.
              We&apos;ll take you there before everyone else does.&rdquo;
            </p>
            <cite className="text-[#f5921e] text-sm font-semibold not-italic mt-2 block">
              Memories by Lee Travels
            </cite>
          </motion.blockquote>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f5921e] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d97a10] transition-all duration-200 hover:scale-105 shadow-2xl shadow-orange-500/30 text-base"
            >
              <Heart size={16} />
              Plan Our Mafia Island Escape
            </a>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200 text-base backdrop-blur-sm"
            >
              Explore All Destinations
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
