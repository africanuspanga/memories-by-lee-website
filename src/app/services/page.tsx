"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Plane, Building2, Heart, Briefcase, Radio, Star, Shield, Check } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";

const services = [
  {
    id: "flights",
    icon: Plane,
    emoji: "✈",
    image: "/services/flight-bookings.jpg",
    title: "Flight Bookings",
    subtitle: "Domestic & International",
    description:
      "We handle your travel with precision, offering competitive fares, flexible options, and professional support to ensure a smooth journey for both leisure and business. With our aviation insider knowledge, we find the best routes and rates the market has to offer.",
    features: [
      "Competitive insider fares",
      "Flexible booking options",
      "Domestic & international routes",
      "Business & first class upgrades",
      "Group booking discounts",
      "24/7 flight support",
    ],
    color: "orange" as const,
  },
  {
    id: "stays",
    icon: Building2,
    emoji: "🏨",
    image: "/services/luxury-stays.jpg",
    title: "Luxury Stays",
    subtitle: "Boutique Villas & 5-Star Resorts",
    description:
      "From intimate boutique beachfront villas to world-renowned five-star resorts, we carefully select properties that reflect comfort, quality, and exceptional service. Every property we recommend has been vetted for luxury standards.",
    features: [
      "Hand-picked 5-star properties",
      "Boutique villas & private estates",
      "Beachfront & safari lodges",
      "Honeymoon suite arrangements",
      "VIP room upgrades",
      "Special occasion setups",
    ],
    color: "blue" as const,
  },
  {
    id: "honeymoon",
    icon: Heart,
    emoji: "💍",
    image: "/services/honeymoon.jpg",
    title: "Honeymoon Packages",
    subtitle: "Bespoke Romantic Journeys",
    description:
      "Our bread and butter. We combine luxury accommodation, exclusive experiences, and thoughtful details to create your perfect first chapter as a couple. From Zanzibar to the Maldives, we craft every detail of your dream honeymoon.",
    features: [
      "Fully bespoke itineraries",
      "Romantic candlelit setups",
      "Couples spa experiences",
      "Private beach excursions",
      "Surprise anniversary touches",
      "VIP departure & arrival",
    ],
    color: "orange" as const,
  },
  {
    id: "corporate",
    icon: Briefcase,
    emoji: "💼",
    image: "/services/corporate-travel.jpg",
    title: "Corporate Travel",
    subtitle: "For Business Executives",
    description:
      "Designed to meet the highest standards of efficiency and discretion. We ensure seamless, stress-free journeys for business executives and private clients who value their time. Every corporate trip is managed with precision.",
    features: [
      "Executive travel management",
      "Conference & event travel",
      "Multi-destination planning",
      "Corporate account management",
      "Priority boarding assistance",
      "Expense reporting support",
    ],
    color: "blue" as const,
  },
  {
    id: "charters",
    icon: Radio,
    emoji: "🛩",
    image: "/services/private-charters.jpg",
    title: "Private Charters",
    subtitle: "Exclusive Aviation Solutions",
    description:
      "For those seeking exclusivity and flexibility, we arrange private and charter flights tailored to your specific schedule and aviation needs. Complete privacy, ultimate comfort, and total flexibility on your terms.",
    features: [
      "Private jet & turboprop charters",
      "Helicopter transfers",
      "Custom schedule & routing",
      "Full aircraft catering",
      "Ground transport coordination",
      "Last-minute availability",
    ],
    color: "orange" as const,
  },
  {
    id: "vip",
    icon: Star,
    emoji: "⭐",
    image: "/services/vip-ground-services.jpg",
    title: "VIP Ground Services",
    subtitle: "Meet & Greet + Transfers",
    description:
      "Professional airport assistance to ensure a welcoming, priority experience from the moment you land. Private, reliable, and punctual movement between airports, hotels, and your final destination — always on time.",
    features: [
      "Meet & greet at arrival",
      "Priority immigration assistance",
      "Luxury vehicle transfers",
      "Porter & luggage handling",
      "Hotel check-in coordination",
      "24/7 ground support",
    ],
    color: "blue" as const,
  },
  {
    id: "essential",
    icon: Shield,
    emoji: "🛡",
    image: "/services/essential-travel.jpg",
    title: "Essential Travel Services",
    subtitle: "Visa, Insurance & Consultation",
    description:
      "We are your one-stop shop. From visa applications to travel insurance and personalised travel consultations, we cover every aspect of your journey preparation so you travel with complete confidence.",
    features: [
      "Visa application assistance",
      "Travel insurance plans",
      "Personalised consultations",
      "Travel document review",
      "Health & safety advisories",
      "Currency exchange guidance",
    ],
    color: "orange" as const,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] bg-navy flex items-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, #f5921e 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="section-container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#f5921e]/15 border border-[#f5921e]/30 text-[#f5921e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            <span>✦</span> What We Offer
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight mb-6"
          >
            A 360° Approach{" "}
            <span className="text-[#f5921e]">to Travel</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl leading-relaxed"
          >
            We provide a seamless experience from the moment you depart until you return
            home. From flights to visas, from honeymoons to corporate travel — we handle it all.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="flex flex-col gap-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOrange = service.color === "orange";
              const isEven = index % 2 === 0;
              return (
                <React.Fragment key={service.id}>
                <motion.div
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image panel */}
                  <div
                    className={`order-2 ${!isEven ? "lg:order-1" : "lg:order-2"} flex justify-center`}
                  >
                    <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-xl aspect-[4/3] group">
                      {service.image ? (
                        <>
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            unoptimized
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                        </>
                      ) : (
                        <div
                          className={`w-full h-full flex flex-col items-center justify-center gap-4 ${
                            isOrange
                              ? "bg-gradient-to-br from-orange-50 to-orange-100"
                              : "bg-gradient-to-br from-blue-50 to-blue-100"
                          }`}
                        >
                          <div
                            className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-lg ${
                              isOrange ? "bg-[#f5921e]" : "bg-[#26abe0]"
                            }`}
                          >
                            <span>{service.emoji}</span>
                          </div>
                        </div>
                      )}
                      {/* Badge */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-bold ${
                            isOrange ? "bg-[#f5921e]" : "bg-[#26abe0]"
                          }`}
                        >
                          <span>{service.emoji}</span>
                          {service.title}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`order-1 ${!isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                        isOrange ? "bg-orange-100" : "bg-blue-100"
                      }`}
                    >
                      <Icon
                        size={22}
                        className={isOrange ? "text-[#f5921e]" : "text-[#26abe0]"}
                      />
                    </div>
                    <h2 className="text-3xl font-bold text-navy mb-2">{service.title}</h2>
                    <p
                      className={`font-semibold text-sm mb-4 ${
                        isOrange ? "text-[#f5921e]" : "text-[#26abe0]"
                      }`}
                    >
                      {service.subtitle}
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Check
                            size={16}
                            className={`flex-shrink-0 ${
                              isOrange ? "text-[#f5921e]" : "text-[#26abe0]"
                            }`}
                          />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                {index < services.length - 1 && <SectionDivider />}
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
            Find the Perfect Service for{" "}
            <span className="text-[#f5921e]">Your Journey.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-8 max-w-xl mx-auto"
          >
            Not sure what you need? Our team is here to guide you to the perfect travel
            solution — completely tailored to you.
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
              Get a Free Consultation →
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
