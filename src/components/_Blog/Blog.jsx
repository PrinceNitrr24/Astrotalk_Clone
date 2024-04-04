"use client";
import { useState } from "react";
import Image from "next/image";

const Blog = () => {
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

  // Calculate the indices of divs to render on the current page
  const startIndex = (currentPage - 1) * divsPerPage;
  const endIndex = Math.min(startIndex + divsPerPage, totalDivs);
  const visibleDivs = Array.from(
    { length: endIndex - startIndex },
    (_, index) => index + startIndex
  );

  const imageUrls = [
    "https://images.unsplash.com/photo-1521819342394-5f3dd1b43ba1?q=80&w=1818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1691807715090-4b256047eb77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1543721578-b7ee30f88d08?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1521819342394-5f3dd1b43ba1?q=80&w=1818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1691807715090-4b256047eb77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1543721578-b7ee30f88d08?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const namedata = ["Jyoti", "Jyoti", "Jyoti"];
  const newsdate = ["Nov 7, 2023", "Nov 3, 2023", "Nov 4, 2023"];

  const descriptions = [
    "How Caring Is Your Sibling As Per Zodiac Signs ",
    "4 Zodiac Signs That Love to Irritate Their Partners",
    "4 Zodiac Signs Men Who Love To Annoy Their Siblings",
  ];

  // Render the divs for the current page
  const renderLatestBlogDivs = () => {
    return visibleDivs.map((index) => (
      <div
        key={index}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 sm:p-4 flex justify-center items-center"
        style={{
          filter: "drop-shadow(2px 4px 6px black)",
          width: index < 3 ? "300px" : "auto", // Fixed width for the first three divs
          height: index < 3 ? "300px" : "auto", // Fixed height for the first three divs
        }}
      >
        <div className="relative cursor-pointer w-64 h-64 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center justify-center p-4">
          <div style={{ height: "70%", width: "100%", overflow: "hidden" }}>
            <Image
              className="rounded-t-lg"
              src={imageUrls[index]}
              alt="Image"
              objectFit="cover"
              width={300}
              height={300}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {descriptions[index] ? descriptions[index] : ""}
          </p>
          <div className="flex justify-between w-full">
            <p className="text-xs text-gray-500 mt-2 ">
              {namedata[index] ? namedata[index] : ""}
            </p>
            <p className="text-xs text-gray-500 mt-2 ">
              {newsdate[index] ? newsdate[index] : ""}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex  bg-[#EEEEEE] flex-col items-center relative">
      <h1 className="text-center text-black font-bold text-2xl m-6 py-0 ">
        LATEST FROM BLOG
      </h1>
      <h3 className="text-center mt-16 text-xl  text-black absolute ">
        Top Astrologers. 24 * 7 customer support. Happy to help
      </h3>
      <div className="flex flex-wrap justify-center sm:flex-row">
        {renderLatestBlogDivs()}
      </div>
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="absolute left-[200px] ml-4 mt-9 top-1/2 transform -translate-y-1/2 text-black-500 px-4 py-2 rounded-full  border-[5px] border-[#000000c9]"
      >
        <h1 className="text-black text-xl font-bold"> &lt;</h1>
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === Math.ceil(totalDivs / divsPerPage)}
        className="absolute right-[200px] mr-4  mt-9 top-1/2 transform -translate-y-1/2 text-black-500 px-4 py-2 rounded-full border-[5px] border-[#000000c9]"
      >
        <h1 className="text-black text-xl font-bold">&gt;</h1>
      </button>
    </div>
  );
};

export default Blog;
