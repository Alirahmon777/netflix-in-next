"use client";
import Image from "next/image";
import React, { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <footer className="bg-[#141414] py-5 z-10">
      <div className="container">
        <div className="flex flex-col gap-5">
          <ul className="flex gap-5 items-center">
            <li>
              <a target="_blank" href="https://www.facebook.com/netflix/">
                <Image
                  
                  width={15}
                  height={15}
                  className="w-auto h-auto"
                  src="/svgs/facebook.svg"
                  alt="facebook icon"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/netflix/">
                <Image
                 
                  width={15}
                  height={15}
                  className="w-auto h-auto"
                  src="/svgs/instagram.svg"
                  alt="instagram icon"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/netflix">
                <Image
                  
                  width={15}
                  height={15}
                  className="w-auto h-auto"
                  src="/svgs/twitter.svg"
                  alt="twitter icon"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.youtube.com/netflix">
                <Image
                  
                  width={15}
                  height={15}
                  className="w-auto h-auto"
                  src="/svgs/youtube.svg"
                  alt="youtube icon"
                />
              </a>
            </li>
          </ul>
          <div className="flex text-[#808080] text-[13px] gap-[9rem]">
            <ul className="flex flex-col gap-[0.9rem]">
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="https://help.netflix.com/support/412"
                >
                  FAQ
                </a>
              </li>
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="http://ir.netflix.com/"
                >
                  Investor Relations
                </a>
              </li>
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="https://www.netflix.com/watch"
                >
                  Ways to Watch
                </a>
              </li>
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="https://help.netflix.com/legal/corpinfo"
                >
                  Corporate Information
                </a>
              </li>
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="https://www.netflix.com/uz/browse/genre/839338"
                >
                  Netflix Originals
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-[0.9rem]">
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="https://help.netflix.com/"
                >
                  Help Center
                </a>
              </li>
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="https://jobs.netflix.com/jobs"
                >
                  Jobs
                </a>
              </li>
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="https://help.netflix.com/legal/termsofuse"
                >
                  Terms of Use
                </a>
              </li>
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="https://help.netflix.com/contactus"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-[0.9rem]">
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="https://www.netflix.com/youraccount"
                >
                  Account
                </a>
              </li>
              <li className="hover:underline transition-all cursor-pointer">
                <a target="_blank" className="block" href="#">
                  Redeem Gift Cards
                </a>
              </li>
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="https://help.netflix.com/legal/privacy"
                >
                  Privacy
                </a>
              </li>
              <li className="hover:underline transition-all cursor-pointer">
                <a target="_blank" className="block" href="https://fast.com/">
                  Speed Test
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-[0.9rem]">
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="https://media.netflix.com/"
                >
                  Media Center
                </a>
              </li>
              <li className="hover:underline transition-all cursor-pointer">
                <a target="_blank" className="block" href="#">
                  Buy Gift Cards
                </a>
              </li>
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="https://www.netflix.com/uz/#"
                >
                  Cookie Preferences
                </a>
              </li>
              <li className="hover:underline w-full transition-all cursor-pointer">
                <a
                  target="_blank"
                  className="block"
                  href="https://help.netflix.com/legal/notices"
                >
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>
          <div className="flex z-10">
            <div className="flex items-center relative z-10 bg-[#0F0F0F] px-3 py-1 border rounded-lg">
              <Image
                
                width={15}
                height={15}
                className="w-auto h-auto"
                src="/svgs/lang.svg"
                alt="language icon z-10"
              />
              <div className="flex items-center">
                <form
                  action=""
                  className="w-full px-[2rem]"
                  onClick={openHandler}
                >
                  <select
                    name="lang"
                    id="language"
                    className="bg-transparent absolute cursor-pointer top-0 left-0 w-full text-center text-white appearance-none  outline-none"
                  >
                    <option value="uz" className="text-black">
                      Uzbek
                    </option>
                    <option value="en" className="text-black">
                      English
                    </option>
                    <option value="ru" className="text-black">
                      Russian
                    </option>
                  </select>
                </form>
                <Image
                  
                  src="/svgs/DownArrow.svg"
                  width={14}
                  height={15}
                  className={
                    isOpen
                      ? "pt-1 pl-1 rotate-180 pointer-events-none h-auto"
                      : "pointer-events-none pt-1 pl-1"
                  }
                  alt="arrow dwon icon"
                />
              </div>
            </div>
          </div>
          <p className="text-[#e2e2e2]">Netflix Uzbekistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
