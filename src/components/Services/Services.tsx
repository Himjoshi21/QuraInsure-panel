"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, HeartPulse, Building } from "lucide-react";
import { SERVICES } from "@/data/content";
import Link from "next/link";
import { cn } from "@/lib/utils";

const iconMap = {
  Shield: Shield,
  HeartPulse: HeartPulse,
  Building: Building,
};

export default function Services() {
  return (
    <section id="products" className="py-24 bg-surface-mint overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
            Insurance made simple for you
          </h2>
          <p className="text-lg text-text-muted font-medium">
            We help you navigate the complexities of insurance to find the perfect coverage for your specific needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isPrimary = index === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={cn(
                  "group relative rounded-2xl p-8 border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full",
                  isPrimary 
                    ? "bg-primary border-primary text-text-inverse hover:shadow-primary/20" 
                    : "bg-surface border-border-subtle hover:border-accent hover:bg-surface-soft hover:shadow-accent/5"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-300 shrink-0",
                  isPrimary ? "bg-surface/10 text-white group-hover:bg-accent" : "bg-surface-pale text-accent group-hover:bg-accent group-hover:text-text-inverse"
                )}>
                  <Icon size={24} strokeWidth={2.5} />
                </div>
                <h3 className={cn("text-xl font-bold mb-3 transition-colors", isPrimary ? "text-white" : "text-text-main group-hover:text-accent")}>
                  {service.title}
                </h3>
                <p className={cn("mb-8 leading-relaxed text-sm flex-grow font-medium", isPrimary ? "text-white/80" : "text-text-muted")}>
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className={cn("inline-flex items-center font-semibold text-sm group/link mt-auto w-max", isPrimary ? "text-white hover:text-accent-light" : "text-accent hover:text-primary")}
                >
                  Learn more
                  <ArrowRight size={16} className="ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
