"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "flights",
    title: "Flight Bookings",
    subtitle: "Domestic & International",
    description: "Competitive insider fares, flexible options, and professional support for leisure and business travel.",
    image: "/services/Flight Bookings.jpg",
    color: "orange" as const,
  },
  {
    id: "stays",
    title: "Luxury Stays",
    subtitle: "Boutique Villas & 5-Star Resorts",
    description: "Hand-picked properties that reflect comfort, quality, and exceptional service worldwide.",
    image: "/services/Luxury Stays.jpg",
    color: "blue" as const,
  },
  {
    id: "corporate",
    title: "Corporate Travel",
    subtitle: "For Business Executives",
    description: "Efficient, discreet travel management meeting the highest standards of precision.",
    image: "/services/Corporate Travel.jpg",
    color: "orange" as const,
  },
  {
    id: "charters",
    title: "Private Charters",
    subtitle: "Exclusive Aviation Solutions",
    description: "Private and charter flights tailored to your schedule, privacy, and comfort.",
    image: "/services/Private Charters.jpg",
    color: "blue" as const,
  },
  {
    id: "vip",
    title: "VIP Ground Services",
    subtitle: "Meet & Greet + Transfers",
    description: "Priority airport assistance and luxury transfers from the moment you land.",
    image: "/services/VIP Ground Services.jpg",
    color: "orange" as const,
  },
  {
    id: "essential",
    title: "Essential Travel",
    subtitle: "Visa, Insurance & Consultation",
    description: "Visa assistance, travel insurance, and personalised consultations — one-stop shop.",
    image: "/services/Honeymoon.jpg",
    color: "blue" as const,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#f5921e] text-xs font-bold uppercase tracking-widest mb-4"
          >
            <span>✦</span> Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-navy mb-4"
          >
            A 360° Approach <span className="text-[#f5921e]">to Travel</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-xl mx-auto"
          >
            We provide a seamless experience from the moment you depart until you return home. Nothing is left to chance.
          </motion.p>
        </div>

        {/* Image Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const isOrange = service.color === "orange";
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Background image */}
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/10" />
                  {/* Hover colour tint */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                      isOrange ? "bg-[#f5921e]" : "bg-[#26abe0]"
                    }`}
                  />

                  {/* Tag top-left */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${
                        isOrange ? "bg-[#f5921e]" : "bg-[#26abe0]"
                      }`}
                    >
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Content bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">{service.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{service.description}</p>
                    <Link
                      href={`/services#${service.id}`}
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                        isOrange ? "text-[#f5921e]" : "text-[#26abe0]"
                      }`}
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#f5921e] hover:bg-[#d97a10] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/25 hover:scale-105"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
