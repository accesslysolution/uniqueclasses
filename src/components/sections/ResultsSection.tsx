"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { studentResults, Student } from "@/data/students";
import { ChevronRight, Award } from "lucide-react";

interface ResultsSectionProps {
  onStudentClick: (student: Student) => void;
}

export const ResultsSection = ({ onStudentClick }: ResultsSectionProps) => {
  // Triple for seamless looping
  const scrollResults = [...studentResults, ...studentResults, ...studentResults];

  return (
    <Section id="results" className="bg-slate-50 overflow-hidden py-16 md:py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-display font-bold text-slate-900 mb-4 md:mb-6 uppercase tracking-tight">
            Our Results Speak
          </h2>
          <p className="text-base md:text-lg text-slate-600 px-4">
            Real stories from our toppers. Concept-based learning that leads to consistent success.
          </p>
        </div>
      </Container>

      {/* Container for the marquee */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex flex-nowrap gap-4 md:gap-6 min-w-full"
          animate={{ x: [0, -2000] }} 
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, // Slightly slower for better readability on mobile
              ease: "linear",
            },
          }}
          // Pauses animation on touch or hover
          whileHover={{ animationPlayState: "paused" }}
          whileTap={{ animationPlayState: "paused" }}
        >
          {scrollResults.map((student, i) => (
            <StudentCard 
              key={`${student.id}-${i}`} 
              student={student} 
              onOpen={() => onStudentClick(student)} 
            />
          ))}
        </motion.div>
        
        {/* Stronger gradients for mobile to focus on the center content */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </div>
    </Section>
  );
};

const StudentCard = ({ student, onOpen }: { student: Student; onOpen: () => void }) => {
  return (
    <div 
      className="flex-shrink-0 w-[200px] md:w-[280px] bg-white rounded-xl md:rounded-2xl border border-slate-200 overflow-hidden hover:border-cta/50 transition-all group/card shadow-sm hover:shadow-xl cursor-pointer"
      onClick={onOpen}
    >
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img 
          src={student.image} 
          alt={student.name} 
          className="w-full h-full object-cover group-hover/card:scale-110 transition-all duration-700" 
        />
        
        {/* Mobile-optimized badge sizing */}
        <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-cta text-white px-2 py-0.5 md:px-3 md:py-1 rounded-md md:rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-md">
          {student.exam}
        </div>

        <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/90 backdrop-blur-md p-1 md:p-1.5 rounded-full text-primary shadow-sm">
          <Award size={12} className="md:w-[14px] md:h-[14px]" />
        </div>
      </div>
      
      <div className="p-3 md:p-5">
        <h4 className="text-sm md:text-lg font-display font-bold text-slate-900 truncate group-hover/card:text-cta transition-colors">
          {student.name}
        </h4>
        <p className="text-[10px] md:text-xs text-slate-500 truncate mb-2 md:mb-4">
          {student.school}
        </p>
        
        <div className="flex items-center justify-between pt-2 md:pt-4 border-t border-slate-100">
          <div className="text-base md:text-xl font-black text-primary">
            {student.score}
          </div>
          <div className="flex items-center gap-1 text-[8px] md:text-[10px] font-black text-cta uppercase tracking-widest group-hover/card:gap-2 transition-all">
            <span className="hidden xs:inline">Review</span> <ChevronRight size={10} className="md:w-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
};