"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const trustStats = [
  {
    title: "Legacy",
    value: "Since 2000",
    color: "text-cta",
  },
  {
    title: "Exp.",
    value: "15+ Yrs",
    color: "text-primary",
  },
  {
    title: "Alumni",
    value: "25k+",
    color: "text-cta",
  },
  {
    title: "Batch",
    value: "Max 35",
    color: "text-primary",
  },
];

export const TrustSection = () => {
  return (
    <section className="relative z-30 -mt-6 md:-mt-16 pb-6 md:pb-12">
      <Container>
        <Card className="p-0 border-none shadow-lg md:shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white overflow-hidden">
          <div className="flex flex-row items-stretch justify-between divide-x divide-gray-50">
            {trustStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Added cursor-pointer and select-none
                className="flex-1 group relative cursor-pointer select-none"
              >
                <div className="py-3 px-1 md:py-12 md:px-6 flex flex-col items-center justify-center text-center transition-colors duration-300 hover:bg-gray-50/50">
                  
                  <span className={cn(
                    "text-[11px] xs:text-xs sm:text-sm md:text-4xl font-display font-bold leading-none md:mb-2 whitespace-nowrap transition-transform duration-500 group-hover:scale-105",
                    stat.color
                  )}>
                    {stat.value}
                  </span>

                  <span className="text-[7px] md:text-xs font-bold uppercase tracking-tighter md:tracking-[0.2em] text-text-muted mt-1 leading-none">
                    {stat.title}
                  </span>

                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-cta w-0 lg:group-hover:w-full transition-all duration-500 hidden lg:block" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
};