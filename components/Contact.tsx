import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/bg/4.jpg" // Replace with your image path
            alt="Pest control consultation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-600/10" />
        </div>

        {/* RIGHT FORM */}
        <div>
          <p className="text-green-600 font-semibold tracking-wide uppercase mb-4">
            Contact Us
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-8">
            Get a Free Quote & <br />
            Professional Inspection
          </h2>

          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />

            <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
              <option>Select Service Type</option>
              <option>Residential Control</option>
              <option>Commercial Control</option>
              <option>Termite Treatment</option>
            </select>

            <textarea
              placeholder="Tell us about your pest problem"
              rows={4}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            ></textarea>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-200 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}