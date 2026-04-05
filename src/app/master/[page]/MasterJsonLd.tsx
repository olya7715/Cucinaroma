type Props = {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  duration: number;
  page: string;
  location: string;
};

const SITE_URL = "https://www.cucinaroma.com.ua";

export default function MasterJsonLd({
  title,
  description,
  imageUrl,
  price,
  duration,
  page,
  location,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    image: `${SITE_URL}${imageUrl}`,
    provider: {
      "@type": "Organization",
      name: "Cucina Roma",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Rome",
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/master/${page}`,
    },
    serviceType: "Кулінарний майстер-клас",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Тривалість",
        value: `${duration} години`,
      },
      {
        "@type": "PropertyValue",
        name: "Локація",
        value: location,
      },
    ],
  };

  return (
    <script
      id={`master-jsonld-${page}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
