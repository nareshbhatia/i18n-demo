import { fallbackLng, languages, cookieName } from './i18n/settings';
import acceptLanguage from 'accept-language';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.includes('icon') ||
    req.nextUrl.pathname.includes('chrome')
  )
    return NextResponse.next();
  let lng: string | null | undefined;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (lng === undefined || lng === null)
    lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (lng === null) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has('referer')) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
    const refererUrl = new URL(req.headers.get('referer') || '');
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    // TODO: Find out why the cookie always lags behind by 1
    if (lngInReferer !== undefined)
      response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
