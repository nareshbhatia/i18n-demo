export const fallbackLng = 'en';
export const languages = [fallbackLng, 'ar', 'de', 'es', 'hi', 'it'];

export const languageOptions = [
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
