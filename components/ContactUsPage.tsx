import { Phone, Mail, MessageSquare, Send } from "lucide-react";

export default function ContactUsPage() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-16">
          <h3 className="text-xs font-black text-green-600 uppercase tracking-[0.3em] mb-2">
            Get In Touch
          </h3>
          <div className="w-12 h-1 bg-green-500 rounded-full mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Ready to live <br />
            <span className="text-green-600">Pest-Free?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: COMPACT CONTACT INFO (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex-1 bg-gray-50 p-6 rounded-[2rem] border border-gray-100 flex items-center gap-5 hover:border-green-500/30 transition-all">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-green-900/10">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                  Call Experts
                </h4>
                <a
                  href="tel:+919318397840"
                  className="text-lg font-black text-gray-800 hover:text-green-600 transition-colors"
                >
                  +91 9318397840
                </a>
              </div>
            </div>

            <div className="flex-1 bg-gray-50 p-6 rounded-[2rem] border border-gray-100 flex items-center gap-5 hover:border-green-500/30 transition-all">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                  Email Us
                </h4>
                <p className="text-sm font-bold text-gray-800">
                  support@envopure.com
                </p>
              </div>
            </div>

            <div className="flex-[1.5] bg-green-600 p-8 rounded-[2rem] text-white relative overflow-hidden group shadow-xl shadow-green-900/10">
              <MessageSquare
                className="absolute -bottom-2 -right-2 text-white/10 group-hover:scale-110 transition-transform"
                size={100}
              />
              <div className="relative z-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-80">
                  WhatsApp Support
                </h4>
                <p className="text-base font-bold mb-5 leading-snug">
                  Need a quote fast? Chat with our experts.
                </p>
                <a
                  href="https://wa.me/9318397840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-green-600 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-100 transition-colors"
                >
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM (8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.04)]">
            <form className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 text-sm focus:border-green-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 text-sm focus:border-green-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">
                  Service Needed
                </label>
                <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 text-sm focus:border-green-500 focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                  <option>Cockroach Control</option>
                  <option>Termite Control</option>
                  <option>Mosquito Control</option>
                  <option>General Pest Control</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your issue..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 text-sm focus:border-green-500 focus:bg-white outline-none transition-all resize-none"
                />
              </div>

              <div className="md:col-span-2 pt-2">
                <button className="w-full md:w-auto bg-gray-900 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3">
                  Submit Request
                  <Send size={14} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
