"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const banners = [
  { 
    id: 1, 
    desktop: "/banners/d-ast.avif", 
    mobile: "/banners/m-ast.avif", 
    alt: "Admission Open 2026-27" 
  },
  { 
    id: 2, 
    desktop: "/banners/d-admission-2.avif", 
    mobile: "/banners/m-admission-2.avif", 
    alt: "Expert Coaching Classes" 
  },
];

export const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % banners.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);

  useEffect(() => {
    if (banners.length <= 1) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = banners[currentIndex];
  if (!current) return null;

  return (
    <section className={cn(
      "relative w-full overflow-hidden bg-black group",
      // Mobile: Kept exactly as you liked (9:16)
      "aspect-[9/16]", 
      // Desktop: Changed to strict 16:9 aspect ratio to match your images
      "md:aspect-video md:h-auto" 
    )}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Desktop Image */}
          <img 
            src={current.desktop} 
            className="hidden md:block w-full h-full object-cover" 
            alt={current.alt} 
            fetchPriority={currentIndex === 0 ? "high" : "auto"}
            loading={currentIndex === 0 ? "eager" : "lazy"}
          />
          {/* Mobile Image */}
          <img 
            src={current.mobile} 
            className="block md:hidden w-full h-full object-cover" 
            alt={current.alt} 
            fetchPriority={currentIndex === 0 ? "high" : "auto"}
            loading={currentIndex === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>

      {/* NAVIGATION CONTROLS */}
      {banners.length > 1 && (
        <>
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden lg:flex justify-between px-6 z-30 pointer-events-none">
            <button 
              onClick={prev} 
              className="p-4 rounded-full bg-black/30 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all cursor-pointer pointer-events-auto border border-white/10 hover:bg-cta"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={next} 
              className="p-4 rounded-full bg-black/30 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all cursor-pointer pointer-events-auto border border-white/10 hover:bg-cta"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center gap-3 z-30 px-4">
            {banners.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)} 
                className="group py-2 cursor-pointer"
              >
                <div className={cn(
                  "h-1 transition-all duration-500 rounded-full",
                  currentIndex === i ? "w-12 bg-cta" : "w-4 bg-white/30 group-hover:bg-white/50"
                )} />
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
};