import { AppHeader } from '@/components/AppHeader';
import { i18nConfig, direction } from '@/i18n/i18nConfig';
import { getIntl } from '@/i18n/intl';
import { AppProvider } from '@/providers';
import { Inter, Roboto_Mono as RobotoMono } from 'next/font/google';

import './globals.css';

/*
 * Load the fonts using next/font/google. For details, see
 * https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const robotoMono = RobotoMono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

interface GenerateMetadataProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: GenerateMetadataProps) {
  const intl = await getIntl(locale);
  if (!i18nConfig.locales.includes(locale)) locale = i18nConfig.defaultLocale;
  return {
    title: intl.formatMessage({ id: 'app-name' }),
    content: 'A playground to explore i18n concepts',
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const intl = await getIntl(params.locale);

  return (
    <html
      className={`${inter.variable} ${robotoMono.variable}`}
      dir={direction[params.locale]}
      lang={params.locale}
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <AppProvider params={params}>
          <div className="mx-auto flex max-w-xl flex-col gap-10 px-4">
            <AppHeader title={intl.formatMessage({ id: 'app-name' })} />
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
