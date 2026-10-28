export type Language = 'uz' | 'ru' | 'en';

export interface Course {
  id: string;
  title: Record<Language, string>;
  language: 'german' | 'english';
  stage?: number;
  format: 'offline' | 'online' | 'both';
  price: string;
  monthlyPriceNum: number;
  totalPrice?: Record<Language, string>;
  priceNote: Record<Language, string>;
  duration: Record<Language, string>;
  groupSize: string;
  levelBadge: Record<Language, string>;
  description: Record<Language, string>;
  goal?: Record<Language, string>;
  specialNotice?: Record<Language, string>;
  schedule: Record<Language, string>;
  features: Record<Language, string[]>;
  image: string;
}

export interface TeacherPhoto {
  url: string;
  location: Record<Language, string>;
  caption: Record<Language, string>;
}

export interface Teacher {
  name: string;
  role: Record<Language, string>;
  languages: string[];
  qualifications: Record<Language, string>;
  bio: Record<Language, string>;
  experience: Record<Language, string>;
  initials: string;
  photos?: TeacherPhoto[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  readTime: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string>;
  date: string;
  image: string;
}

export interface FAQItem {
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export interface Benefit {
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
}

export interface DiscountItem {
  id: string;
  percent: string;
  title: Record<Language, string>;
  badge?: Record<Language, string>;
  description: Record<Language, string>;
  conditions?: Record<Language, string>;
}

export interface RegistrationFormData {
  fullName: string;
  phone: string;
  language: 'german' | 'english';
  courseId?: string;
  courseTitle?: string;
  format: 'offline' | 'online';
  note?: string;
}
