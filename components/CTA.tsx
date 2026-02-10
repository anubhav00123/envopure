import { PhoneCall, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react'
import React from 'react'

const CTA = () => {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 text-center md:text-left relative overflow-hidden shadow-2xl">
          
          {/* ICON OVERLAY */}
          <ShieldCheck 
            className="absolute -bottom-10 -right-10 text-white opacity-[0.03] rotate-12" 
            size={400} 
          />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            
            {/* TEXT CONTENT */}
            <div className="lg:w-3/5">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-black text-green-400 uppercase tracking-widest">Available 24/7</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1]">
                Need Urgent <br /> 
                <span className="text-green-500">Pest Removal?</span>
              </h2>
              
              <p className="text-gray-400 text-lg md:text-xl font-medium max-w-lg mb-0 leading-relaxed">
                Don't wait for the problem to grow. Get a professional, same-day inspection and protect your home today.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="lg:w-2/5 w-full flex flex-col gap-4">
              {/* CALL BUTTON */}
              <a 
                href="tel:+919318397840" 
                className="group w-full bg-white text-gray-900 px-8 py-5 rounded-2xl font-black flex items-center justify-between hover:bg-green-500 hover:text-white transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <PhoneCall size={20} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-white/80 transition-colors">Call Support</span>
                    <span className="text-lg md:text-xl">+91 9318397840</span>
                  </div>
                </div>
                <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </a>

              {/* WHATSAPP BUTTON */}
              <a 
                href="https://wa.me/919318397840"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-green-900/20 active:scale-[0.98]"
              >
                <MessageSquare size={20} fill="currentColor" />
                CHAT ON WHATSAPP
              </a>
              
              <p className="text-center text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                Average response time: 15 Minutes
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA