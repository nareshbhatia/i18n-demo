'use client';

import { ThemeProvider } from './ThemeProvider';
import { getIntl } from '@/i18n/intl';
import { IntlProvider } from 'react-intl';

export interface AppProviderProps {
  params: { locale: string };
  children?: React.ReactNode;
}

export async function AppProvider({
  params: { locale },
  children,
}: AppProviderProps) {
  const intl = await getIntl(locale);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <IntlProvider locale={intl.locale} messages={intl.messages}>
        {children}
      </IntlProvider>
    </ThemeProvider>
  );
}
