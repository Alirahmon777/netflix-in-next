"use client";
import React, { useContext } from "react";
import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import Image from "next/image";
import { PopularContext } from "../../context/popularContext";

const SwiperPopular = () => {
  const { popular } = useContext(PopularContext);

  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={6}
      speed={1000}
      autoplay={{ delay: 15000, disableOnInteraction: false }}
      navigation
      loop
    >
      {popular?.results?.map(
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
                  <p className="z-10 text-white text-2xl absolute w-full transition-all bottom-0 films-text opacity-0 pointer-events-none text-center">
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

export default SwiperPopular;
