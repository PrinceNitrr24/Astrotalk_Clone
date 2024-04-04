"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const OurCelebrity = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalDivs = 10;
  const divsPerPage = 3;

  useEffect(() => {
    setCurrentPage(1);
  }, []);

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

  const startIndex = (currentPage - 1) * divsPerPage;
  const endIndex = Math.min(startIndex + divsPerPage, totalDivs);
  const visibleDivs = Array.from(
    { length: endIndex - startIndex },
    (_, index) => index + startIndex
  );

  const descriptions = [
    "Decoding Astrotalk's Fortunes: How The Astrology Startup Hit 4X Profit Growth.✔ ",
    "Astro tech Startup, Astrotalk, appoints Anmol Jain as the new Co-founder.",
    "EXCLUSIVE: Rs 37k salary to Rs 600 cr company - How an astrology prediction push..",
    "Festivals are myriad celebrations, each a unique form of joy. Explore the diverse world of festivities – a realm of celebration.",
    "Check Love Compatibility and Marriage Prediction online at Astrotalk. Get the best Horoscope and kundli matching predictions today!",
    "Are you a playful cat, a clever mouse, or a roaring lion? Discover your inner spirit animal with Chinese astrology. Find out now!",
    "Panchang enlists a record of auspicious dates and times for any auspicious task such as marriage, celebration, puja, starting any business etc.",
  ];

  const renderOurCelebrityDivs = () => {
    return visibleDivs.map((index) => (
      <div
        key={index}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2 sm:p-4 flex justify-center items-center"
        style={{
          filter: "drop-shadow(2px 4px 6px black)",
          width: "400px",
          height: "300px",
        }}
      >
        <div className="relative cursor-pointer w-full h-full bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center justify-center p-4">
          <div style={{ height: "70%", width: "100%", overflow: "hidden" }}>
            {/* <ReactPlayer
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              width="100%"
              height="100%"
            /> */}
          </div>
          <p className="text-sm text-gray-500 mt-2">{descriptions[index]}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex h-[27rem] bg-[#FFFFFF] flex-col items-center relative">
      <h1 className="text-center font-bold text-black text-2xl py-7">
        OUR CELEBRITY CUSTOMERS
      </h1>
      <div className="flex flex-wrap justify-center sm:flex-row">
        {renderOurCelebrityDivs()}
      </div>
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="absolute left-[200px] ml-[-150px] mt-5 top-1/2 transform -translate-y-1/2 text-black-500 px-4 py-2 rounded-full border-[5px] border-[#000000]"
      >
        <h1 className="font-bold text-black text-xl">&lt;</h1>
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === Math.ceil(totalDivs / divsPerPage)}
        className="absolute right-[200px] mr-[-150px] mt-5 top-1/2 transform -translate-y-1/2 text-black-500 px-4 py-2 rounded-full border-[5px] border-[#000000]"
      >
        <h1 className="font-bold text-black text-xl">&gt;</h1>
      </button>
    </div>
  );
};

export default OurCelebrity;
