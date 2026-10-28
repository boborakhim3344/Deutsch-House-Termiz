import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { teachersData, habibulloGermanyPhotos } from '../data/teachers';
import { Award, Heart, Globe2, MapPin, Phone, ExternalLink } from 'lucide-react';

interface AboutProps {
  onOpenRegister: (courseId?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenRegister }) => {
  const { language, t } = useLanguage();

  return (
    <div className="w-full pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E5B84B]"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-800">
              {t.aboutPage.label}
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-zinc-950 tracking-tight leading-tight mb-4">
            {t.aboutPage.heading}
          </h1>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-zinc-950 mb-4">
              {t.aboutPage.storyHeading}
            </h2>
            <div className="space-y-4 text-stone-600 text-base leading-relaxed">
              <p>{t.aboutPage.storyP1}</p>
              <p>{t.aboutPage.storyP2}</p>
            </div>

            <div className="mt-8 p-6 rounded-3xl bg-white border border-stone-200 shadow-xs">
              <h3 className="text-lg font-display font-semibold text-zinc-950 mb-2 flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#C9962B]" />
                {t.aboutPage.missionHeading}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {t.aboutPage.missionText}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[32px] overflow-hidden min-h-[360px] shadow-sm relative group">
            <img
              src="/assets/aistudio/Screenshot_2026-10-26-22-11-38-598_com.instagram.android-edit_159193ae.jpg"
              alt="Deutsch House Markazi Termiz"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white text-xs backdrop-blur-md bg-black/40 p-3 rounded-2xl border border-white/20">
              Termiz shahri, Bog‘ishamol MFY, 5-mitti tuman, 26-uy
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="rounded-[32px] bg-white border border-stone-200 p-8 sm:p-10 mb-20 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-stone-100">
            <div className="pt-4 md:pt-0">
              <span className="text-3xl sm:text-5xl font-display font-semibold text-zinc-950 block mb-1">
                30+
              </span>
              <span className="text-xs sm:text-sm text-stone-500 font-medium">Hozirgi o‘quvchilar</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="text-3xl sm:text-5xl font-display font-semibold text-zinc-950 block mb-1">
                6–8
              </span>
              <span className="text-xs sm:text-sm text-stone-500 font-medium">Guruhdagi o‘quvchilar</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="text-3xl sm:text-5xl font-display font-semibold text-[#C9962B] block mb-1">
                2 oy
              </span>
              <span className="text-xs sm:text-sm text-stone-500 font-medium">Har bir bosqich</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="text-3xl sm:text-5xl font-display font-semibold text-zinc-950 block mb-1">
                2
              </span>
              <span className="text-xs sm:text-sm text-stone-500 font-medium">Til & 2 Malakali Ustoz</span>
            </div>
          </div>
        </div>

        {/* Teachers Section */}
        <div className="mb-20">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-zinc-950 tracking-tight mb-2">
              {t.aboutPage.teachersHeading}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              {t.aboutPage.teachersSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teachersData.map((teacher, idx) => (
              <div
                key={idx}
                className="rounded-[32px] bg-white border border-stone-200 p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4A034] to-[#E5B84B] text-zinc-950 flex items-center justify-center font-display font-bold text-2xl shadow-sm shrink-0">
                      {teacher.initials}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-semibold text-zinc-950">
                        {teacher.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#C9962B] uppercase tracking-wider">
                        {teacher.role[language]}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-xs font-semibold text-zinc-800">
                      <Award className="w-3.5 h-3.5 text-[#C9962B]" />
                      {teacher.qualifications[language]}
                    </span>
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {teacher.bio[language]}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 flex items-center justify-between">
                  <span>
                    <strong className="text-zinc-800">Tajriba: </strong>
                    {teacher.experience[language]}
                  </span>
                  <button
                    onClick={() => onOpenRegister()}
                    className="text-xs font-semibold text-[#C9962B] hover:underline cursor-pointer"
                  >
                    Darsga yozilish →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Habibullo Ustoz Authentic Germany Gallery in About page */}
        <div className="mb-20 rounded-[36px] bg-white border border-stone-200 p-8 sm:p-12 shadow-xs">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-[#C9962B] text-xs font-bold uppercase tracking-wider mb-2">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Germaniyadagi 4 yillik tajriba</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-zinc-950 mb-2">
              Habibullo ustozning Germaniya fotosuratlari
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl">
              Ustozimiz Germaniyada 4 yil yashab, nemis tili madaniyatini, zamonaviy muloqot va talaffuzini amalda chuqur o‘rgangan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {habibulloGermanyPhotos.map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={photo.url}
                    alt={photo.location[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white text-[11px] font-medium">
                    {photo.location[language]}
                  </div>
                </div>
                <div className="p-3 text-xs text-stone-600">
                  {photo.caption[language]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Photo Section */}
        <div className="rounded-[36px] bg-white border border-stone-200 overflow-hidden p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-zinc-950 mb-3">
                {t.aboutPage.certificatesHeading}
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {t.aboutPage.certificatesSub} O‘quvchilarimizga ishonchli va xalqaro talablarga mos bilim berish uchun ustozlarimiz o‘z ustida doimiy ishlaydi.
              </p>
              <div className="space-y-3 mb-6 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C9962B]" />
                  <a href="tel:+998774261997" className="hover:underline font-semibold">+998 77 426 19 97</a>
                  <span>/</span>
                  <a href="tel:+998992705255" className="hover:underline font-semibold">+998 99 270 52 55</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C9962B]" />
                  <span>Surxondaryo viloyati, Termiz shahri, Bog‘ishamol MFY, 5-mitti tuman, 26-uy</span>
                </div>
              </div>
              <button
                onClick={() => onOpenRegister()}
                className="inline-flex items-center gap-2 pl-5 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] text-zinc-950 font-semibold text-xs sm:text-sm shadow-sm cursor-pointer"
              >
                <span>Ustozlar bilan suhbatga yozilish</span>
                <span className="w-6 h-6 rounded-full bg-white text-zinc-900 inline-flex items-center justify-center font-bold">
                  →
                </span>
              </button>
            </div>

            <div className="lg:col-span-7 rounded-[28px] overflow-hidden min-h-[300px] shadow-sm relative">
              <img
                src="/assets/aistudio/Screenshot_2026-10-26-22-14-49-628_com.instagram.android-edit_79e2ed85.jpg"
                alt="Deutsch House Sertifikatlar va Diplomlar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs backdrop-blur-md bg-black/40 p-2.5 rounded-xl border border-white/20">
                Markaz devoridagi xalqaro malaka va sertifikatlar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
