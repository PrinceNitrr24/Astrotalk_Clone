"use client";
import { useState } from "react";
import Image from "next/image";

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalDivs = 10;
  const divsPerPage = 3;

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

  const newsdata = ["inc42", "CXO", "ET NOW"];
  const newsdate = ["Nov 7, 2023", "Nov 3, 2023", "Nov 4, 2023"];

  const descriptions = [
    "Decoding Astrotalk's Fortunes: How The Astrology Startup Hit 4X Profit Growth. ",
    "Astro tech Startup, Astrotalk, appoints Anmol Jain as the new Co-founder.",
    "EXCLUSIVE: Rs 37k salary to Rs 600 cr company - How an astrology prediction push..",
    "Festivals are myriad celebrations, each a unique form of joy. Explore the diverse world of festivities – a realm of celebration.",
    "Check Love Compatibility and Marriage Prediction online at Astrotalk. Get the best Horoscope and kundli matching predictions today!",
    "Are you a playful cat, a clever mouse, or a roaring lion? Discover your inner spirit animal with Chinese astrology. Find out now!",
    "Panchang enlists a record of auspicious dates and times for any auspicious task such as marriage, celebration, puja, starting any business etc.",
  ];

  // Render the divs for the current page
  const renderAstroTalkINDivs = () => {
    return visibleDivs.map((index) => (
      <div
        key={index}
        className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 sm:p-4 flex justify-center items-center"
        style={{
          filter: "drop-shadow(2px 4px 6px black)",
          width: index < 3 ? "300px" : "auto",
          height: index < 3 ? "300px" : "auto",
        }}
      >
        <div className="relative cursor-pointer w-64 h-64 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center justify-center p-4">
          <div style={{ height: "70%", width: "100%", overflow: "hidden" }}>
            <Image
              className="rounded-t-lg"
              src={`https://d1gcna0o0ldu5v.cloudfront.net/fit-in/200x105/images/${
                index + 1
              }.png`}
              alt="Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">{descriptions[index]}</p>
          <div className="flex justify-between w-full">
            <p className="text-xs text-gray-500 mt-2 ">{newsdata[index]}</p>
            <p className="text-xs text-gray-500 mt-2 ">{newsdate[index]}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex bg-[#F0DF20] flex-col items-center relative">
      <h1 className="text-center text-black font-bold text-2xl py-7">
        ASTROTALK IN NEWS
      </h1>
      <div className="flex flex-wrap justify-center sm:flex-row">
        {renderAstroTalkINDivs()}
      </div>
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="absolute border-[4px] left-[200px] ml-4 mt-9 top-1/2 transform -translate-y-1/2 text-black-500 px-4 py-2 rounded-full border-[#00000082]"
      >
        <h1 className="text-black font-bold text-2xl"> &lt;</h1>
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === Math.ceil(totalDivs / divsPerPage)}
        className="absolute right-[200px] mr-4  mt-9 top-1/2 transform -translate-y-1/2 text-black-500 px-4 py-2 rounded-full border-[4px] border-[#00000082]"
      >
        <h1 className="text-black font-bold text-2xl ">&gt;</h1>
      </button>
    </div>
  );
};

export default News;
