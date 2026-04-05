import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";

function OpenRomaSection() {
  return (
    <section
      className="bg-blue py-10 xl:py-20"
      aria-labelledby="open-roma-title"
    >
      <Container className="flex flex-col justify-center gap-3">
        <SubtitlePoint
          text="ВІДКРИЙ ВІЧНЕ МІСТО РАЗОМ З НАМИ"
          className="justify-center"
        />
        <h2
          id="open-roma-title"
          className="textH2 mx-auto max-w-[846px] text-center"
        >
          Мрії про Рим та справжню італійську кухню стають реальністю.
          Відкривайте Італію з душею разом з нами
        </h2>
      </Container>
    </section>
  );
}

export default OpenRomaSection;
