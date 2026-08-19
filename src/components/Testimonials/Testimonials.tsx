"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { TESTIMONIALS } from "@/data/content";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TestimonialCard = ({ testimonial, index }: { testimonial: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      animate={{ 
        scale: isInView ? 1 : 0.95,
        opacity: isInView ? 1 : 0.6,
        backgroundColor: isInView ? "var(--color-surface-sage)" : "var(--color-bg-main)"
      }}
      className="rounded-3xl p-8 md:p-10 shadow-sm border border-border-subtle flex flex-col h-full min-w-[320px] md:min-w-[480px] lg:min-w-[550px] flex-1 snap-center hover:shadow-xl hover:border-accent/30 transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500" />
      
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className="flex gap-1.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={20} className="fill-accent text-accent" />
          ))}
        </div>
        <div className="bg-bg-main border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-accent/10">
          Verified Client
        </div>
      </div>
      
      <p className="text-primary text-xl md:text-2xl leading-relaxed flex-grow mb-10 font-bold relative z-10">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center gap-4 relative z-10 border-t border-border-subtle pt-6">
        <div className="w-14 h-14 rounded-2xl bg-bg-main flex items-center justify-center text-accent font-bold text-xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-primary text-lg">{testimonial.name}</h4>
          <p className="text-sm text-text-muted font-medium">{testimonial.designation}</p>
        </div>
      </div>
    </motion.div>
  );
};

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
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight"
            >
              Don't just take our word for it
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-muted font-medium"
            >
              Hear from families and professionals who found their peace of mind with Qura.
            </motion.p>
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
          className="flex overflow-x-auto pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory hide-scrollbar gap-6 lg:gap-8 max-w-full"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}



