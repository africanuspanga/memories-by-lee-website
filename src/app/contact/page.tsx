"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Instagram, MessageCircle, Send } from "lucide-react";

const WA_NUMBER = "255742243243";

const services = [
  "💍 Honeymoon Package",
  "✈ Flight Booking",
  "🏨 Luxury Stay",
  "💼 Corporate Travel",
  "🛩 Private Charter",
  "⭐ VIP Ground Services",
  "🛡 Visa & Travel Insurance",
  "🌍 Full Holiday Package",
  "🗣 Other / General Enquiry",
];

const guestOptions = ["1", "2 (Couple)", "3", "4", "5", "6", "7–10", "10+"];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  destination: string;
  date: string;
  guests: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    destination: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New Enquiry — Memories by Lee Travels

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}
Service Interested In: ${form.service}
Destination / Package: ${form.destination || "Not specified"}
Travel Date: ${form.date || "Not specified"}
Number of Guests: ${form.guests || "Not specified"}
Message: ${form.message || "No additional message"}`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const inputClass =
    "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f5921e]/40 focus:border-[#f5921e] transition-all";

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, #f5921e 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#f5921e]/15 border border-[#f5921e]/30 text-[#f5921e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            💬 Let&apos;s Talk
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Let&apos;s Start Your <span className="text-[#f5921e]">Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-xl mx-auto"
          >
            Fill in your details and we&apos;ll connect with you on WhatsApp instantly —
            because great journeys begin with a great conversation.
          </motion.p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-navy mb-2">Contact Information</h2>
                <p className="text-gray-500 text-sm">
                  Reach out directly or fill out the form and we&apos;ll get back to you on
                  WhatsApp.
                </p>
              </div>

              {/* Info cards */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 p-5 bg-orange-50 rounded-2xl border border-orange-100">
                  <div className="w-10 h-10 rounded-xl bg-[#f5921e] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm mb-0.5">Office</p>
                    <p className="text-gray-500 text-sm">
                      Kijitonyama / Polisi Mabatini,
                      <br />
                      Dar es Salaam, Tanzania
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="w-10 h-10 rounded-xl bg-[#26abe0] flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm mb-1">Phone / WhatsApp</p>
                    <a
                      href="tel:+255742243243"
                      className="text-gray-500 text-sm hover:text-navy transition-colors block"
                    >
                      +255 742 243 243
                    </a>
                    <a
                      href="tel:+255754243207"
                      className="text-gray-500 text-sm hover:text-navy transition-colors block"
                    >
                      +255 754 243 207
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-orange-50 rounded-2xl border border-orange-100">
                  <div className="w-10 h-10 rounded-xl bg-[#f5921e] flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm mb-1">Email</p>
                    <a
                      href="mailto:memoriesbyleetravels@gmail.com"
                      className="text-gray-500 text-sm hover:text-navy transition-colors break-all"
                    >
                      memoriesbyleetravels@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-pink-50 rounded-2xl border border-pink-100">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                    <Instagram size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/memoriesbylee/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 text-sm hover:text-navy transition-colors"
                    >
                      @memoriesbylee
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm mb-1">Working Hours</p>
                    <p className="text-gray-500 text-sm">
                      Monday – Saturday: 8am – 6pm
                    </p>
                    <p className="text-gray-500 text-sm">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello! I'm interested in booking a trip with Memories by Lee Travels.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold py-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-green-500/25"
              >
                <MessageCircle size={20} />
                Chat Directly on WhatsApp
              </a>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-100 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-navy font-bold text-xl mb-1">Send Us Your Enquiry</h3>
                  <p className="text-gray-400 text-sm">
                    We&apos;ll reach out to you on WhatsApp to discuss your trip.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy text-xs font-semibold mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-navy text-xs font-semibold mb-1.5">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+255 7XX XXX XXX"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy text-xs font-semibold mb-1.5">
                      Email Address <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-navy text-xs font-semibold mb-1.5">
                      Service Interested In <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy text-xs font-semibold mb-1.5">
                        Destination / Package
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        placeholder="e.g. Zanzibar, Maldives, Dubai..."
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-navy text-xs font-semibold mb-1.5">
                        Preferred Travel Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy text-xs font-semibold mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select guests...</option>
                      {guestOptions.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-navy text-xs font-semibold mb-1.5">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your dream trip, special requests, budget range, etc."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-green-500/25 text-sm"
                  >
                    <Send size={18} />
                    Send Enquiry via WhatsApp
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    Your enquiry will open directly in WhatsApp. We respond within 24 hours.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
