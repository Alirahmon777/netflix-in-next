"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { API_KEY, api } from "../../utils/api";
import { SwiperCartoon, SwiperPopular } from "../../components";

const SingleFilm = ({ params }) => {
  const [single, setSingle] = useState({});
  const { id } = params;
  const router = useRouter();
  const goBack = () => router.back();
  const {
    vote_average,
    backdrop_path,
    release_date,
    genres,
    title,
    overview,
    original_title,
    original_language,
  } = single;

  useEffect(() => {
    api()
      .get(`movie/${id}?api_key=${API_KEY}`, {
        cache: "force-cache",
      })
      .then(({ data }) => setSingle(data));
  }, [id]);

  return (
    <>
      <section
        className="w-full h-[1000px] bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        }}
      >
        <div className="w-full h-full bg-[rgba(0,0,0,0.3)] pb-5 shadow-[0_35px_60px_-15px_rgba(0,0,0)]">
          <div className="container">
            <div className="text-white flex flex-col gap-[15px] w-[638px] pt-[120px]">
              <div className="">
                <button
                  onClick={goBack}
                  className="px-5 mt-10 cursor-pointer py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-red-600 active:bg-orange-400 hover:bg-orange-500"
                >
                  Go Back
                </button>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-4 uppercase my-4">
                  {genres == null
                    ? null
                    : genres?.map((genre, i) => (
                        <p key={i} className="border-x-2 px-2">
                          {genre.name}
                        </p>
                      ))}
                </div>
                <h1 className="text-[64px] font-['Bold'] inline relative leading-[70px] mb-3">
                  {title}
                </h1>
                <h2 className="text-[24px] mb-3">
                  Original Title - {original_title}
                </h2>
                <div className="flex">
                  <p className="py-1 px-3 font-['Bold'] border rounded-full">
                    16+
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <div className="flex items-center gap-2 border-r-2 pr-2">
                  <Image
                    width={30}
                    height={30}
                    src={"/svgs/star.svg"}
                    className="align-middle pb-1"
                    alt="star"
                  />
                  <p className="text-white text-xl">
                    {Math.round(vote_average)}
                  </p>
                </div>
                <p className="text-xl border-r-2 pr-2">{release_date}</p>
                <p className="text-xl">
                  Language:
                  <span className="uppercase pl-3">{original_language}</span>
                </p>
              </div>
              <p className="z-10 text-lg">{overview}</p>
              <div className="flex gap-4">
                <Link
                  href={`films-cartoons/${id}/trailer`}
                  className="py-[15px] px-[30px] bg-[#E50914] items-center text-[22px] font-['Bold'] gap-5 rounded-[4px] flex text-white"
                >
                  <Image
                    width={30}
                    height={30}
                    src={"/svgs/play-white.svg"}
                    className="w-[20px]"
                    alt="play icon"
                  />
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-20">
        <div className="z-10 text-white mt-4 pl-4">
          <h2 className="text-[26px] text-[#e5e5e5] font-['Medium']] mb-4">
            Cartoon on Netflix
          </h2>
          <SwiperCartoon />
        </div>
        <div className="z-10 text-white mt-4 pl-4">
          <h2 className="text-[26px] text-[#e5e5e5] font-['Medium']] mb-4">
            Popular on Netflix
          </h2>
          <SwiperPopular />
        </div>
      </div>
    </>
  );
};

export default SingleFilm;
