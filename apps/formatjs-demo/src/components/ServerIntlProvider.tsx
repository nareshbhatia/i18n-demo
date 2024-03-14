'use client';

import { IntlProvider } from 'react-intl';

export interface ServerIntlProviderProps {
  // TODO: what is the right type?
  messages: Record<string, string>;
  // TODO: where is the Locale type?
  locale: string;
  children: React.ReactNode;
}

export function ServerIntlProvider({
  messages,
  locale,
  children,
}: ServerIntlProviderProps) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
