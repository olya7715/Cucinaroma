import Image from "next/image";
import { dataDetailInfoMaster } from "@/data/dataDetailInfoMaster";
import { DataCardMaster, dataMaster } from "@/data/dataMaster";
import Container from "../../Container";
import TextBody from "../../TextBody";
import FormGetUserData from "../../forms/FormGetUserData";
import WhatsAppLink from "../../Links/WhatsAppLink";
import SubtitlePoint from "../../SubtitlePoint";
import IconLoction from "@/assets/icons/icon_location.svg";
import IconPrice from "@/assets/icons/icon_price.svg";
import IconTime from "@/assets/icons/icon_time.svg";

function SectionDetailInfoMaster({ page }: Pick<DataCardMaster, "page">) {
  const { subtitle, imageUrl, title, location, describe } =
    dataDetailInfoMaster[page];
  const { prise, duration } = dataMaster.find((item) => item.page === page)!;

  return (
    <section className="py-6" aria-labelledby="master-detail-title">
      <Container className="relative min-h-[588px]">
        <WhatsAppLink place="hero_section" className="-top-1 md:-top-1" />
        <SubtitlePoint text={subtitle} />
        <div className="mt-6 md:mt-10 xl:flex xl:justify-between">
          <Image
            src={imageUrl}
            alt={title}
            width={588}
            height={588}
            className="mx-auto rounded-3xl object-cover md:h-[588px] md:w-[688px] xl:mx-0 xl:w-[588px]"
          />
          <article className="mt-6 flex flex-col justify-center gap-6 xl:mt-0 xl:max-w-[488px]">
            <h1 id="master-detail-title" className="textH3 text-text">
              {title}
            </h1>
            <ul className="flex flex-col gap-3">
              <li className="btn_text text-grey_stroke_logo flex gap-2">
                <IconPrice /> <span>{prise} € за особу</span>
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
              {page !== "wino" ? (
                <li>
                  <p className="btn_text text-text">
                    У вартість входить келих Prosecco.
                  </p>
                </li>
              ) : null}
            </ul>
            <FormGetUserData
              className="mt-0"
              service={title}
              prise={prise}
              imageUrl={imageUrl}
            />
          </article>
        </div>
      </Container>
    </section>
  );
}

export default SectionDetailInfoMaster;
