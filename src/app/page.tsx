"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { CoursesSection } from "@/components/sections/Courses";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { CTASection } from "@/components/sections/CTASection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BannerCarousel } from "@/components/sections/BannerCarousal";

// UI Components
import { StudentPopup } from "@/components/ui/StudentPopup";
import { CoursePopup } from "@/components/ui/CoursePopup";

// Types
import { Student } from "@/data/students";
import { Course } from "@/data/courses";

export default function Home() {
  // State for Results/Student Popup
  const [activeStudent, setActiveStudent] = useState<Student | null>(null);
  
  // State for Course Details Popup
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  return (
    <main className="relative">
      <Hero />
      
      <TrustSection />

      {/* Visual Banners follow the Hero for immediate impact */}
      <BannerCarousel />

      {/* Results Section triggers the Student Popup */}
      <ResultsSection onStudentClick={(student) => setActiveStudent(student)} />

      {/* Courses Section triggers the Course Popup */}
      <CoursesSection onCourseClick={(course) => setActiveCourse(course)} />
      
      <CTASection />
      
      <LocationsSection />
      
      <ContactSection />

      {/* --- Global Popups --- */}
      
      {/* Achievement Details */}
      <StudentPopup 
        student={activeStudent} 
        onClose={() => setActiveStudent(null)} 
      />

      {/* Academic Program Details */}
      <CoursePopup 
        course={activeCourse} 
        onClose={() => setActiveCourse(null)} 
      />
    </main>
  );
}