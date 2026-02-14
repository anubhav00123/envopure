import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* COLUMN 1: BRAND */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group relative z-50">
              <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center transition-transform group-hover:rotate-12">
                <img
                  src="/images/logomain.jpeg"
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
            <p className="text-gray-500 text-sm leading-relaxed">
              Leading the way in eco-friendly pest management. We protect your
              home and business with WHO-approved, sustainable solutions.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="text-gray-900 font-black uppercase text-xs tracking-[0.2em] mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services"
                  className="group text-gray-500 hover:text-green-600 text-sm font-bold flex items-center gap-2 transition-colors"
                >
                  <ChevronRight
                    size={14}
                    className="text-gray-300 group-hover:text-green-500 transition-colors"
                  />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group text-gray-500 hover:text-green-600 text-sm font-bold flex items-center gap-2 transition-colors"
                >
                  <ChevronRight
                    size={14}
                    className="text-gray-300 group-hover:text-green-500 transition-colors"
                  />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group text-gray-500 hover:text-green-600 text-sm font-bold flex items-center gap-2 transition-colors"
                >
                  <ChevronRight
                    size={14}
                    className="text-gray-300 group-hover:text-green-500 transition-colors"
                  />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFO */}
          <div>
            <h3 className="text-gray-900 font-black uppercase text-xs tracking-[0.2em] mb-8">
              Contact
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center shrink-0 text-green-600">
                  <MapPin size={20} />
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  123 Clean Way, Sector 45, <br /> Noida, UP 201301
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center shrink-0 text-green-600">
                  <Phone size={20} />
                </div>
                <a
                  href="tel:+919318397840"
                  className="text-sm text-gray-900 font-bold hover:text-green-600 transition-colors"
                >
                  +91 9318397840
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center shrink-0 text-green-600">
                  <Mail size={20} />
                </div>
                <span className="text-sm text-gray-600 font-medium tracking-tight">
                  support@envopure.com
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER */}
          <div>
            <h3 className="text-gray-900 font-black uppercase text-xs tracking-[0.2em] mb-8">
              Stay Protected
            </h3>
            <p className="text-sm text-gray-500 mb-6 font-medium">
              Get seasonal tips and exclusive offers delivered to your inbox.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-5 text-sm outline-none focus:border-green-500 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-green-600 hover:bg-green-700 text-white px-4 rounded-lg transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            © {currentYear} ENVOPURE PEST MANAGEMENT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-[11px] font-bold text-gray-400 hover:text-green-600 uppercase tracking-widest transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[11px] font-bold text-gray-400 hover:text-green-600 uppercase tracking-widest transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
