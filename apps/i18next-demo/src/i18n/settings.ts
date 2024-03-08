export const fallbackLng = 'en';
export const languages = [fallbackLng, 'ar', 'de', 'es', 'hi', 'it'];
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

export const defaultNS = 'translation';
export const cookieName = 'i18next';

export function getOptions(
  lng = fallbackLng,
  ns: string[] | string = defaultNS
) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
