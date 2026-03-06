"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, Shield, Zap, Users } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description:
      "We genuinely love what we do. Every itinerary we craft carries the same excitement we feel for exploration and discovery.",
    color: "orange",
  },
  {
    icon: Shield,
    title: "Integrity & Discretion",
    description:
      "Your privacy matters. We handle every client with the highest level of professionalism and confidentiality.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Excellence Always",
    description:
      "From the smallest detail to the grand experience — we never settle for ordinary when extraordinary is possible.",
    color: "orange",
  },
  {
    icon: Users,
    title: "Client-Centred",
    description:
      "Your unique needs, preferences, and dreams are the foundation of everything we create. This is your journey.",
    color: "blue",
  },
];

const ceoStats = [
  { value: "10+", label: "Years Expertise", color: "orange" },
  { value: "50+", label: "Global Partners", color: "blue" },
  { value: "24/7", label: "Client Support", color: "orange" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-navy flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/DESTINATION-ZANZIBAR.jpg"
            alt="About us"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        </div>
        <div className="section-container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#f5921e]/15 border border-[#f5921e]/30 text-[#f5921e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            <span>✦</span> Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight mb-6"
          >
            Travel Made Simple, Memorable, and Personal.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl leading-relaxed"
          >
            We aren&apos;t just a travel agency — we are a full-service travel management
            company specializing in unforgettable experiences, led by a CEO who knows
            aviation from the inside.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section id="story" className="py-24 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mt-8">
                  <Image src="/images/DESTINATION-ZANZIBAR.jpg" alt="Zanzibar" fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <Image src="/images/Destination - serengeti.jpg" alt="Serengeti" fill className="object-cover" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <Image src="/images/destination-dubai.jpg" alt="Dubai" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-[#f5921e] text-xs font-bold uppercase tracking-widest mb-4"
              >
                <span>✦</span> Who We Are
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-bold text-navy mb-6 leading-tight"
              >
                Expertise You Can Trust.{" "}
                <span className="text-[#f5921e]">Memories You&apos;ll Cherish.</span>
              </motion.h2>
              <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  At Memories by Lee Travels, we believe that every journey should be as
                  unique as the person taking it. Based in Dar es Salaam, Tanzania, we are a
                  full-service travel management company built on a foundation of aviation
                  expertise, bespoke luxury, and genuine care.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  Whether you are planning a high-stakes corporate trip, a private luxury
                  escape, or the honeymoon of your dreams — we handle every logistics so you
                  can focus entirely on the moment.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  From individual travelers to corporate giants, we provide customised
                  itineraries, competitive flight deals, and hand-selected accommodations that
                  reflect our unwavering commitment to quality.
                </motion.p>
              </div>
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="mt-8 border-l-4 border-[#f5921e] pl-5"
              >
                <p className="text-navy font-semibold text-lg italic">
                  &quot;Seamless luxury, every step of the way.&quot;
                </p>
              </motion.blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-navy">
        <div className="section-container text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#f5921e]/15 border border-[#f5921e]/30 text-[#f5921e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            🎯 Our Mission
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white mb-6"
          >
            To make travel <span className="text-[#f5921e]">effortless</span> and personalized.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed"
          >
            From individual travellers to corporate giants, we provide customised itineraries,
            competitive flight deals, and hand-selected accommodations that reflect our
            commitment to quality. We don&apos;t just book trips — we create experiences
            you&apos;ll tell your grandchildren about.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#f5921e] text-xs font-bold uppercase tracking-widest mb-4"
            >
              <span>✦</span> Our Values
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-navy"
            >
              The Principles That <span className="text-[#f5921e]">Guide Us</span>
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isOrange = value.color === "orange";
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-5 sm:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    isOrange
                      ? "bg-orange-50/50 border-orange-100"
                      : "bg-blue-50/50 border-blue-100"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                      isOrange ? "bg-orange-100" : "bg-blue-100"
                    }`}
                  >
                    <Icon size={20} className={isOrange ? "text-[#f5921e]" : "text-[#26abe0]"} />
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CEO Section */}
      <section id="ceo" className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 shadow-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                {/* Photo placeholder — replace with CEO photo */}
                <div className="flex flex-col items-center gap-3 text-gray-400 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">CEO Photo Coming Soon</p>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4">
                  <p className="text-navy font-bold text-lg">Hellen Rhobi</p>
                  <p className="text-[#f5921e] text-sm font-medium mb-2">
                    CEO &amp; Founder, Memories by Lee Travels
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="text-[#f5921e] fill-[#f5921e]" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-[#f5921e] text-xs font-bold uppercase tracking-widest mb-4"
              >
                <span>✦</span> Meet the CEO
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-bold text-navy mb-2 leading-tight"
              >
                Expertise from the Flight Deck to the Front Desk
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-[#f5921e] font-semibold text-lg mb-6"
              >
                Hellen Rhobi — More Than a CEO
              </motion.p>

              <div className="space-y-4 text-gray-500 text-base leading-relaxed mb-8">
                {[
                  "Hellen Rhobi is more than a CEO — she is a passionate advocate for luxury and experiential travel. With deep-rooted expertise in the aviation industry, Hellen leads the brand with an insider's knowledge of how travel should work.",
                  "Specializing in luxury escapes and tailored travel planning, Hellen ensures that Memories by Lee Travels meets the highest standards of efficiency and discretion. For Hellen, travel is about more than a ticket — it's about the unique needs of every client.",
                  "Her vision: a Tanzania-born, world-class travel brand that competes globally while remaining deeply personal and client-focused.",
                ].map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07 }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="grid grid-cols-3 gap-4"
              >
                {ceoStats.map((stat) => (
                  <div
                    key={stat.value}
                    className="bg-white rounded-2xl p-4 text-center border border-gray-100"
                  >
                    <div
                      className={`text-2xl font-black mb-1 ${
                        stat.color === "orange" ? "text-[#f5921e]" : "text-[#26abe0]"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <p className="text-gray-500 text-xs">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
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
            Your Dream Journey Starts With a <span className="text-[#f5921e]">Conversation.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-8"
          >
            Get in touch with our team today and let us design your perfect travel experience.
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
              Contact Us →
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
