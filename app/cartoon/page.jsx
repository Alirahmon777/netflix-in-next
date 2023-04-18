"use client";
import React, { useContext } from "react";
import { SwiperCartoon, SwiperRecomendition } from "../components";
import Pagination from "../utils/Pagination";
import Link from "next/link";
import Image from "next/image";
import { CartoonContext } from "../context/CartoonContext";
import { LoadingContext } from "../context/loadingContext";
import imageLoader from "../utils/imageLoader";

const Cartoon = () => {
  const { cartoon, setCartoon } = useContext(CartoonContext);
  const { loading } = useContext(LoadingContext);

  return (
    <section className="text-[#e5e5e5]">
      <div className="container">
        <ul className="flex flex-wrap gap-4 mb-10 justify-center">
          {cartoon?.results?.map(
            ({ poster_path, title, original_title, id }, i) =>
              loading ? (
                <li
                  className={
                    "relative transition-all w-[280px] h-[300px] films-item cursor-pointer rounded-lg overflow-hidden"
                  }
                  key={i}
                >
                  {imageLoader()}
                </li>
              ) : (
                <li
                  className={
                    "relative transition-all films-item cursor-pointer rounded-lg overflow-hidden"
                  }
                  key={i}
                  title={original_title}
                >
                  <Link href={`/films-cartoons/${id}`}>
                    <Image
                      className="hover:scale-105 transition-all h-auto hover:opacity-30"
                      width={280}
                      height={300}
                      src={`https://image.tmdb.org/t/p/original${poster_path}`}
                      alt={original_title}
                    />
                    <p className="z-10 text-2xl absolute w-full transition-all bottom-0 films-text opacity-0 pointer-events-none text-center">
                      {title}
                    </p>
                  </Link>
                </li>
              )
          )}
        </ul>

        <Pagination
          query={"&sort_by=popularity.desc&with_genres=16"}
          dataType={"discover/movie"}
          dataSetState={setCartoon}
          itemsPerPage={cartoon?.total_pages}
        />

        <h2 className="text-[26px] font-['Medium']] mb-2 mt-5">
          Recommendations
        </h2>
        <SwiperRecomendition />

        <h2 className="text-[26px] font-['Medium']] mb-2 mt-5">Cartoon</h2>
        <SwiperCartoon />
      </div>
    </section>
  );
};

export default Cartoon;
