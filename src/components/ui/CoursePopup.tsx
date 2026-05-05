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
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6">
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
            className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden z-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 p-2 bg-slate-100 rounded-full hover:bg-cta hover:text-white transition-all z-20"
            >
              <X size={20} />
            </button>

            <div className="h-56 w-full relative">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>

            <div className="p-8 md:p-10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 block">
                {course.category}
              </span>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">{course.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                {course.longDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {course.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-cta flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9552282090" className="flex-1">
                  <Button className="w-full bg-primary hover:bg-slate-800 text-white py-6 rounded-2xl gap-2">
                    <Phone size={18} /> Call Now
                  </Button>
                </a>
                <a href={`https://wa.me/919552282090?text=I want to know about ${course.title}`} className="flex-1">
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 py-6 rounded-2xl gap-2">
                    <MessageSquare size={18} /> WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};