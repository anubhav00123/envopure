import { Shield, Leaf, Clock, CheckCircle } from "lucide-react";

const features = [
  { 
    icon: Shield, 
    title: "Certified", 
    desc: "WHO-approved methods",
    accent: "group-hover:bg-green-600" 
  },
  { 
    icon: Leaf, 
    title: "Eco-Friendly", 
    desc: "Safe for pets & kids",
    accent: "group-hover:bg-green-600" 
  },
  { 
    icon: Clock, 
    title: "24/7 Support", 
    desc: "Always available",
    accent: "group-hover:bg-green-600" 
  },
  { 
    icon: CheckCircle, 
    title: "Guaranteed", 
    desc: "Results assured",
    accent: "group-hover:bg-green-600" 
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER MATCHING YOUR THEME */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
            Our Standards
          </h3>
          <div className="w-16 h-1 bg-green-500 mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(34,197,94,0.1)] transition-all duration-500"
            >
              {/* ICON CIRCLE */}
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 transition-colors duration-500">
                <f.icon 
                  strokeWidth={1.5} 
                  size={32} 
                  className="text-green-600 group-hover:text-white transition-colors duration-500" 
                />
              </div>

              {/* TEXT */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {f.desc}
              </p>

              {/* DECORATIVE DOT */}
              <div className="mt-6 flex items-center gap-2">
                 <div className="w-1 h-1 bg-green-500 rounded-full group-hover:w-6 transition-all duration-500" />
                 <div className="w-1 h-1 bg-green-200 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}