"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className={cn("bg-white p-8 rounded-2xl shadow-soft border border-divider transition-all", className)}
  >
    {children}
  </motion.div>
);