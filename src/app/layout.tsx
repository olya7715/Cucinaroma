import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Serif } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@/components/Analytics";
import ButtonScrollToTop from "@/components/ButtonScrollToTop";
import Cookies from "@/components/Cookies";
import VideoIntroduction from "@/components/VideoIntroduction";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import SEOJsonLd from "@/utils/SEOJsonLd";
import "./globals.css";

const SITE_URL = "https://www.cucinaroma.com.ua";
const SITE_NAME = "Cucina Roma";
const DEFAULT_DESCRIPTION =
  "Україномовні гастрономічні враження в Римі: майстер-класи, дегустації, авторські екскурсії, трансфери та особливі події.";
const OG_IMAGE = "/images/hero_foto1.jpg";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant_garamond",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-IBM_plex_serif",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icons/lady.svg",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "uk_UA",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Cucina Roma - твій гастрономічний гід у Римі",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" data-scroll-behavior="smooth">
      <body
        className={`${cormorantGaramond.variable} ${ibmPlexSerif.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <SEOJsonLd />
        <main className="flex-1">{children}</main>
        <Footer />
        <Cookies />
        <Toaster richColors />
        <Analytics />

        <div className="fixed right-4 bottom-[34px] z-[10000] md:right-10">
          <VideoIntroduction />
          <div className="flex justify-end">
            <ButtonScrollToTop />
          </div>
        </div>
      </body>
    </html>
  );
}
