import { Teacher } from '../types';

export const habibulloGermanyPhotos = [
  {
    url: '/assets/aistudio/IMG_20261027_212853_487_d5f5a8d2.jpg',
    location: {
      uz: 'Berlin, Brandenburger Tor',
      ru: 'Берлин, Бранденбургские ворота',
      en: 'Berlin, Brandenburg Gate'
    },
    caption: {
      uz: 'Habibullo ustoz Germaniya poytaxti Berlin shahridagi mashhur Brandenburger Tor maydonida.',
      ru: 'Преподаватель Хабибулло на площади Бранденбургских ворот в Берлине.',
      en: 'Instructor Habibullo at the historic Brandenburg Gate in Berlin, Germany.'
    }
  },
  {
    url: '/assets/aistudio/IMG_20261027_212839_170_e043026d.jpg',
    location: {
      uz: 'Hamburg, Elbphilharmonie & Elbe sohili',
      ru: 'Гамбург, Эльбская филармония и набережная',
      en: 'Hamburg, Elbphilharmonie & Promenade'
    },
    caption: {
      uz: 'Habibullo ustoz Gamburg shahrining ramzi bo‘lgan Elbphilharmonie saroyi va Elba daryosi bo‘yida.',
      ru: 'Преподаватель Хабибулло на набережной Эльбы с видом на Эльбскую филармонию в Гамбурге.',
      en: 'Instructor Habibullo along the Elbe waterfront promenade with Elbphilharmonie in Hamburg.'
    }
  },
  {
    url: '/assets/aistudio/IMG_20261027_212848_401_fc90e022.jpg',
    location: {
      uz: 'Berlin, Neptunbrunnen',
      ru: 'Берлин, фонтан Нептун',
      en: 'Berlin, Neptune Fountain'
    },
    caption: {
      uz: 'Berlin shahri markazidagi mashhur Neptunbrunnen me’moriy favvorasi oldida.',
      ru: 'У знаменитого исторического фонтана Нептун в центре Берлина.',
      en: 'In front of the monumental Neptune Fountain in central Berlin.'
    }
  },
  {
    url: '/assets/aistudio/IMG_20261027_212841_678_16ffbc6b.jpg',
    location: {
      uz: 'Hamburg, Cap San Diego kema-muzeyi',
      ru: 'Гамбург, музей-корабль Cap San Diego',
      en: 'Hamburg, Cap San Diego Museum Ship'
    },
    caption: {
      uz: 'Gamburg portidagi Cap San Diego tarixiy kemasida.',
      ru: 'На борту исторического музейного судна Cap San Diego в порту Гамбурга.',
      en: 'On the deck of the historic Cap San Diego museum ship in the port of Hamburg.'
    }
  },
  {
    url: '/assets/aistudio/IMG_20261027_212845_029_65393116.jpg',
    location: {
      uz: 'Hamburg, Port va Blohm+Voss doki',
      ru: 'Гамбург, порт и доки Blohm+Voss',
      en: 'Hamburg, Port & Blohm+Voss Docks'
    },
    caption: {
      uz: 'Germaniyaning eng yirik dengiz porti — Gamburg porti sohilida.',
      ru: 'На набережной крупнейшего морского порта Германии — порта Гамбург.',
      en: 'At the harbor of Hamburg, Germany’s largest maritime and cultural seaport.'
    }
  }
];

export const teachersData: Teacher[] = [
  {
    name: 'Habibullo ustoz',
    initials: 'HU',
    role: {
      uz: 'Nemis tili bosh o‘qituvchisi',
      ru: 'Ведущий преподаватель немецкого языка',
      en: 'Lead German Instructor'
    },
    languages: ['Nemis tili (B2)', 'O‘zbek tili'],
    qualifications: {
      uz: 'Nemis tili B2 daraja sertifikati',
      ru: 'Сертификат немецкого языка уровня B2',
      en: 'German Language CEFR B2 Certification'
    },
    bio: {
      uz: 'Germaniyada 4 yil davomida yashab, tahsil olgan. Nemis xalqining turmush tarzi, zamonaviy talaffuz va amaliy til madaniyatini chuqur egallagan. O‘quvchilarni Germaniya universitetlari va Ausbildung dasturlariga tayyorlashda katta tajribaga ega.',
      ru: 'Прожил и учился в Германии 4 года. Глубоко владеет живой разговорной речью, аутентичным произношением и культурой общения. Имеет богатый опыт подготовки студентов к поступлению в вузы Германии и программы Ausbildung.',
      en: 'Lived and studied in Germany for 4 years. Possesses comprehensive immersion in colloquial German, modern pronunciation, and German workplace culture. Guides students step-by-step toward German university admissions and Ausbildung vocational contracts.'
    },
    experience: {
      uz: '1 yillik muvaffaqiyatli repetitorlik va pedagogik tajriba. Oflayn va online formatlarda dars beradi.',
      ru: '1 год успешной репетиторской и педагогической практики. Ведет занятия офлайн и онлайн.',
      en: '1 year of tutoring and language coaching experience. Delivers both offline and online cohorts.'
    },
    photos: habibulloGermanyPhotos
  },
  {
    name: 'Muhriddinjon ustoz',
    initials: 'MU',
    role: {
      uz: 'Ingliz va Nemis tillari o‘qituvchisi',
      ru: 'Преподаватель английского и немецкого языков',
      en: 'English & German Instructor'
    },
    languages: ['Ingliz tili (IELTS 6.5)', 'Nemis tili (B2)', 'O‘zbek tili'],
    qualifications: {
      uz: 'IELTS 6.5 xalqaro sertifikati, Nemis tili B2',
      ru: 'Международный сертификат IELTS 6.5, Немецкий язык B2',
      en: 'IELTS Official Band 6.5, German CEFR B2'
    },
    bio: {
      uz: 'Ingliz tili grammatikasi, akademik yozish (Writing) va erkin so‘zlashuv (Speaking) bo‘yicha ixtisoslashgan. Ikki xorijiy tilni puxta bilishi tufayli qiyosiy til o‘rgatish metodikasini qo‘llaydi va darslarni qiziqarli o‘tadi.',
      ru: 'Специализируется на академической грамматике, IELTS Writing и разговорной речи. В совершенстве владеет двумя иностранными языками, что позволяет использовать эффективную сравнительную методику преподавания.',
      en: 'Specializes in English grammar mastery, IELTS Writing strategies, and spontaneous fluent speaking. Leveraging proficiency in both English and German, he applies modern comparative linguistic methods to accelerate learning.'
    },
    experience: {
      uz: '2 yillik tajriba. IELTS imtihoniga tayyorlash va umumiy ingliz tili bo‘yicha oflayn va online dars beradi.',
      ru: '2 года опыта. Ведет офлайн и онлайн группы по подготовке к IELTS и общему английскому языку.',
      en: '2 years of dedicated teaching experience. Teaches General English and targeted IELTS cohorts online and offline.'
    }
  }
];
