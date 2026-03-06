"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/recommednation logos copy/google-reviews-logo.png", alt: "Google Reviews" },
  { src: "/recommednation logos copy/TripAdvisor_Logo.svg.png", alt: "TripAdvisor" },
  { src: "/recommednation logos copy/trust-pilot-stacked-black.svg", alt: "Trustpilot" },
  { src: "/recommednation logos copy/GetYourGuide_2018.webp", alt: "GetYourGuide" },
  { src: "/recommednation logos copy/Safari-Booking-Logo.png", alt: "Safari Bookings" },
];

const trustStats = [
  { value: "4.9/5", label: "Average Rating", color: "orange" },
  { value: "10K+", label: "Happy Travellers", color: "blue" },
  { value: "100%", label: "5-Star Reviews", color: "orange" },
];

export default function RecommendedBySection() {
  const doubledLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="section-container mb-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#f5921e] text-xs font-bold uppercase tracking-widest mb-4"
          >
            ⭐ Trusted &amp; Recognised By
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-navy mb-10"
          >
            Recommended by the World&apos;s{" "}
            <span className="text-[#f5921e]">Best</span> Travel Platforms
          </motion.h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-wrapper relative overflow-hidden mb-12">
        <div className="flex gap-8 marquee-track animate-marquee" style={{ width: "max-content" }}>
          {doubledLogos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white rounded-2xl px-8 py-5 flex items-center justify-center border border-gray-100 shadow-sm"
              style={{ height: 80, minWidth: 180 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="object-contain h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Trust stats */}
      <div className="section-container">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`text-4xl font-black mb-1 ${
                  stat.color === "orange" ? "text-[#f5921e]" : "text-[#26abe0]"
                }`}
              >
                {stat.value}
              </div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
