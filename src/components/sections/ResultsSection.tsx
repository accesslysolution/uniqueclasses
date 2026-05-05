"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { studentResults, Student } from "@/data/students";
import { ChevronRight } from "lucide-react";

interface ResultsSectionProps {
  onStudentClick: (student: Student) => void;
}

export const ResultsSection = ({ onStudentClick }: ResultsSectionProps) => {
  // Triple for seamless looping
  const scrollResults = [...studentResults, ...studentResults, ...studentResults];

  return (
    <Section id="results" className="bg-slate-50 overflow-hidden py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Our Results Speak
          </h2>
          <p className="text-lg text-slate-600">
            Real stories from our toppers. Concept-based learning that leads to consistent success.
          </p>
        </div>
      </Container>

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex flex-nowrap gap-6 min-w-full"
          animate={{ x: [0, -1500] }} // Adjust based on your card width + gap
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {scrollResults.map((student, i) => (
            <StudentCard 
              key={`${student.id}-${i}`} 
              student={student} 
              onOpen={() => onStudentClick(student)} 
            />
          ))}
        </motion.div>
        
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </div>
    </Section>
  );
};

const StudentCard = ({ student, onOpen }: { student: Student; onOpen: () => void }) => {
  return (
    <div 
      className="flex-shrink-0 w-[280px] bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-cta/50 transition-all group/card shadow-sm hover:shadow-xl cursor-pointer"
      onClick={onOpen}
    >
      {/* 1:1 Aspect Ratio Box */}
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img 
          src={student.image} 
          alt={student.name} 
          className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-700" 
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
          {student.exam}
        </div>
      </div>
      
      <div className="p-5">
        <h4 className="text-lg font-display font-bold text-slate-900 truncate">{student.name}</h4>
        <p className="text-xs text-slate-500 truncate mb-4">{student.school}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="text-lg font-black text-primary">{student.score}</div>
          <div className="flex items-center gap-1 text-[10px] font-black text-cta uppercase tracking-widest group-hover/card:gap-2 transition-all">
            Review <ChevronRight size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};