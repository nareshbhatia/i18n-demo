import { ThemeProvider } from '@/components/theme-provider';
import { useTranslation } from '@/i18n';
import { languages, fallbackLng } from '@/i18n/settings';
import { dir } from 'i18next';
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

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface GenerateMetadataProps {
  params: {
    lng: string;
  };
}

export async function generateMetadata({
  params: { lng },
}: GenerateMetadataProps) {
  if (!languages.includes(lng)) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng);
  return {
    title: t('title'),
    content: 'A playground to explore i18n concepts',
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html
      className={`${inter.variable} ${robotoMono.variable}`}
      dir={dir(params.lng)}
      lang={params.lng}
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
