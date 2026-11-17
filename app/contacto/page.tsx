import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Hablemos de tu Próximo Proyecto",
  description: "Ponte en contacto con nuestro equipo técnico para soporte, consultorías y desarrollo de software.",
  openGraph: {
    title: "Contacto | Hablemos de tu Próximo Proyecto",
    description: "Ponte en contacto con nuestro equipo técnico para soporte, consultorías y desarrollo de software.",
    url: "https://mi-sitio.com/contacto",
    siteName: "MiSitio",
    images: [
      {
        url: "https://mi-sitio.com/images/contacto-og.png",
        width: 1200,
        height: 630,
        alt: "Contacto",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
};

export default function ContactoPage() {
  return (
    <main style={{ padding: "32px", fontFamily: "sans-serif" }}>
      <h1>Contacto</h1>
      <p>Escríbenos para iniciar una colaboración técnica.</p>
    </main>
  );
}