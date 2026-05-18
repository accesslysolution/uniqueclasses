"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import { Course } from "@/data/courses";
import { Button } from "./Button";

interface CoursePopupProps {
  course: Course | null;
  onClose: () => void;
}

// Global target contact data configuration
const PHONE_1 = "9822547465";
const PHONE_2 = "9371007811";
const WHATSAPP_NUMBER = "919011051088"; // Configured with country code prefix

export const CoursePopup = ({ course, onClose }: CoursePopupProps) => {
  return (
    <AnimatePresence>
      {course && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-2 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-background rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden z-10 flex flex-col border border-divider"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm shadow-sm rounded-full hover:bg-cta hover:text-text-heading transition-all z-30"
            >
              <X size={20} className="text-text-heading" />
            </button>

            {/* Scrollable Container */}
            <div className="overflow-y-auto w-full">
              {/* Image Header with dynamic gradient overlay */}
              <div className="h-40 md:h-56 w-full relative bg-section">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2 block">
                  {course.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-text-heading mb-3">{course.title}</h2>
                <p className="text-sm md:text-base text-text-body leading-relaxed mb-6">
                  {course.longDescription}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-cta flex-shrink-0" />
                      <span className="text-xs md:text-sm font-bold text-text-body">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* SaaS Action Layout supporting Dual Call triggers and WhatsApp routing */}
                <div className="flex flex-col sm:flex-row gap-3 items-center w-full">
                  <div className="flex flex-row gap-2 w-full sm:flex-[2]">
                    <a href={`tel:${PHONE_1}`} className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-background py-4 md:py-6 rounded-xl md:rounded-2xl gap-1.5 text-xs md:text-sm whitespace-nowrap transition-colors shadow-soft px-2">
                        <Phone size={14} className="hidden xs:block shrink-0" /> Call 1
                      </Button>
                    </a>
                    <a href={`tel:${PHONE_2}`} className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-background py-4 md:py-6 rounded-xl md:rounded-2xl gap-1.5 text-xs md:text-sm whitespace-nowrap transition-colors shadow-soft px-2">
                        <Phone size={14} className="hidden xs:block shrink-0" /> Call 2
                      </Button>
                    </a>
                  </div>
                  
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=I want to know more details about the ${encodeURIComponent(course.title)} program.`} 
                    className="w-full sm:flex-1"
                  >
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 py-4 md:py-6 rounded-xl md:rounded-2xl gap-2 text-xs md:text-sm whitespace-nowrap transition-colors px-3">
                      <MessageSquare size={14} className="hidden xs:block shrink-0" /> WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};