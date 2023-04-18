"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper";
import { CartoonContext } from "../../context/CartoonContext";
export const metadata = {
  title: "Netflix Узбекистан — Cartoon",
};
const SwiperCartoon = () => {
  const { cartoon } = useContext(CartoonContext);

  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={6}
      speed={1100}
      autoplay={{ delay: 20000, disableOnInteraction: false }}
      navigation
      loop
    >
      {cartoon?.results?.map(
        ({ original_title, title, poster_path, id }, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="relative transition-all films-post cursor-pointer rounded-lg overflow-hidden">
                <Link href={`/films-cartoons/${id}`}>
                  <Image
                    width={100}
                    height={100}
                    className="rounded-lg transition-all hover:opacity-30 w-full h-full"
                    sizes="(max-width: 1250px) 100%, (max-height: 1250px) 100%"
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={original_title}
                  />
                  <p className="z-10 text-2xl text-white absolute w-full transition-all bottom-0 films-text opacity-0 pointer-events-none text-center">
                    {title}
                  </p>
                </Link>
              </div>
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
};

export default SwiperCartoon;
