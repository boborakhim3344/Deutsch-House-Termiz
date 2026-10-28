import test from 'node:test';
import assert from 'node:assert/strict';
import { filterCourses, validateRegistrationForm } from './courseFilter';
import { Course } from '../types';

const sampleCourses: Course[] = [
  {
    id: 'de-offline',
    title: { uz: 'Nemis tili (Oflayn)', ru: 'Немецкий язык (Офлайн)', en: 'German Language (Offline)' },
    language: 'german',
    format: 'offline',
    price: '400 000',
    priceNote: { uz: "so'm / oyiga", ru: 'сум / месяц', en: 'UZS / month' },
    duration: { uz: 'Siz xohlagancha', ru: 'Сколько пожелаете', en: 'As long as you want' },
    groupSize: '6–8',
    levelBadge: { uz: 'Daraja markazda aniqlanadi', ru: 'Уровень определяется в центре', en: 'Level assessed at center' },
    description: { uz: 'Boshlang‘ich va chuqurlashtirilgan nemis tili', ru: 'Немецкий для начинающих и продолжающих', en: 'German for beginners and advanced' },
    schedule: { uz: '10:00–12:00 yoki 16:00–18:00', ru: '10:00–12:00 или 16:00–18:00', en: '10:00–12:00 or 16:00–18:00' },
    features: { uz: ['Kichik guruh', 'A1-B2'], ru: ['Малая группа', 'A1-B2'], en: ['Small group', 'A1-B2'] },
    image: '/assets/aistudio/Screenshot_2026-10-26-22-11-38-598_com.instagram.android-edit_159193ae.jpg'
  },
  {
    id: 'en-offline',
    title: { uz: 'Ingliz tili (Oflayn)', ru: 'Английский язык (Офлайн)', en: 'English Language (Offline)' },
    language: 'english',
    format: 'offline',
    price: '400 000',
    priceNote: { uz: "so'm / oyiga", ru: 'сум / месяц', en: 'UZS / month' },
    duration: { uz: 'Siz xohlagancha', ru: 'Сколько пожелаете', en: 'As long as you want' },
    groupSize: '6–8',
    levelBadge: { uz: 'Daraja markazda aniqlanadi', ru: 'Уровень определяется в центре', en: 'Level assessed at center' },
    description: { uz: 'General English va IELTS', ru: 'General English и IELTS', en: 'General English and IELTS' },
    schedule: { uz: '10:00–12:00 yoki 16:00–18:00', ru: '10:00–12:00 или 16:00–18:00', en: '10:00–12:00 or 16:00–18:00' },
    features: { uz: ['IELTS 6.5 ustoz'], ru: ['Преподаватель IELTS 6.5'], en: ['IELTS 6.5 Instructor'] },
    image: '/assets/aistudio/Screenshot_2026-10-26-22-13-42-017_com.instagram.android-edit_52c4bdf6.jpg'
  },
  {
    id: 'de-online',
    title: { uz: 'Nemis tili (Online)', ru: 'Немецкий язык (Онлайн)', en: 'German Language (Online)' },
    language: 'german',
    format: 'online',
    price: '400 000',
    priceNote: { uz: "so'm / oyiga", ru: 'сум / месяц', en: 'UZS / month' },
    duration: { uz: 'Siz xohlagancha', ru: 'Сколько пожелаете', en: 'As long as you want' },
    groupSize: '6–8',
    levelBadge: { uz: 'Daraja markazda aniqlanadi', ru: 'Уровень определяется в центре', en: 'Level assessed at center' },
    description: { uz: 'Zoom orqali jonli darslar', ru: 'Живые занятия через Zoom', en: 'Live classes via Zoom' },
    schedule: { uz: '14:00–16:00', ru: '14:00–16:00', en: '14:00–16:00' },
    features: { uz: ['Online interaktiv'], ru: ['Онлайн интерактив'], en: ['Online interactive'] },
    image: '/assets/aistudio/Screenshot_2026-10-26-22-14-39-647_com.instagram.android-edit_654ff189.jpg'
  }
];

test('filterCourses returns all courses when no filter is applied', () => {
  const result = filterCourses(sampleCourses, { language: 'all', format: 'all' });
  assert.equal(result.length, 3);
});

test('filterCourses filters by language correctly', () => {
  const germanOnly = filterCourses(sampleCourses, { language: 'german', format: 'all' });
  assert.equal(germanOnly.length, 2);
  assert.ok(germanOnly.every(c => c.language === 'german'));

  const englishOnly = filterCourses(sampleCourses, { language: 'english', format: 'all' });
  assert.equal(englishOnly.length, 1);
  assert.equal(englishOnly[0].id, 'en-offline');
});

test('filterCourses filters by format correctly', () => {
  const onlineOnly = filterCourses(sampleCourses, { language: 'all', format: 'online' });
  assert.equal(onlineOnly.length, 1);
  assert.equal(onlineOnly[0].id, 'de-online');

  const offlineOnly = filterCourses(sampleCourses, { language: 'all', format: 'offline' });
  assert.equal(offlineOnly.length, 2);
});

test('validateRegistrationForm rejects empty fields', () => {
  const validation = validateRegistrationForm({});
  assert.equal(validation.isValid, false);
  assert.ok(validation.errors.fullName);
  assert.ok(validation.errors.phone);
  assert.ok(validation.errors.language);
  assert.ok(validation.errors.format);
});

test('validateRegistrationForm accepts valid registration input', () => {
  const validation = validateRegistrationForm({
    fullName: 'Anvar Karimov',
    phone: '+998901234567',
    language: 'german',
    format: 'offline',
    note: 'Nemis tilini 0 dan boshlamoqchiman'
  });
  assert.equal(validation.isValid, true);
  assert.equal(Object.keys(validation.errors).length, 0);
});
