"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import NavLink from "../../utils/NavLink";
import Link from "next/link";

const Header = () => {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setOffset(true);
      } else {
        setOffset(false);
      }
    });
  }, []);

  const searchHandler = () => {
    setIsSearch(!isSearch);
  };

  return (
    <header
      className={
        offset
          ? "py-[26px] sticky z-50 top-0 transition-all backdrop-blur-2xl"
          : `py-[26px] bg-[#141414] transition-all`
      }
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-[50px]">
            <Link href="/home">
              <Image
                width={15}
                height={15}
                className="!w-auto !h-auto"
                src="/svgs/NetflixLogoSvg.svg"
                alt=""
              />
            </Link>
            <ul className="items-center text-[#E5E5E5] gap-5 text-sm font-['Medium'] hidden md:flex">
              <li>
                <NavLink
                  className={"opacity-60 hover:opacity-100"}
                  activeClass={"text-white font-['Bold']"}
                  href={"/home"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"opacity-60 hover:opacity-100"}
                  activeClass={"text-white font-['Bold']"}
                  href={"/series"}
                >
                  Series & TV shows
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="opacity-60 hover:opacity-100"
                  activeClass="text-white font-['Bold']"
                  href={"/films"}
                >
                  Films
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"opacity-60 hover:opacity-100"}
                  activeClass={"text-white font-['Bold']"}
                  href={"/cartoon"}
                >
                  Cartoon
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"opacity-60 hover:opacity-100"}
                  activeClass={"text-white font-['Bold']"}
                  href={"/my-list"}
                >
                  My List
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex">
            <ul className="flex text-white items-center gap-5">
              <li className="cursor-pointer flex gap-5">
                <form action="">
                  <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={`rounded-xl p-1 text-black pl-2 text-sm outline outline-red-500 transition-all ${
                      isSearch
                        ? "translate-x-0 opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none translate-x-12"
                    }`}
                  />
                </form>
                <button onClick={searchHandler}>
                  {!isSearch ? (
                    <Image
                      width={1}
                      height={1}
                      src="/svgs/Search.svg"
                      className="pointer-events-none !w-auto !h-auto"
                      alt="search icon"
                    />
                  ) : (
                    <Image
                      width={15}
                      height={15}
                      src="/svgs/close.svg"
                      className="pointer-events-none !w-auto !h-auto"
                      alt="close icon"
                    />
                  )}
                </button>
              </li>
              <li className="cursor-pointer">
                <p>KIDS</p>
              </li>
              <li className="cursor-pointer">
                <Image
                  width={15}
                  height={15}
                  className="!w-auto !h-auto"
                  src="/svgs/GiftBox.svg"
                  alt="GiftBox"
                />
              </li>
              <li className="cursor-pointer">
                <Image
                  width={15}
                  height={15}
                  className="!w-auto !h-auto"
                  src="/svgs/NotificationBell.svg"
                  alt="NotificationBell icon"
                />
              </li>
              <li className="flex items-center gap-[10px] cursor-pointer">
                <Image
                  width={32}
                  height={32}
                  src="/imgs/ProfileIMG.png"
                  alt="Profile image"
                />
                <Image
                  width={15}
                  height={15}
                  className="!w-auto !h-auto"
                  src="/svgs/DownArrow.svg"
                  alt="arrow down"
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
