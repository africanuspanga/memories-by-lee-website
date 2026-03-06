"use client";

import { motion } from "framer-motion";
import { Plane, Gem, CheckCircle } from "lucide-react";

const features = [
  {
    number: "01",
    icon: Plane,
    title: "Aviation Insider Knowledge",
    description:
      "Led by CEO Hellen Rhobi with a decade of aviation expertise, we navigate the skies better than anyone to find you the best routes and rates.",
    color: "orange" as const,
  },
  {
    number: "02",
    icon: Gem,
    title: "Bespoke Luxury Only",
    description:
      "We don't do cookie-cutter. Every itinerary is hand-crafted to reflect your personal taste, elegance, and comfort — from hidden-gem villas to five-star resorts.",
    color: "blue" as const,
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Stress-Free Logistics",
    description:
      "From visa assistance to VIP airport transfers, we handle all the boring details — so you can focus entirely on the experience and the moments that matter.",
    color: "orange" as const,
  },
];

export default function WhatYouGetSection() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#f5921e] text-xs font-bold uppercase tracking-widest mb-4"
          >
            <span>✦</span> What We Serve
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-navy mb-4"
          >
            What Will You <span className="text-[#f5921e]">Get?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-xl mx-auto"
          >
            In every single trip that you take with us, you will get served like royalty.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isOrange = feature.color === "orange";
            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${
                  isOrange
                    ? "bg-orange-50/60 border-orange-100 hover:border-[#f5921e]/30"
                    : "bg-blue-50/60 border-blue-100 hover:border-[#26abe0]/30"
                }`}
              >
                {/* Number */}
                <span
                  className={`absolute top-6 right-6 text-3xl font-black opacity-15 ${
                    isOrange ? "text-[#f5921e]" : "text-[#26abe0]"
                  }`}
                >
                  {feature.number}
                </span>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    isOrange ? "bg-orange-100" : "bg-blue-100"
                  }`}
                >
                  <Icon
                    size={24}
                    className={isOrange ? "text-[#f5921e]" : "text-[#26abe0]"}
                  />
                </div>

                <h3 className="text-navy text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
