import { Suspense } from "react";
import Container from "../../common/Container";
import WhatsAppLink from "../../common/Links/WhatsAppLink";
import HeroSlider from "./Slider";

function HeroSliderFallback() {
  return (
    <div className="bg-main_blue/80 h-[520px] rounded-[32px] md:h-[640px] xl:h-[820px]" />
  );
}

function HeroSection() {
  return (
    <section className="py-10 md:py-16 xl:py-0 xl:pt-5 xl:pb-20">
      <Container className="relative">
        <Suspense fallback={<HeroSliderFallback />}>
          <HeroSlider />
        </Suspense>
        <WhatsAppLink
          place="hero_section"
          className="z-[5] xl:top-2 xl:right-32"
        />
        <div className="pointer-events-none absolute bottom-[46px] left-3 z-10 ml-4 max-w-[80%] md:right-20 md:bottom-[40px] md:left-auto md:max-w-[474px] xl:right-40">
          <h1 className="textH1 text-white">
            Твій гід <br className="md:hidden" /> у Римі
          </h1>
          <p className="big_text mt-4 text-white">
            Перші кулінарні майстер-класи в Римі <br /> з україномовним
            супроводом
          </p>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
