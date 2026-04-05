import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TitleSection from "@/components/common/TitleSection";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { dataMaster } from "@/data/dataMaster";
import { faqSeoPageMap, faqSeoPages } from "@/data/faqSeoPages";

type Props = {
  params: Promise<{ slug: (typeof faqSeoPages)[number]["slug"] }>;
};

const masterLinkTitleMap = Object.fromEntries(
  dataMaster.map((item) => [item.page, item.name]),
) as Record<(typeof dataMaster)[number]["page"], string>;

function getMasterLinkTitle(href: string) {
  const slug = href.replace("/master/", "") as keyof typeof masterLinkTitleMap;

  if (slug in masterLinkTitleMap) {
    return masterLinkTitleMap[slug];
  }

  return href
    .replace("/master/", "")
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function generateStaticParams() {
  return faqSeoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = faqSeoPageMap[slug];

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/faq/${page.slug}`,
    },
    openGraph: {
      title: page.openGraphTitle,
      description: page.openGraphDescription,
      url: `/faq/${page.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: page.openGraphTitle,
      description: page.openGraphDescription,
    },
  };
}

export default async function FaqSeoDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = faqSeoPageMap[slug];

  if (!page) {
    notFound();
  }

  return (
    <>
      <BreadcrumbsJsonLd
        id={`faq-${page.slug}-breadcrumbs-jsonld`}
        items={[
          { name: "Головна", path: "/" },
          { name: "FAQ", path: "/faq" },
          { name: page.navTitle, path: `/faq/${page.slug}` },
        ]}
      />
      <FaqJsonLd id={`faq-${page.slug}-jsonld`} items={page.faq} />
      <section className="py-10 xl:py-16" aria-labelledby="faq-seo-title">
        <Container>
          <SubtitlePoint text="faq guide" />
          <TitleSection
            id="faq-seo-title"
            title={page.navTitle}
            className="mb-7 mt-6"
          />
          <div className="flex flex-col gap-6">
            <p className="big_text_medium max-w-[900px] text-text">{page.intro}</p>

            {page.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-grey_stroke_logo/30 bg-white p-6"
              >
                <h2 className="textH4 text-main_blue">{section.title}</h2>
                <div className="mt-3 flex flex-col gap-3 text-text">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}

            <div className="rounded-3xl border border-grey_stroke_logo/30 bg-white p-6">
              <h2 className="textH4 text-main_blue">Поширені запитання</h2>
              <div className="mt-4 flex flex-col gap-4">
                {page.faq.map((item) => (
                  <details key={item.question}>
                    <summary className="cursor-pointer list-none font-medium text-main_blue">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-text">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-grey_stroke_logo/30 bg-main_blue p-6 text-white">
              <h2 className="textH4">Пов'язані формати</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {page.relatedMasterPages.map((href) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-full border border-white/25 px-4 py-2 transition-all duration-300 hover:bg-white hover:text-main_blue"
                  >
                    {getMasterLinkTitle(href)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
