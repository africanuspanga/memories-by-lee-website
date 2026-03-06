"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plane, Globe, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#f5921e] overflow-hidden relative">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            >
              <span>✦</span> Start Your Journey
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5"
            >
              Ready to Create
              <br />
              Unforgettable
              <br />
              Memories?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-base leading-relaxed mb-8"
            >
              Let us craft the perfect journey — from dream honeymoons to seamless
              corporate travel. Every detail handled with care.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                href="/contact"
                className="bg-white text-[#f5921e] hover:bg-orange-50 font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:scale-105 flex items-center gap-2"
              >
                Book Your Journey →
              </Link>
              <a
                href="tel:+255742243243"
                className="border-2 border-white/60 text-white hover:bg-white/15 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2"
              >
                <Phone size={16} />
                Call 0742 243 243
              </a>
            </motion.div>

            {/* Feature icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Plane, label: "10+ Years Aviation Expertise" },
                { icon: Globe, label: "50+ Global Partners" },
                { icon: "💍", label: "100% Tailored Experiences" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-white/80 text-sm">
                  {typeof item.icon === "string" ? (
                    <span className="text-base">{item.icon}</span>
                  ) : (
                    <item.icon size={16} className="text-white" />
                  )}
                  {item.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-orange-900/30">
              <Image
                src="/images/CTA SECTION.png"
                alt="Ready to travel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Next Departure badge */}
            <div className="absolute bottom-6 right-6 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#26abe0] to-[#1a8fc0] flex items-center justify-center">
                <Plane size={16} className="text-white" />
              </div>
              <div>
                <p className="text-navy font-bold text-sm">Next Departure</p>
                <p className="text-gray-500 text-xs">Zanzibar &amp; Maldives</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
