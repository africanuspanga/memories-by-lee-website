"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plane, Building2, Briefcase, Radio, Star, Shield } from "lucide-react";

const services = [
  {
    id: "flights",
    icon: Plane,
    title: "Flight Bookings",
    description:
      "Domestic & International flights with competitive, insider fares and flexible options.",
    color: "orange" as const,
  },
  {
    id: "stays",
    icon: Building2,
    title: "Luxury Stays",
    description:
      "Hand-picked 5-star resorts, boutique villas, and private retreats worldwide.",
    color: "blue" as const,
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate Travel",
    description:
      "Efficient, discreet, professional travel management for business executives.",
    color: "orange" as const,
  },
  {
    id: "charters",
    icon: Radio,
    title: "Private Charters",
    description:
      "Exclusive aviation solutions for those who value time, privacy, and flexibility.",
    color: "blue" as const,
  },
  {
    id: "vip",
    icon: Star,
    title: "VIP Ground Services",
    description:
      "Meet & greet services plus private airport transfers — priority arrival every time.",
    color: "orange" as const,
  },
  {
    id: "essential",
    icon: Shield,
    title: "Essential Travel",
    description:
      "Visa assistance, travel insurance, and personalized consultations — one-stop shop.",
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
            We provide a seamless experience from the moment you depart until you return
            home — nothing is left to chance.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOrange = service.color === "orange";
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group p-7 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    isOrange
                      ? "bg-orange-50 group-hover:bg-[#f5921e]"
                      : "bg-blue-50 group-hover:bg-[#26abe0]"
                  }`}
                >
                  <Icon
                    size={22}
                    className={`transition-colors duration-300 ${
                      isOrange
                        ? "text-[#f5921e] group-hover:text-white"
                        : "text-[#26abe0] group-hover:text-white"
                    }`}
                  />
                </div>
                <h3 className="text-navy font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className={`text-sm font-semibold flex items-center gap-1 transition-colors ${
                    isOrange
                      ? "text-[#f5921e] hover:text-[#d97a10]"
                      : "text-[#26abe0] hover:text-[#1a8fc0]"
                  }`}
                >
                  Learn more →
                </Link>
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
