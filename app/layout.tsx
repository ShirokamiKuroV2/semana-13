// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mi-sitio-seo.onrender.com"),
  title: {
    default: "Portal Tech | SEO & Rendimiento",
    template: "%s | Portal Tech",
  },
  description: "Plataforma de alto rendimiento construida con Next.js.",
  openGraph: {
    siteName: "Portal Tech",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className} style={{ margin: 0, backgroundColor: "#0f172a", color: "#f8fafc" }}>
        <header style={{ borderBottom: "1px solid #1e293b", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#38bdf8" }}>NextSEO Lab</span>
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Inicio</Link>
            <Link href="/blog" style={{ color: "#94a3b8", textDecoration: "none" }}>Blog</Link>
            <Link href="/contacto" style={{ color: "#94a3b8", textDecoration: "none" }}>Contacto</Link>
            <a href="/api/sitemap" target="_blank" rel="noreferrer" style={{ color: "#38bdf8", textDecoration: "underline" }}>Sitemap XML</a>
          </nav>
        </header>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 16px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}