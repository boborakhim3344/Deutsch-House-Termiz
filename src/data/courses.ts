import { Course } from '../types';

export const coursesData: Course[] = [
  // ==========================================
  // NEMIS TILI KURSLARI (3 TA KETMA-KET BOSQICH)
  // ==========================================
  {
    id: 'nemistili-1-bosqich',
    stage: 1,
    title: {
      uz: '1-bosqich: Boshlang‘ich kurs',
      ru: '1-й этап: Начальный курс (0 → A2)',
      en: 'Stage 1: Beginner Course (0 → A2)'
    },
    language: 'german',
    format: 'both',
    price: '300 000',
    monthlyPriceNum: 300000,
    totalPrice: {
      uz: '600 000 so‘m (2 oy uchun)',
      ru: '600 000 сум (за 2 месяца)',
      en: '600,000 UZS (total for 2 months)'
    },
    priceNote: {
      uz: 'oyiga 300 000 so‘m',
      ru: '300 000 сум / месяц',
      en: '300,000 UZS / month'
    },
    duration: {
      uz: 'Davomiyligi: 2 oy',
      ru: 'Длительность: 2 месяца',
      en: 'Duration: 2 months'
    },
    groupSize: 'Guruh: 6–8 kishi',
    levelBadge: {
      uz: '0 dan A2 gacha',
      ru: 'От 0 до A2',
      en: 'From 0 to A2'
    },
    goal: {
      uz: 'Nemis tilini noldan o‘rganish va A2 darajasiga yetish.',
      ru: 'Изучение немецкого языка с нуля и достижение уровня A2.',
      en: 'Learn German from scratch and attain solid A2 proficiency.'
    },
    description: {
      uz: 'Nemis tilini noldan boshlayotganlar uchun mo‘ljallangan. Alifbo, to‘g‘ri artikllar, asosiy so‘z boyligi va kundalik muloqot ko‘nikmalari 2 oy davomida puxta o‘rgatiladi.',
      ru: 'Для тех, кто начинает учить немецкий с нуля. Алфавит, базовые артикли, базовый словарный запас и живая разговорная речь за 2 месяца.',
      en: 'Designed for absolute beginners. Alphabet, pronunciation, essential articles, core vocabulary, and conversational foundations over 2 months.'
    },
    specialNotice: {
      uz: '2 oylik kurs yakunida 2-bosqichga o‘tish testi o‘tkaziladi.',
      ru: 'В конце 2-месячного курса проводится тест для перехода на 2-й этап.',
      en: 'At the end of the 2-month course, an assessment test is conducted to advance to Stage 2.'
    },
    schedule: {
      uz: 'Oflayn: 10:00–12:00 / 16:00–18:00 | Online: 20:00–22:00',
      ru: 'Офлайн: 10:00–12:00 / 16:00–18:00 | Онлайн: 20:00–22:00',
      en: 'Offline: 10:00–12:00 / 16:00–18:00 | Online: 20:00–22:00'
    },
    features: {
      uz: [
        'Noldan boshlab A2 darajaga erishish',
        'Davomiyligi: 2 oy (jami 600 000 so‘m)',
        'Germaniyada 4 yil yashagan Habibullo ustoz',
        'Bosqich oxirida saralash testi'
      ],
      ru: [
        'С нуля до уверенного уровня A2',
        'Длительность: 2 месяца (всего 600 000 сум)',
        'Преподаватель Хабибулло (4 года в Германии)',
        'Тестирование по окончании этапа'
      ],
      en: [
        'From zero to solid A2 level',
        'Duration: 2 months (600,000 UZS total)',
        'Instructor Habibullo (4 years in Germany)',
        'Stage-end qualification test'
      ]
    },
    image: '/assets/aistudio/Screenshot_2026-10-26-22-11-59-699_com.instagram.android-edit_5e2b32ea.jpg'
  },
  {
    id: 'nemistili-2-bosqich',
    stage: 2,
    title: {
      uz: '2-bosqich: O‘rta bosqich',
      ru: '2-й этап: Средний уровень (A2 → B1)',
      en: 'Stage 2: Intermediate Course (A2 → B1)'
    },
    language: 'german',
    format: 'both',
    price: '400 000',
    monthlyPriceNum: 400000,
    totalPrice: {
      uz: '800 000 so‘m (2 oy uchun)',
      ru: '800 000 сум (за 2 месяца)',
      en: '800,000 UZS (total for 2 months)'
    },
    priceNote: {
      uz: 'oyiga 400 000 so‘m',
      ru: '400 000 сум / месяц',
      en: '400,000 UZS / month'
    },
    duration: {
      uz: 'Davomiyligi: 2 oy',
      ru: 'Длительность: 2 месяца',
      en: 'Duration: 2 months'
    },
    groupSize: 'Guruh: 6–8 kishi',
    levelBadge: {
      uz: 'A2 dan B1 gacha',
      ru: 'От A2 до B1',
      en: 'From A2 to B1'
    },
    goal: {
      uz: 'Nemis tilidagi bilimlarni mustahkamlash va B1 darajasiga tayyorlanish.',
      ru: 'Закрепление знаний немецкого языка и подготовка к уровню B1.',
      en: 'Consolidate German language foundation and prepare for B1 proficiency.'
    },
    description: {
      uz: '1-bosqichni muvaffaqiyatli tamomlagan yoki A2 darajasiga ega o‘quvchilar uchun. Murakkab grammatik tuzilmalar, erkin so‘zlashuv va matnlar bilan chuqur ishlash.',
      ru: 'Для выпускников 1-го этапа или студентов с уровнем A2. Сложная грамматика, свободная разговорная практика и углубленная работа с текстами.',
      en: 'For graduates of Stage 1 or learners with existing A2 skills. Complex grammar structures, spontaneous conversation, and text comprehension.'
    },
    specialNotice: {
      uz: '2 oylik kurs yakunida B1 imtihon guruhiga o‘tish testi o‘tkaziladi.',
      ru: 'В конце 2-месячного курса проводится тест для перехода на этап подготовки к B1.',
      en: 'At the end of the 2-month course, a qualifying test is held to enter the B1 Exam Preparation cohort.'
    },
    schedule: {
      uz: 'Oflayn: 10:00–12:00 / 16:00–18:00 | Online: 20:00–22:00',
      ru: 'Офлайн: 10:00–12:00 / 16:00–18:00 | Онлайн: 20:00–22:00',
      en: 'Offline: 10:00–12:00 / 16:00–18:00 | Online: 20:00–22:00'
    },
    features: {
      uz: [
        'A2 dan B1 darajasiga mustahkam o‘tish',
        'Davomiyligi: 2 oy (jami 800 000 so‘m)',
        'Kengaytirilgan grammatika va boy leksika',
        'Yakuniy test orqali B1 guruhiga saralash'
      ],
      ru: [
        'Уверенный переход с A2 на уровень B1',
        'Длительность: 2 месяца (всего 800 000 сум)',
        'Расширенная грамматика и лексика',
        'Квалификационный тест в B1 группу'
      ],
      en: [
        'Seamless progression from A2 to B1',
        'Duration: 2 months (800,000 UZS total)',
        'Advanced sentence structures & vocabulary',
        'Qualifying test to join the final B1 cohort'
      ]
    },
    image: '/assets/aistudio/Screenshot_2026-10-26-22-13-42-017_com.instagram.android-edit_52c4bdf6.jpg'
  },
  {
    id: 'nemistili-3-bosqich',
    stage: 3,
    title: {
      uz: '3-bosqich: B1 imtihoniga tayyorgarlik',
      ru: '3-й этап: Подготовка к экзамену B1',
      en: 'Stage 3: B1 Exam Preparation'
    },
    language: 'german',
    format: 'both',
    price: '500 000',
    monthlyPriceNum: 500000,
    totalPrice: {
      uz: '1 000 000 so‘m (2 oy uchun)',
      ru: '1 000 000 сум (за 2 месяца)',
      en: '1,000,000 UZS (total for 2 months)'
    },
    priceNote: {
      uz: 'oyiga 500 000 so‘m',
      ru: '500 000 сум / месяц',
      en: '500,000 UZS / month'
    },
    duration: {
      uz: 'Davomiyligi: 2 oy',
      ru: 'Длительность: 2 месяца',
      en: 'Duration: 2 months'
    },
    groupSize: 'Guruh: 6–8 kishi',
    levelBadge: {
      uz: 'B1 Imtihon guruhi',
      ru: 'Группа экзамена B1',
      en: 'B1 Exam Cohort'
    },
    goal: {
      uz: 'B1 imtihoniga jiddiy tayyorgarlik ko‘rish, ko‘proq mashq bajarish va imtihon formatini chuqur o‘rganish.',
      ru: 'Серьезная подготовка к экзамену B1, интенсивная практика и глубокий разбор формата экзамена.',
      en: 'Rigorous preparation for B1 exam, extensive practice drills, and thorough mastery of the official exam format.'
    },
    description: {
      uz: 'Yakuniy imtihon bosqichi. Ushbu bosqichda imtihonga yo‘naltirilgan mashg‘ulotlar ko‘proq bo‘ladi: Goethe-Zertifikat B1 va ÖSD formatlari, real test topshiriqlari, Schreiben va Sprechen bloklari mukammal ishlanadi.',
      ru: 'Финальный этап подготовки. Упор на экзаменационные задания: форматы Goethe-Zertifikat B1 и ÖSD, пробные тесты, идеальная отработка модулей Schreiben и Sprechen.',
      en: 'The capstone examination track. Heavily oriented toward real exam exercises: Goethe-Zertifikat B1 and ÖSD test simulations, rigorous writing and speaking drills.'
    },
    specialNotice: {
      uz: 'Imtihonga yo‘naltirilgan intensiv mashg‘ulotlar — Goethe B1 sertifikatini qo‘lga kiritish kafolatlangan uslubi.',
      ru: 'Интенсивные практические занятия — проверенная методика сдачи экзамена Goethe B1.',
      en: 'Exam-focused intensive bootcamp — proven methodology to secure your official Goethe B1 certificate.'
    },
    schedule: {
      uz: 'Oflayn: 10:00–12:00 / 16:00–18:00 | Online: 20:00–22:00',
      ru: 'Офлайн: 10:00–12:00 / 16:00–18:00 | Онлайн: 20:00–22:00',
      en: 'Offline: 10:00–12:00 / 16:00–18:00 | Online: 20:00–22:00'
    },
    features: {
      uz: [
        'Imtihonga yo‘naltirilgan mashg‘ulotlar ko‘proq',
        'Goethe-Zertifikat B1 va ÖSD real variantlari',
        'Davomiyligi: 2 oy (jami 1 000 000 so‘m)',
        'Ausbildung va Germaniya vizasi uchun to‘liq yo‘llanma'
      ],
      ru: [
        'Максимум экзаменационных практических заданий',
        'Реальные варианты Goethe-Zertifikat B1 и ÖSD',
        'Длительность: 2 месяца (всего 1 000 000 сум)',
        'Полная подготовка к визе и Ausbildung в Германии'
      ],
      en: [
        'Heavily practice-intensive exam curriculum',
        'Official Goethe-Zertifikat B1 and ÖSD mock sets',
        'Duration: 2 months (1,000,000 UZS total)',
        'Roadmap for German vocational Ausbildung & visa'
      ]
    },
    image: '/assets/aistudio/Screenshot_2026-10-26-22-14-39-647_com.instagram.android-edit_654ff189.jpg'
  },

  // ==========================================
  // INGLIZ TILI KURSLARI (3 TA ALOHIDA KURS)
  // ==========================================
  {
    id: 'english-grammar',
    title: {
      uz: 'A. Ingliz tili grammatikasi',
      ru: 'A. Грамматика английского языка',
      en: 'A. English Grammar Mastery'
    },
    language: 'english',
    format: 'both',
    price: '300 000',
    monthlyPriceNum: 300000,
    priceNote: {
      uz: 'oyiga 300 000 so‘m',
      ru: '300 000 сум / месяц',
      en: '300,000 UZS / month'
    },
    duration: {
      uz: 'Tizimli bosqichma-bosqich kurs',
      ru: 'Системный поэтапный курс',
      en: 'Structured progressive course'
    },
    groupSize: 'Guruh: 6–8 kishi',
    levelBadge: {
      uz: 'Boshlang‘ich darajadan',
      ru: 'С начального уровня',
      en: 'From Beginner level'
    },
    goal: {
      uz: 'Boshlang‘ich darajadan grammatikani o‘rganish va nutqda to‘g‘ri qo‘llash.',
      ru: 'Изучение грамматики с начального уровня и правильное применение в речи.',
      en: 'Master English grammar fundamentals from beginner level up to accurate usage.'
    },
    description: {
      uz: 'Boshlang‘ich darajadan grammatikani qadam-baqadam o‘rganish. Zamonaviy qoidalar, jadvallar va amaliy mashqlar orqali xatosiz gapirish va yozish ko‘nikmasi shakllantiriladi.',
      ru: 'Пошаговое изучение английской грамматики от самых азов. Практические упражнения для уверенной и безошибочной устной и письменной речи.',
      en: 'Step-by-step English grammar foundations starting from the basics. Build reliable sentence construction, correct tenses, and confident speech.'
    },
    schedule: {
      uz: 'Oflayn: 10:00–12:00 / 16:00–18:00 | Online: 20:00–22:00',
      ru: 'Офлайн: 10:00–12:00 / 16:00–18:00 | Онлайн: 20:00–22:00',
      en: 'Offline: 10:00–12:00 / 16:00–18:00 | Online: 20:00–22:00'
    },
    features: {
      uz: [
        'Boshlang‘ich darajadan grammatika',
        'Narxi: oyiga 300 000 so‘m',
        'Muhriddinjon ustoz (IELTS 6.5)',
        'Kundalik speaking amaliyoti bilan bog‘langan'
      ],
      ru: [
        'Грамматика с начального уровня',
        'Стоимость: 300 000 сум в месяц',
        'Преподаватель Мухриддинжон (IELTS 6.5)',
        'Интеграция с разговорной практикой'
      ],
      en: [
        'Grammar from the ground up',
        'Tuition: 300,000 UZS per month',
        'Instructor Muhriddinjon (IELTS 6.5)',
        'Coupled with daily speaking drills'
      ]
    },
    image: '/assets/aistudio/Screenshot_2026-10-26-22-12-51-449_com.instagram.android-edit_c1d9a452.jpg'
  },
  {
    id: 'english-pre-ielts',
    title: {
      uz: 'B. Pre-IELTS',
      ru: 'B. Pre-IELTS',
      en: 'B. Pre-IELTS'
    },
    language: 'english',
    format: 'both',
    price: '400 000',
    monthlyPriceNum: 400000,
    priceNote: {
      uz: 'oyiga 400 000 so‘m',
      ru: '400 000 сум / месяц',
      en: '400,000 UZS / month'
    },
    duration: {
      uz: 'IELTS ga tayyorgarlik kursi',
      ru: 'Курс подготовки к IELTS',
      en: 'Foundation IELTS preparation'
    },
    groupSize: 'Guruh: 6–8 kishi',
    levelBadge: {
      uz: 'Pre-IELTS darajasi',
      ru: 'Уровень Pre-IELTS',
      en: 'Pre-IELTS Level'
    },
    goal: {
      uz: 'Ingliz tilidagi mavjud bilimlarni IELTS tayyorgarligi uchun mustahkamlash.',
      ru: 'Закрепление имеющихся знаний английского для успешного старта в IELTS.',
      en: 'Strengthen existing English knowledge and bridge the gap to IELTS testing.'
    },
    description: {
      uz: 'Ingliz tilidagi mavjud bilimlarni IELTS talablariga moslashtirish va mustahkamlash. Akademik so‘z boyligi, Reading strategiyalari, Listening tezligi va Writing 1/2 ko‘nikmalariga poydevor yaratish.',
      ru: 'Подготовка фундамента для сдачи IELTS. Академический вокабуляр, базовые техники чтения, аудирования и основы академического письма.',
      en: 'Bridge your intermediate general English to academic IELTS format. Build academic vocabulary, speed reading, listening cues, and essay structuring.'
    },
    schedule: {
      uz: 'Oflayn: 10:00–12:00 / 16:00–18:00 | Online: 20:00–22:00',
      ru: 'Офлайн: 10:00–12:00 / 16:00–18:00 | Онлайн: 20:00–22:00',
      en: 'Offline: 10:00–12:00 / 16:00–18:00 | Online: 20:00–22:00'
    },
    features: {
      uz: [
        'IELTS tayyorgarligi uchun bilimlarni mustahkamlash',
        'Narxi: oyiga 400 000 so‘m',
        'Akademik leksika va murakkab gap qurilmalari',
        'Mock testlar orqali o‘sishni kuzatish'
      ],
      ru: [
        'Укрепление базы для успешного старта в IELTS',
        'Стоимость: 400 000 сум в месяц',
        'Академическая лексика и разбор грамматики',
        'Мониторинг прогресса через пробные тесты'
      ],
      en: [
        'Consolidate knowledge specifically for IELTS',
        'Tuition: 400,000 UZS per month',
        'Academic vocabulary and complex structures',
        'Progress monitoring via regular assessments'
      ]
    },
    image: '/assets/aistudio/75e33532d639d06919266594a876eade_676c59d2.jpg'
  },
  {
    id: 'english-ielts',
    title: {
      uz: 'C. IELTS kursi',
      ru: 'C. Курс IELTS',
      en: 'C. IELTS Intensive Exam Course'
    },
    language: 'english',
    format: 'both',
    price: '400 000',
    monthlyPriceNum: 400000,
    priceNote: {
      uz: 'oyiga 400 000 so‘m',
      ru: '400 000 сум / месяц',
      en: '400,000 UZS / month'
    },
    duration: {
      uz: 'Imtihonga tayyorgarlik kursi',
      ru: 'Курс подготовки к сдаче экзамена',
      en: 'Targeted exam bootcamp'
    },
    groupSize: 'Guruh: 6–8 kishi',
    levelBadge: {
      uz: 'IELTS 6.5+ maqsad',
      ru: 'Цель: IELTS 6.5+',
      en: 'Target: IELTS 6.5+'
    },
    goal: {
      uz: 'IELTS imtihoniga maxsus tayyorgarlik va 6.5+ ballga erishish.',
      ru: 'Специальная подготовка к экзамену IELTS для достижения балла 6.5+.',
      en: 'Specialized preparation for official IELTS test to secure band 6.5+.'
    },
    description: {
      uz: 'IELTS imtihoniga maxsus tayyorgarlik. Barcha 4 modul (Listening, Reading, Writing Task 1 & 2, Speaking) bo‘yicha chuqur amaliyot, vaqtni to‘g‘ri taqsimlash va test sirlari.',
      ru: 'Специализированная подготовка к IELTS. Глубокая проработка 4 модулей (Listening, Reading, Writing Task 1 & 2, Speaking), стратегии тайм-менеджмента и разбор реальных тестов.',
      en: 'Intensive IELTS test coaching covering all 4 modules. Time-management strategies, grading criteria mastery, and extensive mock simulations.'
    },
    schedule: {
      uz: 'Oflayn: 10:00–12:00 / 16:00–18:00 | Online: 20:00–22:00',
      ru: 'Офлайн: 10:00–12:00 / 16:00–18:00 | Онлайн: 20:00–22:00',
      en: 'Offline: 10:00–12:00 / 16:00–18:00 | Online: 20:00–22:00'
    },
    features: {
      uz: [
        'IELTS imtihoniga maxsus tayyorgarlik',
        'Narxi: oyiga 400 000 so‘m',
        'Haqiqiy imtihon muhitidagi Mock testlar',
        'Writing va Speaking bo‘yicha individual tahlil'
      ],
      ru: [
        'Специальная подготовка к экзамену IELTS',
        'Стоимость: 400 000 сум в месяц',
        'Пробные Mock тесты в реальных условиях',
        'Индивидуальный разбор эссе и устной речи'
      ],
      en: [
        'Specialized IELTS exam preparation',
        'Tuition: 400,000 UZS per month',
        'Authentic mock exams under test conditions',
        'Personalized feedback on Writing and Speaking'
      ]
    },
    image: '/assets/aistudio/Screenshot_2026-10-26-22-14-49-628_com.instagram.android-edit_79e2ed85.jpg'
  }
];
