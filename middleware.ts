import { NextRequest, NextResponse } from 'next/server';
import { i18nConfig } from './i18n/config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname already has a locale
  const pathnameHasLocale = i18nConfig.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    return NextResponse.next();
  }
  
  // Redirect root to default locale
  if (pathname === '/') {
    const locale = i18nConfig.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  
  // Optional: Check Accept-Language header for first-time visitors
  // const acceptLanguage = request.headers.get('accept-language');
  // let preferredLocale = i18nConfig.defaultLocale;
  // 
  // if (acceptLanguage) {
  //   if (acceptLanguage.includes('cs') || acceptLanguage.includes('cz')) {
  //     preferredLocale = 'cz';
  //   } else if (acceptLanguage.includes('en')) {
  //     preferredLocale = 'en';
  //   }
  // }
  
  // Redirect paths without locale to default locale
  const locale = i18nConfig.defaultLocale;
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!api|_next/static|_next/image|favicon.ico|logo.png|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg).*)',
  ],
};

