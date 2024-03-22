'use client';

import { LanguageSelector } from './LanguageSelector';
import { ModeToggle } from './ModeToggle';
import { FormattedMessage } from 'react-intl';

export function AppHeader() {
  return (
    <div className="flex h-16 items-center">
      <h1 className="flex-1 text-3xl font-semibold text-primary">
        <FormattedMessage defaultMessage="driverless" id="app-name" />
      </h1>
      <div className="flex items-center gap-2">
        <LanguageSelector />
        <ModeToggle />
      </div>
    </div>
  );
}
