import { Metadata } from 'next';

// SEO-optimized metadata for Komfort Reality
// Designed to dominate Google for brand keywords

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://komfortreality.sk'),
  title: {
    default: 'Komfort Reality | Realitná kancelária Ružomberok | Predaj a kúpa nehnuteľností',
    template: '%s | Komfort Reality'
  },
  description: 'Komfort Reality – prémiová realitná kancelária v Ružomberku a Žiline. Profesionálny predaj a kúpa nehnuteľností, bytov, domov a pozemkov. Osobný prístup, právny servis, hypotekárne poradenstvo. 10+ rokov skúseností.',
  keywords: [
    // Primary brand keywords
    'Komfort Reality',
    'Komfort realitná kancelária',
    'Komfort nehnuteľnosti',
    'Komfort RK',
    'Komfort real estate',
    
    // Location-based keywords
    'realitná kancelária Ružomberok',
    'realitka Ružomberok',
    'realitná kancelária Žilina',
    'nehnuteľnosti Ružomberok',
    'nehnuteľnosti Žilina',
    
    // Service keywords
    'predaj bytov Ružomberok',
    'predaj domov Ružomberok',
    'predaj pozemkov Ružomberok',
    'predaj nehnuteľností Ružomberok',
    'kúpa nehnuteľností Ružomberok',
    'prenájom bytov Ružomberok',
    
    // Long-tail keywords
    'realitná kancelária Ružomberok s právnym servisom',
    'hypotekárne poradenstvo Ružomberok',
    'oceňovanie nehnuteľností Ružomberok',
    'profesionálne realitné služby',
    'prémiová realitná kancelária',
    
    // Secondary locations
    'nehnuteľnosti Liptov',
    'realitka severné Slovensko',
    'realitná kancelária Liptovský Mikuláš',
  ],
  authors: [{ name: 'Komfort Reality' }],
  creator: 'Komfort Reality',
  publisher: 'Komfort Reality s.r.o.',
  
  // Open Graph for social sharing
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    alternateLocale: ['cs_CZ', 'en_US'],
    url: 'https://komfortreality.sk',
    siteName: 'Komfort Reality',
    title: 'Komfort Reality | Prémiová realitná kancelária Ružomberok',
    description: 'Profesionálny predaj a kúpa nehnuteľností v Ružomberku a okolí. 10+ rokov skúseností, právny servis, hypotekárne poradenstvo. Dôveryhodný partner pre váš domov.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Komfort Reality - Realitná kancelária Ružomberok',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Komfort Reality | Realitná kancelária Ružomberok',
    description: 'Prémiové realitné služby v Ružomberku. Predaj a kúpa nehnuteľností s právnym servisom.',
    images: ['/logo.png'],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Add after Google Search Console setup
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  },
  
  // Additional metadata
  category: 'Real Estate',
  classification: 'Business',
  
  // Alternate languages
  alternates: {
    canonical: 'https://komfortreality.sk',
    languages: {
      'sk-SK': 'https://komfortreality.sk/sk',
      'cs-CZ': 'https://komfortreality.sk/cz',
      'en': 'https://komfortreality.sk/en',
    },
  },
};

// Multilingual metadata generators
export function getLocalizedMetadata(lang: 'sk' | 'cz' | 'en'): Metadata {
  const metadata = {
    sk: {
      title: 'Komfort Reality | Realitná kancelária Ružomberok | Predaj a kúpa nehnuteľností',
      description: 'Komfort Reality – prémiová realitná kancelária v Ružomberku a Žiline. Profesionálny predaj a kúpa nehnuteľností, bytov, domov a pozemkov. Osobný prístup, právny servis, hypotekárne poradenstvo. 10+ rokov skúseností.',
      keywords: 'Komfort Reality, realitná kancelária Ružomberok, predaj bytov Ružomberok, nehnuteľnosti Ružomberok, realitka Žilina',
    },
    cz: {
      title: 'Komfort Reality | Realitní kancelář Ružomberok | Prodej a koupě nemovitostí',
      description: 'Komfort Reality – prémiová realitní kancelář v Ružomberku a Žilině. Profesionální prodej a koupě nemovitostí, bytů, domů a pozemků. Osobní přístup, právní servis, hypoteční poradenství. 10+ let zkušeností.',
      keywords: 'Komfort Reality, realitní kancelář Ružomberok, prodej bytů Ružomberok, nemovitosti Ružomberok, realitka Žilina',
    },
    en: {
      title: 'Komfort Reality | Real Estate Agency Ružomberok | Property Sales & Purchases',
      description: 'Komfort Reality – premium real estate agency in Ružomberok and Žilina, Slovakia. Professional property sales and purchases. Personal approach, legal services, mortgage consulting. 10+ years of experience.',
      keywords: 'Komfort Reality, real estate agency Ružomberok, property sales Ružomberok, real estate Slovakia, Žilina real estate',
    },
  };

  return {
    title: metadata[lang].title,
    description: metadata[lang].description,
    keywords: metadata[lang].keywords,
  };
}

// Page-specific metadata generators
export function getPropertyMetadata(property: {
  title: string;
  location: string;
  price: string;
  type: string;
}): Metadata {
  return {
    title: `${property.title} | ${property.location} | Komfort Reality`,
    description: `${property.type} na predaj v ${property.location} za ${property.price}. Kompletný servis od Komfort Reality. Obhliadka, právne poradenstvo, hypotekárne poradenstvo.`,
    openGraph: {
      title: `${property.title} | Komfort Reality`,
      description: `${property.type} v ${property.location} za ${property.price}`,
    },
  };
}

