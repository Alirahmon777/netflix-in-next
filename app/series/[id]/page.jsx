"use client";
import { useEffect, useState } from "react";
import { useRouter, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { api } from "../../utils/api";
import { SwiperCartoon, SwiperPopular } from "../../components";

export default function Page({ params }) {
  const [singleSeries, SetSingleSeries] = useState({});
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = params;

  const goBack = () => router.back();

  const {
    vote_average,
    backdrop_path,
    first_air_date,
    name,
    homepage,
    overview,
    genres,
    type,
    original_name,
    original_language,
  } = singleSeries;

  useEffect(() => {
    api()
      .get(`tv/${id}?api_key=05078d9c9a7971d554f489377ba90d87`, {
        cache: "force-cache",
      })
      .then(({ data }) => {
        SetSingleSeries(data);
        if (data.status == 404) {
          notFound();
        }
      });
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
              <h2 className="text-3xl text-white flex w-full uppercase">
                type: <span className="text-center block w-full">{type}</span>
              </h2>
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
                  {name}
                </h1>
                <h2 className="text-[24px] mb-3">
                  Original Title - {original_name}
                </h2>
                <div className="flex">
                  <p className="py-1 px-3 font-['Bold'] border rounded-full">
                    16+
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center mt-4">
                {vote_average ? (
                  <div className="flex items-center gap-2 border-r-2 pr-2">
                    <Image
                      width={15}
                      height={15}
                      src="/svgs/star.svg"
                      className="w-[30px] h-[30px] align-middle pb-1"
                      alt="star"
                    />
                    <p className="text-white text-xl">
                      {Math.round(vote_average)}
                    </p>
                  </div>
                ) : null}
                <p className="text-xl border-r-2 pr-2">{first_air_date}</p>
                <p className="text-xl">
                  Language:
                  <span className="uppercase pl-3">{original_language}</span>
                </p>
              </div>
              <p className="z-10 text-lg">{overview}</p>
              <div className="flex gap-4">
                <Link
                  href={`/series/${id}/trailer`}
                  className="py-[15px] px-[30px] bg-[#E50914] items-center text-[22px] font-['Bold'] gap-5 rounded-[4px] flex text-white"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/svgs/play-white.svg"
                    className="w-[20px] h-auto"
                    alt="play icon"
                  />
                  Watch
                </Link>
                {homepage ? (
                  <a
                    href={homepage}
                    target="_blank"
                    className="py-[15px] px-[30px] bg-[rgba(250,250,250,0.4)] items-center text-[22px] font-['Bold'] gap-5 rounded-[4px] flex text-white"
                  >
                    <Image
                      width={15}
                      height={15}
                      src="/svgs/world.svg"
                      className="w-[30px] h-auto"
                      alt="world url icon"
                    />
                    Web Site
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-10">
        <div className="z-10 text-white mt-5 pl-4">
          <h2 className="text-[26px] text-[#e5e5e5] font-['Medium']] mb-4">
            Cartoon on Netflix
          </h2>
          <SwiperCartoon />
        </div>
        <div className="z-10 text-white mt-5 pl-4">
          <h2 className="text-[26px] text-[#e5e5e5] font-['Medium']] mb-4">
            Popular on Netflix
          </h2>
          <SwiperPopular />
        </div>
      </div>
    </>
  );
}
