import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Globe, Award, BookOpen, Compass, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface LanguagesProps {
  onNavigate: (page: string) => void;
  onOpenRegister: () => void;
}

export const Languages: React.FC<LanguagesProps> = ({ onNavigate, onOpenRegister }) => {
  const { t } = useLanguage();

  return (
    <div className="w-full pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E5B84B]"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-800">
              {t.languagesSec.label}
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-zinc-950 tracking-tight leading-tight mb-4">
            {t.languagesSec.heading}
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {t.languagesSec.subheading}
          </p>
        </div>

        {/* 1. Deep Dive: German Language (Nemis tili - 3 ketma-ket bosqich) */}
        <div className="rounded-[36px] bg-white border border-stone-200 overflow-hidden shadow-xs mb-12 p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-2xl">🇩🇪</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C9962B]">
                  Ketma-ket 3 bosqichli ta'lim tizimi
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-zinc-950 tracking-tight mb-5">
                Nemis tili: Germaniyaga aniq yo‘l
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Germaniyada oliy ta'lim deyarli bepul, dual ta'lim (Ausbildung) esa birinchi oydan boshlab 1000–1400 yevro stipendiya taqdim etadi. Deutsch House markazimizda nemis tili dasturi 3 ta ketma-ket, har biri 2 oylik bosqichga ajratilgan. Har bosqich oxirida test o‘tkaziladi!
              </p>

              {/* 3 German Stages Cards */}
              <div className="space-y-3.5 mb-8">
                {/* Stage 1 */}
                <div className="p-4 rounded-2xl bg-[#F5EFE4]/60 border border-stone-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-zinc-950 uppercase tracking-wide">
                      1-bosqich: Boshlang‘ich kurs (0 dan A2 gacha)
                    </span>
                    <span className="text-xs font-bold text-[#C9962B]">
                      300 000 so‘m/oy
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mb-1.5">
                    <strong>Davomiyligi:</strong> 2 oy • <strong>2 oylik jami to‘lov:</strong> 600 000 so‘m
                  </p>
                  <p className="text-xs text-zinc-700">
                    Nemis tilini noldan o‘rganish va A2 darajasiga mustahkam yetish.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="p-4 rounded-2xl bg-[#F5EFE4]/60 border border-stone-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-zinc-950 uppercase tracking-wide">
                      2-bosqich: O‘rta bosqich (A2 dan B1 gacha)
                    </span>
                    <span className="text-xs font-bold text-[#C9962B]">
                      400 000 so‘m/oy
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mb-1.5">
                    <strong>Davomiyligi:</strong> 2 oy • <strong>2 oylik jami to‘lov:</strong> 800 000 so‘m
                  </p>
                  <p className="text-xs text-zinc-700">
                    Nemis tilidagi bilimlarni mustahkamlash va B1 darajasiga to‘liq tayyorlanish.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-[#E5B84B]/40">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-zinc-950 uppercase tracking-wide flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#C9962B]" />
                      3-bosqich: B1 imtihoniga tayyorgarlik (Yakuniy)
                    </span>
                    <span className="text-xs font-bold text-[#C9962B]">
                      500 000 so‘m/oy
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mb-1.5">
                    <strong>Davomiyligi:</strong> 2 oy • <strong>2 oylik jami to‘lov:</strong> 1 000 000 so‘m
                  </p>
                  <p className="text-xs text-zinc-700">
                    Goethe-Zertifikat / ÖSD B1 imtihon formatini chuqur o‘rganish va intensiv mashg‘ulotlar.
                  </p>
                </div>
              </div>

              {/* Stage Progression Rule Note */}
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 mb-8 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-stone-600 leading-relaxed">
                  <strong>Bosqichlararo test qoidasi:</strong> 2 oy o‘qigach oraliq test olinadi. O‘tganlar keyingi bosqichga ko‘tariladi, o‘ta olmagan o‘quvchi o‘sha bosqichni qayta 2 oy o‘rganadi.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenRegister}
                  className="inline-flex items-center gap-2 pl-5 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] hover:brightness-105 text-zinc-950 font-semibold text-xs sm:text-sm transition-all cursor-pointer group"
                >
                  <span>Nemis tili guruhiga yozilish</span>
                  <span className="w-6 h-6 rounded-full bg-white text-zinc-900 inline-flex items-center justify-center font-bold">
                    →
                  </span>
                </button>
                <button
                  onClick={() => onNavigate('courses')}
                  className="px-5 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-zinc-900 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Barcha kurslarni ko‘rish
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-[28px] overflow-hidden min-h-[340px] sm:min-h-[420px] shadow-sm relative">
              <img
                src="/assets/aistudio/Screenshot_2026-10-26-22-11-59-699_com.instagram.android-edit_5e2b32ea.jpg"
                alt="Deutsch Haus Nemis tili o'quv markazi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs backdrop-blur-md bg-black/50 p-3.5 rounded-xl border border-white/20">
                <div className="font-semibold text-sm mb-0.5">Habibullo ustoz</div>
                <div className="text-[11px] text-stone-200">Nemis tili B2 • Germaniyada 4 yil yashagan</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Deep Dive: English Language (Ingliz tili - 3 yo‘nalish) */}
        <div className="rounded-[36px] bg-white border border-stone-200 overflow-hidden shadow-xs mb-12 p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 order-2 lg:order-1 rounded-[28px] overflow-hidden min-h-[340px] sm:min-h-[420px] shadow-sm relative">
              <img
                src="/assets/aistudio/Screenshot_2026-10-26-22-13-42-017_com.instagram.android-edit_52c4bdf6.jpg"
                alt="Ingliz tili va IELTS"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs backdrop-blur-md bg-black/50 p-3.5 rounded-xl border border-white/20">
                <div className="font-semibold text-sm mb-0.5">Muhriddinjon ustoz</div>
                <div className="text-[11px] text-stone-200">IELTS 6.5 sertifikati • Nemis tili B2</div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-2xl">🇬🇧</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C9962B]">
                  Alohida Ingliz tili dasturi
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-zinc-950 tracking-tight mb-5">
                Ingliz tili: Grammatika va IELTS
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Ingliz tili — xalqaro ta'lim, chet el grantlari va xalqaro universitetlar eshigini ochuvchi kalit. Bizda darslar quruq qoidalar emas, balki jonli muloqot va aniq imtihon strategiyalariga asoslanadi.
              </p>

              {/* 3 English Courses Cards */}
              <div className="space-y-3.5 mb-8">
                {/* Course A */}
                <div className="p-4 rounded-2xl bg-[#F5EFE4]/60 border border-stone-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-zinc-950 uppercase tracking-wide">
                      A. Ingliz tili grammatikasi
                    </span>
                    <span className="text-xs font-bold text-[#C9962B]">
                      300 000 so‘m/oy
                    </span>
                  </div>
                  <p className="text-xs text-stone-600">
                    Boshlang‘ich darajadan noldan mustahkam grammatikani o‘rganish, gap tuzish va xatolarsiz yozish.
                  </p>
                </div>

                {/* Course B */}
                <div className="p-4 rounded-2xl bg-[#F5EFE4]/60 border border-stone-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-zinc-950 uppercase tracking-wide">
                      B. Pre-IELTS
                    </span>
                    <span className="text-xs font-bold text-[#C9962B]">
                      400 000 so‘m/oy
                    </span>
                  </div>
                  <p className="text-xs text-stone-600">
                    IELTS formatiga kirish, leksik bazani kengaytirish, tinglab tushunish va asosiy insho yozish ko‘nikmalari.
                  </p>
                </div>

                {/* Course C */}
                <div className="p-4 rounded-2xl bg-[#F5EFE4]/60 border border-stone-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-zinc-950 uppercase tracking-wide">
                      C. IELTS kursi
                    </span>
                    <span className="text-xs font-bold text-[#C9962B]">
                      400 000 so‘m/oy
                    </span>
                  </div>
                  <p className="text-xs text-stone-600">
                    Listening, Reading, Writing Task 1 & 2 va Speaking bo‘yicha intensiv imtihon texnikalari.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenRegister}
                  className="inline-flex items-center gap-2 pl-5 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] hover:brightness-105 text-zinc-950 font-semibold text-xs sm:text-sm transition-all cursor-pointer group"
                >
                  <span>Ingliz tili guruhiga yozilish</span>
                  <span className="w-6 h-6 rounded-full bg-white text-zinc-900 inline-flex items-center justify-center font-bold">
                    →
                  </span>
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-zinc-900 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Markazga kelish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
