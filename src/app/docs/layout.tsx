import { Suspense } from "react";
import Container from "@/components/common/Container";
import ItemLinks from "@/components/common/Links/ItemLinks";
import WhatsAppLink from "@/components/common/Links/WhatsAppLink";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import DocsBreadcrumbs from "./DocsBreadcrumbs";

type Props = { children: React.ReactNode };

function DocsBreadcrumbsFallback() {
  return (
    <nav className="mb-7 uppercase" aria-label="Хлібні крихти">
      <ul className="textH4 flex flex-wrap">
        <ItemLinks href="/" title="Головна" />
        <li className="px-1" role="presentation">
          /
        </li>
        <ItemLinks href="/docs" title="Документи" className="text-text" />
      </ul>
    </nav>
  );
}

export default function Layout({ children }: Props) {
  return (
    <section className="py-10 xl:py-16">
      <BreadcrumbsJsonLd
        id="docs-breadcrumbs-jsonld"
        items={[
          { name: "Головна", path: "/" },
          { name: "Документи", path: "/docs" },
        ]}
      />
      <Container className="relative">
        <WhatsAppLink place="hero_section" />
        <Suspense fallback={<DocsBreadcrumbsFallback />}>
          <DocsBreadcrumbs />
        </Suspense>
        {children}
      </Container>
    </section>
  );
}
