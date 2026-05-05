export interface Course {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
}

export const courses: Course[] = [
  {
    id: "10th-std",
    title: "10th Std. (SSC, CBSE, ICSE)",
    category: "School Courses",
    subtitle: "Board Excellence Program",
    description: "Dedicated coaching to ensure outstanding performance in board examinations.",
    longDescription: "Our 10th Standard program provides separate, specialized batches for SSC, CBSE, and ICSE. We focus on rigorous test series and conceptual clarity to ensure students not only score high but build a foundation for competitive exams.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    features: ["Weekly Chapter Tests", "Personalized Doubt Solving", "Board Paper Solving Sessions"]
  },
  {
    id: "jee-integrated",
    title: "11th & 12th JEE",
    category: "Science Courses",
    subtitle: "Integrated & Supportive",
    description: "Engineering entrance assessment for admission to various engineering colleges in India.",
    longDescription: "A comprehensive program covering JEE Mains and Advanced. We integrate the board syllabus with entrance preparation, ensuring students manage both effectively without burnout.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
    features: ["Mains & Advanced Modules", "Daily Practice Problems", "Mock Test Analysis"]
  },
  {
    id: "neet-integrated",
    title: "11th & 12th NEET",
    category: "Science Courses",
    subtitle: "Integrated & Supportive",
    description: "Preparation for MBBS/BDS Courses and other undergraduate medical entries.",
    longDescription: "Our NEET program focuses heavily on NCERT depth and Physics problem-solving. We provide a competitive environment with a family-like support system to help medical aspirants reach their goals.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1200&auto=format&fit=crop",
    features: ["Biology Specialization", "NCERT Exhaustive Coverage", "Time Management Drills"]
  },
  {
    id: "mht-cet",
    title: "11th & 12th MHT-CET",
    category: "Science Courses",
    subtitle: "Integrated & Supportive",
    description: "State-level examination conducted by the Government of Maharashtra.",
    longDescription: "Focused on speed and accuracy. This course is tailored for students aiming for top engineering and pharmacy colleges within Maharashtra, following the specific CET pattern and syllabus.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    features: ["State Board Alignment", "Speed-Up Mock Tests", "Previous Year Trends"]
  },
  {
    id: "9th-std",
    title: "9th Std. (SSC, CBSE, ICSE)",
    category: "School Courses",
    subtitle: "Foundation Building",
    description: "Designed to build a solid academic base for future board success.",
    longDescription: "The most critical bridge year. We ensure students master complex concepts in Science and Math early, so the transition to 10th grade is seamless and confident.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    features: ["Conceptual Clarity", "Foundation for JEE/NEET", "Holistic Subject Support"]
  },
  {
    id: "8th-std",
    title: "8th Std. (SSC, CBSE, ICSE)",
    category: "School Courses",
    subtitle: "Academic Strengthening",
    description: "Specialized courses to strengthen the academic foundation from the start.",
    longDescription: "Starting early is the key to long-term success. Our 8th-grade program focuses on developing logical reasoning and a strong interest in core academic subjects.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    features: ["Logical Reasoning", "Basic Science Concepts", "English Grammar Mastery"]
  }
];