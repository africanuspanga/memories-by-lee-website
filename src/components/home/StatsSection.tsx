"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "10+", label: "Years of Professional Aviation & Travel Expertise", color: "orange" },
  { value: "50+", label: "Partner Hotels, Airlines & Charter Services Worldwide", color: "blue" },
  { value: "100%", label: "Tailored Itineraries for Every Single Client", color: "orange" },
  { value: "24/7", label: "Support from Departure to Arrival", color: "blue" },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
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
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              {/* Dashed bg ring */}
              <div className="absolute -inset-6 rounded-3xl border-2 border-dashed border-[#26abe0]/20" />
              <Image
                src="/images/istockphoto-2254800037-612x612.jpg"
                alt="Expert travel team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>

            {/* Expert Team badge */}
            <div className="absolute top-6 -right-4 bg-white rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2 border border-gray-100">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-navy text-sm font-semibold">Expert Team</span>
            </div>

            {/* 10K Clients badge */}
            <div className="absolute bottom-6 -left-4 bg-[#f5921e] rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-white font-bold text-base">10K+ Happy Clients</p>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#f5921e] text-xs font-bold uppercase tracking-widest mb-4"
            >
              <span>✦</span> Our Experience
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-navy leading-tight mb-5"
            >
              We Will Make You
              <br />
              <span className="text-[#f5921e]">Happy</span> With Your Trip.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-base leading-relaxed mb-10"
            >
              So long as we stick to customer satisfaction, we will not take more profit — this
              is all only for your satisfaction. Your memories are our legacy.
            </motion.p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100"
                >
                  <div
                    className={`text-3xl font-black mb-2 ${
                      stat.color === "orange" ? "text-[#f5921e]" : "text-[#26abe0]"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <p className="text-gray-500 text-xs leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
