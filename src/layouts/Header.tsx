import Container from "@/components/common/Container";
import LinkYelow from "@/components/common/Links/LinkYelow";
import Logo from "@/components/common/Logo";

function Header() {
  return (
    <header className="bg-main_blue py-5">
      <Container className="flex items-center justify-between">
        <Logo type="header" />

        <LinkYelow
          linkTitle="Бронювати"
          href="/#master"
          type="nextLink"
          className="max-w-fit"
          aria_label="Перейти до секції вибору майстер-класу"
        />
      </Container>
    </header>
  );
}

export default Header;
