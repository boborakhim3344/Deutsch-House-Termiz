import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assets';
import { Send, CheckCircle2, Phone, MapPin, ExternalLink, Share2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenShare?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy, onOpenTerms, onOpenShare }) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
    try {
      const list = JSON.parse(localStorage.getItem('dh_subscribers') || '[]');
      list.push({ email, date: new Date().toISOString() });
      localStorage.setItem('dh_subscribers', JSON.stringify(list));
    } catch {
      // ignore
    }
  };

  return (
    <footer className="w-full bg-[#1C1917] text-white pt-16 sm:pt-20 pb-12 overflow-hidden relative selection:bg-[#E5B84B] selection:text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Newsletter Block */}
        <div className="pb-16 mb-16 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight mb-3">
                {t.newsletter.heading}
              </h2>
              <p className="text-stone-400 text-sm sm:text-base max-w-xl leading-relaxed">
                {t.newsletter.description}
              </p>
            </div>
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{t.newsletter.success}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.newsletter.placeholder}
                    required
                    className="flex-1 bg-white/10 border border-white/15 rounded-full px-5 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E5B84B] focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] hover:brightness-105 text-zinc-950 font-semibold text-sm transition-all shrink-0 cursor-pointer shadow-sm group"
                  >
                    <span>{t.newsletter.button}</span>
                    <span className="w-5 h-5 rounded-full bg-black/10 group-hover:bg-black/20 text-zinc-900 inline-flex items-center justify-center text-xs font-bold">
                      →
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 mb-4 text-left group cursor-pointer focus:outline-none"
            >
              <img
                src={getAssetUrl('/assets/aistudio/deutsch_house_logo_transparent_96df49ae.png')}
                alt="Deutsch House Logo"
                className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Deutsch House
              </span>
            </button>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-sm">
              {t.footer.aboutText}
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              {onOpenShare && (
                <button
                  onClick={onOpenShare}
                  className="px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 flex items-center gap-2 transition-colors text-xs font-semibold cursor-pointer shadow-sm"
                  aria-label="Do‘stlarga ulashish"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Ulashish</span>
                </button>
              )}
              <a
                href="https://t.me/deutschhaus_admin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#E5B84B] hover:text-black flex items-center gap-2 transition-colors text-stone-300 text-xs font-medium"
                aria-label="Telegram Admin"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Admin</span>
              </a>
              <a
                href="https://t.me/deutschhaus_termiz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#E5B84B] hover:text-black flex items-center gap-2 transition-colors text-stone-300 text-xs font-medium"
                aria-label="Telegram Kanal"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kanal</span>
              </a>
              <a
                href="https://www.instagram.com/deutschhaus_termiz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E5B84B] hover:text-black flex items-center justify-center transition-colors text-stone-300 font-bold text-xs"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          {/* Menyu */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4">
              {t.footer.menuCol}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('courses');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-stone-300 hover:text-[#E5B84B] transition-colors cursor-pointer"
                >
                  {t.nav.courses}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('languages');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-stone-300 hover:text-[#E5B84B] transition-colors cursor-pointer"
                >
                  {t.nav.languages}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-stone-300 hover:text-[#E5B84B] transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('blog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-stone-300 hover:text-[#E5B84B] transition-colors cursor-pointer"
                >
                  {t.nav.blog}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-stone-300 hover:text-[#E5B84B] transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Kompaniya */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4">
              {t.footer.companyCol}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-stone-300 hover:text-[#E5B84B] transition-colors cursor-pointer text-left"
                >
                  {t.aboutPage.heading}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="text-stone-300 hover:text-[#E5B84B] transition-colors cursor-pointer"
                >
                  {t.footer.privacy}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="text-stone-300 hover:text-[#E5B84B] transition-colors cursor-pointer"
                >
                  {t.footer.terms}
                </button>
              </li>
            </ul>
          </div>

          {/* Aloqa */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4">
              {t.footer.contactCol}
            </h3>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex flex-col gap-1">
                <a
                  href="tel:+998774261997"
                  className="text-stone-200 hover:text-[#E5B84B] font-semibold transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E5B84B]" />
                  <span>+998 77 426 19 97</span>
                </a>
                <a
                  href="tel:+998992705255"
                  className="text-stone-200 hover:text-[#E5B84B] font-semibold transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E5B84B]" />
                  <span>+998 99 270 52 55</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/deutschhaus_admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5B84B] transition-colors block"
                >
                  Telegram: @deutschhaus_admin
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://maps.app.goo.gl/PJcrD2VppQGq2PYK8?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-stone-400 hover:text-[#E5B84B] transition-colors flex items-start gap-1.5 leading-relaxed"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#E5B84B] shrink-0 mt-0.5" />
                  <span>Surxondaryo viloyati, Termiz shahri, Bog‘ishamol MFY, 5-mitti tuman dahasi, 26-uy</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>{t.footer.copyright}</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
            <span>{t.footer.hours}</span>
          </p>
        </div>
      </div>

      {/* Giant faint outline watermark text at bottom */}
      <div
        aria-hidden="true"
        className="select-none pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 text-[14vw] font-display font-extrabold uppercase tracking-tight text-white/[0.03] whitespace-nowrap"
      >
        Deutsch House
      </div>
    </footer>
  );
};
