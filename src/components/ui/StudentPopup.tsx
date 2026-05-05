"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Quote, GraduationCap, Trophy, Star, CheckCircle2 } from "lucide-react";
import { Student } from "@/data/students";

interface StudentPopupProps {
  student: Student | null;
  onClose: () => void;
}

export const StudentPopup = ({ student, onClose }: StudentPopupProps) => {
  // Lock body scroll to prevent layout shift
  useEffect(() => {
    if (student) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [student]);

  return (
    <AnimatePresence>
      {student && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop with heavy blur for "Luxury Silence" */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative bg-white rounded-[2rem] overflow-hidden max-w-5xl w-full shadow-2xl z-10 border border-slate-200"
          >
            {/* Elegant Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 p-2 bg-white/10 hover:bg-cta hover:text-white backdrop-blur-md rounded-full transition-all z-30 border border-white/20 md:text-slate-900 md:bg-slate-100 md:border-none"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
              {/* Image Section - Enforced 1:1 Aspect */}
              <div className="w-full md:w-5/12 bg-slate-100 flex-shrink-0">
                <div className="aspect-square w-full relative">
                  <img 
                    src={student.image} 
                    className="w-full h-full object-cover" 
                    alt={student.name} 
                  />
                  {/* Mobile Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
                  <div className="absolute bottom-6 left-6 md:hidden text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <Star size={12} fill="#fbbf24" className="text-amber-400" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">Topper 2026</span>
                      </div>
                      <h3 className="text-3xl font-display font-bold">{student.name}</h3>
                  </div>
                </div>
              </div>

              {/* Information Section */}
              <div className="p-8 md:p-12 md:w-7/12 flex flex-col justify-center bg-white relative overflow-y-auto">
                {/* Desktop Badges */}
                <div className="hidden md:flex items-center gap-3 mb-6">
                  <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">
                    {student.exam} Merit List
                  </span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <CheckCircle2 size={14} className="text-green-500" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Identity Verified</span>
                  </div>
                </div>

                <h3 className="hidden md:block text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight mb-4">
                  {student.name}
                </h3>
                
                <div className="flex flex-wrap items-center gap-y-4 gap-x-8 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-50 rounded-xl">
                      <GraduationCap size={20} className="text-slate-400" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Institution</p>
                      <p className="text-sm font-bold text-slate-700">{student.school}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-cta/10 rounded-xl">
                      <Trophy size={20} className="text-cta" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Achieved Score</p>
                      <p className="text-2xl font-display font-black text-primary leading-none">{student.score}</p>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial Block */}
                <div className="relative py-4">
                  <Quote className="absolute -top-4 -left-6 text-slate-100" size={100} strokeWidth={4} />
                  <div className="relative z-10">
                    <p className="text-slate-600 text-lg md:text-xl italic leading-relaxed font-medium">
                      &ldquo;{student.review}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Footer / Social Proof */}
                <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                      ))}
                    </div>
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                      +500 Alums this year
                    </p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse hidden sm:block" />
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
                    Unique Academy Success Story
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};