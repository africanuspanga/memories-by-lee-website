"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Honeymoon", href: "/honeymoon" },
  { label: "Destinations", href: "/destinations" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const navBg = isHome
    ? isScrolled
      ? "bg-navy shadow-lg shadow-black/20"
      : "bg-transparent"
    : "bg-navy shadow-lg shadow-black/20";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/memories by lee desktop view logo.png"
                alt="Memories by Lee Travels"
                width={160}
                height={60}
                className="h-12 w-auto hidden md:block"
                priority
              />
              <Image
                src="/images/memories by lee mobile view logo.png"
                alt="Memories by Lee Travels"
                width={120}
                height={50}
                className="h-10 w-auto md:hidden"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname === link.href
                      ? "text-[#f5921e]"
                      : "text-white/80 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+255742243243"
                className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                <Phone size={15} className="text-[#f5921e]" />
                0742 243 243
              </a>
              <Link
                href="/contact"
                className="bg-[#f5921e] hover:bg-[#d97a10] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-navy shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6 pt-24">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                    pathname === link.href
                      ? "text-[#f5921e] bg-[#f5921e]/10"
                      : "text-white/80 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:+255742243243"
                className="flex items-center gap-3 text-white/70 hover:text-white text-sm"
              >
                <Phone size={16} className="text-[#f5921e]" />
                0742 243 243
              </a>
              <a
                href="tel:+255754243207"
                className="flex items-center gap-3 text-white/70 hover:text-white text-sm"
              >
                <Phone size={16} className="text-[#f5921e]" />
                0754 243 207
              </a>
              <Link
                href="/contact"
                className="mt-2 bg-[#f5921e] text-white text-center font-semibold py-3 px-6 rounded-full hover:bg-[#d97a10] transition-colors"
              >
                Book Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
