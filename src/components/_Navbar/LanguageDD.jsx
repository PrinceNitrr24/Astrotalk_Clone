"use client";
import React, { useState } from "react";
import Link from "next/link"

function LanguageDD() {
  const [language, setLanguage] = useState("Eng");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    // Here you can implement the logic to change the language of your entire application
  };

  return (
    <div className="relative">
      <Link
        href="#"
        className="block py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-[#FFCD57] dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        {language}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute top-1/2 right-[-18px] transform -translate-y-1/2 rounded-half text-black"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          {/* Triangle */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 9l4 4 4-4"
          />
        </svg>
      </Link>
      {dropdownOpen && (
        <ul
          className="absolute top-full left-0 bg-white shadow-md rounded-lg mt-1 z-10"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <li>
            <button
              onClick={() => changeLanguage("Eng")}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
            >
              Eng
            </button>
          </li>
          <li>
            <button
              onClick={() => changeLanguage("हिन्दी")}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
            >
              हिन्दी
            </button>
          </li>
          <li>
            <button
              onClick={() => changeLanguage("Urdu")}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
            >
              Urdu
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default LanguageDD;
