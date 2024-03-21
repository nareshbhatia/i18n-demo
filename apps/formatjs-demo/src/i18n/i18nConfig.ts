import type { Config } from 'next-i18n-router/dist/types';

export const i18nConfig: Config = {
  locales: ['en', 'ar', 'de', 'es', 'hi', 'it'],
  defaultLocale: 'en',
};

export const languageOptions = [
  {
    name: 'en',
    label: 'English',
  },
  {
    name: 'ar',
    label: 'عربي',
  },
  {
    name: 'de',
    label: 'Deutsch',
  },
  {
    name: 'es',
    label: 'Español',
  },
  {
    name: 'hi',
    label: 'हिंदी',
  },
  {
    name: 'it',
    label: 'Italiano',
  },
];
export type LanguageOption = (typeof languageOptions)[number];

/*
 * TODO: Find a better way to get direction mapping.
 * FormatJS does not provide a function for this like i18next
 */
export const direction: Record<string, string> = {
  en: 'ltr',
  ar: 'rtl',
  de: 'ltr',
  es: 'ltr',
  hi: 'ltr',
  it: 'ltr',
};
