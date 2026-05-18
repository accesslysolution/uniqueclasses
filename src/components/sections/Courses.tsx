"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import { courses, Course } from "@/data/courses";

interface CoursesSectionProps {
  onCourseClick: (course: Course) => void;
}

/**
 * SECTION: CoursesSection
 * A high-density grid for academic programs.
 * Uses a parent wrapper for the click handler to avoid TS errors on the Card component.
 */
export const CoursesSection = ({ onCourseClick }: CoursesSectionProps) => {
  return (
    <Section id="courses" className="bg-section py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-text-heading"
          >
            Programs Offered
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-body"
          >
            From foundation years to competitive excellence, we guide students through every academic milestone.
          </motion.p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onCourseClick(course)}
              className="cursor-pointer flex"
            >
              <Card className="group relative flex flex-col w-full border border-divider shadow-soft hover:shadow-xl hover:border-primary/20 transition-all duration-500 rounded-[2rem] overflow-hidden bg-background">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-section">
                  <img 
                    src={course.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={course.title}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-text-heading shadow-sm border border-divider">
                      {course.category}
                    </span>
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-7 flex flex-col flex-grow justify-between">
                  <div className="mb-6">
                    <h3 className="text-xl font-display font-bold text-text-heading mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-text-muted text-sm line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                  
                  {/* SaaS-Style Button mapped explicitly to your CSS System Tokens */}
                  <div className="mt-auto pt-4 border-t border-divider">
                    <div className="inline-flex w-full items-center justify-between bg-primary text-background group-hover:bg-cta group-hover:text-text-heading px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 shadow-soft group-active:scale-[0.98]">
                      <span className="truncate">Explore Program Curriculum</span>
                      <ArrowRight size={14} className="ml-2 shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};