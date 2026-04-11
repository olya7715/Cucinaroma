import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

type Props = { className?: string; type: "header" | "footer" };

function Logo({ className, type }: Props) {
  const isHeader = type === "header";

  return (
    <Link
      href="/"
      aria-label="Cucina Roma - перейти на головну сторінку"
      className={cn(
        isHeader ? "block w-[150px] md:w-[211px]" : "block",
        className,
      )}
    >
      <Image
        src="/icons/logo_horiz.svg"
        width={211}
        height={67}
        alt="Cucina Roma"
        priority={isHeader}
        loading={isHeader ? "eager" : undefined}
        sizes="(max-width: 768px) 150px, 211px"
        className="h-auto w-full"
      />
    </Link>
  );
}

export default Logo;
