import Image from "next/image";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white">
      {/* IMPROVED BACKGROUND: Full coverage on mobile, Split on Desktop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg/3.jpg"
          alt="Clean modern home"
          fill
          priority
          className="object-cover object-[center_right] lg:object-center"
        />
        {/* Mobile: Bottom-to-Top Gradient (Darker text protection) */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20 lg:hidden" />
        
        {/* Desktop: Left-to-Right Split */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl pt-24 lg:pt-0">
          {/* MINIMALIST BADGE */}
          <div className="inline-flex items-center gap-2 bg-green-600 px-3 py-1.5 rounded-lg mb-8 shadow-lg shadow-green-200">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
              Licensed & WHO-Approved
            </span>
          </div>

          {/* IMPACTFUL TYPOGRAPHY */}
          <h1 className="text-6xl md:text-9xl font-black text-gray-900 leading-[0.85] mb-8 tracking-tighter">
            Total Pest <br />
            <span className="text-green-600">Freedom.</span>
          </h1>

          {/* CLEAN FEATURE LIST */}
          <div className="space-y-4 mb-12 border-l-4 border-green-500 pl-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-lg font-bold text-gray-800">Kid & Pet Safe Solutions</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-lg font-bold text-gray-800">2-Hour Emergency Response</span>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <a
              href="https://wa.me/9318397840"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-2xl font-black text-center transition-all shadow-2xl shadow-green-200 flex items-center justify-center gap-3 group active:scale-95"
            >
              GET A FREE QUOTE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex flex-col items-center sm:items-start">
              <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Speak to an Expert</span>
              <a href="tel:+919318397840" className="text-2xl font-black text-gray-900 hover:text-green-600 transition-colors">
                +91 93183 97840
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MINIMAL BOTTOM STATUS */}
      <div className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">
          Available Now In Your Area
        </span>
      </div>
    </section>
  );
} 