import { MouseEventHandler } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

type Props = {
  href: string;
  linkTitle: string;
  className?: string;
  type?: "nextLink" | "aLink";
  aria_label?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

function LinkYelow({
  href,
  linkTitle,
  className,
  type = "nextLink",
  aria_label,
  onClick,
}: Props) {
  if (type === "nextLink") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "bg-yellow_main btn_text text-main_blue active:bg-pressed hover:bg-hover w-full rounded-3xl px-8 py-2.5 text-[16px] leading-[150%] font-medium transition-all duration-300",
          className,
        )}
      >
        {linkTitle}
      </Link>
    );
  }
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "bg-yellow_main btn_text text-main_blue active:bg-pressed hover:bg-hover w-full rounded-3xl px-8 py-2.5 text-[16px] leading-[150%] font-medium transition-all duration-300",
        className,
      )}
      aria-label={aria_label}
    >
      {linkTitle}
    </a>
  );
}

export default LinkYelow;
