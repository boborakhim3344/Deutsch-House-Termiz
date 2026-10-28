import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/courses';
import { discountsData } from '../data/discounts';
import { filterCourses } from '../utils/courseFilter';
import { Course } from '../types';
import {
  Clock,
  CheckCircle2,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Award,
  BookOpen,
  GraduationCap,
  Users,
  Percent
} from 'lucide-react';

interface CoursesProps {
  onSelectCourse: (course: Course) => void;
  onOpenRegister: (courseId?: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectCourse, onOpenRegister }) => {
  const { language, t } = useLanguage();
  const [langFilter, setLangFilter] = useState<'all' | 'german' | 'english'>('all');
  const [formatFilter, setFormatFilter] = useState<'all' | 'offline' | 'online'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = filterCourses(coursesData, {
    language: langFilter,
    format: formatFilter,
    searchQuery
  });

  const germanCourses = filteredCourses.filter((c) => c.language === 'german');
  const englishCourses = filteredCourses.filter((c) => c.language === 'english');

  return (
    <div className="w-full pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E5B84B]"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-800">
              {t.coursesSec.label}
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-zinc-950 tracking-tight leading-tight mb-4">
            {t.coursesSec.heading}
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {t.coursesSec.subheading}
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="p-2 sm:p-2.5 rounded-3xl sm:rounded-full bg-white border border-stone-200/90 shadow-xs mb-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Language filter */}
            <div className="flex items-center gap-1 px-3 py-1">
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider mr-1">
                Til:
              </span>
              <button
                onClick={() => setLangFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  langFilter === 'all'
                    ? 'bg-[#1C1917] text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {t.coursesSec.filterAll}
              </button>
              <button
                onClick={() => setLangFilter('german')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  langFilter === 'german'
                    ? 'bg-[#1C1917] text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {t.coursesSec.filterGerman}
              </button>
              <button
                onClick={() => setLangFilter('english')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  langFilter === 'english'
                    ? 'bg-[#1C1917] text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {t.coursesSec.filterEnglish}
              </button>
            </div>

            <div className="w-[1px] h-5 bg-stone-200 hidden md:block"></div>

            {/* Format filter */}
            <div className="flex items-center gap-1 px-3 py-1">
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider mr-1">
                Format:
              </span>
              <button
                onClick={() => setFormatFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  formatFilter === 'all'
                    ? 'bg-[#1C1917] text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {t.coursesSec.filterAll}
              </button>
              <button
                onClick={() => setFormatFilter('offline')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  formatFilter === 'offline'
                    ? 'bg-[#1C1917] text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {t.coursesSec.filterOffline}
              </button>
              <button
                onClick={() => setFormatFilter('online')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  formatFilter === 'online'
                    ? 'bg-[#1C1917] text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {t.coursesSec.filterOnline}
              </button>
            </div>
          </div>

          {/* Search box */}
          <div className="relative min-w-[200px] px-2 sm:px-0">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Kurslarni qidirish..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-xs text-zinc-900 focus:outline-none focus:border-[#C9962B]"
            />
          </div>
        </div>

        {/* ============================================================ */}
        {/* 1. NEMIS TILI KURSLARI (3 TA KETMA-KET BOSQICH) */}
        {/* ============================================================ */}
        {(langFilter === 'all' || langFilter === 'german') && germanCourses.length > 0 && (
          <div className="mb-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-[#C9962B] text-xs font-bold uppercase tracking-wider mb-2">
                <span>🇩🇪 Nemis tili</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-zinc-950 tracking-tight mb-2">
                {t.germanStages.heading}
              </h2>
              <p className="text-stone-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                {t.germanStages.subheading}
              </p>
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

                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-5">
                          {course.description[language]}
                        </p>

                        {/* Special highlight for Stage 3 */}
                        {isStage3 && course.specialNotice && (
                          <div className="p-3 rounded-2xl bg-amber-50 border border-amber-300/60 text-xs text-amber-950 mb-5 flex items-start gap-2">
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

                      {/* Pricing Block */}
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
        )}

        {/* ============================================================ */}
        {/* 2. BOSQICHLAR O‘RTASIDAGI TEST TIZIMI (VISUAL SCHEME) */}
        {/* ============================================================ */}
        <div className="mb-24 rounded-[36px] bg-[#1C1917] text-white p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
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

          {/* 3 Steps Timeline Visual */}
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

          {/* B1 Final notice banner */}
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

        {/* ============================================================ */}
        {/* 3. INGLIZ TILI KURSLARI (3 TA ALOHIDA KURS) */}
        {/* ============================================================ */}
        {(langFilter === 'all' || langFilter === 'english') && englishCourses.length > 0 && (
          <div className="mb-24">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
                <span>🇬🇧 Ingliz tili</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-zinc-950 tracking-tight mb-2">
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
        )}

        {/* ============================================================ */}
        {/* 4. CHEGIRMALAR VA GRANTLAR BO‘LIMI */}
        {/* ============================================================ */}
        <div className="rounded-[36px] bg-white border border-stone-200 p-8 sm:p-12 shadow-xs mb-16">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-[#C9962B] text-xs font-bold uppercase tracking-wider mb-3">
              <Percent className="w-3.5 h-3.5" />
              <span>{t.discountsSec.label}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-zinc-950 tracking-tight mb-3">
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
                className="p-6 rounded-[28px] bg-stone-50 border border-stone-200/80 hover:border-[#E5B84B] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-4xl sm:text-5xl font-display font-extrabold text-[#C9962B]">
                      {d.percent}
                    </span>
                    {d.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-white text-[10px] font-bold text-zinc-800 shadow-xs border border-stone-200">
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

                <div className="pt-4 mt-6 border-t border-stone-200/60">
                  <button
                    onClick={() => onOpenRegister()}
                    className="text-xs font-semibold text-[#C9962B] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ariza qoldirish</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Transparency Guarantee Card */}
        <div className="rounded-[32px] bg-[#F5EFE4] border border-stone-300/80 p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#C9962B] flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-zinc-900 text-lg mb-1">
                  Shaffof va aniq narxlar
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Har bir bosqich narxi ochiq va oldindan ma’lum. 2 oylik to‘liq summa kurs boshida aniq ko‘rsatiladi.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#C9962B] flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-zinc-900 text-lg mb-1">
                  Kichik guruh kafolati
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Guruhlarda hech qachon 8 tadan ko‘p o‘quvchi bo‘lmaydi. Har bir darsda faol so‘zlashuv kafolatlanadi.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#C9962B] flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-zinc-900 text-lg mb-1">
                  Qulay dars vaqtlari
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Oflayn: 10:00–12:00 va 16:00–18:00. Online: kechki 20:00–22:00 (Zoom).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
