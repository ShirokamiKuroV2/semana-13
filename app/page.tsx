// app/page.tsx
'use client';

import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicComponent = dynamic(() => import("./LargeComponent"), {
  ssr: false,
  loading: () => (
    <div style={{ marginTop: "24px", padding: "20px", borderRadius: "12px", background: "#1e293b", color: "#94a3b8" }}>
      Cargando componente optimizado...
    </div>
  ),
});

export default function HomePage() {
  return (
    <main>
      <div style={{ padding: "40px 0", borderBottom: "1px solid #1e293b" }}>
        <h1 style={{ fontSize: "2.5rem", margin: "0 0 12px 0", letterSpacing: "-0.02em" }}>
          Optimización Web & SEO
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.6, maxWidth: "600px", margin: 0 }}>
          Implementación integral con metadatos Open Graph, sitemaps dinámicos alimentados vía API y tipografía autohospedada.
        </p>
      </div>

      <DynamicComponent />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "32px" }}>
        <Link href="/blog" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ padding: "20px", borderRadius: "8px", background: "#1e293b", border: "1px solid #334155" }}>
            <h4 style={{ margin: "0 0 8px 0", color: "#f8fafc" }}>Ver Artículos del Blog →</h4>
            <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.9rem" }}>Revisa las meta etiquetas dinámicas por artículo.</p>
          </div>
        </Link>
        <Link href="/contacto" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ padding: "20px", borderRadius: "8px", background: "#1e293b", border: "1px solid #334155" }}>
            <h4 style={{ margin: "0 0 8px 0", color: "#f8fafc" }}>Ir a Contacto →</h4>
            <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.9rem" }}>Formulario optimizado para indexación y contacto.</p>
          </div>
        </Link>
      </div>
    </main>
  );
}