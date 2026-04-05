import InstagramIcon from "@/assets/icons/instagram.svg";
import { LINK_INSTAGRAM } from "@/data/linkInstagram";
import { cn } from "@/utils/cn";

type Props = { isIcon?: boolean; className?: string };

function InstagramLink({ isIcon = true, className }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Перейти на Instagram сторінку Cucina Roma"
      href={LINK_INSTAGRAM}
      className={cn(
        "btn_text text-main_blue hover:text-hover inline-flex h-fit w-fit items-center justify-center transition-all duration-300",
        className,
      )}
    >
      {isIcon ? (
        <InstagramIcon className="fill-yellow_main stroke-main_blue hover:fill-hover active:fill-pressed h-8 w-8 transition-all duration-500" />
      ) : (
        "@guide_roma_transfer"
      )}
    </a>
  );
}

export default InstagramLink;
