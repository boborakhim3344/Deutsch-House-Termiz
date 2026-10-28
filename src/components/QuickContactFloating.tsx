import React, { useState } from 'react';
import { Send, Phone, MessageSquare, X } from 'lucide-react';

export const QuickContactFloating: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {open && (
        <div className="mb-3 flex flex-col gap-2.5 items-end animate-in fade-in slide-in-from-bottom-3 duration-200">
          <a
            href="https://t.me/deutschhaus_admin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#229ED9] text-white shadow-lg hover:brightness-110 text-xs font-semibold transition-all group"
          >
            <span>Telegram Admin (@deutschhaus_admin)</span>
            <Send className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://t.me/deutschhaus_termiz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#2AABEE] text-white shadow-lg hover:brightness-110 text-xs font-semibold transition-all group"
          >
            <span>Telegram Kanal (@deutschhaus_termiz)</span>
            <Send className="w-3.5 h-3.5" />
          </a>
          <a
            href="tel:+998774261997"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1C1917] text-white shadow-lg hover:bg-zinc-800 text-xs font-semibold transition-all group"
          >
            <span>+998 77 426 19 97</span>
            <Phone className="w-3.5 h-3.5 text-[#E5B84B]" />
          </a>
          <a
            href="tel:+998992705255"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1C1917] text-white shadow-lg hover:bg-zinc-800 text-xs font-semibold transition-all group"
          >
            <span>+998 99 270 52 55</span>
            <Phone className="w-3.5 h-3.5 text-[#E5B84B]" />
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-13 h-13 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] text-zinc-950 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center transition-all cursor-pointer relative group"
        aria-label="Quick contact"
        title="Aloqa va Telegram"
      >
        {open ? (
          <X className="w-6 h-6 text-zinc-950" />
        ) : (
          <>
            <MessageSquare className="w-6 h-6 text-zinc-950" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse"></span>
          </>
        )}
      </button>
    </div>
  );
};
