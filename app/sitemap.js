const baseUrl = 'https://dk999apk.com';

export default function sitemap() {
  const now = new Date();

  return [
    {
      url: baseUrl,          // Home page (only page for now)
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // When you create these pages later, just uncomment / add:
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: now,
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/privacy-policy`,
    //   lastModified: now,
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
    // {
    //   url: `${baseUrl}/disclaimer`,
    //   lastModified: now,
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
  ];
}