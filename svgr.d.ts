declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: string;
  export default content;
}

declare module "swiper/css";
declare module "swiper/css/effect-fade";
declare module "swiper/css/pagination";
