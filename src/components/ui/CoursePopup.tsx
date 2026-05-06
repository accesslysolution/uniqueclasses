"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import { Course } from "@/data/courses";
import { Button } from "./Button";

interface CoursePopupProps {
  course: Course | null;
  onClose: () => void;
}

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
            className="relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden z-10 flex flex-col"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm shadow-sm rounded-full hover:bg-cta hover:text-white transition-all z-30"
            >
              <X size={20} />
            </button>

            {/* Scrollable Container */}
            <div className="overflow-y-auto w-full">
              {/* Image Height reduced on mobile */}
              <div className="h-40 md:h-56 w-full relative">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2 block">
                  {course.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">{course.title}</h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                  {course.longDescription}
                </p>

                {/* Features Grid - 1 col on tiny mobile, 2 col otherwise */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-cta flex-shrink-0" />
                      <span className="text-xs md:text-sm font-bold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons - Forced to stay side-by-side or slim blocks */}
                <div className="flex flex-row gap-3 items-center">
                  <a href="tel:9552282090" className="flex-1">
                    <Button className="w-full bg-primary hover:bg-slate-800 text-white py-4 md:py-6 rounded-xl md:rounded-2xl gap-2 text-sm md:text-base whitespace-nowrap">
                      <Phone size={16} className="hidden xs:block" /> Call
                    </Button>
                  </a>
                  <a 
                    href={`https://wa.me/919552282090?text=I want to know about ${course.title}`} 
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 py-4 md:py-6 rounded-xl md:rounded-2xl gap-2 text-sm md:text-base whitespace-nowrap">
                      <MessageSquare size={16} className="hidden xs:block" /> WhatsApp
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