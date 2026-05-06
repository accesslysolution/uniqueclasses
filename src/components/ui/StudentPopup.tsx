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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden max-w-5xl w-full max-h-[95vh] md:max-h-[90vh] shadow-2xl z-10 border border-slate-200 flex flex-col"
          >
            {/* Optimized Close Button for Mobile */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-cta hover:text-white backdrop-blur-md rounded-full transition-all z-30 border border-white/30 text-white md:text-slate-900 md:bg-slate-100 md:border-none"
            >
              <X size={20} />
            </button>
            
            <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden">
              {/* Image Section */}
              <div className="w-full md:w-5/12 bg-slate-100 flex-shrink-0">
                <div className="aspect-[4/3] md:aspect-square w-full relative">
                  <img 
                    src={student.image} 
                    className="w-full h-full object-cover" 
                    alt={student.name} 
                  />
                  {/* Mobile Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent md:hidden" />
                  <div className="absolute bottom-4 left-5 md:hidden text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <Star size={10} fill="#fbbf24" className="text-amber-400" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-amber-400">Class of 2026</span>
                      </div>
                      <h3 className="text-2xl font-display font-bold">{student.name}</h3>
                      <p className="text-xs text-white/80 font-medium">{student.exam} Merit List</p>
                  </div>
                </div>
              </div>

              {/* Information Section */}
              <div className="p-6 sm:p-8 md:p-12 md:w-7/12 flex flex-col bg-white relative overflow-y-auto">
                {/* Desktop Badges */}
                <div className="hidden md:flex items-center gap-3 mb-6">
                  <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">
                    {student.exam} Merit List
                  </span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <CheckCircle2 size={14} className="text-green-500" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Verified Result</span>
                  </div>
                </div>

                <h3 className="hidden md:block text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight mb-4">
                  {student.name}
                </h3>
                
                {/* Score & Institution Row - Optimized for Mobile wrapping */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 md:p-2.5 bg-slate-50 rounded-lg md:rounded-xl flex-shrink-0">
                      <GraduationCap size={18} className="text-slate-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] uppercase font-black text-slate-400 tracking-widest truncate">Institution</p>
                      <p className="text-xs md:text-sm font-bold text-slate-700 truncate">{student.school}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 md:p-2.5 bg-cta/10 rounded-lg md:rounded-xl flex-shrink-0">
                      <Trophy size={18} className="text-cta" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-black text-slate-400 tracking-widest">Score</p>
                      <p className="text-xl md:text-2xl font-display font-black text-primary leading-none">{student.score}</p>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial Block */}
                <div className="relative py-2">
                  <Quote 
                    className="absolute -top-2 -left-4 text-slate-50 md:text-slate-100 w-[60px] h-[60px] md:w-[100px] md:h-[100px]" 
                    strokeWidth={4} 
                  />
                  <div className="relative z-10">
                    <p className="text-slate-600 text-base md:text-xl italic leading-relaxed font-medium">
                      &ldquo;{student.review}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Footer - Stacked on tiny screens, Row on tablet+ */}
                <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col xs:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-slate-200" />
                      ))}
                    </div>
                    <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest">
                      Top 1% Performers
                    </p>
                  </div>
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest text-center xs:text-right">
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