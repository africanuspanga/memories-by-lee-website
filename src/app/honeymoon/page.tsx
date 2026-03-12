"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plane, Users, Car, Building2, Heart, Shield, FileText, Clock, Gift, Sparkles, MessageCircle, Star, Crown, Gem, Send, Waves, Globe, Tent } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";

const WA_NUMBER = "255742243243";
const WA_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in a honeymoon package with Memories by Lee Travels. Could you please help me?"
);

const inclusions = [
  { icon: Sparkles, title: "Bespoke Itinerary", detail: "Fully custom-planned, just for you" },
  { icon: Plane, title: "Return Flights", detail: "Economy, business or first class" },
  { icon: Users, title: "Meet & Greet", detail: "VIP airport welcome on arrival" },
  { icon: Car, title: "Private Transfers", detail: "Luxury vehicle, door to door" },
  { icon: Building2, title: "Luxury Accommodation", detail: "Hand-selected 5-star stays" },
  { icon: Heart, title: "Romantic Activities", detail: "Curated experiences for two" },
  { icon: Shield, title: "Travel Insurance", detail: "Full coverage, total peace of mind" },
  { icon: FileText, title: "Visa Assistance", detail: "Handled wherever needed" },
  { icon: Clock, title: "24/7 Support", detail: "We're always on call for you" },
  { icon: Gift, title: "Honeymoon Hamper", detail: "A welcome gift to start your trip" },
];

const packages = [
  {
    id: "mafia",
    name: "Mafia Island Secret Escape",
    location: "Mafia Island, Tanzania",
    duration: "4–7 Days",
    tag: "Our Top Pick",
    tagColor: "orange",
    highlights: [
      "Secluded boutique resort",
      "Whale shark snorkelling",
      "Private beach sundowners",
      "Untouched paradise vibes",
    ],
    image: "/BLACK COUPLE IN MAFIA.jpg",
    unoptimized: true,
  },
  {
    id: "zanzibar",
    name: "Zanzibar Beach Bliss",
    location: "Zanzibar, Tanzania",
    duration: "5–7 Days",
    tag: "Most Popular",
    tagColor: "blue",
    highlights: [
      "Beachfront villa",
      "Sunset dhow cruise",
      "Spice island tour",
      "Private beach dining",
    ],
    image: "/images/DESTINATION-ZANZIBAR.jpg",
  },
  {
    id: "serengeti",
    name: "Serengeti Safari Romance",
    location: "Serengeti, Tanzania",
    duration: "6–8 Days",
    tag: "Adventure",
    tagColor: "blue",
    highlights: [
      "Luxury tented camp",
      "Private game drives",
      "Sundowner cocktails",
      "Bush dinner experience",
    ],
    image: "/images/Destination - serengeti.jpg",
  },
  {
    id: "bali",
    name: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    duration: "7–10 Days",
    tag: "Tropical",
    tagColor: "orange",
    highlights: [
      "Private villa with pool",
      "Couples spa",
      "Temple sunrise tour",
      "Cooking class",
    ],
    image: "/images/DESTINATION BALI HONEY MOON.jpg",
  },
  {
    id: "dubai",
    name: "Dubai Luxury Getaway",
    location: "Dubai, UAE",
    duration: "5–7 Days",
    tag: "City Luxury",
    tagColor: "blue",
    highlights: [
      "5-star downtown hotel",
      "Desert safari",
      "Dubai Marina dinner",
      "Gold souk experience",
    ],
    image: "/images/destination-dubai.jpg",
  },
  {
    id: "turkey",
    name: "Turkey Romance & Culture",
    location: "Türkiye",
    duration: "8–10 Days",
    tag: "Culture & Romance",
    tagColor: "orange",
    highlights: [
      "Cappadocia hot air balloon",
      "Cave hotel stay",
      "Bosphorus cruise",
      "Turkish hamam",
    ],
    image: "/images/DESTINATION TURKEY HONEYMOON.jpg",
  },
  {
    id: "south-africa",
    name: "South Africa Wild Luxury",
    location: "South Africa",
    duration: "7–10 Days",
    tag: "Safari & Wine",
    tagColor: "blue",
    highlights: [
      "Private game reserve",
      "Big Five safari",
      "Cape Winelands tour",
      "Table Mountain sunrise",
    ],
    image: "/images/DESTINATION SOUTH AFRICA HONEY MOON.jpg",
  },
  {
    id: "mikumi",
    name: "Mikumi Safari Romance",
    location: "Mikumi, Tanzania",
    duration: "2–4 Days",
    tag: "Quick Getaway",
    tagColor: "orange",
    highlights: [
      "Elephant & lion sightings",
      "Luxury lodge stay",
      "Private game drives",
      "Starlit bush dinners",
    ],
    image: "/Mikumi.jpg",
  },
];

