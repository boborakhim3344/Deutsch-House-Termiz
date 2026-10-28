import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/courses';
import { validateRegistrationForm } from '../utils/courseFilter';
import { getTelegramAdminUrl, openTelegramChat, buildTelegramMessage } from '../utils/telegram';
import { X, CheckCircle2, Phone, Sparkles, Send, Copy, Check, Info } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLanguage?: 'german' | 'english';
  defaultFormat?: 'offline' | 'online';
  defaultCourseId?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  defaultLanguage = 'german',
  defaultFormat = 'offline',
  defaultCourseId
}) => {
  const { language, t } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [selectedLang, setSelectedLang] = useState<'german' | 'english'>(defaultLanguage);
  const [selectedCourseId, setSelectedCourseId] = useState<string>(
    defaultCourseId || (defaultLanguage === 'german' ? 'nemistili-1-bosqich' : 'english-grammar')
  );
  const [selectedFormat, setSelectedFormat] = useState<'offline' | 'online'>(defaultFormat);
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [telegramUrl, setTelegramUrl] = useState('');

  // Synchronize default props when modal opens or defaults change
  useEffect(() => {
    if (isOpen) {
      setSelectedLang(defaultLanguage);
      if (defaultCourseId) {
        setSelectedCourseId(defaultCourseId);
      } else {
        setSelectedCourseId(defaultLanguage === 'german' ? 'nemistili-1-bosqich' : 'english-grammar');
      }
      setSelectedFormat(defaultFormat);
    }
  }, [isOpen, defaultLanguage, defaultFormat, defaultCourseId]);

  // When language changes, update course selection if current course belongs to another language
  const availableCourses = coursesData.filter((c) => c.language === selectedLang);

  const handleLanguageChange = (lang: 'german' | 'english') => {
    setSelectedLang(lang);
    const valid = coursesData.filter((c) => c.language === lang);
    if (valid.length > 0) {
      setSelectedCourseId(valid[0].id);
    }
  };

  const selectedCourse = coursesData.find((c) => c.id === selectedCourseId) || availableCourses[0];

  if (!isOpen) return null;

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

    // Save lead in localStorage for persistence
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
      // Automatically attempt opening Telegram chat with prefilled text
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

  const handleReset = () => {
    setIsSuccess(false);
    setFullName('');
    setPhone('+998 ');
    setNote('');
    setCopied(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg rounded-[28px] bg-[#F5EFE4] border border-stone-300/80 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-display font-semibold text-zinc-900 mb-2">
              {t.contactPage.successTitle}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-5 max-w-md mx-auto">
              Ma'lumotlaringiz qabul qilindi va <strong>@deutschhaus_admin</strong> ga yuborish uchun tayyorlandi!
            </p>

            {/* Direct Telegram Admin Button */}
            <div className="mb-6 space-y-2.5">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#229ED9] hover:bg-[#1E8EC5] text-white font-semibold text-sm shadow-md transition-all group"
              >
                <Send className="w-4 h-4" />
                <span>Telegram orqali adminga yuborish</span>
                <span className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 inline-flex items-center justify-center font-bold text-xs">
                  →
                </span>
              </a>
              <p className="text-[11px] text-stone-500">
                Tugmani bosganda Telegram ochiladi va barcha tanlagan kursingiz ma'lumotlari tayyor turadi.
              </p>
            </div>

            {/* Details Card */}
            <div className="bg-white rounded-2xl p-4 mb-5 border border-stone-200 text-left text-xs text-stone-600 space-y-2">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-100">
                <span className="font-semibold text-zinc-900">Yuborilgan ma'lumotlar:</span>
                <button
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C9962B] hover:underline cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Nusxalandi' : 'Xabarni nusxalash'}</span>
                </button>
              </div>
              <p>
                <span className="font-semibold text-zinc-900">Ism:</span> {fullName}
              </p>
              <p>
                <span className="font-semibold text-zinc-900">Telefon:</span> {phone}
              </p>
              <p>
                <span className="font-semibold text-zinc-900">Til:</span>{' '}
                {selectedLang === 'german' ? '🇩🇪 Nemis tili' : '🇬🇧 Ingliz tili'}
              </p>
              {selectedCourse && (
                <p>
                  <span className="font-semibold text-zinc-900">Kurs:</span> {selectedCourse.title[language]} ({selectedCourse.price} so'm/oy)
                </p>
              )}
              <p>
                <span className="font-semibold text-zinc-900">Format:</span>{' '}
                {selectedFormat === 'offline' ? '🏢 Oflayn (Termiz)' : '💻 Online (Zoom, 20:00–22:00)'}
              </p>
              {note && (
                <p>
                  <span className="font-semibold text-zinc-900">Izoh:</span> {note}
                </p>
              )}
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-stone-200 text-zinc-800 text-xs font-semibold hover:bg-stone-300 transition-colors cursor-pointer"
              >
                Yopish
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9962B] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Deutsch House — Termiz</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-display font-semibold text-zinc-900 tracking-tight mb-2">
              {t.contactPage.formTitle}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mb-5">
              {t.contactPage.formSubtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1.5">
                  {t.contactPage.nameLabel} *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={t.contactPage.namePlaceholder}
                  className={`w-full px-4 py-2.5 rounded-xl bg-white border ${
                    errors.fullName ? 'border-red-400 ring-1 ring-red-400' : 'border-stone-300'
                  } text-sm text-zinc-900 focus:outline-none focus:border-[#C9962B] transition-colors`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1.5">
                  {t.contactPage.phoneLabel} *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.contactPage.phonePlaceholder}
                  className={`w-full px-4 py-2.5 rounded-xl bg-white border ${
                    errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-stone-300'
                  } text-sm text-zinc-900 focus:outline-none focus:border-[#C9962B] transition-colors`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-800 mb-1.5">
                    {t.contactPage.langLabel}
                  </label>
                  <select
                    value={selectedLang}
                    onChange={(e) => handleLanguageChange(e.target.value as 'german' | 'english')}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#C9962B] transition-colors cursor-pointer"
                  >
                    <option value="german">Nemis tili</option>
                    <option value="english">Ingliz tili</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-800 mb-1.5">
                    {t.contactPage.formatLabel}
                  </label>
                  <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value as 'offline' | 'online')}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#C9962B] transition-colors cursor-pointer"
                  >
                    <option value="offline">Oflayn (Termiz)</option>
                    <option value="online">Online (Zoom, 20:00–22:00)</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Course Selection Dropdown with Exact Pricing */}
              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1.5">
                  {t.contactPage.courseSelectLabel || 'Tanlangan kurs'} *
                </label>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#C9962B] transition-colors cursor-pointer font-medium"
                >
                  {availableCourses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title[language]} — {c.price} so'm/oy
                    </option>
                  ))}
                </select>
              </div>

              {/* Active Course Pricing & Duration Card */}
              {selectedCourse && (
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-[#E5B84B]/40 text-xs text-zinc-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-zinc-900">
                      {selectedCourse.title[language]}
                    </span>
                    <span className="font-bold text-[#C9962B]">
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
                      <Info className="w-3 h-3 text-[#C9962B] shrink-0" />
                      <span>2 oylik kurs oxirida saralash testi o‘tkaziladi.</span>
                    </p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1.5">
                  {t.contactPage.noteLabel}
                </label>
                <textarea
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder={t.contactPage.notePlaceholder}
                  className="w-full px-4 py-2 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#C9962B] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] hover:brightness-105 text-zinc-950 font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>{isSubmitting ? t.contactPage.submitting : t.contactPage.btnSubmit}</span>
                <span className="w-5 h-5 rounded-full bg-white/80 group-hover:bg-white text-zinc-900 inline-flex items-center justify-center text-xs font-bold transition-colors">
                  →
                </span>
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-stone-300/60 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9962B]" />
                <a href="tel:+998774261997" className="hover:underline font-medium">+998 77 426 19 97</a>
                <span>/</span>
                <a href="tel:+998992705255" className="hover:underline font-medium">+998 99 270 52 55</a>
              </div>
              <span className="font-semibold text-zinc-800">Online: 20:00–22:00</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
