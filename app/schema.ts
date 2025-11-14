// Structured Data (Schema.org) for Komfort Reality
// This is CRITICAL for Google rich results and local SEO

import { Organization, RealEstateAgent, LocalBusiness, BreadcrumbList } from 'schema-dts';

// Main Organization Schema
export const organizationSchema: Organization = {
  '@type': 'Organization',
  '@id': 'https://komfortreality.sk/#organization',
  name: 'Komfort Reality s.r.o.',
  alternateName: [
    'Komfort Reality',
    'Komfort RK',
    'Komfort realitná kancelária',
  ],
  url: 'https://komfortreality.sk',
  logo: {
    '@type': 'ImageObject',
    url: 'https://komfortreality.sk/logo.png',
    width: '500',
    height: '500',
  },
  image: 'https://komfortreality.sk/logo.png',
  description: 'Prémiová realitná kancelária v Ružomberku a Žiline. Profesionálny predaj a kúpa nehnuteľností s právnym servisom a hypotekárnym poradenstvom.',
  
  // Contact information
  telephone: '+421910762718',
  email: 'info@komfortreality.sk',
  
  // Address - Main office (Žilina)
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Staničná 26',
    addressLocality: 'Žilina',
    postalCode: '010 01',
    addressCountry: 'SK',
  },
  
  // Business identifiers
  taxID: '2022402393',
  vatID: 'SK2022402393',
  duns: '36736538',
  
  // Social media profiles
  sameAs: [
    'https://www.facebook.com/komfortreality',
    'https://www.instagram.com/komfortreality',
    'https://www.linkedin.com/company/komfort-reality',
  ],
  
  // Founding info
  foundingDate: '2013',
  foundingLocation: 'Ružomberok, Slovakia',
  
  // Service areas
  areaServed: [
    {
      '@type': 'City',
      name: 'Ružomberok',
    },
    {
      '@type': 'City',
      name: 'Žilina',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Žilinský kraj',
    },
  ],
};

// Real Estate Agent Schema (CRITICAL for real estate SEO)
export const realEstateAgentSchema: RealEstateAgent = {
  '@type': 'RealEstateAgent',
  '@id': 'https://komfortreality.sk/#realestate',
  name: 'Komfort Reality',
  image: 'https://komfortreality.sk/logo.png',
  
  // Main office address
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Staničná 26',
    addressLocality: 'Žilina',
    postalCode: '010 01',
    addressCountry: 'SK',
  },
  
  // Branch office
  branchOf: {
    '@type': 'Organization',
    name: 'Komfort Reality s.r.o.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Malobičná 1A (budova Toplučany)',
      addressLocality: 'Ružomberok',
      postalCode: '034 01',
      addressCountry: 'SK',
    },
  },
  
  telephone: '+421910762718',
  email: 'info@komfortreality.sk',
  url: 'https://komfortreality.sk',
  
  // Service areas
  areaServed: [
    'Ružomberok',
    'Žilina',
    'Liptov',
    'Žilinský kraj',
  ],
  
  // Services offered
  knowsAbout: [
    'Predaj nehnuteľností',
    'Kúpa nehnuteľností',
    'Prenájom nehnuteľností',
    'Právne poradenstvo',
    'Hypotekárne poradenstvo',
    'Oceňovanie nehnuteľností',
  ],
  
  // Aggregate rating
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '200',
    bestRating: '5',
    worstRating: '1',
  },
  
  // Opening hours
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  
  // Price range
  priceRange: '€€€',
};

// Local Business Schema (for Google Maps)
export const localBusinessSchema: LocalBusiness = {
  '@type': 'LocalBusiness',
  '@id': 'https://komfortreality.sk/#localbusiness',
  name: 'Komfort Reality',
  image: 'https://komfortreality.sk/logo.png',
  
  // Geo coordinates for Ružomberok office
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '49.0807',
    longitude: '19.3095',
  },
  
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Malobičná 1A',
    addressLocality: 'Ružomberok',
    postalCode: '034 01',
    addressCountry: 'SK',
  },
  
  telephone: '+421910762718',
  email: 'info@komfortreality.sk',
  url: 'https://komfortreality.sk',
  
  // Business category
  '@id': 'RealEstateAgent',
  
  // Opening hours
  openingHours: 'Mo-Fr 09:00-17:00',
  
  // Payment methods
  paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
  
  // Languages spoken
  availableLanguage: ['Slovak', 'Czech', 'English'],
};

// Breadcrumb Schema Generator
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://komfortreality.sk${item.url}`,
    })),
  };
}

// Property Schema Generator (for individual listings)
export function getPropertySchema(property: {
  name: string;
  description: string;
  price: number;
  currency: string;
  address: string;
  city: string;
  postalCode: string;
  propertyType: string;
  numberOfRooms: number;
  floorSize: number;
  images: string[];
  latitude?: number;
  longitude?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.name,
    description: property.description,
    
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: property.currency,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Komfort Reality',
        telephone: '+421910762718',
      },
    },
    
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      postalCode: property.postalCode,
      addressCountry: 'SK',
    },
    
    ...(property.latitude && property.longitude && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: property.latitude,
        longitude: property.longitude,
      },
    }),
    
    numberOfRooms: property.numberOfRooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.floorSize,
      unitCode: 'MTK',
    },
    
    image: property.images,
    
    propertyType: property.propertyType,
    
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Komfort Reality',
      telephone: '+421910762718',
      url: 'https://komfortreality.sk',
    },
  };
}

// Combine all schemas for the homepage
export function getHomePageSchemas() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      realEstateAgentSchema,
      localBusinessSchema,
    ],
  };
}