const tiers = [
  {
    tier: 1, level: "Economy", name: "Silver Package", price: "From TZS 2M",
    icon: Star, image: "/honeymoon/istockphoto-1454307094-612x612.jpg",
    accent: "#9ca3af", badge: "bg-gradient-to-r from-gray-400 to-gray-300", badgeText: "text-gray-900",
    accentBg: "from-gray-900/95 via-gray-800/80 to-gray-700/40",
    inclusions: ["3–5 nights accommodation", "Economy class return flights", "4-star hotel stay", "Private airport transfers", "Romantic dinner setup", "Travel consultation"],
  },
  {
    tier: 2, level: "Standard", name: "Gold Package", price: "From TZS 4M",
    icon: Gem, image: "/honeymoon/istockphoto-173096906-612x612.jpg",
    accent: "#f5921e", badge: "bg-gradient-to-r from-[#f5921e] to-amber-400", badgeText: "text-white",
    accentBg: "from-amber-900/95 via-amber-800/75 to-amber-700/30",
    inclusions: ["5–7 nights accommodation", "Economy / Business class option", "5-star resort stay", "VIP airport meet & greet", "Couples spa experience", "Travel insurance included"],
  },
  {
    tier: 3, level: "Luxury", name: "Platinum Package", price: "From TZS 6M",
    icon: Sparkles, image: "/honeymoon/istockphoto-178507751-612x612.jpg",
    accent: "#26abe0", badge: "bg-gradient-to-r from-[#26abe0] to-sky-300", badgeText: "text-white",
    accentBg: "from-slate-900/95 via-slate-800/80 to-slate-700/40",
    inclusions: ["7–10 nights luxury stay", "Business class flights", "Private villa option", "Personal travel concierge", "Exclusive private experiences", "Premium insurance + welcome hamper"],
  },
  {
    tier: 4, level: "Ultra Luxury / VIP", name: "Royal Experience", price: "From TZS 8M",
    icon: Crown, image: "/honeymoon/istockphoto-2222419893-612x612.jpg",
    accent: "#d4af37", badge: "bg-gradient-to-r from-yellow-600 to-yellow-400", badgeText: "text-navy",
    accentBg: "from-navy/98 via-navy/85 to-navy/50",
    inclusions: ["10+ nights ultra-luxury", "First / Business class flights", "Private villa + charter option", "24/7 full VIP concierge", "Exclusive private experiences", "Welcome hamper + surprise touches"],
  },
];

const categories = [
  { icon: Heart, emoji: "🌹", name: "Romantic Escape", description: "Candlelit dinners, spa retreats, and intimate beach sunsets crafted for two.", color: "orange" },
  { icon: Waves, emoji: "🏝", name: "Beach Relaxation", description: "Zanzibar, Mafia Island, and beyond. Powder sand, crystal water, total peace.", color: "blue" },
  { icon: Tent, emoji: "🦁", name: "Safari & Beach Combo", description: "Morning game drives in the Serengeti, afternoons on Zanzibar's shores.", color: "orange" },
  { icon: Globe, emoji: "✈", name: "International Luxury", description: "Dubai skylines, Turkish balloons, Bali villas. World-class romance, your way.", color: "blue" },
  { icon: Star, emoji: "🏔", name: "Adventure Honeymoon", description: "Diving, hiking, and exploring together. Love that seeks the extraordinary.", color: "orange" },
];

