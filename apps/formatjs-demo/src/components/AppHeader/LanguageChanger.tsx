'use client';

import { i18nConfig } from '@/i18n/i18nConfig';
import { useRouter, usePathname } from 'next/navigation';
import { useCurrentLocale } from 'next-i18n-router/client';
import type { ChangeEvent } from 'react';

export function LanguageChanger() {
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = useCurrentLocale(i18nConfig);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      i18nConfig.prefixDefault !== undefined
    ) {
      router.push(`/${newLocale}${currentPathname}`);
    } else if (currentLocale !== undefined) {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    } else {
      // TODO: what to do if currentLocale is undefined?
      console.log('currentLocale is', currentLocale);
    }

    router.refresh();
  };

  return (
    <select onChange={handleChange} value={currentLocale}>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="ja">日本語</option>
    </select>
  );
}
