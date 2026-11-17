import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Artículos de Optimización y Rendimiento Web",
  description: "Guías, tutoriales y artículos técnicos para mejorar el SEO y Core Web Vitals en aplicaciones modernas.",
  openGraph: {
    title: "Blog | Artículos de Optimización y Rendimiento Web",
    description: "Guías, tutoriales y artículos técnicos para mejorar el SEO y Core Web Vitals en aplicaciones modernas.",
    url: "https://mi-sitio.com/blog",
    siteName: "MiSitio",
    images: [
      {
        url: "https://mi-sitio.com/images/blog-og.png",
        width: 1200,
        height: 630,
        alt: "Portada del Blog",
      },
    ],
    locale: "es_PE",
    type: "article",
  },
};

export default function BlogPage() {
  return (
    <main style={{ padding: "32px", fontFamily: "sans-serif" }}>
      <h1>Blog de Tecnología</h1>
      <p>Artículos sobre arquitectura de software y optimización SEO.</p>
    </main>
  );
}