import { MetadataRoute } from 'next';

// Generate sitemap for SEO
// This ensures Google indexes all pages in all languages

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://komfortreality.sk';
  
  // Current date for lastModified
  const currentDate = new Date();
  
  // Main pages in all languages
  const languages = ['sk', 'cz', 'en']; // Using 'cz' for Czech per project convention
  const pages = ['', 'about', 'services', 'properties', 'contact'];
  
  // Generate entries for all language/page combinations
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  // Add homepage (highest priority)
  sitemapEntries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 1.0,
    alternates: {
      languages: {
        'sk': `${baseUrl}/sk`,
        'cs-CZ': `${baseUrl}/cz`,
        'en': `${baseUrl}/en`,
      },
    },
  });
  
  // Add all language versions
  languages.forEach((lang) => {
    pages.forEach((page) => {
      const url = page ? `${baseUrl}/${lang}/${page}` : `${baseUrl}/${lang}`;
      
      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: page === 'properties' ? 'daily' : 'weekly',
        priority: page === '' ? 0.9 : page === 'properties' ? 0.8 : 0.7,
        alternates: {
          languages: {
            'sk': page ? `${baseUrl}/sk/${page}` : `${baseUrl}/sk`,
            'cs-CZ': page ? `${baseUrl}/cz/${page}` : `${baseUrl}/cz`,
            'en': page ? `${baseUrl}/en/${page}` : `${baseUrl}/en`,
          },
        },
      });
    });
  });
  
  // Add property listings (will be dynamic later)
  // Example: You'll add actual property URLs here
  const propertyIds: string[] = []; // TODO: Fetch from database
  
  propertyIds.forEach((id: string) => {
    sitemapEntries.push({
      url: `${baseUrl}/properties/${id}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  });
  
  return sitemapEntries;
}

