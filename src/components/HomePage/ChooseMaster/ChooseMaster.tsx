import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TitleSection from "@/components/common/TitleSection";
import { dataMaster } from "../../../data/dataMaster";
import CardMaster from "./CardMaster";

function ChooseMaster() {
  return (
    <section
      className="py-10 xl:py-20"
      id="master"
      aria-labelledby="master-title"
    >
      <Container>
        <SubtitlePoint
          text="україномовний туристичний проєкт"
          className="justify-center"
        />
        <TitleSection
          id="master-title"
          title="Обери майстер-клас"
          className="mx-auto mt-7 text-center"
        />
        <p className="big_text text-main_blue xl:10 mx-auto mt-6 mb-20 max-w-[858px] text-center">
          Відкриємо для вас світ справжньої італійської кухні на
          майстер-класі у супроводі неаполітанців та україномовного гіда.
        </p>
        <ul className="grid grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 md:gap-x-5 md:gap-y-6 xl:grid-cols-4">
          {dataMaster.map((item) => (
            <li key={item.page}>
              <CardMaster
                src={item.src}
                name={item.name}
                prise={item.prise}
                duration={item.duration}
                linkTitle={item.linkTitle}
                page={item.page}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default ChooseMaster;
