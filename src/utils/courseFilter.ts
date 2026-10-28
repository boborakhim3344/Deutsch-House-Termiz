import { Course, RegistrationFormData } from '../types';

export interface FilterOptions {
  language?: 'all' | 'german' | 'english';
  format?: 'all' | 'offline' | 'online';
  searchQuery?: string;
}

export function filterCourses(courses: Course[], options: FilterOptions): Course[] {
  return courses.filter((course) => {
    if (options.language && options.language !== 'all' && course.language !== options.language) {
      return false;
    }
    if (options.format && options.format !== 'all') {
      if (course.format !== 'both' && course.format !== options.format) {
        return false;
      }
    }
    if (options.searchQuery && options.searchQuery.trim().length > 0) {
      const q = options.searchQuery.toLowerCase();
      const matchUz = course.title.uz.toLowerCase().includes(q);
      const matchRu = course.title.ru.toLowerCase().includes(q);
      const matchEn = course.title.en.toLowerCase().includes(q);
      if (!matchUz && !matchRu && !matchEn) {
        return false;
      }
    }
    return true;
  });
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof RegistrationFormData, string>>;
}

export function validateRegistrationForm(data: Partial<RegistrationFormData>): ValidationResult {
  const errors: Partial<Record<keyof RegistrationFormData, string>> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Ismingizni kiriting';
  }

  // Uzbek phone format validation (+998...) or minimum 9 digits
  const cleanPhone = (data.phone || '').replace(/[\s\-\(\)\+]/g, '');
  if (!cleanPhone || cleanPhone.length < 9) {
    errors.phone = "To'g'ri telefon raqami kiriting (masalan: +998 90 123 45 67)";
  }

  if (!data.language || !['german', 'english'].includes(data.language)) {
    errors.language = 'Tilni tanlang';
  }

  if (!data.format || !['offline', 'online'].includes(data.format)) {
    errors.format = 'Formatni tanlang';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
