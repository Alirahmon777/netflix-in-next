"use client";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import Link from "next/link";
import Image from "next/image";
import { PopularContext } from "../context/popularContext";

const Hero = () => {
  const { popular } = useContext(PopularContext);

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      speed={1000}
      autoplay={{ delay: 15000, disableOnInteraction: false }}
      effect="fade"
      autoHeight={true}
      loop
    >
      {popular.results?.map(
        (
          { original_title, backdrop_path, overview, title, release_date, id },
          i
        ) => (
          <SwiperSlide key={i}>
            <section
              className="w-full h-[1000px] bg-cover"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
              }}
            >
              <div className="w-full h-full bg-[rgba(0,0,0,0.4)] pb-5 shadow-inner">
                <div className="container">
                  <div className="text-white flex flex-col gap-[15px] w-[636px] pt-[180px]">
                    <div>
                      <h1 className="text-[85px] font-['Bold'] leading-[70px] inline relative">
                        {title}
                      </h1>
                    </div>
                    <div className="flex gap-2 items-center mt-7">
                      <p className="text-3xl ">{release_date}</p>
                    </div>
                    <p className="z-10 text-[26px]">{overview}</p>
                    <div className="flex gap-4">
                      <Link
                        href={`/films-cartoons/${id}/trailer`}
                        className="py-[15px] px-[30px] bg-white items-center text-[22px] font-['Bold'] gap-5 rounded-[4px] flex text-black"
                      >
                        <Image
                          width={100}
                          height={100}
                          title={original_title + "play"}
                          src={"/svgs/play.svg"}
                          alt="play icon"
                        />
                        Play
                      </Link>
                      <Link
                        href={`/films-cartoons/${id}`}
                        className="py-[15px] px-[30px] bg-[rgba(255,255,255,0.3)] flex text-[22px] gap-5 rounded-[4px] font-['Bold'] text-white"
                      >
                        <Image
                          width={100}
                          height={100}
                          src={"svgs/detail.svg"}
                          alt="detail icon"
                        />
                        More information
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default Hero;
