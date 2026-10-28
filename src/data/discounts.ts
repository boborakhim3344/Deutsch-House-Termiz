import { DiscountItem } from '../types';

export const discountsData: DiscountItem[] = [
  {
    id: 'oilaviy-chegirma',
    percent: '50%',
    title: {
      uz: 'Oilaviy chegirma',
      ru: 'Семейная скидка',
      en: 'Family Discount'
    },
    badge: {
      uz: 'Ikkinchi o‘quvchiga',
      ru: 'Второму студенту',
      en: 'For the 2nd student'
    },
    description: {
      uz: 'Bir oiladan ikki kishi o‘quv markazida ta’lim olsa, ikkinchi o‘quvchiga 50% chegirma beriladi.',
      ru: 'Если из одной семьи в центре обучаются два человека, второму студенту предоставляется скидка 50%.',
      en: 'If two members from the same family enroll at the learning center, the second student receives a 50% discount.'
    }
  },
  {
    id: 'talabalar-chegirma',
    percent: '20%',
    title: {
      uz: 'Talabalar uchun chegirma',
      ru: 'Скидка для студентов',
      en: 'Student Family Discount'
    },
    badge: {
      uz: 'Dastlabki 3 oy uchun',
      ru: 'На первые 3 месяца',
      en: 'For initial 3 months'
    },
    description: {
      uz: 'Bir oilada ikki nafar talaba kontrakt asosida o‘qisa, ulardan biriga dastlabki 3 oy uchun 20% chegirma beriladi.',
      ru: 'Если в одной семье двое студентов учатся на контрактной основе, одному из них предоставляется скидка 20% на первые 3 месяца.',
      en: 'If two university students from the same household study on a contract basis, one of them receives a 20% discount for the first 3 months.'
    }
  },
  {
    id: 'yetimlar-grant',
    percent: '100%',
    title: {
      uz: '100% grant',
      ru: '100% грант',
      en: '100% Full Grant'
    },
    badge: {
      uz: 'To‘liq bepul ta’lim',
      ru: 'Полностью бесплатное обучение',
      en: 'Full Tuition Waiver'
    },
    description: {
      uz: 'Ota-ona qaramog‘idan mahrum bo‘lgan yoshlar uchun 100% grant.',
      ru: '100% образовательный грант для молодежи, оставшейся без попечения родителей.',
      en: '100% full tuition grant for youth deprived of parental care.'
    }
  },
  {
    id: 'imkoniyati-cheklanganlar',
    percent: '50%',
    title: {
      uz: 'Imkoniyati cheklangan shaxslar uchun chegirma',
      ru: 'Скидка для лиц с ограниченными возможностями',
      en: 'Discount for Persons with Disabilities'
    },
    badge: {
      uz: 'Ijtimoiy qo‘llab-quvvatlash',
      ru: 'Социальная поддержка',
      en: 'Social Support'
    },
    description: {
      uz: 'Imkoniyati cheklangan shaxslar uchun 50% chegirma.',
      ru: 'Скидка 50% на обучение для лиц с ограниченными возможностями здоровья.',
      en: 'A 50% tuition discount dedicated to persons with disabilities.'
    }
  }
];
