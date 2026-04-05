"use client";

import Image from "next/image";
import { useState } from "react";

function VideoIntroduction() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleMute = () => {
    setIsMuted((prev) => !prev);
  };

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="rounded-2xl">
      <div className="relative min-h-40 w-full min-w-24 rounded-2xl">
        <button
          onClick={handleClose}
          type="button"
          aria-label="Закрити відео-привітання"
          className="1xl:top-3 1xl:right-3 bg-yellow_main hover:bg-hover absolute top-1 right-1 z-10 cursor-pointer rounded-full transition-all duration-300 md:top-2 md:right-2"
        >
          <Image
            src="/icons/closemobile.svg"
            width={36}
            height={36}
            alt=""
            className="h-6 w-6 md:h-9 md:w-9"
          />
        </button>
        <video
          onClick={handleMute}
          autoPlay
          loop
          playsInline
          muted={isMuted}
          preload="auto"
          aria-label="Відео-привітання Cucina Roma"
          src="/video/IMG_3838.mp4"
          className="1xl:w-48 z-0 w-32 rounded-2xl md:w-40"
        ></video>
        <div className="absolute bottom-2 left-0 flex w-full justify-center">
          <a
            href="https://wa.me/393249888194"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Поставити запитання в WhatsApp"
            className="mx-auto w-[95%] rounded-2xl bg-black p-0.5 text-center font-sans text-[14px] text-white transition-all duration-300 hover:bg-white hover:text-black md:p-1 md:text-base"
          >
            Задати питання
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoIntroduction;
