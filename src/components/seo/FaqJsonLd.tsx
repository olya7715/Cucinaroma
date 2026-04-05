
type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  id?: string;
  items: FaqItem[];
};

export default function FaqJsonLd({
  id = "faq-jsonld",
  items,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
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
