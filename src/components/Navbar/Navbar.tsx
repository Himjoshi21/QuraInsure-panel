"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled ? "bg-surface/85 backdrop-blur-md shadow-sm py-2.5 border-b border-border-subtle/50" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-50 transition-transform duration-300 hover:scale-[1.02] active:scale-95">
            <Image
              src="/logos/Colour Primary Logo.svg"
              alt="Qura Insure Logo"
              width={140}
              height={40}
              className="h-8 w-auto md:h-9 transition-all duration-300"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium text-text-muted hover:text-text-main transition-colors py-1"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#login"
              className="text-sm font-semibold text-text-muted hover:text-text-main transition-colors"
            >
              Log in
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2.5 bg-cta text-primary hover:bg-cta-hover text-sm font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Book a free call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 -mr-2 text-primary rounded-lg hover:bg-surface-soft transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-border-subtle shadow-lg px-6 py-8 flex flex-col gap-6 md:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-primary hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="h-px w-full bg-border-subtle my-2" />
            <div className="flex flex-col gap-4">
              <Link
                href="#login"
                className="text-center py-3 text-base font-medium text-primary bg-surface-soft hover:bg-surface-mint transition-colors rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="#contact"
                className="text-center py-3 text-base font-medium text-text-inverse bg-cta hover:bg-cta-hover text-primary transition-colors rounded-lg shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a free call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
