import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-black flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8">
          <div className="text-7xl text-red-500 font-dark font-extrabold mb-8">
            404
          </div>
          <p className="text-2xl md:text-3xl text-white font-light leading-normal mb-8">
            Sorry we couldn&lsquo;t find the page you&lsquo;re looking for
          </p>
          <Link
            href={"/home"}
            className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-red-600 active:bg-orange-400 hover:bg-orange-500"
          >
            back to homepage
          </Link>
        </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <Image
            src="/imgs/404.png"
            width={570}
            height={480}
            alt="Page not found"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
