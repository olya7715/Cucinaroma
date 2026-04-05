import Image from "next/image";
import { priseCertificate } from "@/data/priseCertificate";
import Container from "../../Container";
import SubtitlePoint from "../../SubtitlePoint";
import TextBody from "../../TextBody";
import FormGetUserData from "../../forms/FormGetUserData";
import TitleSection from "../../TitleSection";

function SectionCertificate() {
  return (
    <section
      className="bg-blue py-10 xl:py-20"
      aria-labelledby="certificate-title"
    >
      <Container>
        <SubtitlePoint text="подаруй враження" className="mb-6" />
        <div className="xl:flex xl:items-start xl:justify-between xl:gap-5">
          <Image
            className="top-0 mx-auto mb-20 xl:sticky xl:mb-0 xl:max-w-[588px]"
            src="/images/fotocertificato.jpg"
            width={888}
            height={600}
            alt="Подарунковий сертифікат Cucina Roma"
          />

          <div className="xl:max-w-[488px]">
            <TitleSection
              id="certificate-title"
              title="Ваш ідеальний подарунок"
              className="mb-7"
            />
            <ul className="flex w-full flex-col gap-3">
              <li>
                <TextBody>Подаруй незабутні емоції своїм близьким.</TextBody>
              </li>
              <li>
                <TextBody>
                  Здивуй рідних сертифікатом на майстер-клас із традиційної
                  італійської кухні. Під керівництвом неаполітанських шефів і за
                  підтримки україномовного гіда вони відкриють секрети
                  автентичних рецептів та відчують атмосферу сонячної Італії.
                </TextBody>
              </li>
              <li>
                <TextBody>Як це зробити?</TextBody>
                <TextBody>Обери сертифікат.</TextBody>
                <TextBody>Зроби оплату.</TextBody>
                <TextBody>Даруй яскраві спогади.</TextBody>
              </li>
              <li>
                <TextBody>
                  Це ідеальний подарунок, що дарує натхнення, кулінарні знання
                  та щирі усмішки.
                </TextBody>
              </li>
            </ul>
            <FormGetUserData
              prise={priseCertificate}
              imageUrl="/images/modal_certificato.jpg"
              title="Оформи замовлення"
              service="Замовлення сертифікату"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionCertificate;
