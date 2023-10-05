export default function sitemap() {
    const baseUrl = 'https://daniel-maximov.vercel.app'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
        },
    ]
}


