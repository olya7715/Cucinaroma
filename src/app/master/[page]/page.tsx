import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MasterPageTracker from "@/components/master/MasterPageTracker";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import SectionDetailInfoMaster from "@/components/common/sections/SectionDetailInfoMaster/SectionDetailInfoMaster";
import { dataDetailInfoMaster } from "@/data/dataDetailInfoMaster";
import { DataCardMaster, dataMaster } from "@/data/dataMaster";
import MasterJsonLd from "./MasterJsonLd";

type MasterPageKey = Pick<DataCardMaster, "page">["page"];

const metadataCopy: Record<
  MasterPageKey,
  {
    title: string;
    description: string;
    openGraphTitle: string;
    openGraphDescription: string;
    twitterTitle: string;
    twitterDescription: string;
    imageAlt: string;
  }
> = {
  pizza_tiramisu: {
    title: "Майстер-клас піци та тірамісу в Римі українською",
    description:
      "Кулінарний майстер-клас із приготування піци та тірамісу в Римі з україномовним супроводом. Тривалість 2 години, вартість від 75 €.",
    openGraphTitle: "Піца та тірамісу в Римі | Майстер-клас Cucina Roma",
    openGraphDescription:
      "Навчіться готувати італійську піцу та тірамісу в центрі Рима. Україномовний супровід, 2 години, від 75 €.",
    twitterTitle: "Майстер-клас піци та тірамісу | Cucina Roma",
    twitterDescription:
      "Кулінарний досвід у Римі: піца, тірамісу та україномовний супровід.",
    imageAlt: "Кулінарний майстер-клас із приготування піци та тірамісу в Римі",
  },
  pasta_tiramisu: {
    title: "Майстер-клас пасти та тірамісу в Римі українською",
    description:
      "Кулінарний майстер-клас із приготування пасти та тірамісу в центрі Рима. Україномовний супровід, тривалість 2 години, вартість від 75 €.",
    openGraphTitle: "Паста та тірамісу в Римі | Майстер-клас Cucina Roma",
    openGraphDescription:
      "Готуйте свіжу пасту та класичний тірамісу на майстер-класі в Римі. 2 години, україномовний супровід, від 75 €.",
    twitterTitle: "Майстер-клас пасти та тірамісу | Cucina Roma",
    twitterDescription:
      "Італійська паста й тірамісу в Римі з україномовним супроводом.",
    imageAlt: "Кулінарний майстер-клас із приготування пасти та тірамісу в Римі",
  },
  nioki_tiramisu: {
    title: "Майстер-клас ньокі та тірамісу в Римі українською",
    description:
      "Майстер-клас із приготування ньокі та тірамісу в Римі українською. Традиційні рецепти, 2 години, вартість від 75 €.",
    openGraphTitle: "Ньокі та тірамісу в Римі | Майстер-клас Cucina Roma",
    openGraphDescription:
      "Спробуйте традиційні італійські рецепти ньокі та тірамісу на майстер-класі в Римі. Від 75 €.",
    twitterTitle: "Майстер-клас ньокі та тірамісу | Cucina Roma",
    twitterDescription:
      "Ньокі, тірамісу та україномовний гастрономічний досвід у Римі.",
    imageAlt: "Кулінарний майстер-клас із приготування ньокі та тірамісу в Римі",
  },
  wino: {
    title: "Винна дегустація в Римі українською",
    description:
      "Винна дегустація та італійські закуски в Римі з україномовним супроводом. Тривалість 2 години, вартість від 80 €.",
    openGraphTitle: "Винна дегустація в Римі | Cucina Roma",
    openGraphDescription:
      "Добірні італійські вина та закуски в атмосфері Рима. Україномовний супровід, 2 години, від 80 €.",
    twitterTitle: "Винна дегустація в Римі | Cucina Roma",
    twitterDescription:
      "Італійські вина, закуски та україномовний супровід у центрі Рима.",
    imageAlt: "Винна дегустація та італійські закуски в Римі",
  },
};

export default async function MasterPage({
  params,
}: {
  params: Promise<{ page: MasterPageKey }>;
}) {
  const { page } = await params;

  if (!dataMaster.some((item) => item.page === page)) {
    notFound();
  }

  const masterCard = dataMaster.find((item) => item.page === page)!;
  const masterDetails = dataDetailInfoMaster[page];
  const description = `${masterDetails.title} в Римі з україномовним супроводом. ${masterDetails.describe[0]}`;

  return (
    <>
      <MasterPageTracker page={page} title={masterDetails.title} />
      <BreadcrumbsJsonLd
        id={`master-${page}-breadcrumbs-jsonld`}
        items={[
          { name: "Головна", path: "/" },
          { name: "Майстер-класи", path: "/" },
          { name: masterDetails.title, path: `/master/${page}` },
        ]}
      />
      <MasterJsonLd
        title={masterDetails.title}
        description={description}
        imageUrl={masterDetails.imageUrl}
        price={masterCard.prise}
        duration={masterCard.duration}
        page={page}
        location={masterDetails.location}
      />
      <SectionDetailInfoMaster page={page} />
    </>
  );
}

export function generateStaticParams() {
  return dataMaster.map((item) => ({ page: item.page }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: MasterPageKey }>;
}): Promise<Metadata> {
  const { page } = await params;
  const masterCard = dataMaster.find((item) => item.page === page);
  const masterDetails = dataDetailInfoMaster[page];

  if (!masterCard || !masterDetails) {
    return {};
  }

  const copy = metadataCopy[page];
  const imageUrl = `/master/${page}/opengraph-image`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: `/master/${page}`,
    },
    openGraph: {
      title: copy.openGraphTitle,
      description: copy.openGraphDescription,
      url: `/master/${page}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: copy.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.twitterTitle,
      description: copy.twitterDescription,
      images: [imageUrl],
    },
  };
}
