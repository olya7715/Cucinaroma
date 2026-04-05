import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import { arrayCookiesPages } from "@/data/cookies_pages/arrayCoociesPages";

type Props = { params: Promise<{ page: string }> };

export function generateStaticParams() {
  return arrayCookiesPages.map((item) => ({ page: item.page }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const pageInfo = arrayCookiesPages.find((item) => item.page === page);

  if (!pageInfo) {
    return {};
  }

  const description = `${pageInfo.titleDocument} на сайті Cucina Roma.`;

  return {
    title: pageInfo.titleDocument,
    description,
    alternates: {
      canonical: `/docs/${pageInfo.page}`,
    },
    openGraph: {
      title: pageInfo.titleDocument,
      description,
      url: `/docs/${pageInfo.page}`,
    },
  };
}

async function CookiesPage({ params }: Props) {
  const { page } = await params;
  const pageInfo = arrayCookiesPages.find((item) => item.page === page);

  if (!pageInfo) {
    notFound();
  }

  return (
    <>
      <BreadcrumbsJsonLd
        id={`docs-${page}-breadcrumbs-jsonld`}
        items={[
          { name: "Головна", path: "/" },
          { name: "Документи", path: "/docs" },
          { name: pageInfo.titleDocument, path: `/docs/${pageInfo.page}` },
        ]}
      />
      <article>
        <h1 className="textH3 mb-3">{pageInfo.titleDocument}</h1>
        <p>{pageInfo.dataValid}</p>
        <ul className="mt-3 flex flex-col gap-3">
          {pageInfo.items.map((item) => (
            <li key={item.itemTitle}>
              <h2 className="big_text_medium mb-3">{item.itemTitle}</h2>
              {item.description.map((description) => (
                <p key={description}>{description}</p>
              ))}
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}

export default CookiesPage;
