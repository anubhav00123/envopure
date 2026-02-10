import Image from "next/image";
import {
  Leaf,
  UserCheck,
  BadgeCheck,
  Clock,
  IndianRupee,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function WhoWeAre() {
  const reasons = [
    { icon: Leaf, text: "100% Safe & Odourless Chemicals" },
    { icon: UserCheck, text: "Experienced Technicians" },
    { icon: BadgeCheck, text: "Government Licensed Company" },
    { icon: Clock, text: "Same-Day Service Available" },
    { icon: IndianRupee, text: "Affordable Rates" },
    { icon: Building2, text: "AMC Plans for Homes & Offices" },
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: CONTENT & IMAGE */}
        <div className="relative">
          <div className="mb-8">
            <h3 className="text-xs font-black text-green-600 uppercase tracking-[0.3em] mb-2">
              Who We Are
            </h3>
            <div className="w-12 h-1 bg-green-500 rounded-full mb-6" />
            <h2 className="text-4xl font-black text-gray-900 leading-tight mb-6">
              Leading the Way in <br />
              <span className="text-gray-500">Eco-Friendly Protection.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8 max-w-lg">
              Envopure is a leading pest control service provider delivering safe,
              effective, and eco-friendly pest management solutions for homes,
              offices, and commercial properties.
            </p>
          </div>

          <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/bg/1.jpg"
              alt="Pest Control Services"
              width={700}
              height={500}
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <button className="mt-8 group flex items-center gap-3 bg-gray-900 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-black transition-all duration-300">
            READ MORE 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* RIGHT: WHY US CARDS */}
        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 relative">
          {/* Decorative element */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500/10 rounded-full blur-3xl" />
          
          <h3 className="text-xs font-black text-green-600 uppercase tracking-[0.3em] mb-2">
            Why Choose Us
          </h3>
          <div className="w-12 h-1 bg-green-500 rounded-full mb-10" />

          <div className="grid gap-4">
            {reasons.map((item, index) => (
              <div 
                key={index}
                className="group flex items-center gap-5 bg-white p-5 rounded-2xl border border-gray-100 hover:border-green-500/30 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <item.icon size={24} strokeWidth={2} />
                </div>
                <p className="font-bold text-gray-800 text-base md:text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}