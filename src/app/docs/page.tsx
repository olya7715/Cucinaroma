import type { Metadata } from "next";
import ItemLinks from "@/components/common/Links/ItemLinks";
import { arrayCookiesPages } from "@/data/cookies_pages/arrayCoociesPages";

export const metadata: Metadata = {
  title: "Документи",
  description:
    "Юридична інформація, cookies та відмова від відповідальності на сайті Cucina Roma.",
  alternates: {
    canonical: "/docs",
  },
};

function Page() {
  return (
    <section aria-labelledby="docs-title">
      <h1 id="docs-title" className="textH3 mb-6">
        Документи
      </h1>
      <nav aria-label="Юридичні документи">
        <ul className="btn_text flex flex-col gap-4">
          {arrayCookiesPages.map((item) => (
            <ItemLinks
              key={item.page}
              href={`/docs/${item.page}`}
              title={item.titleForlistPages}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Page;
