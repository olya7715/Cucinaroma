"use client";

import { usePathname } from "next/navigation";
import ItemLinks from "@/components/common/Links/ItemLinks";
import { arrayCookiesPages } from "@/data/cookies_pages/arrayCoociesPages";

export default function DocsBreadcrumbs() {
  const pathname = usePathname();
  const pageName = pathname?.startsWith("/docs/") ? pathname.slice(6) : "";
  const currentPage = arrayCookiesPages.find((item) => item.page === pageName);

  return (
    <nav className="mb-7 uppercase" aria-label="Хлібні крихти">
      <ul className="textH4 flex flex-wrap">
        <ItemLinks href="/" title="Головна" />
        <li className="px-1" role="presentation">
          /
        </li>
        <ItemLinks
          href="/docs"
          title="Документи"
          className={pathname === "/docs" ? "text-yellow_main" : "text-text"}
        />
        {currentPage ? (
          <>
            <li className="px-1" role="presentation">
              /
            </li>
            <ItemLinks
              href={`/docs/${currentPage.page}`}
              title={currentPage.titleForlistPages}
              className={
                pathname === `/docs/${currentPage.page}`
                  ? "text-yellow_main"
                  : "text-text"
              }
            />
          </>
        ) : null}
      </ul>
    </nav>
  );
}
