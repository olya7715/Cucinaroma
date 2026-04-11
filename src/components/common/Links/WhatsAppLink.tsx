import WhatsUpIcon1 from "@/assets/icons/whatsapp1.svg";
import WhatsUpIcon from "@/assets/icons/whatsapp.svg";
import { trackClarityEvent } from "@/utils/clarity";
import { cn } from "@/utils/cn";

type Props = { place: "footer" | "hero_section"; className?: string };

function WhatsAppLink({ place, className }: Props) {
  return (
    <a
      href="https://wa.me/393249888194"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написати в WhatsApp Cucina Roma"
      onClick={() => trackClarityEvent(`whatsapp_click_${place}`)}
      className={cn(
        "inline-flex h-fit w-fit items-center justify-center",
        place === "hero_section" &&
          "absolute -top-6 right-[10px] z-0 h-12 w-12 md:-top-14 md:right-16 xl:right-28",
        className,
      )}
    >
      {place === "hero_section" ? (
        <WhatsUpIcon1 className="h-12 w-12 transition-all duration-300 hover:scale-[1.05]" />
      ) : (
        <WhatsUpIcon className="fill-yellow_main h-8 w-8 transition-all duration-500 hover:fill-hover active:fill-pressed" />
      )}
    </a>
  );
}

export default WhatsAppLink;
