"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plane, Star, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/memories by less backgroudn her.jpg"
          alt="Memories by Lee Travels"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/50" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left — Copy */}
          <div className="flex flex-col justify-center">
            {/* Chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#f5921e]/15 border border-[#f5921e]/30 text-[#f5921e] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5921e] animate-pulse" />
              10+ Years of Aviation &amp; Travel Expertise
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            >
              Beyond Travel,
              <br />
              <span className="text-[#f5921e]">We Create</span>
              <br />
              <span className="text-[#f5921e]">Memories.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/65 text-base lg:text-lg leading-relaxed mb-8 max-w-lg"
            >
              We curate bespoke luxury travel, seamless corporate solutions, and the dream
              honeymoons you&apos;ll tell your grandchildren about.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/honeymoon"
                className="bg-[#f5921e] hover:bg-[#d97a10] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 flex items-center gap-2"
              >
                View Honeymoon Packages
                <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#26abe0] text-[#26abe0] hover:bg-[#26abe0] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
              >
                Book a Flight
              </Link>
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 sm:gap-8"
            >
              {[
                { value: "10+", label: "Years Experience" },
                { value: "50+", label: "Global Partners" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#f5921e]">{stat.value}</div>
                  <div className="text-white/50 text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image & Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Dashed ring */}
            <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-dashed border-[#f5921e]/30 animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-[360px] h-[360px] rounded-full border border-[#26abe0]/20" />

            {/* Circle image */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#f5921e]/40 shadow-2xl shadow-orange-500/20">
              <Image
                src="/images/HERO IMAGE.png"
                alt="Luxury Travel"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Badge 1 — Aviation Insider */}
            <div className="absolute top-6 -right-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
              <div className="w-9 h-9 rounded-full bg-[#f5921e] flex items-center justify-center flex-shrink-0">
                <Plane size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white text-xs font-bold">Aviation Insider</p>
                <p className="text-white/60 text-[10px]">Best Routes &amp; Rates</p>
              </div>
            </div>

            {/* Badge 2 — Honeymoon Experts */}
            <div className="absolute bottom-10 -left-6 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
              <div className="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center">
                <span className="text-lg">💍</span>
              </div>
              <div>
                <p className="text-navy text-xs font-bold">Honeymoon Experts</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="text-[#f5921e] fill-[#f5921e]" />
                  ))}
                </div>
              </div>
            </div>

            {/* Badge 3 — Destinations */}
            <div className="absolute -bottom-2 right-8 bg-[#f5921e] rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
              <Globe size={14} className="text-white" />
              <span className="text-white text-xs font-bold">50+ Destinations</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-9 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2.5 rounded-full bg-white/40 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
