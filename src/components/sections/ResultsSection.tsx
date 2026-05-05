"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { studentResults, Student } from "@/data/students";
import { ChevronRight, Award, Star } from "lucide-react";

interface ResultsSectionProps {
  onStudentClick: (student: Student) => void;
}

export const ResultsSection = ({ onStudentClick }: ResultsSectionProps) => {
  // Triple for seamless looping
  const scrollResults = [...studentResults, ...studentResults, ...studentResults];

  return (
    <Section id="results" className="bg-[#0A0F1C] overflow-hidden py-24 relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cta/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-cta text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Award size={14} /> Toppers Hall of Fame
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Our Results <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cta">Speak Louder</span>
          </h2>
          <p className="text-lg text-white/50 font-light">
            Empowering students to crack competitive exams with conceptual clarity and consistent mentorship.
          </p>
        </div>
      </Container>

      <div className="relative flex overflow-hidden group py-4">
        <motion.div
          className="flex flex-nowrap gap-8 min-w-full"
          animate={{ x: [0, -2500] }} 
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
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
        
        {/* Soft edge masking for smooth transition */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0A0F1C] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0A0F1C] to-transparent z-10" />
      </div>
    </Section>
  );
};

const StudentCard = ({ student, onOpen }: { student: Student; onOpen: () => void }) => {
  return (
    <div 
      className="flex-shrink-0 w-[300px] bg-white/[0.03] backdrop-blur-sm rounded-[2rem] border border-white/10 overflow-hidden hover:border-cta/50 transition-all group/card shadow-2xl cursor-pointer"
      onClick={onOpen}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Overlay Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent z-10 opacity-60" />
        
        <img 
          src={student.image} 
          alt={student.name} 
          className="w-full h-full object-cover group-hover/card:scale-110 transition-all duration-700 ease-out" 
        />
        
        {/* Tag Positioned over image */}
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-cta text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg">
            {student.exam}
          </div>
        </div>

        {/* Floating Score Badge */}
        <div className="absolute bottom-4 right-4 z-20 bg-white p-3 rounded-2xl shadow-xl transform group-hover/card:-translate-y-2 transition-transform duration-500">
           <div className="text-[10px] text-slate-400 font-bold uppercase leading-none mb-1">Score</div>
           <div className="text-xl font-black text-primary leading-none">{student.score}</div>
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="text-xl font-display font-bold text-white mb-1 group-hover/card:text-cta transition-colors">
          {student.name}
        </h4>
        <p className="text-sm text-white/40 truncate mb-4">{student.school}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex gap-0.5 text-cta">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
          </div>
          <div className="flex items-center gap-1 text-[10px] font-black text-white uppercase tracking-widest group-hover/card:text-cta transition-all">
            Read Story <ChevronRight size={14} className="group-hover/card:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};