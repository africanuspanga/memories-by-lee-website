"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
  {
    id: "zanzibar",
    name: "Zanzibar",
    country: "Tanzania",
    tag: "Beach Paradise",
    rating: 4.9,
    reviews: 128,
    description: "Pristine beaches, turquoise waters, and historic Stone Town",
    image: "/images/DESTINATION-ZANZIBAR.jpg",
  },
  {
    id: "serengeti",
    name: "Serengeti",
    country: "Tanzania",
    tag: "Safari & Wildlife",
    rating: 5.0,
    reviews: 94,
    description: "Witness the Great Migration on the world's most iconic safari",
    image: "/images/Destination - serengeti.jpg",
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    tag: "Romantic Escape",
    rating: 4.8,
    reviews: 203,
    description: "Lush rice terraces, spiritual retreats, and oceanfront villas",
    image: "/images/DESTINATION BALI HONEY MOON.jpg",
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    tag: "Luxury City",
    rating: 4.9,
    reviews: 176,
    description: "Iconic skyline, desert adventures, and unmatched luxury",
    image: "/images/destination-dubai.jpg",
  },
  {
    id: "turkey",
    name: "Turkey",
    country: "Türkiye",
    tag: "Culture & Romance",
    rating: 4.8,
    reviews: 89,
    description: "Hot air balloons over Cappadocia, rich history, and stunning coasts",
    image: "/images/DESTINATION TURKEY HONEYMOON.jpg",
  },
  {
    id: "south-africa",
    name: "South Africa",
    country: "South Africa",
    tag: "Safari Luxury",
    rating: 4.7,
    reviews: 112,
    description: "Big Five safaris, Cape Town's beauty, and private game reserves",
    image: "/images/DESTINATION SOUTH AFRICA HONEY MOON.jpg",
  },
];

export default function DestinationsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#f5921e] text-xs font-bold uppercase tracking-widest mb-3"
            >
              🌍 The Best for You
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-navy"
            >
              Top <span className="text-[#f5921e]">Destinations</span>
            </motion.h2>
          </div>

          {/* Carousel controls */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? "border-navy text-navy hover:bg-navy hover:text-white"
                  : "border-gray-200 text-gray-300"
              }`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? "border-[#26abe0] bg-[#26abe0] text-white hover:bg-[#1a8fc0]"
                  : "border-gray-200 text-gray-300"
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-4"
        >
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex-shrink-0 w-72 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                {/* Tag */}
                <span className="absolute top-3 left-3 bg-[#f5921e] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                  {dest.tag}
                </span>
                {/* Rating on image */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
                  <Star size={11} className="text-[#f5921e] fill-[#f5921e]" />
                  <span className="text-navy text-xs font-bold">{dest.rating}</span>
                </div>
                {/* Name on image */}
                <div className="absolute bottom-3 left-3">
                  <div className="flex items-center gap-1 text-white/80 text-xs mb-0.5">
                    <MapPin size={11} />
                    {dest.country}
                  </div>
                  <p className="text-white font-bold text-xl">{dest.name}</p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{dest.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(Math.floor(dest.rating))].map((_, i) => (
                      <Star key={i} size={12} className="text-[#f5921e] fill-[#f5921e]" />
                    ))}
                    {dest.rating % 1 !== 0 && (
                      <Star size={12} className="text-gray-200 fill-gray-200" />
                    )}
                    <span className="text-gray-400 text-xs ml-1">{dest.reviews} reviews</span>
                  </div>
                  <Link
                    href={`/destinations#${dest.id}`}
                    className="text-[#26abe0] text-xs font-semibold hover:text-[#1a8fc0] transition-colors flex items-center gap-1"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 border-2 border-[#26abe0] text-[#26abe0] hover:bg-[#26abe0] hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
          >
            View All Destinations →
          </Link>
        </div>
      </div>
    </section>
  );
}
