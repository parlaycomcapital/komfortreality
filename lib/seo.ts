// SEO Utilities for Komfort Reality
// Helper functions for SEO optimization

/**
 * Generate SEO-friendly URL slug
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Remove consecutive hyphens
}

/**
 * Generate property title for SEO
 */
export function generatePropertyTitle(property: {
  type: string;
  location: string;
  rooms?: number;
  area?: number;
}): string {
  const { type, location, rooms, area } = property;
  
  let title = `${type} ${location}`;
  
  if (rooms) {
    title += ` - ${rooms} izbový`;
  }
  
  if (area) {
    title += `, ${area} m²`;
  }
  
  title += ' | Komfort Reality';
  
  return title;
}

/**
 * Generate property description for SEO
 */
export function generatePropertyDescription(property: {
  type: string;
  location: string;
  price: string;
  rooms?: number;
  area?: number;
}): string {
  const { type, location, price, rooms, area } = property;
  
  let description = `${type} na predaj v ${location} za ${price}.`;
  
  if (rooms || area) {
    description += ' Vlastnosti:';
    if (rooms) description += ` ${rooms} izby,`;
    if (area) description += ` ${area} m²,`;
    description = description.replace(/,$/, '.');
  }
  
  description += ' Komfort Reality - profesionálny predaj nehnuteľností s právnym servisom a hypotekárnym poradenstvom.';
  
  return description;
}

/**
 * Extract keywords from content
 */
export function extractKeywords(content: string, limit: number = 10): string[] {
  // Remove common words
  const stopWords = new Set([
    'a', 'aby', 'aj', 'ako', 'ale', 'alebo', 'and', 'ani', 'áno', 'ako',
    'by', 'bol', 'bola', 'boli', 'bolo', 'but', 'či', 'čo', 'do', 'for',
    'ho', 'i', 'ich', 'im', 'ja', 'je', 'jeho', 'jej', 'ich', 'k', 'kam',
    'kde', 'kto', 'ktorá', 'ktoré', 'ktorý', 'ktorých', 'lebo', 'len',
    'ma', 'mať', 'me', 'medzi', 'mna', 'mne', 'mnou', 'moja', 'moje',
    'môcť', 'môj', 'musieť', 'my', 'na', 'nad', 'nám', 'náš', 'naše',
    'ne', 'neho', 'nech', 'nej', 'nie', 'nič', 'niektorý', 'nové', 'nový',
    'o', 'od', 'odo', 'of', 'on', 'ona', 'ono', 'oni', 'ony', 'or',
    'po', 'pod', 'podľa', 'pokiaľ', 'potom', 'práve', 'pre', 'prečo',
    'pred', 'predtým', 'pretože', 'prvý', 'pri', 's', 'sa', 'so', 'si',
    'stále', 'sú', 'svoj', 'svoj', 'svoju', 'svoj', 'síce', 'ta', 'tak',
    'takže', 'táto', 'te', 'teba', 'tebe', 'ten', 'tento', 'the', 'ti',
    'tie', 'tiež', 'to', 'toto', 'toho', 'tým', 'túto', 'tvoj', 'ty',
    'u', 'už', 'v', 'vám', 'váš', 'vaše', 'veľmi', 'vlastne', 'vo', 'vôbec',
    'všetok', 'vy', 'z', 'za', 'zo', 'že',
  ]);
  
  // Extract words and filter
  const words = content
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .match(/\b[\w]+\b/g) || [];
  
  // Count word frequency
  const wordCount = new Map<string, number>();
  
  words.forEach((word) => {
    if (word.length > 3 && !stopWords.has(word)) {
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }
  });
  
  // Sort by frequency and return top keywords
  return Array.from(wordCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word]) => word);
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string, lang?: string): string {
  const baseUrl = 'https://komfortreality.sk';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (lang) {
    return `${baseUrl}/${lang}${cleanPath}`;
  }
  
  return `${baseUrl}${cleanPath}`;
}

/**
 * Generate hreflang tags
 */
export function generateHreflangTags(path: string): Array<{ lang: string; url: string }> {
  const baseUrl = 'https://komfortreality.sk';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return [
    { lang: 'sk', url: `${baseUrl}/sk${cleanPath}` },
    { lang: 'cs', url: `${baseUrl}/cz${cleanPath}` },
    { lang: 'en', url: `${baseUrl}/en${cleanPath}` },
    { lang: 'x-default', url: `${baseUrl}/sk${cleanPath}` },
  ];
}

/**
 * Truncate text for meta description
 */
export function truncateForMeta(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  
  // Find last complete sentence within limit
  const truncated = text.substring(0, maxLength);
  const lastPeriod = truncated.lastIndexOf('.');
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastPeriod > maxLength - 20) {
    return truncated.substring(0, lastPeriod + 1);
  }
  
  if (lastSpace > maxLength - 20) {
    return truncated.substring(0, lastSpace) + '...';
  }
  
  return truncated + '...';
}

/**
 * Generate Open Graph image URL
 */
export function generateOGImageUrl(params: {
  title: string;
  subtitle?: string;
  image?: string;
}): string {
  // This would be an API route that generates dynamic OG images
  // For now, return static logo
  return 'https://komfortreality.sk/logo.png';
  
  // TODO: Implement dynamic OG image generation
  // const baseUrl = 'https://komfortreality.sk/api/og';
  // const query = new URLSearchParams({
  //   title: params.title,
  //   ...(params.subtitle && { subtitle: params.subtitle }),
  //   ...(params.image && { image: params.image }),
  // });
  // return `${baseUrl}?${query.toString()}`;
}

/**
 * Validate and clean meta description
 */
export function cleanMetaDescription(text: string): string {
  return text
    .replace(/\s+/g, ' ') // Remove extra whitespace
    .replace(/[<>]/g, '') // Remove HTML characters
    .trim();
}

/**
 * Generate structured data JSON-LD script
 */
export function generateStructuredData(data: object): string {
  return JSON.stringify(data, null, 0);
}

/**
 * SEO-friendly price formatting
 */
export function formatPriceForSEO(price: number, currency: string = 'EUR'): string {
  const formatted = new Intl.NumberFormat('sk-SK', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  
  return formatted;
}

/**
 * Generate location keywords
 */
export function generateLocationKeywords(city: string, district?: string): string[] {
  const keywords = [
    city,
    `nehnuteľnosti ${city}`,
    `predaj ${city}`,
    `realitka ${city}`,
    `byty ${city}`,
    `domy ${city}`,
  ];
  
  if (district) {
    keywords.push(
      district,
      `nehnuteľnosti ${district}`,
      `${city} ${district}`,
    );
  }
  
  return keywords;
}

