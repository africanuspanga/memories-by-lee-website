"use client";

import Image from "next/image";

const WA_NUMBER = "255742243243";
const WA_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in booking a trip with Memories by Lee Travels. Could you please help me?"
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center hover:scale-110 transition-all duration-300 group drop-shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/images/whatsapp.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="w-14 h-14 object-contain"
      />
      <span className="absolute right-full mr-3 bg-[#0a1628] text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
