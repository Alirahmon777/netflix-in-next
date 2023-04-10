"use client";
import React, { useContext } from "react";

import Pagination from "../utils/Pagination";
import Link from "next/link";
import Image from "next/image";
import { SwiperCartoon, SwiperRecomendition } from "../components";
import { SeriesContext } from "../context/SeriesContext";

const Series = () => {
  const { series, setSeries } = useContext(SeriesContext);

  return (
    <section>
      <div className="container">
        <ul className="flex flex-wrap gap-4 mb-10 justify-center">
          {series?.results?.map(
            ({ poster_path, original_name, name, id, backdrop_path }, i) => (
              <li
                className={
                  "relative transition-all films-item cursor-pointer rounded-lg overflow-hidden"
                }
                key={i}
                title={original_name}
              >
                <Link href={`/series/${id}`}>
                  <Image
                    className="hover:scale-110 transition-all h-full hover:opacity-30"
                    width={280}
                    height={300}
                    src={`https://image.tmdb.org/t/p/original${
                      poster_path ? poster_path : backdrop_path
                    }`}
                    alt={name}
                  />
                  <p className="z-10 text-3xl text-white absolute w-full transition-all bottom-0 films-text opacity-0 pointer-events-none text-center">
                    {name}
                  </p>
                </Link>
              </li>
            )
          )}
        </ul>
        <Pagination
          dataType={"discover/tv"}
          dataSetState={setSeries}
          itemsPerPage={series?.total_pages}
        />
        <h2 className="text-[26px] text-[#e5e5e5] font-['Medium']] mt-5 mb-2">
          Recommendations
        </h2>
        <SwiperRecomendition />

        <h2 className="text-[26px] text-[#e5e5e5] font-['Medium']] mt-5 mb-2">
          Cartoon
        </h2>
        <SwiperCartoon />
      </div>
    </section>
  );
};

export default Series;
