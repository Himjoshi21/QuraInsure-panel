"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden border-b border-border-subtle bg-surface-soft">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 z-0 pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-surface-soft to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface-soft to-transparent z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="lg:col-span-6 xl:col-span-5 max-w-2xl"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border-subtle text-text-main text-xs font-semibold mb-6 shadow-sm"
            >
              <Star size={12} className="fill-amber-400 text-amber-400" />
              <span>India's top-rated insurance advisory</span>
            </motion.div>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-primary leading-[1.05] mb-6 text-balance"
            >
              Insurance that <br className="hidden lg:block"/>
              <motion.span 
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                className="text-accent inline-block"
              >
                actually makes sense.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl text-text-muted mb-8 max-w-md leading-relaxed font-medium"
            >
              No spam. No jargon. Just honest, expert advice to help you pick the best term and health insurance for your family.
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <Link
                href="#consultation"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cta text-primary text-base font-semibold rounded-xl hover:bg-cta-hover transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              >
                Book a free call
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface text-primary text-base font-semibold rounded-xl border border-border-subtle hover:bg-surface-soft transition-all shadow-sm active:scale-95"
              >
                Explore products
              </Link>
            </motion.div>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-6 text-sm text-text-muted font-medium"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-accent" />
                <span>100% Free Advice</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-accent" />
                <span>Zero Spam</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[550px] h-[400px] sm:h-[480px]">
              {/* Decorative Blur Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/10 rounded-full blur-3xl opacity-50 will-change-transform" />
              
              {/* Main App Window Mockup */}
              <div className="animate-float absolute right-4 top-4 bottom-4 left-10 sm:left-16 bg-surface rounded-2xl border border-border-subtle shadow-2xl overflow-hidden flex flex-col z-10"
              >
                {/* Header */}
                <div className="h-10 sm:h-12 border-b border-border-subtle flex items-center px-4 justify-between bg-surface-soft">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                  </div>
                  <div className="h-3 w-24 bg-border-subtle/50 rounded-md" />
                </div>
                {/* Body */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col gap-4 bg-surface-mint">
                  <div className="flex justify-between items-start sm:items-end mb-2 pl-8 sm:pl-0">
                     <div>
                        <div className="text-[10px] sm:text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Recommended Plan</div>
                        <div className="text-xl sm:text-4xl font-bold text-primary leading-tight">Comprehensive Health</div>
                     </div>
                     <div className="text-right hidden sm:block">
                        <div className="text-xs text-text-muted mb-1">Coverage</div>
                        <div className="text-xl font-bold text-accent">Customized</div>
                     </div>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-2 sm:space-y-3 pl-8 sm:pl-0 pr-8 sm:pr-0">
                    {[
                      { t: "No room rent capping" },
                      { t: "Pre & post hospitalization cover" },
                      { t: "Annual health checkups included" },
                      { t: "Zero copayment" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border border-border-subtle bg-surface shadow-sm">
                         <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-surface-pale flex items-center justify-center shrink-0">
                           <ShieldCheck size={12} className="text-accent sm:w-[14px] sm:h-[14px]" />
                         </div>
                         <span className="text-xs sm:text-sm font-medium text-text-main">{item.t}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-3 flex gap-3 pr-8 sm:pr-0">
                     <div className="h-9 sm:h-10 flex-1 bg-surface-pale rounded-lg border border-border-subtle flex items-center justify-center text-accent font-semibold text-[13px] sm:text-sm">
                       View Details
                     </div>
                     <div className="h-9 sm:h-10 flex-1 bg-cta rounded-lg flex items-center justify-center text-primary font-semibold text-[13px] sm:text-sm shadow-sm">
                       Select Plan
                     </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Element 1 - Advisor Profile */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="absolute left-[-10px] sm:left-[-20px] top-12 sm:top-16 z-20"
              >
                <div className="animate-float-fast bg-surface p-3 sm:p-4 rounded-xl shadow-xl border border-border-subtle w-[180px] sm:w-[220px] flex items-center gap-3"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-mint border border-border-subtle flex items-center justify-center relative shrink-0">
                    <Image src="/logos/Colour Logomark.svg" alt="Qura" width={20} height={20} className="sm:w-6 sm:h-6" />
                    <div className="animate-pulse-dot absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent-small border-2 border-white rounded-full" 
                    />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-text-muted font-medium">Your Advisor</div>
                    <div className="text-xs sm:text-sm font-bold text-primary">Expert Agent</div>
                    <div className="text-[9px] sm:text-[10px] text-accent font-semibold bg-surface-pale inline-block px-1.5 py-0.5 rounded mt-0.5">Available to talk</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2 - Comparison Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                className="absolute right-[-10px] sm:right-[-25px] bottom-10 sm:bottom-12 z-20"
              >
                <div className="animate-float-fast bg-primary p-3 sm:p-4 rounded-xl shadow-xl border border-white/10 text-white w-[140px] sm:w-[160px]"
                >
                  <div className="text-[10px] sm:text-xs text-white/70 font-medium mb-1">Estimated Savings</div>
                  <div className="text-lg sm:text-xl font-bold text-accent-small mb-2">Optimized</div>
                  <div className="h-1 sm:h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                      className="h-full bg-accent-small rounded-full" 
                    />
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

