"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
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
    <Section id="courses" className="bg-slate-50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900"
          >
            Programs Offered
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500"
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
              // Handle click on the motion wrapper to avoid Card component prop errors
              onClick={() => onCourseClick(course)}
              className="cursor-pointer"
            >
              <Card className="group h-full flex flex-col border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2rem] overflow-hidden bg-white">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={course.title}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-primary">
                      {course.category}
                    </span>
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2 leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                    {course.description}
                  </p>
                  
                  {/* Action Button */}
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full justify-between group/btn hover:bg-primary hover:text-white rounded-xl border-slate-200"
                    >
                      Learn More
                      <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
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