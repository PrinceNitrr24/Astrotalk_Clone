import React, { useState, useEffect, useRef } from "react";

function Horoscopes() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleHover = () => {
    setIsHovered(true);
    setIsOpen(true);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <a
        href="#"
        className="py-2 pl-3 pr-10 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-[#FFCD57] dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={() => setIsHovered(false)}
      >
        Horoscopes
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
      </a>
      {isOpen && (
        <ul className="absolute  top-full w-[300px] bg-white shadow-lg rounded-lg mt-1 z-10">
          <li>
            <a
              href="#"
              className="px-4 py-2 text-gray-800 hover:bg-[#F0DF20] w-full block"
            >
              Horoscope 2024
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 text-gray-800 hover:bg-[#F0DF20] w-full block"
            >
              Today's Horoscopes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 text-gray-800 hover:bg-[#F0DF20] w-full block"
            >
              Weekly Horoscopes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 text-gray-800 hover:bg-[#F0DF20] w-full block"
            >
              Monthly Horoscopes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 text-gray-800 hover:bg-[#F0DF20] w-full block"
            >
              Yearly Horoscopes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 text-gray-800 hover:bg-[#F0DF20] w-full block"
            >
              Daily Horoscopes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 text-gray-800 hover:bg-[#F0DF20] w-full block"
            >
              Free Kundli
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 text-gray-800 hover:bg-[#F0DF20] w-full block"
            >
              Tomorrow's Horoscopes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 text-gray-800 hover:bg-[#F0DF20] w-full block"
            >
              Yesterday's Horoscopes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 text-gray-800 hover:bg-[#F0DF20] w-full block"
            >
              Chinese Horoscopes
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Horoscopes;
