import { MetadataRoute } from 'next';

// robots.txt configuration for Komfort Reality
// Optimized for maximum SEO crawling

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://komfortreality.sk';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
        crawlDelay: 0, // No delay for Google
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sk/sitemap.xml`,
      `${baseUrl}/cz/sitemap.xml`,
      `${baseUrl}/en/sitemap.xml`,
    ],
    host: baseUrl,
  };
}

