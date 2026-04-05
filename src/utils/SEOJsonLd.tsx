const SITE_URL = "https://www.cucinaroma.com.ua";

export default function SEOJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: "Cucina Roma",
        url: SITE_URL,
        logo: `${SITE_URL}/icons/logo_horiz.svg`,
        sameAs: [
          "https://www.instagram.com/guide_transfer_roma?igsh=eGNhZjg4NThhNXRl&utm_source=qr",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: "Cucina Roma",
        inLanguage: "uk",
        publisher: {
          "@id": `${SITE_URL}#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Cucina Roma",
        isPartOf: {
          "@id": `${SITE_URL}#website`,
        },
        about: {
          "@id": `${SITE_URL}#organization`,
        },
        description:
          "Україномовні гастрономічні враження в Римі: майстер-класи, дегустації, авторські екскурсії та події.",
        inLanguage: "uk",
      },
    ],
  };

  return (
    <script
      id="site-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
