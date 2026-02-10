const baseUrl = 'paki11game.com.pk';

export default function sitemap() {
  const now = new Date();

  return [
    {
      url: `https://${baseUrl}`,          
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `https://${baseUrl}/download`,          
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    {
      url: `https://${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `https://${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `https://${baseUrl}/disclaimer`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}