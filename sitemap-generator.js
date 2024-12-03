import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

async function generateSitemap() {
    const links = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/contact', changefreq: 'monthly', priority: 0.8 },
        { url: '/about', changefreq: 'monthly', priority: 0.8 },
        { url: '/service', changefreq: 'monthly', priority: 0.8 },
    ];

    const sitemap = new SitemapStream({ hostname: 'https://zome.in' });

    // Write to sitemap.xml
    const writeStream = createWriteStream('./public/sitemap.xml');
    sitemap.pipe(writeStream);

    links.forEach(link => sitemap.write(link));
    sitemap.end();

    await streamToPromise(sitemap); // Wait until the stream finishes
    console.log('Sitemap generated successfully!');
}

generateSitemap();
