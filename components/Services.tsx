import {
  Bug,
  ShieldCheck,
  Wind,
  Trash2,
  ArrowRight,
  TreeDeciduous,
  Bird,
  Zap,
  Scissors,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Bug,
    title: "Cockroach Control",
    desc: "Advanced gel baiting and targeted spray treatments to eliminate infestations at the source.",
  },
  {
    icon: ShieldCheck,
    title: "Termite Treatment",
    desc: "Comprehensive soil barriers and structural protection to safeguard your property's foundation.",
  },
  {
    icon: Wind,
    title: "Mosquito Control",
    desc: "Specialized indoor and outdoor fogging systems designed to reclaim your yard and living space.",
  },
  {
    icon: Trash2,
    title: "Rodent Control",
    desc: "Strategic exclusion and humane removal techniques to keep rats and mice out of your home.",
  },
  {
    icon: TreeDeciduous,
    title: "Wood Borer Control",
    desc: "In-depth timber injections and preservative treatments to stop wood-destroying beetles in their tracks.",
  },
  {
    icon: Bird,
    title: "Bird Control",
    desc: "Humane spikes, netting, and deterrent systems to prevent nesting and protect your building's exterior.",
  },
  {
    icon: Scissors,
    title: "Flea Control",
    desc: "Multi-stage liquid treatments targeting eggs, larvae, and adults to break the infestation cycle.",
  },
  {
    icon: Zap,
    title: "Bee Control",
    desc: "Safe hive relocation and nest removal services focused on protecting both your home and the environment.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-xs font-black text-green-600 uppercase tracking-[0.3em] mb-2">
              Our Expertise
            </h3>
            <div className="w-12 h-1 bg-green-500 rounded-full mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Professional Solutions for <br />
              <span className="text-gray-400 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">
                Every Pest Problem.
              </span>
            </h2>
          </div>

          <Link href="/services" className="group">
            <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full border border-gray-100 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <span className="text-sm font-black tracking-widest uppercase">
                View All
              </span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </Link>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white p-10 rounded-[2rem] border border-gray-100 hover:border-green-500/20 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-15px_rgba(34,197,94,0.12)] transition-all duration-500"
            >
              {/* ICON CONTAINER */}
              <div className="relative mb-10 inline-block">
                <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-lg scale-0 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                  <s.icon size={32} strokeWidth={1.5} />
                </div>
              </div>

              {/* CONTENT */}
              <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {s.desc}
              </p>

              {/* INTERACTIVE FOOTER */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-green-500 transition-colors">
                  Learn More
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ACCENT CARD */}
        <div className="mt-20 p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <ShieldCheck className="text-green-600" />
            </div>
            <p className="text-sm font-bold text-gray-700">
              All treatments are{" "}
              <span className="text-green-600 underline underline-offset-4">
                WHO & Government certified
              </span>{" "}
              for safety.
            </p>
          </div>
          <a
            href="https://wa.me/9318397840"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-black text-gray-900 uppercase tracking-widest hover:text-green-600 transition-colors"
          >
            Contact Specialist →
          </a>
        </div>
      </div>
    </section>
  );
}
