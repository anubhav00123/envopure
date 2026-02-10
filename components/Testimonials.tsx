"use client";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Simar",
    location: "Sector 137, Noida",
    content: "Very professional team. Termite issue reduced within days and they explained the full process clearly.",
    rating: 5,
  },
  {
    name: "Digvijay",
    location: "Sector 75, Noida",
    content: "Quick response and very polite staff. Cockroach problem came under control much faster than we expected.",
    rating: 5,
  },
  {
    name: "Shambhavi",
    location: "Sector 50, Noida",
    content: "Team arrived on time, explained the treatment, and followed proper safety steps. Very satisfied with the service.",
    rating: 5,
  },
  {
    name: "Geetansh",
    location: "Sector 78, Noida",
    content: "We were struggling with termites for months. After Envopure’s visit, we saw a big improvement within a week.",
    rating: 5,
  },
  {
    name: "Honey",
    location: "Sector 76, Noida",
    content: "Professional equipment and knowledgeable technicians. They answered all our questions patiently.",
    rating: 5,
  },
  {
    name: "Yashiswini",
    location: "Sector 137, Noida",
    content: "Neat and clean work. No strong smell and minimal disturbance to the house.",
    rating: 5,
  },
  {
    name: "Harshita",
    location: "Sector 51, Noida",
    content: "Good communication from booking to completion. The infestation reduced significantly.",
    rating: 5,
  },
  {
    name: "Sujata",
    location: "Sector 45, Noida",
    content: "Appreciated the follow-up after service. Shows they care about long-term results.",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Handle responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsToShow(3);
      else if (window.innerWidth >= 768) setItemsToShow(2);
      else setItemsToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - (itemsToShow - 1)));
  }, [itemsToShow]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - (itemsToShow - 1))) % (testimonials.length - (itemsToShow - 1)));
  };

  useEffect(() => {
    const timer = setInterval(() => {
        if (currentIndex < testimonials.length - itemsToShow) {
            nextSlide();
        } else {
            setCurrentIndex(0);
        }
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, itemsToShow, nextSlide]);

  return (
    <section className="bg-slate-50 py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm mb-3">
              Testimonials
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-slate-500 text-base md:text-lg">
              Real feedback from homeowners across Noida.
            </p>
          </div>

          {/* Navigation Controls - Hidden on smallest mobile for cleaner look, or kept for UX */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="p-3 md:p-4 rounded-full border border-slate-200 bg-white hover:bg-green-600 hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 md:p-4 rounded-full border border-slate-200 bg-white hover:bg-green-600 hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-visible">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-full shrink-0 px-2 md:px-3"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="relative bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm h-full flex flex-col">
                  <div className="absolute top-6 right-6 text-green-100 opacity-40">
                    <Quote size={40} className="md:w-12 md:h-12" />
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-8 italic text-sm md:text-base flex-grow">
                    “{t.content}”
                  </p>

                  <div className="flex items-center gap-4 border-t pt-6 border-slate-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white font-black text-base md:text-lg shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-slate-900 leading-tight truncate">{t.name}</h4>
                      <p className="text-xs md:text-sm text-slate-500 font-medium truncate">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: testimonials.length - (itemsToShow - 1) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? "w-8 bg-green-600" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* Trust Line */}
        <div className="mt-12 text-center px-4">
          <p className="font-bold text-sm md:text-lg text-slate-400 italic">
            Trusted by hundreds of families across Noida
          </p>
        </div>
      </div>
    </section>
  );
}