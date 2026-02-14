import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-slate-50 py-12 lg:py-24 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGES: Hidden on mobile (hidden), shown on desktop (lg:block) */}
        <div className="relative group hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
            <Image
              src="/images/people.jpg"
              alt="Pest control service"
              width={600}
              height={700}
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating Experience Card */}
          <div className="absolute -top-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl z-20 text-center">
            <p className="text-3xl font-bold">5000+</p>
            <p className="text-xs uppercase tracking-wider opacity-90">
              Homes Protected
            </p>
          </div>

          {/* Enhanced Client Badge */}
          <div className="absolute -bottom-8 -left-4 bg-white shadow-2xl rounded-2xl p-5 flex items-center gap-5 z-20 border border-slate-100">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src={`/images/user/${i}.jpg`}
                  alt="Client avatar"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-green-600 text-xs font-bold">
                +
              </div>
            </div>
            <div className="border-l pl-5 border-slate-200">
              <p className="text-2xl font-black text-slate-900 leading-none">
                1000+
              </p>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-tighter">
                Happy Clients
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            <span className="text-xs font-bold text-green-700 uppercase tracking-[0.15em]">
              About Our Company
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] mb-8">
            Modern Pest Control for a{" "}
            <span className="text-green-600">Safer Environment.</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
            <div className="shrink-0 relative">
              <Image
                src="/images/man.jpg"
                alt="Professional technician"
                width={200}
                height={160}
                className="rounded-2xl object-cover shadow-lg border-4 border-white"
              />
            </div>
            <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-blue-500 pl-6">
              "Envopure is built on principles of safety and speed. Using
              eco-friendly treatments, we ensure your space remains pristine."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
            {[
              "Experienced Professionals",
              "24/7 Premium Support",
              "100% Satisfaction Guarantee",
              "Eco-Friendly Solutions",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span className="font-semibold text-slate-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <a
              className="group relative bg-green-600 hover:bg-green-700 text-white px-9 py-4 rounded-xl font-black tracking-wide transition-all duration-300 shadow-[0_15px_30px_-5px_rgba(22,163,74,0.3)] active:scale-95 flex items-center gap-3"
              href="https://wa.me/9318397840"
              target="_blank"
              rel="noopener noreferrer"
            >
              DISCOVER MORE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="tel:+919318397840"
              className="group flex items-center gap-4 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
                <div className="relative w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <Phone
                    size={20}
                    fill="currentColor"
                    className="group-hover:fill-none"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
                  Call Us Today
                </span>
                <span className="text-lg font-black text-gray-900 group-hover:text-green-600 transition-colors leading-none">
                  +91-9318397840
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}