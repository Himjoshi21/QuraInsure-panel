"use client";

import { motion } from "framer-motion";
import { Shield, HeartPulse, Building, Lock, PhoneOff, Scale, LifeBuoy, BadgeCheck } from "lucide-react";
import { BENEFITS } from "@/data/content";
import { cn } from "@/lib/utils";

const iconMap = {
  PhoneOff: PhoneOff,
  Scale: Scale,
  LifeBuoy: LifeBuoy,
  BadgeCheck: BadgeCheck,
};

export default function Benefits() {
  return (
    <section id="why-us" className="py-24 bg-surface-sage overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight">
            Why you'll love working with us
          </h2>
          <p className="text-lg text-text-muted font-medium">
            We've redesigned the insurance experience from the ground up to be exactly what it should be: transparent, helpful, and stress-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {BENEFITS.map((benefit, index) => {
            const isLarge = index === 0;
            const isWide = index === 3;
            const Icon = iconMap[benefit.icon as keyof typeof iconMap] || Shield;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30, scale: isLarge ? 0.95 : 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: isLarge ? 0 : index * 0.15, ease: "easeOut" }}
                className={cn(
                  "relative bg-surface rounded-3xl p-8 shadow-sm border border-border-subtle overflow-hidden group hover:shadow-lg hover:border-accent/50 hover:-translate-y-1 transition-all duration-300",
                  isLarge ? "md:col-span-2 md:row-span-2 bg-surface-mint" : "",
                  isWide ? "md:col-span-1" : ""
                )}
              >
                {/* Decorative background shape for large card */}
                {isLarge && (
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-surface-pale rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500" />
                )}
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
                    isLarge ? "bg-accent text-text-inverse shadow-lg shadow-accent/20" : "bg-surface-pale text-accent"
                  )}>
                    <Icon size={isLarge ? 28 : 24} strokeWidth={isLarge ? 2 : 2.5} className={isLarge ? "scale-110" : ""} />
                  </div>
                  <h3 className={cn("font-bold text-primary mb-3", isLarge ? "text-4xl lg:text-3xl" : "text-xl")}>
                    {benefit.title}
                  </h3>
                  <p className={cn("text-text-muted leading-relaxed font-medium", isLarge ? "text-lg lg:text-xl max-w-sm" : "text-sm")}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
