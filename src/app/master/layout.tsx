import SectionInstagram from "@/components/common/sections/SectionInstagram/SectionInstagram";

type Props = { children: React.ReactNode };

function Layout({ children }: Props) {
  return (
    <>
      {children}

      <SectionInstagram />
    </>
  );
}

export default Layout;
