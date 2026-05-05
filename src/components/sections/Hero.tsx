"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

/**
 * SECTION: Hero
 * Image Advice: Use a high-resolution (1920x1080) candid photo of a classroom 
 * or a focused student. Avoid posters/banners with text.
 */
export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          // Replace this URL with your actual classroom/student photo
          backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')` 
        }}
      >
        {/* 
            CRISP OVERLAY STRATEGY:
            Darker on the left (to make white text pop) 
            Slightly lighter on the right (to show the image clearly)
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          {/* Tagline - Using your CTA color */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cta font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Where Scholars Are Made
          </motion.p>

          {/* Heading - Elegant & Decent Size */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold text-white leading-[1.2] mb-6"
          >
            Empowering Minds for <br />
            Academic Excellence
          </motion.h1>

          {/* Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-white/80 mb-10 max-w-lg leading-relaxed"
          >
            Leading coaching for 8th-12th Science, JEE, and NEET with a legacy of producing toppers across Pune.
          </motion.p>

          {/* Buttons - Maintaining your color scheme */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              variant="primary" 
              className="px-8 py-4 bg-cta hover:bg-[#c93536] text-white border-none rounded-lg font-semibold transition-all"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-4 border-white text-white hover:bg-white hover:text-black rounded-lg font-semibold transition-all"
            >
              View Results
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-[1px] h-16 bg-gradient-to-b from-cta to-transparent animate-pulse" />
      </div>
    </section>
  );
};