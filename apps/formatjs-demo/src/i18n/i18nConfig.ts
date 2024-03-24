import type { Config } from 'next-i18n-router/dist/types';

export const i18nConfig: Config = {
  locales: ['en', 'ar', 'de', 'es', 'hi', 'it'],
  defaultLocale: 'en',
};

export const localeOptions = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'ar',
    label: 'عربي',
  },
  {
    value: 'de',
    label: 'Deutsch',
  },
  {
    value: 'es',
    label: 'Español',
  },
  {
    value: 'hi',
    label: 'हिंदी',
  },
  {
    value: 'it',
    label: 'Italiano',
  },
];

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
