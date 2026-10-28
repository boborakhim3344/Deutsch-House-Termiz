import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Course } from '../types';
import { X, Clock, Users, CheckCircle2, Award, Calendar, AlertCircle, Target } from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onRegister: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onRegister
}) => {
  const { language, t } = useLanguage();

  if (!course) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl rounded-[32px] bg-[#F5EFE4] border border-stone-300 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {course.stage && (
              <span className="px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-bold">
                {course.stage}-bosqich
              </span>
            )}
            <span className="px-3 py-1 rounded-full bg-[#E5B84B] text-xs font-bold text-zinc-950">
              {course.format === 'both' ? 'Oflayn va Online' : course.format === 'offline' ? 'Oflayn (Termiz)' : 'Online (Zoom)'}
            </span>
            <span className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-zinc-800 border border-stone-200">
              {course.groupSize}
            </span>
            <span className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-zinc-800 border border-stone-200">
              {course.levelBadge[language]}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-zinc-950 mb-2">
            {course.title[language]}
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            {course.description[language]}
          </p>
        </div>

        {/* Goal Banner if available */}
        {course.goal && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
            <Target className="w-5 h-5 text-[#C9962B] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9962B] block">
                Asosiy maqsad:
              </span>
              <p className="text-xs sm:text-sm text-zinc-800 font-medium mt-0.5">
                {course.goal[language]}
              </p>
            </div>
          </div>
        )}

        {/* Special Notice (e.g. B1 Exam prep focus) */}
        {course.specialNotice && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                Imtihon afzalligi:
              </span>
              <p className="text-xs sm:text-sm text-emerald-950 font-medium mt-0.5">
                {course.specialNotice[language]}
              </p>
            </div>
          </div>
        )}

        {/* Image preview */}
        <div className="rounded-2xl overflow-hidden h-44 mb-6 shadow-xs">
          <img
            src={course.image}
            alt={course.title[language]}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-2xl bg-white border border-stone-200">
            <span className="text-stone-400 block mb-1">Dars jadvali</span>
            <span className="font-semibold text-zinc-900 flex items-center gap-1.5 text-xs">
              <Clock className="w-3.5 h-3.5 text-[#C9962B] shrink-0" />
              {course.schedule[language]}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-stone-200">
            <span className="text-stone-400 block mb-1">Oylik to‘lov</span>
            <span className="font-bold text-zinc-900 text-sm text-[#C9962B]">
              {course.priceNote[language]}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-stone-200">
            <span className="text-stone-400 block mb-1">Davomiyligi va jami</span>
            <span className="font-semibold text-zinc-900 block text-xs">
              {course.duration[language]}
            </span>
            {course.totalPrice && (
              <span className="text-[11px] text-stone-500 font-medium">
                Jami: {course.totalPrice[language]}
              </span>
            )}
          </div>
        </div>

        {/* Features / Syllabus */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
            Kurs tarkibi va imkoniyatlar:
          </h4>
          <ul className="space-y-2.5">
            {course.features[language].map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <span className="text-xs text-stone-500">
            Barcha kitob va materiallar bepul beriladi
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-stone-200 hover:bg-stone-300 text-zinc-900 text-xs font-semibold transition-colors cursor-pointer"
            >
              Yopish
            </button>
            <button
              onClick={() => {
                onRegister(course);
                onClose();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 pl-5 pr-2 py-2 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] hover:brightness-105 text-zinc-950 font-semibold text-xs shadow-sm transition-all cursor-pointer group"
            >
              <span>Ushbu kursga yozilish</span>
              <span className="w-5 h-5 rounded-full bg-white text-zinc-900 inline-flex items-center justify-center font-bold">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
