import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white">
      {/* BACKGROUND IMAGE WITH GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg/3.jpg"
          alt="Clean modern home"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* TRUST BADGE */}
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            <span className="text-xs font-bold text-green-700 uppercase tracking-[0.15em]">
              Licensed & Professional
            </span>
          </div>

          {/* MAIN HEADING - Updated to Green Theme */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
            Protect What <br />
            <span className="text-green-600 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Matters Most.
            </span>
          </h1>

          {/* SUBHEADING */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
            Safe, Eco-Friendly Pest Control for your Home & Family. Experience a
            pest-free environment with our professional WHO-approved treatments.
          </p>

          {/* CTA BUTTONS - Updated to Green Theme */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/9318397840"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-black text-center transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-3 group"
            >
              BOOK A FREE INSPECTION
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* SOCIAL PROOF / RATINGS */}
          <div className="flex items-center gap-6 border-t border-gray-100 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-100"
                >
                  <img
                    src={`/images/user/${i}.jpg`}
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm font-bold text-gray-900">
                Trusted by 1000+ Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING STATUS CARD (Bottom Right) */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white shadow-2xl flex items-center gap-4 animate-bounce-slow">
          <div className="relative">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white font-bold">
              24/7
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <p className="text-sm font-black text-gray-800 leading-tight">
            Emergency <br /> Service Available
          </p>
        </div>
      </div>
    </section>
  );
}
