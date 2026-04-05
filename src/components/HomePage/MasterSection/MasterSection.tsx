import Image from "next/image";
import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TextBody from "@/components/common/TextBody";
import TitleSection from "@/components/common/TitleSection";

function MasterSection() {
  return (
    <section className="py-10 xl:py-20" aria-labelledby="classes-title">
      <Container>
        <SubtitlePoint text="Що ми пропонуємо" />
        <div className="mt-6 xl:flex xl:gap-[120px]">
          <div className="xl:flex xl:flex-col xl:justify-center">
            <TitleSection id="classes-title" title="Майстер-класи" className="mb-7" />
            <ul className="flex flex-col gap-3">
              <li>
                <TextBody>
                  Ви навчитеся готувати справжню неаполітанську піцу, класичний
                  десерт tiramisu, ідеальну пасту та ніжні ньокі. Ми поділимося
                  правильними рецептами й техніками, щоб ви могли створювати ці
                  шедеври вдома.
                </TextBody>
              </li>
              <li>
                <TextBody>
                  Локація: історичний центр Рима. Затишна атмосфера, ввічливий
                  персонал.
                </TextBody>
              </li>
              <li>
                <TextBody>
                  Хто проводить: майстер-клас ведуть справжні неаполітанці з
                  україномовним супроводом.
                </TextBody>
              </li>
              <li>
                <TextBody>Тривалість: 2-2,5 години.</TextBody>
              </li>
              <li>
                <TextBody>
                  Перетворіть свій день у Римі на кулінарну пригоду.
                </TextBody>
              </li>
            </ul>
          </div>
          <Image
            className="mx-auto mt-20 w-full md:hidden"
            src="/images/master360.jpg"
            width={328}
            height={580}
            alt="Учасники кулінарного майстер-класу Cucina Roma в Римі"
          />
          <Image
            className="mx-auto mt-20 hidden w-full md:block xl:hidden"
            src="/images/master768.jpg"
            width={688}
            height={580}
            alt="Процес кулінарного майстер-класу Cucina Roma в центрі Рима"
          />
          <Image
            className="hidden xl:block"
            src="/images/master1440.jpg"
            width={588}
            height={580}
            alt="Гастрономічний досвід Cucina Roma для гостей Рима"
          />
        </div>
      </Container>
    </section>
  );
}

export default MasterSection;
