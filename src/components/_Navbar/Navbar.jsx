"use client";
import React, { useState } from "react";
import Horoscopes from "./Horoscopes";
import LanguageDD from "./LanguageDD";
import Link from "next/link";
import PhoneVerificationForm from "../_PhoneVerification/PhoneVerification";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPhoneVerificationVisible, setIsPhoneVerificationVisible] =
    useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePhoneVerificationPopup = () => {
    setIsPhoneVerificationVisible(!isPhoneVerificationVisible);
  };

  return (
    <nav className=" bg-white border-gray-200 py-2 md:py-4 shadow-2xl shadow-[#ffffff]dark:bg-[#000000] ">
      <div className="bg-white flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link href="/" className="flex items-center">
          <img
            src="https://astrotalk.s3.amazonaws.com/assets/images/astrotalk-logo.webp"
            className="h-8 ml-10 absolute sm:h-9 lg:ml-0 "
            alt="Astrotalk Logo"
          />
          <span className="px-20 self-center text-[20px] lg:text-[35px] font-semibold whitespace-nowrap dark:text-black">
            Astrotalk
          </span>
        </Link>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <button
            onClick={handlePhoneVerificationPopup}
            type="button"
            className="relative  text-black bg-[#F0DF20] hover:bg-[#000000] hover:shadow-lg focus:ring-4 focus:ring-[#F0DF20] font-medium rounded-[20px] text-md px-3 py-0 lg:px-8  lg:py-0 sm:mr-2 lg:mr-0 dark:bg-[#F0DF20] dark:hover:bg-[#F0DF20] focus:outline-none dark:focus:ring-[#F0DF20]"
          >
            Login
          </button>
          {isPhoneVerificationVisible && <PhoneVerificationForm />}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex absolute items-center left-0 p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isOpen ? "hidden" : "block"} w-6 h-6`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} w-6 h-6`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <div className="container relative ">
            <ul className="flex  flex-col mt-4 font-medium lg:flex-row lg:space-x-8  lg:mt-0 m-4">
              <li>
                <Link
                  href="/FreeKundli"
                  className="block  py-2 pl-3 pr-4 text-white bg-[black] rounded lg:bg-transparent lg:text-white lg:p-0 dark:text-black lg:dark:hover:text-[#FFCD57]"
                  aria-current="page"
                >
                  Free Kundli
                </Link>
              </li>
              <li>
                <Link
                  href="/KundliMatching"
                  className="block py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-[#FFCD57] dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Kundli Matching
                </Link>
              </li>
              <li>
                <Horoscopes />
              </li>
              <li>
                <LanguageDD />
              </li>
            </ul>
            <ul className="  flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-[#FFCD57] dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Chat with Astrologer
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-[#FFCD57] dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Talk to Astrologer
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-[#FFCD57] dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Book a Pooja
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-[#FFCD57] dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Astromall
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-[#FFCD57] dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
