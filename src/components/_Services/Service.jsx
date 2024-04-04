"use client";
import React, { useState } from "react";
import Image from "next/image";

const Service = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalDivs = 7;
  const divsPerPage = 4;

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    const totalPages = Math.ceil(totalDivs / divsPerPage);
    if (nextPage <= totalPages) {
      setCurrentPage(nextPage);
    }
  };

  const handlePrevPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 1) {
      setCurrentPage(prevPage);
    }
  };

  // Create an array of divs for Service
  const renderServiceDivs = () => {
    const divs = [];
    const startIndex = (currentPage - 1) * divsPerPage;
    const endIndex = Math.min(startIndex + divsPerPage, totalDivs);
    const icon = [
      "https://img.freepik.com/premium-vector/vector-illustration-lighted-diya-diwali-yellow-background_830469-1711.jpg",
    ];
    const titles = [
      "Today's Horoscope",
      "Free Kundli",
      "Compatibility",
      "Festival 2024",
      "Kundli Matching",
      "Chinese Horoscope",
      "Today Panchang",
    ];
    const descriptions = [
      "Unsure about how your day will unfold? Get free Aries horoscope online prediction from top astrologer. Read your Aries Zodiac Sign Horoscope today! ",
      "Generate your free online kundli report from Astrotalk. Our Kundli software can help you predict the future for yourself by reading the birth chart.",
      "Confused by love? Remove the doubts &amp; find the sparks! Check the compatibility with your partner using our tool and ignite a love that lasts forever. ",
      "Festivals are myriad celebrations, each a unique form of joy. Explore the diverse world of festivities – a realm of celebration.",
      "Check Love Compatibility and Marriage Prediction online at Astrotalk. Get the best Horoscope and kundli matching predictions today!",
      "Are you a playful cat, a clever mouse, or a roaring lion? Discover your inner spirit animal with Chinese astrology. Find out now!",
      "Panchang enlists a record of auspicious dates and times for any auspicious task such as marriage, celebration, puja, starting any business etc.",
    ];
    for (let i = startIndex + 1; i <= endIndex; i++) {
      divs.push(
        <div
          key={i}
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 sm:p-4 flex justify-center items-center"
          style={{ filter: "drop-shadow(0px 6px 0px yellow)" }} // Adjust the shadow properties
        >
          <div className="relative w-64 h-64 cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center justify-center p-4 ">
            <Image
              className="rounded-full"
              src={icon[i - 1]}
              alt="Icon"
              width={100}
              height={100}
            />
            <p className="text-lg font-semibold">{titles[i - 1]}</p>
            <p className="text-sm text-gray-500 mt-2">{descriptions[i - 1]}</p>
          </div>
        </div>
      );
    }
    return divs;
  };

  return (
    <div className="flex bg-gray-100 flex-col items-center relative">
      <div className="pagination">
        <h1 className="text-center font-bold text-2xl py-7 text-black">
          COMPLIMENTARY ASTROLOGY SERVICES
        </h1>
        <div className="flex flex-wrap justify-center sm:flex-row">
          {renderServiceDivs()}
        </div>
        <div className="flex justify-between mx-4">
          <button
            onClick={handlePrevPage}
            className="rounded-full text-gray-500 px-2 py-1 border-[4px] border-gray-400"
          >
            <h1 className="font-bold text-xl">&lt;</h1>
          </button>
          <button
            onClick={handleNextPage}
            className="rounded-full text-gray-500 px-2 py-1 border-[4px] border-gray-400 "
          >
            <h1 className="font-bold text-xl">&gt;</h1>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center  gap-4 sm:gap-8 w-full mt-6 bg-gradient-to-t from-[#393721] to-[#CEBF1F] text-center px-4 sm:px-0 h-32">
        <div className="flex flex-col items-center flex-1">
          <h1 className="text-xl sm:text-3xl font-bold text-white">19,957+</h1>
          <p className="text-white">Total Astrologer</p>
        </div>

        <div className="flex flex-col items-center flex-1">
          <h1 className="text-lg text-center mt-4 sm:text-3xl font-bold text-white">
            639 Million Minutes
          </h1>
          <p className="text-white">Total Chat/Call Minutes</p>
        </div>

        <div className="flex flex-col items-center flex-1">
          <h1 className="text-xl sm:text-3xl font-bold text-white">
            41.7 Million
          </h1>
          <p className="text-white">Total Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
