import type { ReactNode } from 'react';
import type { MessageFormatElement } from 'react-intl';
import { IntlProvider } from 'react-intl';

export interface ServerIntlProviderProps {
  messages: Record<string, MessageFormatElement[]> | Record<string, string>;
  locale: string;
  children: ReactNode;
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
