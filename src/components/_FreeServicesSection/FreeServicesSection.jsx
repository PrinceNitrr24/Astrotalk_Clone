import React from "react";
import Link from "next/link";

const FreeServicesSection = () => {
  return (
    <section className=" mx-auto px-4 lg:px-0 lg:mx-44">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-2xl uppercase  mt-6 text-gray-900  tracking-wide font-bold">
              Complimentary astrology services
            </h2>
          </div>
        </div>
        <div>
          <div className=" p-10 flex overflow-x-auto">
            {/* Slide 1 */}
            <div className="slide w-[252px] h-[300px] flex   shrink-0 mr-6 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <Link
                href="#"
                tabIndex="-1"
                className="block h-full overflow-hidden"
              >
                <div className="relative">
                  <img
                    loading="lazy"
                    height="110"
                    width="110"
                    alt="Today's Horoscope"
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/110x110/assets/images/free-services-shared/mobile-view/daily-horoscope1.webp"
                    className="ng-lazyloaded mx-auto my-auto py-5"
                  />
                </div>
                <div className="font-bold text-center">Today's Horoscope</div>
                <div className="px-3 text-sm text-justify">
                  Unsure about how your day will unfold? Get free Aries
                  horoscope online prediction from top astrologer. Read your
                  Aries Zodiac Sign Horoscope today!
                </div>
              </Link>
            </div>
            {/* Slide 2 */}
            <div className="slide w-[252px] h-[300px] flex shrink-0 mr-6 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <Link
                href="/"
                tabIndex="-1"
                className="block h-full overflow-hidden"
              >
                <div
                  className="free-services-icon"
                  style={{ marginBottom: "10px" }}
                >
                  <img
                    loading="lazy"
                    height="110"
                    width="110"
                    alt="Free Kundli"
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/110x110/assets/images/free-services-shared/mobile-view/free-kundli1.webp"
                    className="ng-lazyloaded mx-auto my-auto py-5"
                  />
                </div>
                <div className="font-bold text-center ">Free Kundli</div>
                <div className="px-3 text-sm text-justify">
                  Generate your free online kundli report from Astrotalk. Our
                  Kundli software can help you predict the future for yourself
                  by reading the birth chart.
                </div>
              </Link>
            </div>
            {/* Slide 3 */}
            <div className="slide w-[252px] h-[300px] flex shrink-0 mr-6 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-lg">
              <Link
                href="#"
                tabIndex="-1"
                className="block h-full overflow-hidden"
              >
                <div
                  className="free-services-icon"
                  style={{ marginBottom: "10px" }}
                >
                  <img
                    loading="lazy"
                    height="110"
                    width="110"
                    alt="Compatibility"
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/110x110/assets/images/free-services-shared/mobile-view/compatibility.webp"
                    className="ng-lazyloaded mx-auto my-auto py-5"
                  />
                </div>
                <div className="font-bold text-center">Compatibility</div>
                <div className="px-3 text-sm text-justify">
                  Confused by love? Remove the doubts & find the sparks! Check
                  the compatibility with your partner using our tool and ignite
                  a love that lasts forever.
                </div>
              </Link>
            </div>
            {/* Slide 4 */}
            <div className="slide w-[252px] h-[300px] flex shrink-0 mr-6 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-lg">
              <Link
                href="#"
                tabIndex="-1"
                className="block h-full overflow-hidden"
              >
                <div
                  className="free-services-icon"
                  style={{ marginBottom: "10px" }}
                >
                  <img
                    loading="lazy"
                    height="110"
                    width="110"
                    alt="Festivals 2024"
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/110x110/assets/images/free-services-shared/mobile-view/festival.webp"
                    className="ng-lazyloaded mx-auto my-auto py-5"
                  />
                </div>
                <div className="font-bold text-center">Festival 2024</div>
                <div className="px-3 text-sm text-justify">
                  Festivals are myriad celebrations, each a unique form of joy.
                  Explore the diverse world of festivities – a realm of
                  celebration.
                </div>
              </Link>
            </div>
            {/* Repeat the same structure for other slides */}
            {/* Slide 5 */}
            <div className="slide w-[252px] h-[300px] flex shrink-0 mr-6 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-lg">
              <Link
                href="#"
                tabIndex="-1"
                style={{ display: "block", height: "100%", overflow: "hidden" }}
              >
                <div className="free-services-icon mb-2">
                  <img
                    loading="lazy"
                    height="110"
                    width="110"
                    alt="Horoscope Matching"
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/110x110/assets/images/free-services-shared/mobile-view/horoscope-matching1_1.webp"
                    className="ng-lazyloaded mx-auto my-auto py-5"
                  />
                </div>
                <div className="font-bold text-center">Kundli Matching</div>
                <div className="px-3 text-sm text-justify">
                  Check Love Compatibility and Marriage Prediction online at
                  Astrotalk. Get the best Horoscope and kundli matching
                  predictions today!
                </div>
              </Link>
            </div>
            {/* Slide 6 */}
            <div className="slide w-[252px] h-[300px] flex shrink-0 mr-6 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-lg">
              <Link
                href="#"
                tabIndex="-1"
                className="block h-full overflow-hidden"
              >
                <div className="free-services-icon mb-2">
                  <img
                    loading="lazy"
                    height="110"
                    width="110"
                    alt="Chinese Horoscope"
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/110x110/assets/images/free-services-shared/mobile-view/chinese-horoscope.webp"
                    className="ng-lazyloaded mx-auto my-auto py-5"
                  />
                </div>
                <div className="font-bold text-center">Chinese Horoscope</div>
                <div className="px-3 text-sm text-justify">
                  Are you a playful cat, a clever mouse, or a roaring lion?
                  Discover your inner spirit animal with Chinese astrology. Find
                  out now!
                </div>
              </Link>
            </div>
            {/* Slide 7 */}
            <div className="slide w-[252px] h-[300px] flex shrink-0 mr-6 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-lg">
              <Link
                href="#"
                tabIndex="-1"
                style={{ display: "block", height: "100%", overflow: "hidden" }}
              >
                <div className="free-services-icon mb-2">
                  <img
                    loading="lazy"
                    height="110"
                    width="110"
                    alt="Todays's Panchang"
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/110x110/assets/images/free-services-shared/mobile-view/panchang_1.webp"
                    className="ng-lazyloaded mx-auto my-auto py-5"
                  />
                </div>
                <div className="font-bold text-center">Today Panchang</div>
                <div className="px-3 text-sm text-justify">
                  Panchang enlists a record of auspicious dates and times for
                  any auspicious task such as marriage, celebration, puja,
                  starting any business etc.
                </div>
              </Link>
            </div>
            {/* End of Slides */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeServicesSection;
