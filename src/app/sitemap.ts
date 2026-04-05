import type { MetadataRoute } from "next";
import { arrayCookiesPages } from "@/data/cookies_pages/arrayCoociesPages";
import { faqSeoPages } from "@/data/faqSeoPages";
import { dataMaster } from "@/data/dataMaster";

const SITE_URL = "https://www.cucinaroma.com.ua";
const UPDATED_AT = {
  home: new Date("2026-04-05T00:00:00.000Z"),
  faq: new Date("2026-04-05T00:00:00.000Z"),
  docs: new Date("2026-04-05T00:00:00.000Z"),
  master: new Date("2026-04-05T00:00:00.000Z"),
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: UPDATED_AT.home,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: UPDATED_AT.faq,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/docs`,
      lastModified: UPDATED_AT.docs,
      changeFrequency: "monthly",
      priority: 0.55,
    },
  ];

  const docsRoutes: MetadataRoute.Sitemap = arrayCookiesPages.map((item) => ({
    url: `${SITE_URL}/docs/${item.page}`,
    lastModified: UPDATED_AT.docs,
    changeFrequency: "yearly",
    priority: 0.35,
  }));

  const faqSeoRoutes: MetadataRoute.Sitemap = faqSeoPages.map((page) => ({
    url: `${SITE_URL}/faq/${page.slug}`,
    lastModified: UPDATED_AT.faq,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const masterRoutes: MetadataRoute.Sitemap = dataMaster.map((item) => ({
    url: `${SITE_URL}/master/${item.page}`,
    lastModified: UPDATED_AT.master,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...docsRoutes, ...faqSeoRoutes, ...masterRoutes];
}
