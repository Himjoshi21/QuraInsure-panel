"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/content";
import Image from "next/image";

export default function Process() {
  return (
    <section id="how-it-works" className="py-24 bg-surface-soft border-t border-border-subtle">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight">
              How we help you get <br className="hidden md:block"/> the right insurance
            </h2>
            <p className="text-lg text-text-muted mb-12 font-medium">
              Our process is designed to be transparent, straightforward, and entirely focused on your best interests. No jargon, no hidden fees.
            </p>
            
            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-[35px] top-[24px] bottom-12 w-px bg-border-subtle" />
              
              <div className="space-y-12">
                {PROCESS_STEPS.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20, backgroundColor: "transparent" }}
                    whileInView={{ opacity: 1, x: 0, backgroundColor: "var(--color-surface)" }}
                    viewport={{ once: false, amount: 0.8 }} // trigger when fully in view
                    transition={{ duration: 0.4 }}
                    className="relative group transition-colors shadow-sm p-4 rounded-2xl ml-[-16px] pl-[72px]"
                  >
                    {/* The active state border highlight */}
                    <motion.div 
                      className="absolute left-[16px] top-[16px] w-10 h-10 bg-surface border-2 border-border-subtle group-hover:border-accent rounded-xl flex items-center justify-center text-text-main group-hover:text-accent font-bold text-sm shadow-sm z-10 transition-colors duration-300"
                      whileInView={{ borderColor: "#3F8F68", color: "#3F8F68", scale: 1.1, backgroundColor: "#E3F3E9" }}
                      viewport={{ once: false, amount: 0.8 }}
                    >
                      {step.step}
                    </motion.div>
                    
                    <h3 className="text-lg font-bold text-primary mb-2 pt-1.5 transition-colors group-hover:text-accent">
                      {step.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block relative rounded-[2rem] overflow-hidden bg-primary aspect-[4/5] shadow-2xl border border-primary"
          >
            {/* Pattern instead of stock image */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-primary opacity-80" />
            
            <div className="absolute inset-0 p-12 flex flex-col">
              <div className="flex justify-between items-start mb-auto">
                <div className="text-white/50 text-sm font-bold uppercase tracking-widest">The Qura Experience</div>
                <Image src="/logos/White Secondary Logo.svg" alt="Qura" width={100} height={30} className="opacity-50 h-6 w-auto" />
              </div>
              
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl relative mt-8">
                <div className="absolute -top-4 -left-4 text-6xl text-accent-light opacity-50 font-serif">"</div>
                <p className="text-white text-xl font-medium leading-relaxed relative z-10">
                  They explained everything so clearly, I finally felt confident making a decision about my family's future. The process was incredibly smooth.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold border-2 border-white/20">
                    RK
                  </div>
                  <div>
                    <div className="text-white font-bold">Rajesh K.</div>
                    <div className="text-accent-light text-sm font-medium">Verified Customer</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
