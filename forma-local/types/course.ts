export type CourseFormat = "présentiel" | "en ligne" | "hybride";

export type CourseModule = {
  title: string;
  description: string;
  topics: string[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  level: string;
  duration: string;
  format: CourseFormat;
  price?: number;
  startDate?: string;
  availablePlaces?: number;
  prerequisites?: string[];
  objectives?: string[];
  audience?: string;
  modules: CourseModule[];
};