"use client";
import React from "react";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <div className="bg-[#2C2B24]">
        <section className="new_banner h-full mt-0">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="w-full sm:w-[75%] rounded-lg p-6">
                <div className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 rounded-lg p-4 pb-0 flex flex-col sm:flex-row items-center justify-center">
                  <div className="flex flex-col sm:flex-row items-center w-full">
                    <div className="order-2 sm:order-1 flex-shrink-0">
                      <img
                        alt="Arjun Kapoor"
                        src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/320x410/assets/images/banner/arjun-kapoor-uhd.webp"
                        className="rounded-lg transform scale-x-[-1] mr-4 bg-center mb-4 sm:mb-0"
                        width="260"
                        height="300"
                      />
                    </div>
                    <div className="order-1 sm:order-2 w-full sm:ml-6">
                      <p className="text-[20px] sm:text-[30px] font-bold text-black">
                        Arjun Kapoor{" "}
                        <span className="font-normal">recommends</span>{" "}
                        Astrotalk
                      </p>
                      <h1 className="text-[30px] sm:text-[45px] font-bold mt-4 sm:mt-0 text-black">
                        Chat With Astrologer
                      </h1>
                      <Link
                        className="inline-block mt-4 ml-32 px-[30px] py-2 bg-black text-white rounded-[40px] hover:bg-[#555555] shadow-md transition duration-300 text-center"
                        href="/chat-with-astrologer"
                      >
                        Chat Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-[#2C2B24] ">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
              <Link
                href="/talk-to-astrologer"
                className="box_item flex items-center justify-center bg-white rounded-lg mx-auto sm:mx-[213px] h-[130px] w-[260px] hover:shadow-white p-4 shadow-md hover:shadow-lg"
              >
                <div className="icon">
                  <span className="icons_separate_image talk_with_astrologer_icon"></span>
                </div>
                <div className="text ml-2">
                  <span>Chat with Astrologer</span>
                </div>
              </Link>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
              <Link
                href="/talk-to-astrologer"
                className="box_item flex items-center justify-center bg-white shadow-lg hover:shadow-white rounded-lg p-4  hover:shadow-lg mx-auto sm:mx-[110px]  h-[130px] w-[260px]"
              >
                <div className="icon">
                  <span className="icons_separate_image talk_with_astrologer_icon"></span>
                </div>
                <div className="text ml-2">
                  <span>Talk to Astrologer</span>
                </div>
              </Link>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
              <Link
                href="/shop"
                className="box_item flex items-center justify-center bg-white rounded-lg hover:shadow-white p-4 shadow-md hover:shadow-lg mx-auto sm:mx-[8px]  h-[130px] w-[260px]"
              >
                <div className="icon">
                  <span className="icons_separate_image astromall-position-icon"></span>
                </div>
                <div className="text ml-2">
                  <span>Astromall Shop</span>
                </div>
              </Link>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
              <Link
                href="/e-pooja"
                className="box_item flex items-center justify-center bg-white rounded-lg hover:shadow-white p-4 shadow-md hover:shadow-lg mx-auto sm:mx-[-90px]  h-[130px] w-[260px]"
              >
                <div className="icon">
                  <span className="icons_separate_image blog_position_icon"></span>
                </div>
                <div className="text ml-2">
                  <span>Book A Pooja</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
