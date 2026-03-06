"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const highlights = [
  { emoji: "🏝", label: "Boutique Luxury Stays" },
  { emoji: "🌹", label: "Exclusive Romantic Experiences" },
  { emoji: "✈", label: "VIP Touches from Departure to Arrival" },
  { emoji: "🎁", label: "Thoughtful Personalised Details" },
];

const destinations = ["Zanzibar", "Maldives", "Dubai", "Bali", "Serengeti", "Turkey"];

export default function HoneymoonSection() {
  return (
    <section className="py-24 bg-navy overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#f5921e]/15 border border-[#f5921e]/30 text-[#f5921e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            >
              💍 The Bread &amp; Butter
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Your First Journey
              <br />
              as{" "}
              <span className="text-[#f5921e]">&quot;We.&quot;</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/65 text-base leading-relaxed mb-8"
            >
              At Memories by Lee, we know the honeymoon is the most important trip you&apos;ll
              ever take. We combine boutique luxury stays, exclusive romantic experiences,
              and thoughtful details to ensure your first chapter together is nothing short
              of legendary.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-white/8 border border-white/10 rounded-xl px-4 py-3"
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-white/80 text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Destination chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-8"
            >
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">
                Popular Destinations:
              </p>
              <div className="flex flex-wrap gap-2">
                {destinations.map((d) => (
                  <span
                    key={d}
                    className="text-[#f5921e] border border-[#f5921e]/40 text-xs font-medium px-3 py-1 rounded-full hover:bg-[#f5921e]/10 transition-colors cursor-default"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/honeymoon"
                className="inline-flex items-center gap-2 bg-[#f5921e] hover:bg-[#d97a10] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/30 hover:scale-105"
              >
                Explore Honeymoon Packages
                <span>→</span>
              </Link>
            </motion.div>
          </div>

          {/* Right — Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main large image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/images/DESTINATION-ZANZIBAR.jpg"
                alt="Zanzibar, Tanzania"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-[#f5921e] fill-[#f5921e]" />
                  ))}
                </div>
                <p className="text-white font-bold text-lg">Zanzibar, Tanzania</p>
                <p className="text-white/70 text-sm">Beachfront Paradise</p>
              </div>
            </div>

            {/* Two small images */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/DESTINATION BALI HONEY MOON.jpg"
                  alt="Bali"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">Bali</p>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/DESTINATION TURKEY HONEYMOON.jpg"
                  alt="Turkey"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">Turkey</p>
              </div>
            </div>

            {/* Floating review card */}
            <div className="hidden sm:block absolute -top-4 -right-2 sm:-right-4 bg-white rounded-2xl p-4 shadow-2xl w-40 sm:w-44">
              <div className="flex gap-0.5 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-[#f5921e] fill-[#f5921e]" />
                ))}
              </div>
              <p className="text-navy text-xs font-semibold italic leading-snug">
                &quot;The most magical honeymoon!&quot;
              </p>
              <p className="text-gray-400 text-xs mt-1">— Amina &amp; Jamal</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
