import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl rounded-[32px] bg-[#F5EFE4] border border-stone-300 shadow-2xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9962B] mb-2">
              <Shield className="w-4 h-4" />
              <span>Deutsch House</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-zinc-950 mb-4">
              Maxfiylik siyosati (Privacy Policy)
            </h2>
            <div className="text-sm text-stone-700 space-y-4 leading-relaxed">
              <p>
                Ushbu Maxfiylik siyosati "Deutsch House" o‘quv markazi (Termiz shahri) tomonidan o‘quvchilar va tashrif buyuruvchilarning shaxsiy ma'lumotlarini to‘plash, saqlash va himoya qilish tartibini belgilaydi.
              </p>
              <h3 className="text-base font-semibold text-zinc-900 mt-4">1. To‘planadigan ma'lumotlar</h3>
              <p>
                Biz faqat ro‘yxatdan o‘tish va bog‘lanish uchun zarur bo‘lgan asosiy ma'lumotlarni so‘raymiz: ismingiz, telefon raqamingiz, tanlangan til yo‘nalishi va ta'lim formati.
              </p>
              <h3 className="text-base font-semibold text-zinc-900 mt-4">2. Ma'lumotlardan foydalanish</h3>
              <p>
                Siz taqdim etgan aloqa ma'lumotlari faqat siz bilan bog‘lanish, dars jadvallarini muvofiqlashtirish va til darajangizni aniqlash maqsadida qo‘llaniladi. Ma'lumotlaringiz hech qachon uchinchi shaxslarga berilmaydi yoki sotilmaydi.
              </p>
              <h3 className="text-base font-semibold text-zinc-900 mt-4">3. Xavfsizlik</h3>
              <p>
                Deutsch House o‘quvchilarining ma'lumotlari xavfsizligini ta'minlash uchun zamonaviy xavfsizlik choralarini qo‘llaydi.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9962B] mb-2">
              <Shield className="w-4 h-4" />
              <span>Deutsch House</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-zinc-950 mb-4">
              Foydalanish shartlari (Terms of Service)
            </h2>
            <div className="text-sm text-stone-700 space-y-4 leading-relaxed">
              <p>
                "Deutsch House" xususiy nemis va ingliz tili o‘quv markazining xizmatlaridan foydalanish orqali siz quyidagi shartlarga rozilik bildirasiz.
              </p>
              <h3 className="text-base font-semibold text-zinc-900 mt-4">1. O‘quv jarayoni va guruhlar</h3>
              <p>
                Har bir guruh 6 dan 8 nafargacha o‘quvchidan iborat bo‘ladi. O‘quvchi markaz qoidalariga rioya qilishi va darslarga o‘z vaqtida qatnashishi lozim.
              </p>
              <h3 className="text-base font-semibold text-zinc-900 mt-4">2. To‘lovlar va narx siyosati</h3>
              <p>
                Oylik to‘lov 400 000 so‘m qilib belgilangan. Darsliklar va tarqatma materiallar narx ichiga kiritilgan. To‘lov har oyning belgilangan sanasigacha amalga oshiriladi.
              </p>
              <h3 className="text-base font-semibold text-zinc-900 mt-4">3. Dars qoldirish va online ishtirok</h3>
              <p>
                Oflayn darslarga kela olmagan taqdirda, o‘quvchilar online guruh yoki dars materiallari orqali mavzuni o‘zlashtirishlari mumkin.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#1C1917] text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Tushundim
          </button>
        </div>
      </div>
    </div>
  );
};
