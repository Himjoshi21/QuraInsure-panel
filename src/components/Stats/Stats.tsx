"use client";

import { motion } from "framer-motion";
import { STATS } from "@/data/content";
import CountUp from "./CountUp";

export default function Stats() {
  return (
    <section className="py-20 bg-surface border-b border-border-subtle">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-100">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-4xl font-bold text-accent mb-2">
                <CountUp value={stat.value} />
              </div>
              <div className="text-sm md:text-base font-medium text-text-muted uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
