import { cn } from "@/utils/cn";

type Props = { className?: string; title: string; id?: string };

function TitleSection({ className, title, id }: Props) {
  return (
    <h2 id={id} className={cn("textH1 text-main_blue", className)}>
      {title}
    </h2>
  );
}

export default TitleSection;
