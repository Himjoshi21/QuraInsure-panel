"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CountUp({ value }: { value: string }) {
  const [count, setCount] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract number and suffix (like "K+", "%")
  const match = value.match(/([0-9,.]+)(.*)/);
  const numericPart = match ? parseFloat(match[1].replace(/,/g, "")) : 0;
  const suffixPart = match ? match[2] : "";

  useEffect(() => {
    if (isInView && match) {
      let startTime: number;
      const duration = 1500; // 1.5s
      
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        
        // Easing function (easeOutQuart)
        const ease = 1 - Math.pow(1 - progress, 4);
        
        const current = Math.floor(ease * numericPart);
        
        // Format with commas if original had commas
        const formatted = value.includes(",") 
          ? current.toLocaleString() 
          : current.toString();
          
        setCount(formatted + suffixPart);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, value, numericPart, suffixPart]);

  return <span ref={ref}>{match ? count : value}</span>;
}
