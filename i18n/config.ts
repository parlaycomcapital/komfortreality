// i18n configuration for Komfort Reality
// Supports SK (Slovak), CZ (Czech), EN (English)

export const i18nConfig = {
  defaultLocale: 'sk',
  locales: ['sk', 'cz', 'en'],
} as const;

export type Locale = (typeof i18nConfig.locales)[number];

// Load translations for a specific locale
export async function getTranslations(locale: Locale) {
  try {
    const translations = await import(`./locales/${locale}/common.json`);
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`);
    return {};
  }
}

// Translation helper function for server components
export function createTranslator(translations: any) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}

