"use client";
import React, { useState } from "react";
import Image from "next/image";

const OurAstrologer = () => {
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

  // Create an array of divs for OurAstrologer
  const renderOurAstrologerDivs = () => {
    const divs = [];
    const startIndex = (currentPage - 1) * divsPerPage;
    const endIndex = Math.min(startIndex + divsPerPage, totalDivs);
    const icon = [
      "https://img.freepik.com/premium-vector/vector-illustration-lighted-diya-diwali-yellow-background_830469-1711.jpg",
    ];
    const OurAstrologername = [
      "Vvinod",
      "Parveen",
      "BhartiP",
      "Sanjeev",
      "Shridhar",
      "Rajkumar",
      "Shipra",
    ];
    const descriptions = [
      "Numerology",
      "Vedic Astrology",
      "Vedic Astrology",
      "Numerology",
      "Vedic Astrology",
      "Vedic Astrology",
      "Numerology",
    ];
    for (let i = startIndex + 1; i <= endIndex; i++) {
      divs.push(
        <div
          key={i}
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 sm:p-4 flex justify-center items-center"
          style={{ filter: "drop-shadow(2px 4px 6px white)" }} // Adjust the shadow properties
        >
          <div className="relative w-64 h-64 cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center justify-center p-4 ">
            <Image
              className="rounded-full shadow-lg hover:shadow-2xl border-spacing-3 relative "
              src={icon[i - 1]}
              alt="Icon"
              width={100}
              height={100}
            />
            <p className="text-lg font-semibold">{OurAstrologername[i - 1]}</p>
            <p className="text-sm text-gray-500 mt-2">{descriptions[i - 1]}</p>
          </div>
        </div>
      );
    }
    return divs;
  };

  return (
    <div className="flex bg-[#F0DF20] flex-col items-center relative">
      <h1 className="text-center font-bold text-2xl text-black py-7">
        OUR ASTROLOGERS
      </h1>
      <p className="text-black">
        13000+ Best Astrologers from India for Online Consultation
      </p>
      <div className="flex flex-wrap justify-center sm:flex-row">
        {renderOurAstrologerDivs()}
      </div>
      <button
        onClick={handlePrevPage}
        className="absolute left-12 ml-4 mt-12 top-1/2 transform -translate-y-1/2 text-black px-4 py-2 rounded-full border-[5px] border-black"
      >
        <h1 className="text-bold text-black text-xl">&lt;</h1>
      </button>
      <button
        onClick={handleNextPage}
        className="absolute right-12 mr-4 mt-11 top-1/2 transform -translate-y-1/2 text-black px-4 py-2 rounded-full border-[5px] border-black"
      >
        <h1 className="text-bold text-black text-xl">&gt;</h1>
      </button>
    </div>
  );
};

export default OurAstrologer;
