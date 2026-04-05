
type BreadcrumbItem = {
  name: string;
  path: string;
};

type Props = {
  id: string;
  items: BreadcrumbItem[];
};

const SITE_URL = "https://www.cucinaroma.com.ua";

export default function BreadcrumbsJsonLd({ id, items }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
