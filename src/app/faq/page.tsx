import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TitleSection from "@/components/common/TitleSection";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { faqItems } from "@/data/faq";
import { faqSeoPages } from "@/data/faqSeoPages";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Поширені запитання про майстер-класи, дегустації, локацію, тривалість і подарункові сертифікати Cucina Roma.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Cucina Roma",
    description:
      "Відповіді на поширені запитання про майстер-класи та дегустації Cucina Roma в Римі.",
    url: "/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Cucina Roma",
    description:
      "Відповіді на поширені запитання про майстер-класи та дегустації Cucina Roma в Римі.",
  },
};

export default function FaqPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        id="faq-breadcrumbs-jsonld"
        items={[
          { name: "Головна", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <FaqJsonLd id="faq-page-jsonld" items={faqItems} />
      <section className="py-10 xl:py-16" aria-labelledby="faq-page-title">
        <Container>
          <SubtitlePoint text="поширені запитання" />
          <TitleSection id="faq-page-title" title="FAQ" className="mb-7 mt-6" />
          <div className="flex flex-col gap-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-3xl border border-grey_stroke_logo/30 bg-white p-6"
              >
                <summary className="textH4 cursor-pointer list-none text-main_blue">
                  {item.question}
                </summary>
                <p className="mt-3 text-text">{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-grey_stroke_logo/30 bg-main_blue p-6 text-white">
            <h2 className="textH4">Корисні матеріали</h2>
            <div className="mt-4 flex flex-col gap-3">
              {faqSeoPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/faq/${page.slug}`}
                  className="rounded-2xl border border-white/20 px-4 py-3 transition-all duration-300 hover:bg-white hover:text-main_blue"
                >
                  {page.navTitle}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
