import SectionInstagram from "@/components/common/sections/SectionInstagram/SectionInstagram";
import SectionPayCard from "@/components/common/sections/SectionPayCard/SectionCertificate";
import AboutUsSection from "@/components/HomePage/AboutUsSection/AboutUsSection";
import ChooseMaster from "@/components/HomePage/ChooseMaster/ChooseMaster";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import MasterSection from "@/components/HomePage/MasterSection/MasterSection";
import OpenRomaSection from "@/components/HomePage/OpenRomaSection/OpenRomaSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <OpenRomaSection />
      <MasterSection />
      <ChooseMaster />
      <SectionPayCard />
      <SectionInstagram />
    </>
  );
}

export default HomePage;
