'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { i18nConfig, localeOptions } from '@/i18n/i18nConfig';
import { cn } from '@/lib/utils';
import type { SelectTriggerProps } from '@radix-ui/react-select';
import { useParams, usePathname, useRouter } from 'next/navigation';
import * as React from 'react';

export function LanguageSelector({ className }: SelectTriggerProps) {
  const router = useRouter();
  const currentPathname = usePathname();
  const { locale: currentLocale } = useParams<{ locale: string }>();

  function handleLocaleChange(newLocale: string) {
    if (currentLocale === i18nConfig.defaultLocale) {
      router.push(`/${newLocale}${currentPathname}`);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }
  }

  return (
    <Select onValueChange={handleLocaleChange} value={currentLocale}>
      <SelectTrigger
        className={cn(
          'h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4',
          className
        )}
      >
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {localeOptions.map((option) => (
          <SelectItem
            className="text-xs"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
