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
    <Section id="results" className="bg-slate-50 overflow-hidden py-10 md:py-24">
      <Container>
        {/* Adjusted spacing from mb-10 to mb-6 on mobile to keep things compact */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
          <h2 className="text-2xl md:text-6xl font-display font-bold text-slate-900 mb-2 md:mb-6 uppercase tracking-tight">
            Our Results Speak
          </h2>
          <p className="text-xs md:text-lg text-slate-600 px-4">
            Real stories from our toppers. Concept-based learning that leads to consistent success.
          </p>
        </div>
      </Container>

      {/* Container for the marquee */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex flex-nowrap gap-2 md:gap-6 min-w-full"
          animate={{ x: [0, -2000] }} 
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, // Balanced velocity to keep text readable at scale
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
        
        {/* Gradients tailored to match tighter mobile horizontal spans */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </div>
    </Section>
  );
};

const StudentCard = ({ student, onOpen }: { student: Student; onOpen: () => void }) => {
  return (
    <div 
      className="flex-shrink-0 w-[29.5vw] min-w-[105px] max-w-[130px] md:w-[280px] md:max-w-none bg-white rounded-lg md:rounded-2xl border border-slate-200 overflow-hidden hover:border-cta/50 transition-all group/card shadow-sm hover:shadow-xl cursor-pointer"
      onClick={onOpen}
    >
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img 
          src={student.image} 
          alt={student.name} 
          className="w-full h-full object-cover group-hover/card:scale-110 transition-all duration-700" 
        />
        
        {/* Micro-scaled Badges for Clean Mobile Density */}
        <div className="absolute top-1 left-1 md:top-3 md:left-3 bg-cta text-white px-1 py-[1px] md:px-3 md:py-1 rounded-[3px] md:rounded-lg text-[6px] md:text-[10px] font-black uppercase tracking-wider md:tracking-widest shadow-sm">
          {student.exam}
        </div>

        <div className="absolute top-1 right-1 md:top-3 md:right-3 bg-white/90 backdrop-blur-md p-0.5 md:p-1.5 rounded-full text-primary shadow-sm">
          <Award size={8} className="md:w-[14px] md:h-[14px]" />
        </div>
      </div>
      
      {/* Downscaled Layout Padding & Typography */}
      <div className="p-1.5 md:p-5">
        <h4 className="text-[10px] md:text-lg font-display font-bold text-slate-900 truncate group-hover/card:text-cta transition-colors leading-tight">
          {student.name}
        </h4>
        <p className="text-[8px] md:text-xs text-slate-500 truncate mb-1 md:mb-4 leading-none">
          {student.school}
        </p>
        
        <div className="flex items-center justify-between pt-1 md:pt-4 border-t border-slate-100">
          <div className="text-xs md:text-xl font-black text-primary leading-none">
            {student.score}
          </div>
          <div className="flex items-center gap-0.5 text-[6px] md:text-[10px] font-black text-cta uppercase tracking-wider group-hover/card:gap-1 transition-all">
            <span className="hidden sm:inline">Review</span> <ChevronRight size={8} className="md:w-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
};