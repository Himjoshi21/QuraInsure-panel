"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/content";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    requestAnimationFrame(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        const newCanScrollLeft = scrollLeft > 0;
        const newCanScrollRight = scrollLeft < scrollWidth - clientWidth - 5;
        if (canScrollLeft !== newCanScrollLeft) setCanScrollLeft(newCanScrollLeft);
        if (canScrollRight !== newCanScrollRight) setCanScrollRight(newCanScrollRight);
      }
    });
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll, { passive: true });
    return () => window.removeEventListener("resize", checkScroll);
  }, [canScrollLeft, canScrollRight]);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="reviews" className="py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight">
              Don't just take our word for it
            </h2>
            <p className="text-lg text-text-muted font-medium">
              Hear from families and professionals who found their peace of mind with Qura.
            </p>
          </div>
          
          <div className="flex gap-3 shrink-0 hidden md:flex">
            <button 
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center text-primary transition-all hover:bg-surface-mint disabled:opacity-30 disabled:cursor-not-allowed hover:-translate-y-0.5 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center text-primary transition-all hover:bg-surface-mint disabled:opacity-30 disabled:cursor-not-allowed hover:-translate-y-0.5 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={containerRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar gap-6 lg:gap-8 max-w-full"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-2xl p-8 shadow-sm border border-border-subtle flex flex-col h-full min-w-[300px] md:min-w-[400px] flex-1 snap-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>
              
              <p className="text-text-main text-lg leading-relaxed flex-grow mb-8 font-medium">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-pale flex items-center justify-center text-accent font-bold text-lg group-hover:bg-accent group-hover:text-text-inverse transition-colors duration-300">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-text-muted">{testimonial.designation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
