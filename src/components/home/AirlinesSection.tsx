"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const airlines = [
  { src: "/Airline Partners logo/Air_Tanzania_logo.svg.png", alt: "Air Tanzania", large: false },
  { src: "/Airline Partners logo/Ethiopian-Airlines-Logo-before-2003-1.png", alt: "Ethiopian Airlines", large: true },
  { src: "/Airline Partners logo/KLM_logo.svg", alt: "KLM", large: false },
  { src: "/Airline Partners logo/Qatar_Airways_Logo.png", alt: "Qatar Airways", large: false },
  { src: "/Airline Partners logo/South-African-Airways-Logo.jpg", alt: "South African Airways", large: true },
  { src: "/Airline Partners logo/Turkish_Airlines_logo.png", alt: "Turkish Airlines", large: false },
];

export default function AirlinesSection() {
  const doubled = [...airlines, ...airlines, ...airlines];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="section-container mb-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#26abe0] text-xs font-bold uppercase tracking-widest mb-4"
          >
            ✈ Our Airline Partners
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-navy"
          >
            Fly with the <span className="text-[#26abe0]">World&apos;s Best Airlines</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base mt-3 max-w-lg mx-auto"
          >
            We partner with leading global carriers to bring you the best routes,
            fares, and in-flight experience.
          </motion.p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden marquee-wrapper">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 marquee-track animate-marquee"
          style={{ width: "max-content" }}
        >
          {doubled.map((airline, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white rounded-2xl px-8 py-5 flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-md hover:border-[#26abe0]/30 transition-all duration-300"
              style={{ height: 88, minWidth: airline.large ? 220 : 180 }}
            >
              <Image
                src={airline.src}
                alt={airline.alt}
                width={airline.large ? 170 : 130}
                height={airline.large ? 60 : 45}
                className={`object-contain w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 ${
                  airline.large ? "h-14" : "h-10"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
