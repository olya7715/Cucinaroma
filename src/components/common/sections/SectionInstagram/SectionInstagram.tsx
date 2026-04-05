import Container from "../../Container";
import InstagramLink from "../../Links/InstagramLink";
import TitleSection from "../../TitleSection";

function SectionInstagram() {
  return (
    <section className="py-10 xl:py-20" aria-labelledby="instagram-title">
      <Container>
        <TitleSection id="instagram-title" title="Наш інстаграм" />
        <InstagramLink isIcon={false} />
        <ul className="mt-2.5 flex justify-around gap-5">
          <li
            style={{
              background: "url('/images/Instagram_1.PNG')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="relative h-[700px] w-[488px] overflow-hidden rounded-3xl md:max-h-[578px] xl:max-h-[458px]"
          >
            <InstagramLink className="absolute right-4 bottom-4" />
          </li>
          <li
            style={{
              background: "url('/images/Instagram_2.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="relative hidden h-[700px] w-[488px] overflow-hidden rounded-3xl md:block md:max-h-[578px] xl:max-h-[458px]"
          >
            <InstagramLink className="absolute right-4 bottom-4" />
          </li>
          <li
            style={{
              background: "url('/images/Instagram_3.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="relative hidden h-[700px] w-[488px] overflow-hidden rounded-3xl md:max-h-[578px] xl:block xl:max-h-[458px]"
          >
            <InstagramLink className="absolute right-4 bottom-4" />
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default SectionInstagram;
