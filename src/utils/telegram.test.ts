import test from 'node:test';
import assert from 'node:assert/strict';
import { buildTelegramMessage, getTelegramAdminUrl } from './telegram';

test('buildTelegramMessage formats lead data properly', () => {
  const message = buildTelegramMessage({
    fullName: 'Dilshod Normurodov',
    phone: '+998 90 123 45 67',
    language: 'german',
    courseTitle: 'Nemis tili 1-bosqich: Boshlang‘ich kurs (0 dan A2 gacha)',
    coursePrice: '300 000 so‘m/oy (2 oylik jami: 600 000 so‘m)',
    format: 'offline',
    note: 'Germaniyada o‘qish niyatidaman'
  });

  assert.ok(message.includes('Dilshod Normurodov'));
  assert.ok(message.includes('+998 90 123 45 67'));
  assert.ok(message.includes('Nemis tili'));
  assert.ok(message.includes('1-bosqich'));
  assert.ok(message.includes('300 000'));
  assert.ok(message.includes('Oflayn'));
  assert.ok(message.includes('Germaniyada o‘qish niyatidaman'));
});

test('getTelegramAdminUrl generates valid t.me link with prefilled text', () => {
  const url = getTelegramAdminUrl({
    fullName: 'Aziz Aliyev',
    phone: '+998 99 999 99 99',
    language: 'english',
    courseTitle: 'Pre-IELTS',
    coursePrice: '400 000 so‘m/oy',
    format: 'online'
  });

  assert.ok(url.startsWith('https://t.me/deutschhaus_admin?text='));
  assert.ok(url.includes(encodeURIComponent('Aziz Aliyev')));
  assert.ok(url.includes(encodeURIComponent('+998 99 999 99 99')));
  assert.ok(url.includes(encodeURIComponent('Ingliz tili')));
  assert.ok(url.includes(encodeURIComponent('Pre-IELTS')));
});
