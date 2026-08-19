"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden bg-primary text-text-inverse px-8 py-16 md:py-24 text-center shadow-2xl"
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/30 via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-dot-pattern opacity-10 mix-blend-overlay" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] w-96 h-96 pointer-events-none">
              <Image src="/logos/White Logomark.svg" alt="Pattern" fill className="object-contain" />
            </div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-[1.1] tracking-tight text-balance">
              Ready to secure your family's future?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-medium">
              Book a free consultation with our experts today. No spam, no hidden fees, just honest advice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#consultation"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-primary hover:bg-cta-hover text-lg font-bold rounded-xl hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
                Talk to an expert
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#faq"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-text-inverse text-lg font-bold rounded-xl border border-white/20 hover:bg-surface/10 transition-all active:scale-95"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