interface PlanForm {
  name: string; phone: string; package: string; experience: string;
  date: string; budget: string; requests: string;
}

export default function HoneymoonPage() {
  const [form, setForm] = useState<PlanForm>({
    name: "", phone: "", package: "", experience: "", date: "", budget: "", requests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Custom Honeymoon Planning Request | Memories by Lee Travels

Name: ${form.name}
WhatsApp: ${form.phone}
Package Tier: ${form.package || "Not specified"}
Experience Style: ${form.experience || "Not specified"}
Travel Date: ${form.date || "Not specified"}
Budget Range: ${form.budget || "Not specified"}
Special Requests: ${form.requests || "None"}`;
    window.open(`https://wa.me/255742243243?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const inputClass = "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#f5921e]/40 focus:border-[#f5921e] transition-all";
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] bg-navy flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/DESTINATION BALI HONEY MOON.jpg"
            alt="Honeymoon"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/50" />
        </div>
        <div className="section-container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#f5921e]/15 border border-[#f5921e]/30 text-[#f5921e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            💍 Honeymoon Specialists
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight mb-6"
          >
            Begin Your &quot;Happily Ever After&quot;{" "}
            <span className="text-[#f5921e]">in Paradise.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/65 text-lg max-w-2xl leading-relaxed mb-8"
          >
            For the Tanzanian couple seeking the extraordinary. We curate romantic, bespoke
            honeymoon journeys. Because after the wedding, you deserve a sanctuary.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="bg-[#f5921e] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#d97a10] transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              Plan My Honeymoon →
            </Link>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-navy relative overflow-hidden">
        {/* Background dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #f5921e 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Glow accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f5921e]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#26abe0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#f5921e]/15 border border-[#f5921e]/30 text-[#f5921e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            >
              ✦ What&apos;s Included
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
            >
              Everything Covered.{" "}
              <span className="text-[#f5921e]">Zero Stress.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-lg max-w-xl mx-auto"
            >
              Every detail of your honeymoon is handled. All you bring is each other.
            </motion.p>
          </div>

          {/* Inclusion cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {inclusions.map((item, index) => {
              const Icon = item.icon;
              const isOrange = index % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#f5921e]/40 rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 cursor-default"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOrange
                        ? "bg-[#f5921e]/20 group-hover:bg-[#f5921e]/30"
                        : "bg-[#26abe0]/20 group-hover:bg-[#26abe0]/30"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={isOrange ? "text-[#f5921e]" : "text-[#26abe0]"}
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-snug">{item.title}</p>
                    <p className="text-white/45 text-xs mt-0.5 leading-snug">{item.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Packages */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#f5921e] text-xs font-bold uppercase tracking-widest mb-4"
            >
              🌍 Destinations
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-navy mb-4"
            >
              Curated Honeymoon <span className="text-[#f5921e]">Experiences</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg max-w-xl mx-auto"
            >
              All packages are fully customisable. These are starting points — we tailor
              every detail to your vision.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => {
              const isOrange = pkg.tagColor === "orange";
              const enquiryMsg = encodeURIComponent(
                `Hello! I'm interested in the ${pkg.name} honeymoon package (${pkg.location}, ${pkg.duration}). Could you please provide more details?`
              );
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized={"unoptimized" in pkg ? pkg.unoptimized : false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                    <span
                      className={`absolute top-3 left-3 text-white text-[11px] font-bold px-3 py-1 rounded-full ${
                        isOrange ? "bg-[#f5921e]" : "bg-[#26abe0]"
                      }`}
                    >
                      {pkg.tag}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-navy font-bold text-lg leading-tight">{pkg.name}</h3>
                        <p className="text-gray-500 text-sm mt-0.5">{pkg.location}</p>
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ml-2 ${
                          isOrange
                            ? "bg-orange-100 text-[#f5921e]"
                            : "bg-blue-100 text-[#26abe0]"
                        }`}
                      >
                        {pkg.duration}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5 mb-5">
                      {pkg.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              isOrange ? "bg-[#f5921e]" : "bg-[#26abe0]"
                            }`}
                          />
                          <span className="text-gray-500 text-sm">{h}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${enquiryMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                        isOrange
                          ? "bg-[#f5921e] text-white hover:bg-[#d97a10]"
                          : "bg-[#26abe0] text-white hover:bg-[#1a8fc0]"
                      }`}
                    >
                      Enquire About This Package
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing Tiers ── */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#f5921e]/10 border border-[#f5921e]/25 text-[#f5921e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              💰 Romantic Escape Packages
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-navy mb-4">
              Choose Your <span className="text-[#f5921e]">Level of Luxury</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-gray-500 text-base max-w-xl mx-auto">
              All packages are tailored to your vision. Prices adjust by season and destination chosen.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div key={tier.tier} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-400">
                  <div className="relative h-96">
                    <Image src={tier.image} alt={tier.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                    <div className={`absolute inset-0 bg-gradient-to-t ${tier.accentBg}`} />

                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <span className="text-white font-black text-sm">{tier.tier}</span>
                    </div>
                    <div className={`absolute top-4 right-4 ${tier.badge} ${tier.badgeText} text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full`}>
                      {tier.level}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={14} style={{ color: tier.accent }} />
                        <span className="text-white/60 text-xs uppercase tracking-wider font-semibold">{tier.level}</span>
                      </div>
                      <h3 className="text-white font-black text-xl mb-0.5">{tier.name}</h3>
                      <p className="font-bold text-lg mb-4" style={{ color: tier.accent }}>{tier.price}</p>
                      <ul className="flex flex-col gap-1.5 mb-5">
                        {tier.inclusions.map(h => (
                          <li key={h} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: tier.accent }} />
                            <span className="text-white/75 text-xs leading-snug">{h}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={`https://wa.me/255742243243?text=${encodeURIComponent(`Hello! I'm interested in the ${tier.name} honeymoon package. Could you provide more details?`)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="block text-center py-2.5 rounded-xl font-bold text-xs text-white border border-white/30 hover:bg-white/15 transition-all duration-200 backdrop-blur-sm">
                        Enquire Now →
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-gray-400 text-sm italic mt-8">Prices adjust depending on season and destination.</p>
        </div>
      </section>

      {/* ── Categories by Experience ── */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#f5921e] text-xs font-bold uppercase tracking-widest mb-4">
              <span>✦</span> Category by Experience &amp; Style
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-navy">
              What Kind of <span className="text-[#f5921e]">Honeymoon Are You?</span>
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              const isOrange = cat.color === "orange";
              return (
                <motion.div key={cat.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className={`group p-6 rounded-2xl border text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default ${isOrange ? "bg-orange-50/60 border-orange-100 hover:border-[#f5921e]/40" : "bg-blue-50/60 border-blue-100 hover:border-[#26abe0]/40"}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl ${isOrange ? "bg-orange-100" : "bg-blue-100"}`}>
                    <span>{cat.emoji}</span>
                  </div>
                  <h3 className="text-navy font-bold text-sm mb-2">{cat.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{cat.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Custom Honeymoon Planning Form ── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #f5921e 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f5921e]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left copy */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-[#f5921e]/15 border border-[#f5921e]/30 text-[#f5921e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                ✦ Custom Honeymoon Planning
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                Tailor-Made <span className="text-[#f5921e]">Just for You</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="text-white/65 text-lg leading-relaxed mb-8">
                Every couple deserves a honeymoon as unique as their love story. We design journeys according to your budget, travel dates, preferred experience, and luxury level.
              </motion.p>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  { icon: "💰", label: "Budget", detail: "We work with every range — Silver to Royal" },
                  { icon: "📅", label: "Travel Dates", detail: "We plan around your perfect timing" },
                  { icon: "🌟", label: "Preferred Experience", detail: "Beach, safari, international, adventure" },
                  { icon: "👑", label: "Luxury Level", detail: "Economy comfort to Ultra Luxury / VIP" },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className="text-white/50 text-xs">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <motion.blockquote initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                className="border-l-4 border-[#f5921e] pl-5">
                <p className="text-white/60 italic text-base leading-relaxed">
                  &ldquo;Every couple deserves a honeymoon as unique as their love story.&rdquo;
                </p>
                <cite className="text-[#f5921e] text-sm font-semibold not-italic mt-1 block">Memories by Lee Travels</cite>
              </motion.blockquote>
            </div>

            {/* Right form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
                <h3 className="text-white font-bold text-xl mb-1">Plan My Honeymoon</h3>
                <p className="text-white/50 text-sm mb-6">Fill in your details and we will reach you on WhatsApp.</p>
                <form onSubmit={handlePlanSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-xs font-semibold mb-1.5">Full Name <span className="text-[#f5921e]">*</span></label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-semibold mb-1.5">WhatsApp Number <span className="text-[#f5921e]">*</span></label>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+255 7XX XXX XXX" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-semibold mb-1.5">Package Tier</label>
                    <select name="package" value={form.package} onChange={handleChange} className={inputClass}>
                      <option value="" className="text-gray-800">Select a package...</option>
                      <option value="Silver Package (Economy) — From TZS 2M" className="text-gray-800">Silver Package (Economy) — From TZS 2M</option>
                      <option value="Gold Package (Standard) — From TZS 4M" className="text-gray-800">Gold Package (Standard) — From TZS 4M</option>
                      <option value="Platinum Package (Luxury) — From TZS 6M" className="text-gray-800">Platinum Package (Luxury) — From TZS 6M</option>
                      <option value="Royal Experience (Ultra Luxury) — From TZS 8M" className="text-gray-800">Royal Experience (Ultra Luxury) — From TZS 8M</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-semibold mb-1.5">Experience Style</label>
                    <select name="experience" value={form.experience} onChange={handleChange} className={inputClass}>
                      <option value="" className="text-gray-800">Select experience...</option>
                      <option value="Romantic Escape" className="text-gray-800">Romantic Escape</option>
                      <option value="Beach Relaxation" className="text-gray-800">Beach Relaxation</option>
                      <option value="Safari & Beach Combo" className="text-gray-800">Safari & Beach Combo</option>
                      <option value="International Luxury" className="text-gray-800">International Luxury</option>
                      <option value="Adventure Honeymoon" className="text-gray-800">Adventure Honeymoon</option>
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-xs font-semibold mb-1.5">Preferred Travel Date</label>
                      <input type="date" name="date" value={form.date} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-semibold mb-1.5">Budget Range</label>
                      <select name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
                        <option value="" className="text-gray-800">Select budget...</option>
                        <option value="TZS 2M - 4M" className="text-gray-800">TZS 2M - 4M</option>
                        <option value="TZS 4M - 6M" className="text-gray-800">TZS 4M - 6M</option>
                        <option value="TZS 6M - 8M" className="text-gray-800">TZS 6M - 8M</option>
                        <option value="TZS 8M - 12M" className="text-gray-800">TZS 8M - 12M</option>
                        <option value="TZS 12M+" className="text-gray-800">TZS 12M+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-semibold mb-1.5">Special Requests / Notes</label>
                    <textarea name="requests" rows={3} value={form.requests} onChange={handleChange}
                      placeholder="Destination wishlist, dietary needs, surprises, anniversaries..."
                      className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit"
                    className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-green-500/20 text-sm">
                    <Send size={16} />
                    Send My Honeymoon Request via WhatsApp
                  </button>
                  <p className="text-white/30 text-xs text-center">Opens WhatsApp directly. We respond within 24 hours.</p>
                </form>
              </div>
            </motion.div>
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
            Your Dream Honeymoon is{" "}
            <span className="text-[#f5921e]">One Conversation Away.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-8 max-w-xl mx-auto"
          >
            Tell us your vision — beach, safari, city, or all three — and we&apos;ll craft
            the perfect plan for your first adventure as a couple.
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
              Plan My Honeymoon →
            </Link>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
