"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = {
  mobile: [
    {
      src: "/images/360_hero_1.jpg",
      alt: "Кулінарний майстер-клас Cucina Roma в центрі Рима",
    },
    {
      src: "/images/360_hero_2.jpg",
      alt: "Україномовний гастрономічний досвід у Римі",
    },
    {
      src: "/images/360_hero_3.jpg",
      alt: "Гості Cucina Roma на кулінарному майстер-класі",
    },
    {
      src: "/images/360_hero_4.jpg",
      alt: "Італійська кухня та атмосфера Рима на події Cucina Roma",
    },
    {
      src: "/images/360_hero_5.jpg",
      alt: "Гастрономічні враження Cucina Roma в Римі",
    },
  ],
  tablet: [
    {
      src: "/images/768_hero_1.jpg",
      alt: "Кулінарний майстер-клас Cucina Roma в центрі Рима",
    },
    {
      src: "/images/768_hero_2.jpg",
      alt: "Україномовний гастрономічний досвід у Римі",
    },
    {
      src: "/images/768_hero_3.jpg",
      alt: "Гості Cucina Roma на кулінарному майстер-класі",
    },
    {
      src: "/images/768_hero_4.jpg",
      alt: "Італійська кухня та атмосфера Рима на події Cucina Roma",
    },
    {
      src: "/images/768_hero_5.jpg",
      alt: "Гастрономічні враження Cucina Roma в Римі",
    },
  ],
  desktop: [
    {
      src: "/images/hero_foto1.jpg",
      alt: "Кулінарний майстер-клас Cucina Roma в центрі Рима",
    },
    {
      src: "/images/hero_foto2.jpg",
      alt: "Україномовний гастрономічний досвід у Римі",
    },
    {
      src: "/images/hero_foto3.jpg",
      alt: "Гості Cucina Roma на кулінарному майстер-класі",
    },
    {
      src: "/images/hero_foto4.jpg",
      alt: "Італійська кухня та атмосфера Рима на події Cucina Roma",
    },
    {
      src: "/images/hero_foto5.jpg",
      alt: "Гастрономічні враження Cucina Roma в Римі",
    },
  ],
};

export default function HeroSlider() {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setDevice("mobile");
      else if (window.innerWidth <= 1024) setDevice("tablet");
      else setDevice("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentSlides = slides[device];

  return (
    <div className="pb-7">
      <Swiper
        spaceBetween={30}
        effect="fade"
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper h-[680px] md:max-h-[80vh]"
      >
        {currentSlides.map((slide) => (
          <SwiperSlide key={slide.src}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="max-h-[100vh] rounded-4xl object-cover"
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
