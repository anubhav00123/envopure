import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  Building2,
  Factory,
} from "lucide-react";
import Image from "next/image";
const mainServices = [
  {
    title: "Residential Pest Control",
    icon: Home,
    image: "/images/services/residential.jpg",
    desc: "Complete protection for your family. We target cockroaches, ants, termites, and bed bugs using 100% safe, odorless treatments.",
    points: ["Pet & Child Safe", "Kitchen Sanitation", "Year-round Protection"],
  },
  {
    title: "Commercial Pest Control",
    icon: Building2,
    image: "/images/services/commercial.jpg",
    desc: "Discreet and effective solutions for offices, restaurants, and warehouses. We ensure your business meets all health and safety regulations.",
    points: [
      "Discreet Service",
      "Digital Documentation",
      "AMC Specialized Plans",
    ],
  },
  {
    title: "Industrial Pest Control",
    icon: Factory,
    image: "/images/services/pest.jpg",
    desc: "Heavy-duty pest management for large-scale manufacturing units and food processing plants, focusing on zero-tolerance sanitation standards.",
    points: [
      "HACCP Compliance",
      "Audit Ready Reports",
      "Integrated Pest Management",
    ],
  },
];
const MainServices = () => {
  return (
    <>
      <main className="bg-white">
        {/* HEADER SECTION */}
        <section className="bg-gray-50 py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
              Our Expertise
            </h3>
            <div className="w-16 h-1 bg-green-500 mt-2 mb-6" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Comprehensive Solutions <br /> For Every Pest Problem
            </h1>
          </div>
        </section>

        {/* DETAILED SERVICES BLOCK */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-16 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-[400px]"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <service.icon className="w-12 h-12 text-green-600 mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-700">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/9318397840"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-md font-bold transition-all inline-flex items-center gap-2"
                  >
                    Get Free Inspection
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PEST CATALOG GRID */}
      </main>
    </>
  );
};

export default MainServices;
