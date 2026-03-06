"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";

const WA_NUMBER = "255742243243";
const WA_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in a honeymoon package with Memories by Lee Travels. Could you please help me?"
);

const inclusions = [
  "Fully bespoke itinerary planning",
  "Return flights (economy, business or first class)",
  "Airport meet & greet service",
  "Private airport transfers",
  "Hand-selected luxury accommodation",
  "Curated romantic activities",
  "Travel insurance options",
  "Visa assistance where needed",
  "24/7 dedicated trip support",
  "Welcome honeymoon hamper",
];

const packages = [
  {
    id: "zanzibar",
    name: "Zanzibar Beach Bliss",
    location: "Zanzibar, Tanzania",
    duration: "5–7 Days",
    tag: "Most Popular",
    tagColor: "orange",
    highlights: [
      "Beachfront villa",
      "Sunset dhow cruise",
      "Spice island tour",
      "Private beach dining",
    ],
    image: "/images/DESTINATION-ZANZIBAR.jpg",
  },
  {
    id: "serengeti",
    name: "Serengeti Safari Romance",
    location: "Serengeti, Tanzania",
    duration: "6–8 Days",
    tag: "Adventure",
    tagColor: "blue",
    highlights: [
      "Luxury tented camp",
      "Private game drives",
      "Sundowner cocktails",
      "Bush dinner experience",
    ],
    image: "/images/Destination - serengeti.jpg",
  },
  {
    id: "bali",
    name: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    duration: "7–10 Days",
    tag: "Tropical",
    tagColor: "orange",
    highlights: [
      "Private villa with pool",
      "Couples spa",
      "Temple sunrise tour",
      "Cooking class",
    ],
    image: "/images/DESTINATION BALI HONEY MOON.jpg",
  },
  {
    id: "dubai",
    name: "Dubai Luxury Getaway",
    location: "Dubai, UAE",
    duration: "5–7 Days",
    tag: "City Luxury",
    tagColor: "blue",
    highlights: [
      "5-star downtown hotel",
      "Desert safari",
      "Dubai Marina dinner",
      "Gold souk experience",
    ],
    image: "/images/destination-dubai.jpg",
  },
  {
    id: "turkey",
    name: "Turkey Romance & Culture",
    location: "Türkiye",
    duration: "8–10 Days",
    tag: "Culture & Romance",
    tagColor: "orange",
    highlights: [
      "Cappadocia hot air balloon",
      "Cave hotel stay",
      "Bosphorus cruise",
      "Turkish hamam",
    ],
    image: "/images/DESTINATION TURKEY HONEYMOON.jpg",
  },
  {
    id: "south-africa",
    name: "South Africa Wild Luxury",
    location: "South Africa",
    duration: "7–10 Days",
    tag: "Safari & Wine",
    tagColor: "blue",
    highlights: [
      "Private game reserve",
      "Big Five safari",
      "Cape Winelands tour",
      "Table Mountain sunrise",
    ],
    image: "/images/DESTINATION SOUTH AFRICA HONEY MOON.jpg",
  },
];

export default function HoneymoonPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] bg-navy flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/DESTINATION BALI HONEY MOON.jpg"
            alt="Honeymoon"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/50" />
        </div>
        <div className="section-container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#f5921e]/15 border border-[#f5921e]/30 text-[#f5921e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            💍 Honeymoon Specialists
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight mb-6"
          >
            Begin Your &quot;Happily Ever After&quot;{" "}
            <span className="text-[#f5921e]">in Paradise.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/65 text-lg max-w-2xl leading-relaxed mb-8"
          >
            For the Tanzanian couple seeking the extraordinary. We curate romantic, bespoke
            honeymoon journeys — because after the wedding, you deserve a sanctuary.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="bg-[#f5921e] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#d97a10] transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              Plan My Honeymoon →
            </Link>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#f5921e] text-xs font-bold uppercase tracking-widest mb-4"
            >
              ✓ What&apos;s Included
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-navy"
            >
              Everything Covered —{" "}
              <span className="text-[#f5921e]">Zero Stress</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {inclusions.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-2xl bg-orange-50/60 border border-orange-100"
              >
                <div className="w-6 h-6 rounded-full bg-[#f5921e] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-navy text-sm font-medium leading-snug">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Packages */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#f5921e] text-xs font-bold uppercase tracking-widest mb-4"
            >
              🌍 Destinations
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-navy mb-4"
            >
              Curated Honeymoon <span className="text-[#f5921e]">Experiences</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg max-w-xl mx-auto"
            >
              All packages are fully customisable. These are starting points — we tailor
              every detail to your vision.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => {
              const isOrange = pkg.tagColor === "orange";
              const enquiryMsg = encodeURIComponent(
                `Hello! I'm interested in the ${pkg.name} honeymoon package (${pkg.location}, ${pkg.duration}). Could you please provide more details?`
              );
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                    <span
                      className={`absolute top-3 left-3 text-white text-[11px] font-bold px-3 py-1 rounded-full ${
                        isOrange ? "bg-[#f5921e]" : "bg-[#26abe0]"
                      }`}
                    >
                      {pkg.tag}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-navy font-bold text-lg leading-tight">{pkg.name}</h3>
                        <p className="text-gray-500 text-sm mt-0.5">{pkg.location}</p>
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ml-2 ${
                          isOrange
                            ? "bg-orange-100 text-[#f5921e]"
                            : "bg-blue-100 text-[#26abe0]"
                        }`}
                      >
                        {pkg.duration}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5 mb-5">
                      {pkg.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              isOrange ? "bg-[#f5921e]" : "bg-[#26abe0]"
                            }`}
                          />
                          <span className="text-gray-500 text-sm">{h}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${enquiryMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                        isOrange
                          ? "bg-[#f5921e] text-white hover:bg-[#d97a10]"
                          : "bg-[#26abe0] text-white hover:bg-[#1a8fc0]"
                      }`}
                    >
                      Enquire About This Package
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="section-container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Your Dream Honeymoon is{" "}
            <span className="text-[#f5921e]">One Conversation Away.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-8 max-w-xl mx-auto"
          >
            Tell us your vision — beach, safari, city, or all three — and we&apos;ll craft
            the perfect plan for your first adventure as a couple.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="bg-[#f5921e] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#d97a10] transition-all hover:scale-105"
            >
              Plan My Honeymoon →
            </Link>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
