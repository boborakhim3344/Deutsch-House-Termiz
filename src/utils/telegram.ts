export interface LeadData {
  fullName: string;
  phone: string;
  language: 'german' | 'english';
  format: 'offline' | 'online';
  courseTitle?: string;
  coursePrice?: string;
  note?: string;
}

export function buildTelegramMessage(lead: LeadData): string {
  const langText = lead.language === 'german' ? '🇩🇪 Nemis tili' : '🇬🇧 Ingliz tili';
  const formatText = lead.format === 'offline' ? '🏢 Oflayn (Termiz)' : '💻 Online (Zoom, 20:00–22:00)';

  let msg = `Assalomu alaykum! "Deutsch House" o‘quv markaziga kursga yozilmoqchiman:\n\n`;
  msg += `👤 Ism: ${lead.fullName}\n`;
  msg += `📞 Telefon: ${lead.phone}\n`;
  msg += `📚 Tanlangan til: ${langText}\n`;
  if (lead.courseTitle) {
    msg += `📖 Tanlangan kurs: ${lead.courseTitle}${lead.coursePrice ? ` (${lead.coursePrice})` : ''}\n`;
  }
  msg += `🎯 Ta'lim formati: ${formatText}\n`;
  if (lead.note && lead.note.trim()) {
    msg += `💬 Izoh / Maqsad: ${lead.note.trim()}\n`;
  }
  msg += `\nIltimos, dars jadvali va darajamni aniqlash bo‘yicha ma'lumot bersangiz.`;
  return msg;
}

export function getTelegramAdminUrl(lead: LeadData, adminUsername: string = 'deutschhaus_admin'): string {
  const message = buildTelegramMessage(lead);
  return `https://t.me/${adminUsername}?text=${encodeURIComponent(message)}`;
}

export function openTelegramChat(url: string): void {
  if (typeof window === 'undefined') return;
  try {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch {
    window.location.href = url;
  }
}
