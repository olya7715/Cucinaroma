import Image from "next/image";
import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TextBody from "@/components/common/TextBody";
import TextBodyPoint from "@/components/common/TextBodyPoint";
import TitleSection from "@/components/common/TitleSection";

function AboutUsSection() {
  return (
    <section
      className="py-10 xl:py-20"
      id="about"
      aria-labelledby="about-title"
    >
      <Container>
        <SubtitlePoint text="україномовний туристичний проєкт" />

        <div className="1xl:gap-[124px] mt-6 xl:flex xl:flex-row-reverse xl:items-center xl:gap-[84px]">
          <div className="xl:flex xl:max-w-[436px] xl:flex-col xl:justify-center">
            <TitleSection id="about-title" title="Про нас" className="mb-7" />
            <TextBody className="mb-3 xl:max-w-[488px]">
              Мене звати Альона, і я засновниця туристичного проєкту для
              українців, які мріють побачити справжній Рим.
              <br /> <br /> З командою ми створили унікальний простір, де вже
              понад 3500 туристів відкрили для себе справжній Рим. <br /> І ваша
              подорож до Вічного міста з нами стане не просто цікавою, вона
              залишиться у серці назавжди.
            </TextBody>

            <ul className="flex w-full flex-col gap-2 xl:max-w-[430px]">
              <li className="max-w-[430px]">
                <TextBodyPoint>
                  16 авторських екскурсій у Римі та за його межами
                </TextBodyPoint>
              </li>
              <li>
                <TextBodyPoint>
                  Ватикан з найкращими україномовними гідами
                </TextBodyPoint>
              </li>
              <li>
                <TextBodyPoint>
                  Організація та комфортний трансфер
                </TextBodyPoint>
              </li>
              <li>
                <TextBodyPoint>
                  Гастрономічні екскурсії для поціновувачів італійської кухні
                </TextBodyPoint>
              </li>
              <li>
                <TextBodyPoint>
                  Розробка індивідуальних програм для груп з повним супроводом
                </TextBodyPoint>
              </li>
              <li>
                <TextBodyPoint>Організація особливих подій</TextBodyPoint>
              </li>
            </ul>
          </div>
          <Image
            className="mx-auto mt-20 w-full rounded-3xl md:hidden"
            src="/images/About360.jpg"
            width={328}
            height={580}
            alt="Засновниця та команда Cucina Roma"
          />
          <Image
            className="mx-auto mt-20 hidden w-full rounded-3xl md:block xl:hidden"
            src="/images/About768.jpg"
            width={688}
            height={580}
            alt="Команда Cucina Roma під час роботи з гостями"
          />
          <Image
            className="mx-auto hidden min-h-[580px] rounded-3xl object-cover xl:block"
            src="/images/About1440.jpg"
            width={588}
            height={580}
            alt="Команда Cucina Roma в Римі"
          />
        </div>
      </Container>
    </section>
  );
}

export default AboutUsSection;
