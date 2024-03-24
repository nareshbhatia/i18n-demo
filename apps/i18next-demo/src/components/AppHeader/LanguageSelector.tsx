'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { languageOptions } from '@/i18n/settings';
import { cn } from '@/lib/utils';
import type { SelectTriggerProps } from '@radix-ui/react-select';
import { useParams, useRouter } from 'next/navigation';
import * as React from 'react';

export function LanguageSelector({ className }: SelectTriggerProps) {
  const router = useRouter();
  const { lng } = useParams<{ lng: string }>();

  function handleLanguageChange(value: string) {
    router.push(`/${value}`);
  }

  return (
    <Select onValueChange={handleLanguageChange} value={lng}>
      <SelectTrigger
        className={cn(
          'h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4',
          className
        )}
      >
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {languageOptions.map((option) => (
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
