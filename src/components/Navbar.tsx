import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { getAssetUrl } from '../utils/assets';
import { Globe, ChevronDown, Menu, X, Phone, Share2 } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenRegister: () => void;
  onOpenShare?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenRegister, onOpenShare }) => {
  const { language, setLanguage, t } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'courses', label: t.nav.courses },
    { id: 'languages', label: t.nav.languages },
    { id: 'about', label: t.nav.about },
    { id: 'blog', label: t.nav.blog },
    { id: 'contact', label: t.nav.contact }
  ];

  const languagesMap: { id: Language; label: string; flag: string }[] = [
    { id: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
    { id: 'ru', label: 'Русский', flag: '🇷🇺' },
    { id: 'en', label: 'English', flag: '🇬🇧' }
  ];

  const currentLangObj = languagesMap.find((l) => l.id === language) || languagesMap[0];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 inset-x-0 mx-auto max-w-6xl z-50 px-3 sm:px-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto w-full transition-all duration-300 rounded-full px-4 sm:px-5 py-2.5 flex items-center justify-between shadow-sm border ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-black/10 shadow-md'
            : 'bg-white/90 backdrop-blur-md border-black/5'
        }`}
      >
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
        >
          <img
            src={getAssetUrl('/assets/aistudio/deutsch_house_logo_transparent_96df49ae.png')}
            alt="Deutsch House Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-zinc-900 leading-none">
              Deutsch House
            </span>
            <span className="text-[10px] text-zinc-500 font-medium tracking-wide uppercase">
              Termez
            </span>
          </div>
        </button>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-zinc-950 font-semibold bg-stone-100'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right Section: Share, Language switcher & CTA */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Share Button */}
          {onOpenShare && (
            <button
              onClick={onOpenShare}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 transition-colors cursor-pointer"
              title="Do‘stlarga ulashish"
              aria-label="Do‘stlarga ulashish"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Quick Call icon for easy contact */}
          <a
            href="tel:+998774261997"
            aria-label="Call Deutsch House"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-zinc-700 transition-colors"
            title="+998 77 426 19 97"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-700 hover:bg-stone-100 transition-colors border border-stone-200 cursor-pointer"
              aria-expanded={langMenuOpen}
              aria-label={t.nav.selectLanguage}
            >
              <Globe className="w-3.5 h-3.5 text-zinc-500" />
              <span>{currentLangObj.label}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {langMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-white shadow-xl border border-stone-200/80 p-1.5 z-50 animate-in fade-in zoom-in-95">
                  {languagesMap.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => {
                        setLanguage(l.id);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-left transition-colors cursor-pointer ${
                        language === l.id
                          ? 'bg-amber-50 text-amber-900 font-semibold'
                          : 'text-zinc-700 hover:bg-stone-100'
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Register Pill Button (Exact Wayfare Style) */}
          <button
            onClick={onOpenRegister}
            className="hidden sm:inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] hover:brightness-105 text-zinc-950 font-medium text-xs sm:text-sm shadow-sm transition-all cursor-pointer group"
          >
            <span>{t.nav.register}</span>
            <span className="w-6 h-6 rounded-full bg-white/80 group-hover:bg-white text-zinc-900 inline-flex items-center justify-center text-xs transition-colors font-bold shadow-xs">
              →
            </span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-zinc-800 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay / Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 mx-1 p-5 rounded-3xl bg-white/95 backdrop-blur-xl border border-stone-200 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-4 py-3 rounded-2xl text-base font-semibold text-left transition-colors ${
                currentPage === 'home' ? 'bg-amber-50 text-[#C9962B]' : 'text-zinc-800 hover:bg-stone-100'
              }`}
            >
              {t.nav.home}
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-3 rounded-2xl text-base font-semibold text-left transition-colors ${
                  currentPage === item.id ? 'bg-amber-50 text-[#C9962B]' : 'text-zinc-800 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-stone-200 flex flex-col gap-2">
              {onOpenShare && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenShare();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-zinc-800 font-semibold text-sm transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-amber-600" />
                  <span>Do‘stlarga ulashish</span>
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] text-zinc-950 font-semibold text-sm shadow-md"
              >
                <span>{t.nav.register}</span>
                <span className="w-6 h-6 rounded-full bg-white text-zinc-900 inline-flex items-center justify-center text-xs font-bold">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
