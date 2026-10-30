import React, { useState } from 'react';
import { X, Copy, Check, Send, MessageCircle, Share2, Facebook, Smartphone } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  // Live public website URL produced by AI Studio
  const publicLiveUrl = 'https://ais-pre-55c4b37uekm4kei62hntfc-198639401974.asia-southeast1.run.app';
  const siteUrl = typeof window !== 'undefined' && window.location.origin && !window.location.origin.includes('localhost')
    ? window.location.origin
    : publicLiveUrl;

  const shareTitle = "Deutsch House Termiz — Nemis va Ingliz tili o‘quv markazi";
  const shareMessage = 
`🇩🇪🇬🇧 Deutsch House Termiz — Nemis va Ingliz tili o‘quv markazi!

✅ Noldan Goethe B1 gacha 3 bosqichli nemis tili (6 oyda kafolatlangan natija)
✅ IELTS 6.5+ va General English kurslari
✅ Germaniyada 4 yil yashab ta'lim olgan tajribali ustozlar
✅ Kichik guruhlar (6-8 kishi) va qulay zamonaviy sharoitlar
✅ Germaniyada Ausbildung va bakalavr/magistratura yo‘llanmasi

📍 Manzil: Termiz shahar, Bog‘ishamol MFY, Surxon arena va Hotel Afruz yonida.
📞 Telefon: +998 77 426 19 97 | +998 99 270 52 55
🌐 Rasmiy sayt: ${siteUrl}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = siteUrl;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(shareMessage);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = shareMessage;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: "Deutsch House — Termizdagi zamonaviy nemis va ingliz tili o‘quv markazi rasmiy sayti:",
          url: siteUrl,
        });
      } catch (err) {
        // User cancelled or not supported
      }
    } else {
      handleCopyLink();
    }
  };

  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(shareTitle + '\n\n' + 'Germaniyada o‘qish va xalqaro til sertifikatiga tayyorgarlik!')}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + '\n' + siteUrl)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-modal-title"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent px-6 py-5 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center">
              <Share2 className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 id="share-modal-title" className="font-display font-bold text-lg text-zinc-900">
                Saytni do‘stlarga ulashish
              </h2>
              <p className="text-xs text-zinc-500">
                Ijtimoiy tarmoqlar, guruhlar va messenjerlar orqali yuboring
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-zinc-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Yopish"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Main Public Link Box */}
          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1.5 uppercase tracking-wide">
              Rasmiy veb-sayt havolasi (Link)
            </label>
            <div className="flex items-center gap-2 p-2 bg-stone-50 border border-stone-200 rounded-2xl">
              <input
                type="text"
                readOnly
                value={siteUrl}
                className="w-full bg-transparent px-2 text-xs sm:text-sm font-mono text-zinc-800 focus:outline-none select-all"
              />
              <button
                onClick={handleCopyLink}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                  copiedLink
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                }`}
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Nusxalandi!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Nusxa olish</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Social Buttons */}
          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-2.5 uppercase tracking-wide">
              Tezkor ulashish
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <a
                href={telegramShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#229ED9] hover:bg-[#1E8BC0] text-white text-xs font-semibold transition-all shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram</span>
              </a>

              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#1464CC] text-white text-xs font-semibold transition-all shadow-sm"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Mobile Native Share button */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Telefon menyusi orqali ulashish (Instagram / SMS / Boshqa)</span>
            </button>
          )}

          {/* Telegram post template box */}
          <div className="pt-2 border-t border-stone-100">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wide">
                Telegram kanal/guruh uchun tayyor post matni
              </label>
              <button
                onClick={handleCopyText}
                className="flex items-center gap-1 text-xs text-amber-700 hover:text-amber-800 font-semibold transition-colors cursor-pointer"
              >
                {copiedText ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-600">Matn nusxalandi!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Matndan nusxa olish</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200 text-[11px] sm:text-xs text-zinc-700 leading-relaxed max-h-36 overflow-y-auto whitespace-pre-line font-sans">
              {shareMessage}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs text-zinc-500">
          <span>Deutsch House Termiz © {new Date().getFullYear()}</span>
          <button
            onClick={onClose}
            className="text-zinc-700 hover:text-zinc-950 font-semibold cursor-pointer"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};
