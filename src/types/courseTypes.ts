export interface CourseType {
  id: string;
  title: string;
  description: string;
  duration: string;
  students: number;
  modules: number;
  category: string;
  image: string;
  syllabusUrl: string;
  benefits: string[];
  curriculum: {
    title: string;
    topics: string[];
  }[];
  prerequisites: string[];
  tools: string[];
}

export interface TrainerType {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  courses: string[];
  experience: string;
  education: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}