import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/courses';
import { blogPosts } from '../data/blog';
import { faqData } from '../data/faq';
import { discountsData } from '../data/discounts';
import { habibulloGermanyPhotos } from '../data/teachers';
import { Course, BlogPost } from '../types';
import {
  Sparkles,
  CheckCircle,
  CheckCircle2,
  Clock,
  Users,
  Award,
  Globe2,
  Calendar,
  Plus,
  Minus,
  Laptop,
  GraduationCap,
  Percent,
  MapPin,
  ExternalLink,
  Phone,
  ShieldCheck,
  BookOpen
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
  onSelectCourse: (course: Course) => void;
  onSelectPost: (post: BlogPost) => void;
  onOpenRegister: (courseId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onSelectCourse,
  onSelectPost,
  onOpenRegister
}) => {
  const { language, t } = useLanguage();

  // Interactive formats tab state
  const [activeFormat, setActiveFormat] = useState(0);

  // Active photo gallery state
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(0);

  // FAQ accordion open state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const germanCourses = coursesData.filter((c) => c.language === 'german');
  const englishCourses = coursesData.filter((c) => c.language === 'english');

  const formatsList = [
    {
      num: '01',
      title: t.formats.f1,
      desc: t.formats.f1Desc,
      image: '/assets/aistudio/Screenshot_2026-10-26-22-11-38-598_com.instagram.android-edit_159193ae.jpg'
    },
    {
      num: '02',
      title: t.formats.f2,
      desc: t.formats.f2Desc,
      image: '/assets/aistudio/8b52a9a87f58b6cdd8c3081897732d9a_0fed3107.jpg'
    },
    {
      num: '03',
      title: t.formats.f3,
      desc: t.formats.f3Desc,
      image: '/assets/aistudio/Screenshot_2026-10-26-22-11-59-699_com.instagram.android-edit_5e2b32ea.jpg'
    },
    {
      num: '04',
      title: t.formats.f4,
      desc: t.formats.f4Desc,
      image: '/assets/aistudio/Screenshot_2026-10-26-22-13-42-017_com.instagram.android-edit_52c4bdf6.jpg'
    },
    {
      num: '05',
      title: t.formats.f5,
      desc: t.formats.f5Desc,
      image: '/assets/aistudio/75e33532d639d06919266594a876eade_676c59d2.jpg'
    }
  ];

  return (
    <div className="w-full">
      {/* ============================================================ */}
      {/* 1. HERO SECTION (Updated Headline & Clean Responsive Typography) */}
      {/* ============================================================ */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-end pb-14 sm:pb-20 pt-28 sm:pt-36 px-4 sm:px-6 md:px-8 overflow-hidden">
        {/* Full-width classroom background photo with authentic wall sign */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/aistudio/Screenshot_2026-10-26-22-11-38-598_com.instagram.android-edit_159193ae.jpg"
            alt="Deutsch House Classroom Interior"
            className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-105 duration-1000"
          />
          {/* Subtle warm vignette / gradient overlay to ensure perfect text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5EFE4] via-[#F5EFE4]/85 to-black/35" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#F5EFE4]/35 to-[#F5EFE4]/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Small pill label with gold dot */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black/5 shadow-xs mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E5B84B] animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-800">
              {t.hero.tag}
            </span>
          </div>

          {/* Large display H1 headline with exact requested text */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-display font-medium text-zinc-950 tracking-tight leading-[1.12] max-w-4xl mb-5 whitespace-pre-line">
            {t.hero.h1}
          </h1>

          {/* Subtitle paragraph */}
          <p className="text-sm sm:text-lg md:text-xl text-zinc-700 max-w-2xl leading-relaxed mb-8 sm:mb-9 font-normal">
            {t.hero.description}
          </p>

          {/* Action buttons: Gold pill + Dark pill */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenRegister()}
              className="inline-flex items-center gap-3 pl-6 pr-2 py-3 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] hover:brightness-105 text-zinc-950 font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <span>{t.hero.btnRegister}</span>
              <span className="w-8 h-8 rounded-full bg-white/80 group-hover:bg-white text-zinc-900 inline-flex items-center justify-center text-sm font-bold transition-all shadow-xs">
                →
              </span>
            </button>

            <button
              onClick={() => onNavigate('courses')}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#1C1917] hover:bg-zinc-800 text-white font-medium text-sm sm:text-base transition-all cursor-pointer group shadow-sm"
            >
              <span>{t.hero.btnCourses}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. BIZNING VA'DAMIZ (Our Promise) */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-stone-300/40">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-stone-500 mb-4">
            {t.promise.label}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-normal text-zinc-950 tracking-tight leading-[1.12] max-w-4xl">
            {t.promise.heading}
          </h2>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3 & 4. NEGA DEUTSCH HOUSE & STATS */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                {t.whyUs.label}
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-zinc-950 tracking-tight leading-tight mb-4">
                {t.whyUs.heading}
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                {t.whyUs.description}
              </p>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-200/80 hover:bg-stone-300 text-zinc-900 font-medium text-xs sm:text-sm transition-all cursor-pointer group self-start"
            >
              <span>{t.whyUs.btnAbout}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          <div className="lg:col-span-8 rounded-[32px] bg-white border border-stone-200 p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <span className="text-3xl sm:text-5xl font-display font-semibold text-zinc-950 block mb-1">
                  30+
                </span>
                <span className="text-xs sm:text-sm text-stone-500 font-medium">
                  {t.stats.students}
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-5xl font-display font-semibold text-zinc-950 block mb-1">
                  6–8
                </span>
                <span className="text-xs sm:text-sm text-stone-500 font-medium">
                  {t.stats.groupSize}
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-5xl font-display font-semibold text-zinc-950 block mb-1">
                  2
                </span>
                <span className="text-xs sm:text-sm text-stone-500 font-medium">
                  {t.stats.teachers}
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-5xl font-display font-semibold text-zinc-950 block mb-1">
                  2
                </span>
                <span className="text-xs sm:text-sm text-stone-500 font-medium">
                  {t.stats.languages}
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-5xl font-display font-semibold text-[#C9962B] block mb-1">
                  300k
                </span>
                <span className="text-xs sm:text-sm text-stone-500 font-medium">
                  {t.stats.price} (oyiga)
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-4xl font-display font-semibold text-zinc-950 block mb-1">
                  9:00–20:00
                </span>
                <span className="text-xs sm:text-sm text-stone-500 font-medium">
                  {t.stats.hours} (Online 20–22)
                </span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-stone-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>{t.stats.badge}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. NEMIS TILI KURSLARI (3 TA KETMA-KET BOSQICH) */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-stone-300/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-[#C9962B] text-xs font-bold uppercase tracking-wider mb-2">
                <span>🇩🇪 Nemis tili ta'lim dasturi</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight mb-2">
                {t.germanStages.heading}
              </h2>
              <p className="text-stone-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                {t.germanStages.subheading}
              </p>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1917] hover:bg-zinc-800 text-white font-medium text-xs sm:text-sm transition-all cursor-pointer group self-start md:self-auto shrink-0 shadow-sm"
            >
              <span>{t.coursesSec.btnAllCourses}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {germanCourses.map((course) => {
              const isStage3 = course.stage === 3;
              return (
                <div
                  key={course.id}
                  className={`rounded-[32px] bg-white border ${
                    isStage3 ? 'border-[#E5B84B] ring-2 ring-[#E5B84B]/20 shadow-md' : 'border-stone-200 shadow-xs'
                  } overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative`}
                >
                  {isStage3 && (
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#1C1917] text-[#E5B84B] text-[11px] font-bold shadow-md">
                      Yakuniy imtihon
                    </div>
                  )}

                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title[language]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-zinc-900 shadow-xs">
                        {course.levelBadge[language]}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#E5B84B] text-xs font-bold text-zinc-950 shadow-xs">
                        2 oy
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium backdrop-blur-md bg-black/50 rounded-xl p-2.5 border border-white/20 flex items-center justify-between">
                      <span>Oflayn / Online (20:00–22:00)</span>
                      <span className="text-[#E5B84B] font-bold">{course.priceNote[language]}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#E5B84B] text-zinc-950 text-xs font-bold flex items-center justify-center">
                          {course.stage}
                        </span>
                        <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                          {course.stage}-bosqich
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-display font-semibold text-zinc-950 mb-3 group-hover:text-[#C9962B] transition-colors leading-snug">
                        {course.title[language]}
                      </h3>

                      {course.goal && (
                        <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/70 text-xs text-stone-700 mb-4">
                          <strong className="text-zinc-900 block mb-0.5">Maqsad:</strong>
                          <span>{course.goal[language]}</span>
                        </div>
                      )}

                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {course.description[language]}
                      </p>

                      {isStage3 && course.specialNotice && (
                        <div className="p-3 rounded-2xl bg-amber-50 border border-amber-300/60 text-xs text-amber-950 mb-4 flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-[#C9962B] shrink-0 mt-0.5" />
                          <span className="font-medium">{course.specialNotice[language]}</span>
                        </div>
                      )}

                      <div className="space-y-2 mb-6">
                        {course.features[language].map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-stone-100">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-xs text-stone-400">Oylik to‘lov:</span>
                        <span className="text-lg font-display font-bold text-zinc-900">
                          {course.price} so‘m / oy
                        </span>
                      </div>
                      {course.totalPrice && (
                        <div className="flex items-baseline justify-between mb-4 text-xs">
                          <span className="text-stone-500 font-medium">Jami to‘lov (2 oy):</span>
                          <span className="font-bold text-[#C9962B]">
                            {course.totalPrice[language]}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectCourse(course)}
                          className="flex-1 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-zinc-900 font-semibold text-xs transition-colors cursor-pointer text-center"
                        >
                          Batafsil
                        </button>
                        <button
                          onClick={() => onOpenRegister(course.id)}
                          className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] hover:brightness-105 text-zinc-950 font-semibold text-xs transition-all cursor-pointer flex items-center justify-center gap-1 group"
                        >
                          <span>Yozilish</span>
                          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. BOSQICHLAR O‘RTASIDAGI TEST TIZIMI (VISUAL TIMELINE SCHEME) */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto rounded-[36px] bg-[#1C1917] text-white p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#E5B84B] text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>{t.testSystem.label}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight mb-3">
              {t.testSystem.heading}
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {t.testSystem.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-8">
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-sm relative">
              <div className="w-10 h-10 rounded-full bg-[#E5B84B] text-zinc-950 font-display font-bold text-lg flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-lg font-display font-semibold text-white mb-2">
                {t.testSystem.card1Title}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {t.testSystem.card1Desc}
              </p>
            </div>

            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-sm relative">
              <div className="w-10 h-10 rounded-full bg-[#E5B84B] text-zinc-950 font-display font-bold text-lg flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-lg font-display font-semibold text-white mb-2">
                {t.testSystem.card2Title}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {t.testSystem.card2Desc}
              </p>
            </div>

            <div className="p-6 rounded-[24px] bg-white/5 border border-[#E5B84B]/40 backdrop-blur-sm relative">
              <div className="w-10 h-10 rounded-full bg-emerald-400 text-zinc-950 font-display font-bold text-lg flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-lg font-display font-semibold text-white mb-2">
                {t.testSystem.card3Title}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {t.testSystem.card3Desc}
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white/10 border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5B84B] text-zinc-950 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base mb-1">
                  {t.testSystem.finalNoticeTitle}
                </h4>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  {t.testSystem.finalNoticeDesc}
                </p>
              </div>
            </div>
            <button
              onClick={() => onOpenRegister('nemistili-1-bosqich')}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] text-zinc-950 font-semibold text-xs whitespace-nowrap shrink-0 cursor-pointer"
            >
              1-bosqichga yozilish →
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. INGLIZ TILI KURSLARI (Alohida bo'lim) */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-stone-300/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span>🇬🇧 Ingliz tili ta'lim dasturi</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight mb-2">
              {t.englishSec.heading}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              {t.englishSec.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {englishCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-[32px] bg-white border border-stone-200 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title[language]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-zinc-900 shadow-xs">
                      {course.levelBadge[language]}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium backdrop-blur-md bg-black/50 rounded-xl p-2.5 border border-white/20 flex items-center justify-between">
                    <span>Oflayn / Online (20:00–22:00)</span>
                    <span className="text-[#E5B84B] font-bold">{course.price} so‘m / oy</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-zinc-950 mb-3 group-hover:text-[#C9962B] transition-colors leading-snug">
                      {course.title[language]}
                    </h3>

                    {course.goal && (
                      <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/70 text-xs text-stone-700 mb-4">
                        <strong className="text-zinc-900 block mb-0.5">Maqsad:</strong>
                        <span>{course.goal[language]}</span>
                      </div>
                    )}

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {course.description[language]}
                    </p>

                    <div className="space-y-2 mb-6">
                      {course.features[language].map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-stone-100 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-xs text-stone-400 block">Oylik to‘lov:</span>
                      <span className="text-lg font-display font-bold text-zinc-900">
                        {course.price} so‘m
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectCourse(course)}
                        className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-zinc-900 font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Batafsil
                      </button>
                      <button
                        onClick={() => onOpenRegister(course.id)}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] hover:brightness-105 text-zinc-950 font-semibold text-xs transition-all cursor-pointer"
                      >
                        Yozilish →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. CHEGIRMALAR VA GRANTLAR (Discounts & Grants) */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-stone-300/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-[#C9962B] text-xs font-bold uppercase tracking-wider mb-3">
              <Percent className="w-3.5 h-3.5" />
              <span>{t.discountsSec.label}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight mb-3">
              {t.discountsSec.heading}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {t.discountsSec.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {discountsData.map((d) => (
              <div
                key={d.id}
                className="p-6 sm:p-7 rounded-[32px] bg-white border border-stone-200 shadow-xs hover:border-[#E5B84B] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-4xl sm:text-5xl font-display font-extrabold text-[#C9962B]">
                      {d.percent}
                    </span>
                    {d.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-50 text-[10px] font-bold text-zinc-800 border border-amber-200/60">
                        {d.badge[language]}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-zinc-950 mb-2 group-hover:text-[#C9962B] transition-colors">
                    {d.title[language]}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {d.description[language]}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-100">
                  <button
                    onClick={() => onOpenRegister()}
                    className="w-full py-2 px-3 rounded-full bg-stone-100 hover:bg-[#E5B84B] hover:text-black text-zinc-900 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Ariza qoldirish</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. HABIBULLO USTOZNING GERMANIYA SURATLARI (Authentic Gallery) */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-stone-300/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-[#C9962B] text-xs font-bold uppercase tracking-wider mb-2">
              <Globe2 className="w-3.5 h-3.5" />
              <span>{t.habibulloSec.experienceBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight mb-2">
              {t.habibulloSec.heading}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              {t.habibulloSec.subheading}
            </p>
          </div>

          {/* Featured Photo + Thumbnails Interactive Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Featured Active Photo (Preserving True Aspect Ratio) */}
            <div className="lg:col-span-7 rounded-[32px] overflow-hidden bg-stone-900 shadow-lg relative">
              <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full flex items-center justify-center bg-black/40">
                <img
                  src={habibulloGermanyPhotos[selectedPhotoIdx].url}
                  alt={habibulloGermanyPhotos[selectedPhotoIdx].location[language]}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-[#E5B84B] text-zinc-950 font-bold text-xs mb-2 inline-block">
                    {habibulloGermanyPhotos[selectedPhotoIdx].location[language]}
                  </span>
                  <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-normal">
                    {habibulloGermanyPhotos[selectedPhotoIdx].caption[language]}
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnail Selectors & Quote Card */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              {/* Quote from Habibullo Ustoz */}
              <div className="p-7 rounded-[28px] bg-white border border-stone-200 shadow-xs">
                <h3 className="text-lg font-display font-semibold text-zinc-950 mb-2">
                  Ustoz so‘zi
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed italic mb-4">
                  "{t.habibulloSec.quote}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] text-zinc-950 font-bold flex items-center justify-center text-sm shadow-xs">
                    HU
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-950">Habibullo ustoz</h4>
                    <p className="text-[11px] text-[#C9962B] font-medium">Bosh nemis tili o‘qituvchisi (B2)</p>
                  </div>
                </div>
              </div>

              {/* Thumbnail Selector Grid */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  Galereyadan tanlang:
                </p>
                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {habibulloGermanyPhotos.map((photo, idx) => {
                    const isSelected = selectedPhotoIdx === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedPhotoIdx(idx)}
                        className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all cursor-pointer relative ${
                          isSelected ? 'border-[#C9962B] scale-105 shadow-md' : 'border-stone-200 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={photo.url}
                          alt={photo.location[language]}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. O‘QISH FORMATLARI (Interactive 01-05 tabs) */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-stone-300/40">
        <div className="max-w-6xl mx-auto rounded-[36px] bg-[#1C1917] text-white p-8 sm:p-12 md:p-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-12 mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2">
                {t.formats.label}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight">
                {t.formats.heading}
              </h2>
              <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-2xl">
                {t.formats.subheading}
              </p>
            </div>

            <div className="lg:col-span-5 h-[320px] sm:h-[420px] rounded-[24px] overflow-hidden relative shadow-lg">
              <img
                src={formatsList[activeFormat].image}
                alt={formatsList[activeFormat].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono font-bold text-[#E5B84B] tracking-wider mb-1 block">
                  {formatsList[activeFormat].num}
                </span>
                <h4 className="text-xl font-display font-semibold mb-1">
                  {formatsList[activeFormat].title}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {formatsList[activeFormat].desc}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
              {formatsList.map((item, idx) => {
                const isActive = activeFormat === idx;
                return (
                  <div
                    key={item.num}
                    onMouseEnter={() => setActiveFormat(idx)}
                    onClick={() => setActiveFormat(idx)}
                    className={`py-4 sm:py-5 cursor-pointer transition-all duration-200 flex items-center justify-between group ${
                      isActive ? 'text-white' : 'text-white/40 hover:text-white/80'
                    }`}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span
                        className={`text-sm sm:text-base font-mono transition-colors ${
                          isActive ? 'text-[#E5B84B] font-bold' : 'text-white/30'
                        }`}
                      >
                        {item.num}
                      </span>
                      <span className="text-xl sm:text-2xl md:text-3xl font-display font-medium tracking-tight">
                        {item.title}
                      </span>
                    </div>
                    <span
                      className={`text-lg transition-transform ${
                        isActive
                          ? 'text-[#E5B84B] translate-x-1'
                          : 'text-white/20 group-hover:text-white/60'
                      }`}
                    >
                      →
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. QANDAY ISHLAYDI (3 Qadam) */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-stone-300/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
              {t.howItWorks.label}
            </p>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight">
              {t.howItWorks.heading}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              {t.howItWorks.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 rounded-[28px] bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-display font-light text-[#C9962B] mb-5 block">
                  01
                </span>
                <h3 className="text-xl font-display font-semibold text-zinc-950 mb-3">
                  {t.howItWorks.step1Title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {t.howItWorks.step1Desc}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-[28px] bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-display font-light text-[#C9962B] mb-5 block">
                  02
                </span>
                <h3 className="text-xl font-display font-semibold text-zinc-950 mb-3">
                  {t.howItWorks.step2Title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {t.howItWorks.step2Desc}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-[28px] bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-display font-light text-[#C9962B] mb-5 block">
                  03
                </span>
                <h3 className="text-xl font-display font-semibold text-zinc-950 mb-3">
                  {t.howItWorks.step3Title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {t.howItWorks.step3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. DARS VAQTLARI (Offline 10-12, 16-18 | Online 20:00–22:00) */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-stone-300/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
              {t.schedule.label}
            </p>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight">
              {t.schedule.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 rounded-[28px] overflow-hidden min-h-[300px] shadow-sm relative group">
              <img
                src="/assets/aistudio/Screenshot_2026-10-26-22-12-51-449_com.instagram.android-edit_c1d9a452.jpg"
                alt="Deutsch House Table and Materials"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs font-medium border border-white/20">
                  {t.schedule.badge}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-6 rounded-[24px] bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-zinc-800">
                    <Clock className="w-5 h-5 text-[#C9962B]" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-zinc-950 mb-1">
                    {t.schedule.offlineHeading}
                  </h3>
                  <p className="text-2xl font-display font-bold text-zinc-900 mt-2 mb-2">
                    {t.schedule.offlineTimes}
                  </p>
                  <p className="text-stone-500 text-xs">
                    Ertalabki va kechki qulay smenalar
                  </p>
                </div>
              </div>

              {/* Online Group - Updated to 20:00–22:00 */}
              <div className="p-6 rounded-[24px] bg-white border border-[#E5B84B]/60 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mb-4 text-zinc-800">
                    <Laptop className="w-5 h-5 text-[#C9962B]" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-zinc-950 mb-1">
                    {t.schedule.onlineHeading}
                  </h3>
                  <p className="text-2xl font-display font-bold text-[#C9962B] mt-2 mb-2">
                    20:00–22:00
                  </p>
                  <p className="text-stone-500 text-xs">
                    Kechki qulay vaqtda Zoom orqali jonli dars
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-[24px] bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-zinc-800">
                    <Calendar className="w-5 h-5 text-[#C9962B]" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-zinc-950 mb-1">
                    {t.schedule.daysHeading}
                  </h3>
                  <p className="text-xl font-display font-bold text-zinc-900 mt-2 mb-2">
                    {t.schedule.days}
                  </p>
                  <p className="text-stone-500 text-xs">
                    Haftada 6 kun davomida markaz ochiq
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-[24px] bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-zinc-800">
                    <CheckCircle className="w-5 h-5 text-[#C9962B]" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-zinc-950 mb-1">
                    Yakshanba
                  </h3>
                  <p className="text-sm font-semibold text-zinc-800 mt-2 mb-2">
                    {t.schedule.sundayNote}
                  </p>
                  <p className="text-stone-500 text-xs">
                    Speaking club va qo‘shimcha amaliyot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. FAQ ACCORDION */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-stone-300/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
              {t.faqSec.label}
            </p>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight mb-4">
              {t.faqSec.heading}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
              {t.faqSec.subheading}
            </p>
            <button
              onClick={() => onOpenRegister()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1917] hover:bg-zinc-800 text-white font-medium text-sm transition-all cursor-pointer group"
            >
              <span>{t.faqSec.btnAsk}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.div>

          <div className="lg:col-span-7 divide-y divide-stone-200">
            {faqData.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="py-5"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-display font-medium text-zinc-950 group-hover:text-[#C9962B] transition-colors pr-4">
                      {item.question[language]}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-stone-200 flex items-center justify-center text-zinc-700 shrink-0 transition-colors"
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 text-stone-600 text-sm sm:text-base leading-relaxed pr-8">
                          {item.answer[language]}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 14. MANZIL VA ALOQA CARD (Exact Termiz Address + Google Maps) */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 border-t border-stone-300/40">
        <div className="max-w-6xl mx-auto rounded-[36px] bg-white border border-stone-200 p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-zinc-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5 text-[#C9962B]" />
                <span>Markaz manzili</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-zinc-950 mb-3">
                Deutsch House o‘quv markazi
              </h3>
              <p className="text-stone-700 text-base leading-relaxed mb-6 font-medium">
                Surxondaryo viloyati, Termiz shahri, Bog‘ishamol MFY, 5-mitti tuman dahasi, 26-uy.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-stone-700">
                  <Phone className="w-4 h-4 text-[#C9962B] shrink-0" />
                  <a href="tel:+998774261997" className="hover:underline font-semibold">+998 77 426 19 97</a>
                  <span>/</span>
                  <a href="tel:+998992705255" className="hover:underline font-semibold">+998 99 270 52 55</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-700">
                  <Clock className="w-4 h-4 text-[#C9962B] shrink-0" />
                  <span>Dush–Shan, 9:00–20:00 (Online guruhlar 20:00–22:00)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenRegister()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] hover:brightness-105 text-zinc-950 text-sm font-semibold transition-all cursor-pointer shadow-sm group"
                >
                  <span>Kursga yozilish</span>
                  <span className="w-5 h-5 rounded-full bg-black/10 group-hover:bg-black/20 text-zinc-900 inline-flex items-center justify-center text-xs font-bold">
                    →
                  </span>
                </button>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Surxon arena va Hotel Afruz yonida</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-[24px] overflow-hidden border border-stone-200 relative group shadow-sm bg-stone-100">
              <img
                src="/assets/aistudio/Screenshot_2026-10-28-13-14-16-239_com.google.android.apps.maps-edit_9726e14d.jpg"
                alt="Deutsch House Termiz joylashuv xaritasi (Surxon arena va Hotel Afruz yonida)"
                className="w-full h-[280px] sm:h-[340px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/80 backdrop-blur-md text-white text-xs flex items-center justify-between">
                <span className="font-medium flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-[#E5B84B] shrink-0" />
                  <span className="truncate">Deutsch House — Surxon arena yonida</span>
                </span>
                <span className="text-[11px] text-amber-300 font-bold px-2 py-0.5 rounded-md bg-white/10 shrink-0 ml-2">
                  Termiz
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 15. BIG CTA SECTION */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto rounded-[36px] overflow-hidden relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center p-8 sm:p-14 text-center shadow-xl">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/aistudio/Screenshot_2026-10-26-22-12-51-449_com.instagram.android-edit_c1d9a452.jpg"
              alt="Deutsch House Call to Action"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/60" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-white">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight mb-4 text-white">
              {t.cta.heading}
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              {t.cta.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenRegister()}
                className="inline-flex items-center gap-3 pl-6 pr-2 py-3 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] hover:brightness-105 text-zinc-950 font-semibold text-sm sm:text-base shadow-lg transition-all cursor-pointer group"
              >
                <span>{t.cta.btnRegister}</span>
                <span className="w-8 h-8 rounded-full bg-white text-zinc-900 inline-flex items-center justify-center text-sm font-bold shadow-xs">
                  →
                </span>
              </button>

              <button
                onClick={() => onNavigate('courses')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all cursor-pointer"
              >
                <span>{t.cta.btnCourses}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
