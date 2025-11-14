"use client";

import { usePathname, useRouter } from 'next/navigation';
import { i18nConfig, type Locale } from '@/i18n/config';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  
  // Extract current locale from pathname
  const currentLocale = pathname?.split('/')[1] as Locale || i18nConfig.defaultLocale;
  
  const switchLanguage = (newLocale: Locale) => {
    if (!pathname) return;
    
    // Replace current locale with new one
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    
    router.push(newPath);
  };
  
  const languages = [
    { code: 'sk', label: 'SK' },
    { code: 'cz', label: 'CZ' },
    { code: 'en', label: 'EN' },
  ] as const;
  
  return (
    <div className="flex items-center gap-1 bg-surface/50 backdrop-blur-sm border border-borderSubtle rounded-pill p-1">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => switchLanguage(lang.code as Locale)}
          className={`
            relative px-3 py-1.5 rounded-pill text-xs font-semibold uppercase tracking-wider
            transition-all duration-200
            ${
              currentLocale === lang.code
                ? 'text-textOnGold'
                : 'text-textMuted hover:text-textPrimary'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {currentLocale === lang.code && (
            <motion.span
              layoutId="language-indicator"
              className="absolute inset-0 bg-gradient-primary rounded-pill"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{lang.label}</span>
        </motion.button>
      ))}
    </div>
  );
}

