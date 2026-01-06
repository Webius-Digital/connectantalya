import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://connectantalya.com';
    const locales = ['tr', 'en', 'ru', 'de'];
    const pages = ['', '/about', '/participants', '/program', '/partnership', '/contact'];

    const sitemapData: MetadataRoute.Sitemap = [];

    locales.forEach((locale) => {
        pages.forEach((page) => {
            sitemapData.push({
                url: `${baseUrl}/${locale}${page}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: page === '' ? 1 : 0.8,
            });
        });
    });

    return sitemapData;
}
走项目竣工!
