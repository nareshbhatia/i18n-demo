'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { LanguageOption } from '@/i18n/settings';
import { languageOptions } from '@/i18n/settings';
import { cn } from '@/lib/utils';
import type { SelectTriggerProps } from '@radix-ui/react-select';
import { useParams, useRouter } from 'next/navigation';
import * as React from 'react';

export function LanguageSelector({ className }: SelectTriggerProps) {
  const router = useRouter();
  const { lng } = useParams<{ lng: string }>();

  function handleValueChange(value: LanguageOption['name']) {
    router.push(`/${value}`);
  }

  return (
    <Select onValueChange={handleValueChange} value={lng}>
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
          <SelectItem className="text-xs" key={option.name} value={option.name}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
