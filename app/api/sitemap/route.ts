interface SitemapItem {
  url: string;
  lastmod?: string;
  changefreq: string;
  priority: string;
}

export async function GET() {
  const BASE_URL = "https://semana-14-seo.onrender.com";

  // Rutas estáticas clave
  const staticRoutes: SitemapItem[] = [
    { url: `${BASE_URL}/`, changefreq: "daily", priority: "1.0" },
    { url: `${BASE_URL}/blog`, changefreq: "weekly", priority: "0.8" },
    { url: `${BASE_URL}/contacto`, changefreq: "monthly", priority: "0.6" },
  ];

  // Datos simulados de API / Base de Datos
  const postsFromApi = [
    { id: 1, slug: "optimizacion-seo-nextjs", updatedAt: new Date().toISOString() },
    { id: 2, slug: "lazy-loading-react", updatedAt: new Date().toISOString() },
    { id: 3, slug: "google-fonts-rendimiento", updatedAt: new Date().toISOString() },
  ];

  const dynamicRoutes: SitemapItem[] = postsFromApi.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastmod: post.updatedAt,
    changefreq: "weekly",
    priority: "0.7",
  }));

  const allRoutes: SitemapItem[] = [...staticRoutes, ...dynamicRoutes];

  // Construcción del documento XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
    <url>
      <loc>${route.url}</loc>
      ${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ""}
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemapXml.trim(), {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}