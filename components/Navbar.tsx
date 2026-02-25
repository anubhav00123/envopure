"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Shield, Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center transition-transform group-hover:rotate-12">
            <img
              src="/images/logo.jpeg"
              alt="Envopure Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-black text-gray-900 leading-none">
              Envopure<span className="text-green-500">.</span>
            </h1>
            <p className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
              Safe • Fresh • Pure
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-gray-900 hover:text-green-600 tracking-widest transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CALL BUTTON & HAMBURGER */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919318397840"
            className="relative group bg-green-600 hover:bg-green-700 text-white px-5 md:px-7 py-2.5 rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all active:scale-95 flex items-center gap-2"
          >
            <span className="absolute inset-0 rounded-full bg-green-500 blur-md opacity-40 group-hover:opacity-80 transition-all animate-pulse"></span>
            <Phone size={14} className="relative z-10 fill-current" />
            <span className="relative z-10">CALL US</span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 text-gray-900 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY NAVIGATION */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-gray-900 hover:text-green-600 tracking-tighter"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 pt-8 border-t border-gray-100 w-2/3 text-center">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">
              Urgent Booking
            </p>
            <a
              href="tel:+919318397840"
              className="text-xl font-black text-green-600"
            >
              +91 9318397840
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
