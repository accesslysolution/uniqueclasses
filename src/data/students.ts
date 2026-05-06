export interface Student {
  id: string;
  name: string;
  score: string;
  school: string;
  image: string;
  review: string;
  exam: "JEE" | "NEET" | "MHT-CET" | "10th CBSE";
}

export const studentResults: Student[] = [
  {
    id: "kalpak-patil",
    name: "Kalpak Patil",
    score: "96.4%",
    school: "City International School",
    image: "/students/kalpak-patil.avif",
    review: "The focused approach toward NCERT and consistent mock tests at Unique Academy made my CBSE board preparation seamless and stress-free.",
    exam: "10th CBSE",
  },
  {
    id: "amod-ithape",
    name: "Amod Ithape",
    score: "96%",
    school: "GGIS School",
    image: "/students/amod-ithape.avif",
    review: "Unique Academy's foundation course helped me master complex concepts early on, which was reflected in my board results.",
    exam: "10th CBSE",
  },
  {
    id: "aditya-deshmukh",
    name: "Aditya Deshmukh",
    score: "94%",
    school: "City International School",
    image: "/students/aditya-deshmukh.avif",
    review: "Personal attention from teachers and the competitive environment here pushed me to achieve my best in the 10th CBSE boards.",
    exam: "10th CBSE",
  },
  {
    id: "utkarsh-kamble",
    name: "Utkarsh Kamble",
    score: "93.6%",
    school: "DAV Public School",
    image: "/students/utkarsh-kamble.avif",
    review: "The simplified teaching methods for Science and Maths were the key to my success. I highly recommend Unique for foundation years.",
    exam: "10th CBSE",
  },
  {
    id: "sumedha-adake",
    name: "Sumedha Adake",
    score: "92.4%",
    school: "SNBP School",
    image: "/students/sumedha-adake.avif",
    review: "The doubt-solving sessions were incredibly helpful. Even the most difficult topics became easy to understand with the faculty's guidance.",
    exam: "10th CBSE",
  },
  {
    id: "tanvi-palve",
    name: "Tanvi Palve",
    score: "91%",
    school: "DAV Public School",
    image: "/students/tanvi-palve.avif",
    review: "The study material provided is very comprehensive and covers all possible patterns of questions asked in the board exams.",
    exam: "10th CBSE",
  },
  {
    id: "ayush-kakade",
    name: "Ayush Kakade",
    score: "90%",
    school: "DAV Public School",
    image: "/students/ayush-kakade.avif",
    review: "Consistent practice and regular feedback from the mentors helped me bridge my gaps and score 90% in my boards.",
    exam: "10th CBSE",
  },
];