import React from "react";
import Image from "next/image";

const KundliMatchingPage = () => {
  return (
    <>
      <div className="container ">
        <div className="relative justify-center mt-5 ">
          <h1 className=" text-center text-4xl font-bold text-black ">
            Kundli Matching
          </h1>
          <h4 className="text-center mt-2 font-bold sm:text-base sm:text-gray-600 md:text-lg lg:text-xl">
            Find your right one, through matchmaking
          </h4>
        </div>
      </div>
      <div className="relative mt-10">
        <hr className="absolute inset-x-0 w-4/5 md:w-2/3 lg:w-4/5 xl:w-[75%] mx-auto mt-[-10px] border-t border-gray-400" />
        <Image
          src="/astro.webp"
          width={50}
          height={50}
          className="absolute left-1/2 transform -translate-x-1/2  bottom-[-13px]"
        />
      </div>
      <div className="relative pt-6 lg:pt-6">
        <h2 className="text-lg lg:text-xl font-bold text-[#555555] px-4 lg:px-[186px]">
          Free Match Making - Kundli Milan & Gun Milan to Check Possibilities of
          Marriage
        </h2>
        <p className="text-[#555555] px-4 lg:pt-3  text-justify lg:px-[186px]">
          Kundli milan or kundali matching is an important consideration to make
          when you decide to get married. Kundli matching, also called Gun
          matching or Horoscope matching is the first step towards marriage when
          the parents decide to match the kundlis of the girl and the boy to
          ensure the couple is compatible. The gun milan exercise has been a
          part of India's culture for 1000s of years now and continues to be so.
          <br />
          So, if you too are the lucky one who is planning to get married, and
          hence looking for a horoscope matching with someone you have started
          liking, then Astrotalk can help you. The Kundali milan online software
          on Astrotalk has been prepared by the top astrologers of Astrotalk.
          The software caters to the free Kundli milan needs of the individuals
          and gives you insights; such as the number of guns matching for the
          girl and the boy, what they are compatible in, what their future would
          be like if they get married, and so much more. The online gun milan
          software can save you time and the hassle of going out to look for an
          astrologer to get the gun milan exercise done. Also, in case you have
          any doubts about the free kundali milan offered by Astrotalk, you can
          always connect with the astrologers on board and get those doubts
          sorted for yourself.
        </p>
      </div>
    </>
  );
};

export default KundliMatchingPage;
