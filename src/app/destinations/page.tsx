"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Star, Clock, MapPin } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";

const WA_NUMBER = "255742243243";

const destinations = [
  {
    id: "zanzibar",
    name: "Zanzibar",
    country: "Tanzania",
    rating: 4.9,
    description:
      "Pristine white-sand beaches, turquoise Indian Ocean waters, and the UNESCO World Heritage-listed Stone Town. Zanzibar is Tanzania's crown jewel — perfect for beach honeymoons, cultural exploration, and pure relaxation.",
    highlights: [
      "Nungwi Beach",
      "Stone Town",
      "Spice Tours",
      "Mnemba Island Snorkeling",
      "Sunset Dhow Cruise",
    ],
    bestFor: ["Honeymoons", "Beach Escape", "Culture"],
    duration: "4–7 days recommended",
    image: "/images/DESTINATION-ZANZIBAR.jpg",
    color: "orange",
  },
  {
    id: "serengeti",
    name: "Serengeti",
    country: "Tanzania",
    rating: 5.0,
    description:
      "Home to the world's greatest wildlife spectacle — the Great Migration. Over 1.5 million wildebeest cross the Serengeti plains in an awe-inspiring natural drama. Stay in luxury tented camps under a blanket of stars.",
    highlights: [
      "Great Migration",
      "Big Five Game Drives",
      "Luxury Tented Camps",
      "Balloon Safaris",
      "Bush Dinners",
    ],
    bestFor: ["Safari", "Wildlife", "Luxury Camping"],
    duration: "5–8 days recommended",
    image: "/images/Destination - serengeti.jpg",
    color: "blue",
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    rating: 4.8,
    description:
      "The Island of the Gods offers emerald rice terraces, ancient Hindu temples, and a wellness culture unlike anywhere on earth. Bali's private pool villas and rooftop restaurants make it the ultimate romantic escape.",
    highlights: [
      "Ubud Rice Terraces",
      "Uluwatu Temple",
      "Private Pool Villas",
      "Couples Spa",
      "Cooking Classes",
    ],
    bestFor: ["Honeymoons", "Wellness", "Romance"],
    duration: "7–10 days recommended",
    image: "/images/DESTINATION BALI HONEY MOON.jpg",
    color: "orange",
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    rating: 4.9,
    description:
      "Where ambition meets opulence. Dubai offers a heady mix of record-breaking architecture, desert adventures, world-class dining, and tax-free shopping. A city that redefines what luxury means.",
    highlights: [
      "Burj Khalifa",
      "Desert Safari",
      "Dubai Marina",
      "Gold Souk",
      "Palm Jumeirah",
    ],
    bestFor: ["City Luxury", "Shopping", "Adventure"],
    duration: "5–7 days recommended",
    image: "/images/destination-dubai.jpg",
    color: "blue",
  },
  {
    id: "turkey",
    name: "Turkey",
    country: "Türkiye",
    rating: 4.8,
    description:
      "Float above Cappadocia's fairy chimneys in a hot air balloon at sunrise. Cruise the turquoise Mediterranean coast on a private gulet. Turkey bridges East and West with breathtaking beauty and rich history.",
    highlights: [
      "Cappadocia Balloon",
      "Cave Hotels",
      "Bosphorus Cruise",
      "Ephesus Ruins",
      "Turkish Hamam",
    ],
    bestFor: ["Culture & Romance", "History", "Adventure"],
    duration: "8–12 days recommended",
    image: "/images/DESTINATION TURKEY HONEYMOON.jpg",
    color: "orange",
  },
  {
    id: "south-africa",
    name: "South Africa",
    country: "South Africa",
    rating: 4.7,
    description:
      "A country of extraordinary diversity — from the Big Five on private game reserves to the world-class vineyards of Stellenbosch and the dramatic beauty of the Cape Peninsula. South Africa delivers an unforgettable luxury experience.",
    highlights: [
      "Private Game Reserve",
      "Table Mountain",
      "Cape Winelands",
      "Robben Island",
      "Garden Route",
    ],
    bestFor: ["Safari Luxury", "Wine & Dine", "Scenic Beauty"],
    duration: "8–12 days recommended",
    image: "/images/DESTINATION SOUTH AFRICA HONEY MOON.jpg",
    color: "blue",
  },
  {
    id: "mafia-island",
    name: "Mafia Island",
    country: "Tanzania",
    rating: 4.9,
    description:
      "Tanzania's best-kept secret. Mafia Island is an untouched paradise of crystal-clear waters, vibrant coral reefs, and pristine white-sand beaches — free from the crowds. Dive with whale sharks, explore mangrove forests, and experience raw, authentic Tanzania.",
    highlights: [
      "Whale Shark Diving",
      "Chole Bay Marine Park",
      "Pristine Coral Reefs",
      "Mangrove Forests",
      "Remote Beach Seclusion",
    ],
    bestFor: ["Diving & Snorkeling", "Beach Escape", "Off-the-Beaten-Path"],
    duration: "4–7 days recommended",
    image: "/images/mafia island.jpg",
    color: "orange",
  },
];

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-navy flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/DESTINATION TURKEY HONEYMOON.jpg"
            alt="Destinations"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        </div>
        <div className="section-container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#f5921e]/15 border border-[#f5921e]/30 text-[#f5921e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            🌍 The World Awaits
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight mb-6"
          >
            Discover Your{" "}
            <span className="text-[#f5921e]">Next Adventure</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl leading-relaxed"
          >
            From Tanzania&apos;s pristine beaches to the ancient streets of Istanbul — we
            craft personalised journeys to the world&apos;s most extraordinary destinations.
          </motion.p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="flex flex-col gap-20">
            {destinations.map((dest, index) => {
              const isOrange = dest.color === "orange";
              const isEven = index % 2 === 0;
              const waMsg = encodeURIComponent(
                `Hello! I'd like to plan a trip to ${dest.name}, ${dest.country}. Could you please help me?`
              );
              return (
                <React.Fragment key={dest.id}>
                <motion.div
                  id={dest.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center`}
                >
                  {/* Image */}
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl group">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                          <Star size={13} className="text-[#f5921e] fill-[#f5921e]" />
                          <span className="text-navy text-sm font-bold">{dest.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={16} className={isOrange ? "text-[#f5921e]" : "text-[#26abe0]"} />
                      <span className={`text-sm font-medium ${isOrange ? "text-[#f5921e]" : "text-[#26abe0]"}`}>
                        {dest.country}
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-navy mb-4">{dest.name}</h2>
                    <p className="text-gray-500 leading-relaxed mb-6">{dest.description}</p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <p className="text-navy font-semibold text-sm mb-3">Top Highlights</p>
                      <div className="flex flex-wrap gap-2">
                        {dest.highlights.map((h) => (
                          <span
                            key={h}
                            className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                              isOrange
                                ? "border-orange-200 bg-orange-50 text-[#f5921e]"
                                : "border-blue-200 bg-blue-50 text-[#26abe0]"
                            }`}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Best For + Duration */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <span className="text-navy font-medium">Best for:</span>
                        {dest.bestFor.join(" · ")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {dest.duration}
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 ${
                        isOrange
                          ? "bg-[#f5921e] text-white hover:bg-[#d97a10] shadow-lg shadow-orange-500/25"
                          : "bg-[#26abe0] text-white hover:bg-[#1a8fc0] shadow-lg shadow-blue-500/25"
                      }`}
                    >
                      Plan My {dest.name} Trip →
                    </a>
                  </div>
                </motion.div>
                {index < destinations.length - 1 && <SectionDivider />}
                </React.Fragment>
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
            Don&apos;t See Your{" "}
            <span className="text-[#f5921e]">Dream Destination?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-8"
          >
            We travel to 50+ destinations worldwide. Tell us where you want to go and
            we&apos;ll make it happen.
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
              Tell Us Your Dream Destination →
            </Link>
            <Link
              href="/honeymoon"
              className="border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all"
            >
              View Honeymoon Packages
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
