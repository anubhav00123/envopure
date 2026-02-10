import { Search, FileText, Zap, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Inspection",
    desc: "Thorough assessment of your property to identify pest entry points and nesting areas.",
    icon: Search,
  },
  {
    title: "Treatment Plan",
    desc: "Developing a customized, eco-friendly strategy tailored to your specific environment.",
    icon: FileText,
  },
  {
    title: "Application",
    desc: "Swift and professional execution of the treatment using advanced, safe technology.",
    icon: Zap,
  },
  {
    title: "Follow-up",
    desc: "Continuous monitoring and protection to ensure pests don't return to your space.",
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER MATCHING WHO WE ARE THEME */}
        <div className="mb-20">
          <h3 className="text-xs font-black text-green-600 uppercase tracking-[0.3em] mb-2">
            How We Work
          </h3>
          <div className="w-12 h-1 bg-green-500 rounded-full mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Our 4-Step <span className="text-green-600">Efficiency</span> Process
          </h2>
        </div>

        {/* STEPS GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* CONNECTING LINE (Desktop Only) */}
          <div className="hidden lg:block absolute top-[2.75rem] left-0 w-full h-[2px] bg-gray-100 -z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* STEP NUMBER & ICON */}
              <div className="relative z-10 mb-8 inline-flex items-center justify-center">
                <div className="w-20 h-20 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-50 transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-green-500/10">
                  <step.icon className="text-green-600 w-8 h-8 transition-transform duration-500 group-hover:scale-110" strokeWidth={2} />
                </div>
                
                {/* FLOATING NUMBER */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-black text-xs shadow-lg group-hover:bg-green-600 transition-colors">
                  0{i + 1}
                </div>
              </div>

              {/* TEXT CONTENT */}
              <h3 className="text-gray-900 text-xl font-black mb-4 tracking-tight group-hover:text-green-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                {step.desc}
              </p>

              {/* STEP INDICATOR FOR MOBILE */}
              <div className="mt-6 flex items-center gap-1">
                 <div className="h-1 w-8 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="mt-24 flex justify-start">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl px-8 py-4 flex items-center gap-4">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
              Available 24/7 for emergency inspections
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}