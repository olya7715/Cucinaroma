import Container from "../../Container";
import WhatsAppLink from "../../Links/WhatsAppLink";
import SubtitlePoint from "../../SubtitlePoint";
import { dataDetailInfoMaster } from "@/data/dataDetailInfoMaster";
import Image from "next/image";
import IconPrice from "@/assets/icons/icon_price.svg";
import IconTime from "@/assets/icons/icon_time.svg";
import IconLoction from "@/assets/icons/icon_location.svg";
import { DataCardMaster, dataMaster } from "@/data/dataMaster";
import TextBody from "../../TextBody";
import ButtonBuyMaster from "./ButtonBuyMaster";

function SectionDetailInfoMaster({ page }: Pick<DataCardMaster, "page">) {
  const { subtitle, imageUrl, title, location, describe } =
    dataDetailInfoMaster[page];
  const { prise, duration } = dataMaster.filter(
    (item) => item.page === page,
  )[0];

  return (
    <section className="py-10 xl:py-20">
      <Container className="relative">
        <WhatsAppLink place="hero_section" />
        <SubtitlePoint text={subtitle} />
        <div className="mt-6 md:mt-10 xl:flex xl:justify-between">
          <Image
            src={imageUrl}
            alt={subtitle}
            width={588}
            height={588}
            className="mx-auto h-[400px] w-[328px] rounded-3xl object-cover md:h-[588px] md:w-[688px] xl:mx-0 xl:w-[588px]"
          />
          <div className="mt-6 flex flex-col justify-center gap-6 xl:mt-0 xl:max-w-[488px]">
            <h3 className="textH3 text-text">{title}</h3>
            <ul className="flex flex-col gap-3">
              <li className="btn_text text-grey_stroke_logo flex gap-2">
                <IconPrice /> <span>{prise}€ за особу</span>
              </li>
              <li className="btn_text text-grey_stroke_logo flex gap-2">
                <IconTime /> <span>{duration} години</span>
              </li>
              <li className="btn_text text-grey_stroke_logo flex gap-2">
                <IconLoction /> <span>{location}</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              {describe.map((item, index) => (
                <li key={index}>
                  <TextBody className="text-text">{item}</TextBody>
                </li>
              ))}
              <li>
                <p className="btn_text text-text">
                  У вартість входить келих Prosecco!
                </p>
              </li>
              <li className="flex md:justify-end">
                {/* <LinkYelow
                  href=""
                  linkTitle="Замовити"
                  className="text-center md:w-fit"
                /> */}
                <ButtonBuyMaster page={page} />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionDetailInfoMaster;
