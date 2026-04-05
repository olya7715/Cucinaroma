import type { Metadata } from "next";
import HomePage from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Кулінарні майстер-класи в Римі українською",
  description:
    "Cucina Roma проводить україномовні кулінарні майстер-класи, винні дегустації та гастрономічні враження в центрі Рима.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Кулінарні майстер-класи в Римі | Cucina Roma",
    description:
      "Україномовні майстер-класи, дегустації та гастрономічні враження в Римі.",
    url: "/",
  },
  twitter: {
    title: "Кулінарні майстер-класи в Римі | Cucina Roma",
    description:
      "Україномовні майстер-класи, дегустації та гастрономічні враження в Римі.",
  },
};

export default function Home() {
  return <HomePage />;
}
