import React from "react";
import {
  Hero,
  SwiperCartoon,
  SwiperPopular,
  SwiperRecomendition,
} from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="z-10 text-white mt-4 pl-4">
          <h2 className="text-[26px] text-[#e5e5e5] font-['Medium']] mb-4">
            Popular on Netflix
          </h2>
          <SwiperPopular />
        </div>
        <div className="z-10 text-white mt-4 pl-4">
          <h2 className="text-[26px] text-[#e5e5e5] font-['Medium']] mb-4">
            Recommendations on Netflix
          </h2>
          <SwiperRecomendition />
        </div>
        <div className="z-10 text-white mt-4 pl-4">
          <h2 className="text-[26px] text-[#e5e5e5] font-['Medium']] mb-4">
            Cartoon on Netflix
          </h2>
          <SwiperCartoon />
        </div>
      </div>
    </>
  );
};

export default Home;
