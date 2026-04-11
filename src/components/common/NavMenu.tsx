import Link from "next/link";
import { cn } from "@/utils/cn";

type Props = {
  className?: string;
  type: "header" | "mobilemenu" | "footer";
  onClick?: () => void;
};

function NavMenu({ className, type, onClick }: Props) {
  return (
    <nav className={cn(className)} aria-label="Основна навігація">
      <NavLink onClick={onClick} href="/#about" type={type} linkName="Про нас" />

      <NavLink
        onClick={onClick}
        href="/#master"
        type={type}
        linkName="Майстер-класи"
      />
      {type === "footer" ? (
        <NavLink onClick={onClick} href="/faq" type={type} linkName="FAQ" />
      ) : null}
    </nav>
  );
}

export default NavMenu;

type PropsLink = {
  href: string;
  linkName: string;
} & Pick<Props, "type" | "onClick">;

function NavLink({ href, linkName, type, onClick }: PropsLink) {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={cn(
        "leading-[150%] font-medium tracking-[0.01em] transition-all duration-500 hover:text-hover active:text-pressed",
        type === "header" && "px-4 py-3 text-[14px] text-white uppercase",
        type === "mobilemenu" &&
          "px-4 py-3 text-[14px] leading-[130%] uppercase md:text-[14px]",
        type === "footer" && "tracking-wide text-white",
      )}
    >
      {linkName}
    </Link>
  );
}
