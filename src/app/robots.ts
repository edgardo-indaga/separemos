export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
        ],
        sitemaps: ['https://www.separemoslasaguas.cl/sitemap.xml'],
    };
}
