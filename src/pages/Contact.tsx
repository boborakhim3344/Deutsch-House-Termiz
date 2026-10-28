import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/courses';
import { validateRegistrationForm } from '../utils/courseFilter';
import { getTelegramAdminUrl, openTelegramChat, buildTelegramMessage } from '../utils/telegram';
import {
  Phone,
  Send,
  MapPin,
  Clock,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Copy,
  Check,
  Info
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [selectedLang, setSelectedLang] = useState<'german' | 'english'>('german');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('nemistili-1-bosqich');
  const [selectedFormat, setSelectedFormat] = useState<'offline' | 'online'>('offline');
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [telegramUrl, setTelegramUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const availableCourses = coursesData.filter((c) => c.language === selectedLang);

  const handleLanguageChange = (lang: 'german' | 'english') => {
    setSelectedLang(lang);
    const valid = coursesData.filter((c) => c.language === lang);
    if (valid.length > 0) {
      setSelectedCourseId(valid[0].id);
    }
  };

  const selectedCourse = coursesData.find((c) => c.id === selectedCourseId) || availableCourses[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateRegistrationForm({
      fullName,
      phone,
      language: selectedLang,
      format: selectedFormat,
      note
    });

    if (!validation.isValid) {
      setErrors(validation.errors as Record<string, string>);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const courseTitle = selectedCourse ? selectedCourse.title[language] : '';
    const coursePrice = selectedCourse
      ? `${selectedCourse.price} so'm/oy${selectedCourse.totalPrice ? ` (${selectedCourse.totalPrice[language]})` : ''}`
      : '';

    const lead = {
      fullName,
      phone,
      language: selectedLang,
      format: selectedFormat,
      courseTitle,
      coursePrice,
      note
    };

    const tgUrl = getTelegramAdminUrl(lead, 'deutschhaus_admin');
    setTelegramUrl(tgUrl);

    try {
      const leads = JSON.parse(localStorage.getItem('dh_leads') || '[]');
      leads.push({
        ...lead,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('dh_leads', JSON.stringify(leads));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      openTelegramChat(tgUrl);
    }, 400);
  };

  const handleCopyMessage = () => {
    const courseTitle = selectedCourse ? selectedCourse.title[language] : '';
    const coursePrice = selectedCourse
      ? `${selectedCourse.price} so'm/oy${selectedCourse.totalPrice ? ` (${selectedCourse.totalPrice[language]})` : ''}`
      : '';

    const msg = buildTelegramMessage({
      fullName,
      phone,
      language: selectedLang,
      format: selectedFormat,
      courseTitle,
      coursePrice,
      note
    });
    navigator.clipboard.writeText(msg).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="w-full pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E5B84B]"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-800">
              {t.contactPage.label}
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-zinc-950 tracking-tight leading-tight mb-4">
            {t.contactPage.heading}
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {t.contactPage.subheading}
          </p>
        </div>

        {/* Two Columns: Form on Left, Contact Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Form Container */}
          <div className="lg:col-span-7 rounded-[36px] bg-white border border-stone-200 p-8 sm:p-12 shadow-xs">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-xs">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-zinc-900 mb-2">
                  {t.contactPage.successTitle}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
                  Arizangiz qabul qilindi va <strong>@deutschhaus_admin</strong> ga yuborish uchun tayyorlandi!
                </p>

                {/* Direct Telegram Admin Action Button */}
                <div className="mb-8 space-y-2.5 max-w-md mx-auto">
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#229ED9] hover:bg-[#1E8EC5] text-white font-semibold text-sm sm:text-base shadow-md transition-all group"
                  >
                    <Send className="w-5 h-5" />
                    <span>Telegram orqali adminga yuborish</span>
                    <span className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 inline-flex items-center justify-center font-bold text-xs">
                      →
                    </span>
                  </a>
                  <p className="text-xs text-stone-500">
                    Tugmani bosganingizda Telegram ochilib, barcha ma'lumotlaringiz xabar maydonida tayyor turadi.
                  </p>
                </div>

                <div className="bg-[#F5EFE4] rounded-2xl p-5 mb-8 text-left text-xs sm:text-sm text-stone-700 space-y-2 border border-stone-200">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-300/60">
                    <span className="font-semibold text-zinc-900">Yuborilayotgan ma'lumotlar:</span>
                    <button
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#C9962B] hover:underline cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Nusxalandi' : 'Xabarni nusxalash'}</span>
                    </button>
                  </div>
                  <p>
                    <strong className="text-zinc-900">Ism:</strong> {fullName}
                  </p>
                  <p>
                    <strong className="text-zinc-900">Telefon:</strong> {phone}
                  </p>
                  <p>
                    <strong className="text-zinc-900">Til:</strong>{' '}
                    {selectedLang === 'german' ? '🇩🇪 Nemis tili' : '🇬🇧 Ingliz tili'}
                  </p>
                  {selectedCourse && (
                    <p>
                      <strong className="text-zinc-900">Kurs:</strong> {selectedCourse.title[language]} ({selectedCourse.price} so'm/oy)
                    </p>
                  )}
                  <p>
                    <strong className="text-zinc-900">Format:</strong>{' '}
                    {selectedFormat === 'offline' ? '🏢 Oflayn (Termiz)' : '💻 Online (Zoom, 20:00–22:00)'}
                  </p>
                  {note && (
                    <p>
                      <strong className="text-zinc-900">Izoh:</strong> {note}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFullName('');
                    setPhone('+998 ');
                    setNote('');
                    setCopied(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-stone-200 text-zinc-800 text-xs sm:text-sm font-semibold hover:bg-stone-300 transition-all cursor-pointer"
                >
                  Yana ariza qoldirish
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-zinc-950 mb-2">
                  {t.contactPage.formTitle}
                </h2>
                <p className="text-stone-600 text-xs sm:text-sm mb-6">
                  {t.contactPage.formSubtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-800 mb-1.5">
                      {t.contactPage.nameLabel} *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t.contactPage.namePlaceholder}
                      className={`w-full px-4 py-3 rounded-2xl bg-stone-50 border ${
                        errors.fullName ? 'border-red-400 ring-1 ring-red-400' : 'border-stone-200'
                      } text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-[#C9962B] transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-800 mb-1.5">
                      {t.contactPage.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.contactPage.phonePlaceholder}
                      className={`w-full px-4 py-3 rounded-2xl bg-stone-50 border ${
                        errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-stone-200'
                      } text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-[#C9962B] transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-800 mb-1.5">
                        {t.contactPage.langLabel}
                      </label>
                      <select
                        value={selectedLang}
                        onChange={(e) => handleLanguageChange(e.target.value as 'german' | 'english')}
                        className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-[#C9962B] transition-colors cursor-pointer"
                      >
                        <option value="german">Nemis tili</option>
                        <option value="english">Ingliz tili</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-800 mb-1.5">
                        {t.contactPage.formatLabel}
                      </label>
                      <select
                        value={selectedFormat}
                        onChange={(e) => setSelectedFormat(e.target.value as 'offline' | 'online')}
                        className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-[#C9962B] transition-colors cursor-pointer"
                      >
                        <option value="offline">Oflayn (Termiz)</option>
                        <option value="online">Online (Zoom, 20:00–22:00)</option>
                      </select>
                    </div>
                  </div>

                  {/* Course Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-800 mb-1.5">
                      {t.contactPage.courseSelectLabel} *
                    </label>
                    <select
                      value={selectedCourseId}
                      onChange={(e) => setSelectedCourseId(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-[#C9962B] transition-colors cursor-pointer font-medium"
                    >
                      {availableCourses.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.title[language]} — {c.price} so'm/oy
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Active Course Card Preview */}
                  {selectedCourse && (
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-[#E5B84B]/40 text-xs text-zinc-800">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-zinc-900">
                          {selectedCourse.title[language]}
                        </span>
                        <span className="font-bold text-[#C9962B] text-sm">
                          {selectedCourse.price} so'm / oyiga
                        </span>
                      </div>
                      {selectedCourse.totalPrice && (
                        <div className="text-stone-600 flex items-center justify-between text-[11px] pt-1 border-t border-amber-200/50">
                          <span>Jami to'lov (2 oylik kurs):</span>
                          <strong className="text-zinc-900">{selectedCourse.totalPrice[language]}</strong>
                        </div>
                      )}
                      {selectedCourse.stage && (
                        <p className="text-[11px] text-stone-500 mt-1 flex items-center gap-1">
                          <Info className="w-3.5 h-3.5 text-[#C9962B] shrink-0" />
                          <span>Har 2 oylik bosqich oxirida saralash testi o‘tkaziladi.</span>
                        </p>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-800 mb-1.5">
                      {t.contactPage.noteLabel}
                    </label>
                    <textarea
                      rows={2}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder={t.contactPage.notePlaceholder}
                      className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-[#C9962B] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] hover:brightness-105 text-zinc-950 font-semibold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
                  >
                    <span>{isSubmitting ? t.contactPage.submitting : t.contactPage.btnSubmit}</span>
                    <span className="w-6 h-6 rounded-full bg-white text-zinc-900 inline-flex items-center justify-center font-bold text-xs">
                      →
                    </span>
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone and Messenger Card */}
            <div className="rounded-[32px] bg-white border border-stone-200 p-8 shadow-xs">
              <h3 className="text-xl font-display font-semibold text-zinc-950 mb-5">
                Tezkor aloqa
              </h3>

              <div className="space-y-3">
                {/* Phone 1 */}
                <a
                  href="tel:+998774261997"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-[#C9962B] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] text-stone-500 block uppercase tracking-wider font-medium">Asosiy telefon</span>
                    <span className="text-base font-semibold text-zinc-900 group-hover:text-[#C9962B] transition-colors">
                      +998 77 426 19 97
                    </span>
                  </div>
                </a>

                {/* Phone 2 (Requested additional number) */}
                <a
                  href="tel:+998992705255"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors group border border-amber-200/50"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-[#C9962B] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] text-[#C9962B] block uppercase tracking-wider font-semibold">Qo‘shimcha telefon</span>
                    <span className="text-base font-semibold text-zinc-900 group-hover:text-[#C9962B] transition-colors">
                      +998 99 270 52 55
                    </span>
                  </div>
                </a>

                <a
                  href="https://t.me/deutschhaus_admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-stone-500 block">{t.contactPage.telegramAdmin}</span>
                    <span className="text-base font-semibold text-zinc-900 group-hover:text-sky-600 transition-colors">
                      @deutschhaus_admin
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400" />
                </a>

                <a
                  href="https://t.me/deutschhaus_termiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-stone-500 block">{t.contactPage.telegramChannel}</span>
                    <span className="text-base font-semibold text-zinc-900 group-hover:text-sky-600 transition-colors">
                      @deutschhaus_termiz
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400" />
                </a>

                <a
                  href="https://www.instagram.com/deutschhaus_termiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 font-bold text-sm">
                    IG
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-stone-500 block">{t.contactPage.instagram}</span>
                    <span className="text-base font-semibold text-zinc-900 group-hover:text-pink-600 transition-colors">
                      @deutschhaus_termiz
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400" />
                </a>
              </div>
            </div>

            {/* Address and Working Hours with Google Maps direct link */}
            <div className="rounded-[32px] bg-white border border-stone-200 p-8 shadow-xs">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-zinc-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C9962B]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 text-sm mb-1">{t.contactPage.address}</h4>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-3">
                      {t.contactPage.addressValue}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 text-zinc-800 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Surxon arena va Hotel Afruz yonida</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-zinc-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#C9962B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 text-sm mb-1">{t.contactPage.workingHours}</h4>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {t.contactPage.workingHoursValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Image Section for Termez Bog'ishamol 5-mitti tuman */}
        <div className="rounded-[36px] bg-white border border-stone-200 overflow-hidden shadow-xs p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xl font-display font-semibold text-zinc-950 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C9962B]" />
                <span>{t.contactPage.mapTitle}</span>
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Termiz shahri, Bog‘ishamol MFY, 5-mitti tuman dahasi, 26-uy (Surxon arena va Hotel Afruz yonida).
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 text-zinc-800 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Mo‘ljal: Surxon arena stadioni</span>
            </div>
          </div>
          <div className="rounded-[24px] overflow-hidden w-full border border-stone-200 relative group shadow-sm bg-stone-100">
            <img
              src="/assets/aistudio/Screenshot_2026-10-28-13-14-16-239_com.google.android.apps.maps-edit_9726e14d.jpg"
              alt="Deutsch House Termiz joylashuv xaritasi (Surxon arena va Hotel Afruz yonida)"
              className="w-full h-[360px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5B84B] shrink-0" />
                <span className="text-xs sm:text-sm font-medium">
                  Surxondaryo viloyati, Termiz shahri, Bog‘ishamol MFY, 5-mitti tuman dahasi, 26-uy
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-stone-300">Mo‘ljal:</span>
                <span className="text-xs text-amber-300 font-bold px-2.5 py-1 rounded-full bg-white/10">
                  Surxon arena & Hotel Afruz
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
