"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Award, Briefcase } from "lucide-react";

const highlights = [
  { icon: Award, label: "10+ Years Aviation Industry Expertise" },
  { icon: Briefcase, label: "Luxury & Experiential Travel Specialist" },
  { icon: Star, label: "Tanzanian-born, World-Class Standards" },
];

export default function CEOSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 shadow-2xl">
              <Image
                src="/CEO IMAGE-MEMORIES BY LEE.jpg"
                alt="Hellen Rhobi — CEO & Founder, Memories by Lee Travels"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

              {/* Card overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-lg">
                <p className="text-navy font-bold text-lg">Hellen Rhobi</p>
                <p className="text-[#f5921e] text-sm font-medium mb-1.5">
                  CEO &amp; Founder, Memories by Lee Travels
                </p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-[#f5921e] fill-[#f5921e]" />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-6 -right-4 bg-[#f5921e] rounded-2xl px-5 py-3 shadow-xl text-center">
              <p className="text-white font-black text-2xl leading-none">10+</p>
              <p className="text-white/80 text-xs font-medium">Years in Aviation</p>
            </div>
          </motion.div>

          {/* Right — Copy */}
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
              className="text-4xl sm:text-5xl font-bold text-navy leading-tight mb-6"
            >
              Expertise from the{" "}
              <span className="text-[#f5921e]">Flight Deck</span>{" "}
              to the Front Desk.
            </motion.h2>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-4 border-[#f5921e] pl-5 mb-6"
            >
              <p className="text-gray-600 text-base italic">
                &quot;Seamless luxury, every step of the way.&quot;
              </p>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-gray-500 text-base leading-relaxed mb-4"
            >
              CEO <strong className="text-navy">Hellen Rhobi</strong> didn&apos;t just start a
              travel company — she built a brand rooted in a decade of aviation expertise.
              Her deep understanding of the industry allows Memories by Lee Travels to offer
              a level of precision and luxury that few can match.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-base leading-relaxed mb-8"
            >
              Whether it&apos;s a private charter, a bespoke honeymoon, or a complex corporate
              itinerary, Hellen&apos;s vision ensures every journey is thoughtfully planned and
              expertly managed.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex flex-col gap-4 mb-8"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#f5921e]" />
                    </div>
                    <span className="text-navy font-semibold text-sm">{item.label}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#f5921e] hover:bg-[#d97a10] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/25 hover:scale-105"
              >
                Our Full Story →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
