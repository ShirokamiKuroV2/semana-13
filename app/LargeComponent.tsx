// app/LargeComponent.tsx
export default function LargeComponent() {
  return (
    <div
      style={{
        marginTop: "24px",
        padding: "24px",
        borderRadius: "12px",
        background: "linear-gradient(145deg, #1e293b, #0f172a)",
        border: "1px solid #334155",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.4)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
        <span style={{ fontSize: "1.2rem" }}>⚡</span>
        <h3 style={{ margin: 0, color: "#38bdf8" }}>Módulo Diferido (Lazy Loading)</h3>
      </div>
      <p style={{ margin: 0, color: "#cbd5e1", lineHeight: 1.6 }}>
        Este bloque se importó asíncronamente con <code>next/dynamic</code> y <code>ssr: false</code>, 
        evitando penalizaciones en el First Contentful Paint (FCP) de la página principal.
      </p>
    </div>
  );
}