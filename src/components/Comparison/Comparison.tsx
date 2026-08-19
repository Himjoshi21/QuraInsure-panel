"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Image from "next/image";

const comparisonFeatures = [
  { label: "Advice Quality", qura: "Unbiased & tailored to you", others: "Driven by high commissions" },
  { label: "Spam Calls", qura: "Zero spam guarantee", others: "Constant promotional calls" },
  { label: "Claims Support", qura: "Dedicated lifetime support team", others: "You're on your own" },
  { label: "Pricing", qura: "Same as buying direct", others: "Hidden fees sometimes" },
  { label: "Experience", qura: "100% digital & seamless", others: "Tedious paperwork" },
];

export default function Comparison() {
  return (
    <section className="py-24 bg-primary text-text-inverse relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            How we're different
          </h2>
          <p className="text-lg text-white/70 font-medium max-w-2xl mx-auto">
            We built Qura because we were tired of how insurance was being sold.
          </p>
        </div>

        <div className="bg-primary/40 backdrop-blur-xl rounded-[2rem] border border-white/10/50 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-12 border-b border-white/10 bg-primary/80 p-6 md:p-8 items-center">
            <div className="col-span-12 md:col-span-4 hidden md:block">
              <span className="text-sm uppercase tracking-wider font-bold text-white/70">Feature</span>
            </div>
            <div className="col-span-6 md:col-span-4 text-center md:text-left flex items-center justify-center md:justify-start gap-3">
              <Image src="/logos/White Logomark.svg" alt="Qura" width={24} height={24} className="h-6 w-auto" />
              <span className="text-xl font-bold text-white">Qura</span>
            </div>
            <div className="col-span-6 md:col-span-4 text-center md:text-left">
              <span className="text-xl font-bold text-white/70">Others</span>
            </div>
          </div>
          
          <div className="divide-y divide-white/10">
            {comparisonFeatures.map((item, index) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="grid grid-cols-12 p-6 md:p-8 items-center hover:bg-white/10/50 transition-colors duration-300 group cursor-default"
              >
                <div className="col-span-12 md:col-span-4 mb-4 md:mb-0">
                  <span className="text-base font-medium text-white/70 group-hover:text-white transition-colors">{item.label}</span>
                </div>
                <div className="col-span-6 md:col-span-4 pr-4 md:pr-0">
                  <div className="flex items-start gap-2">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.2 + (index * 0.15) }}
                      className="shrink-0 mt-0.5 transform transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-0.5"
                    >
                      <Check size={20} className="text-accent-small" />
                    </motion.div>
                    <span className="text-sm md:text-base text-white group-hover:text-surface-pale transition-colors">{item.qura}</span>
                  </div>
                </div>
                <div className="col-span-6 md:col-span-4 pl-4 md:pl-0 border-l border-white/10/50 md:border-none opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-start gap-2">
                    <div className="shrink-0 mt-0.5 transform transition-transform duration-300 group-hover:scale-110">
                      <X size={20} className="text-red-400" />
                    </div>
                    <span className="text-sm md:text-base text-white/70">{item.others}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
