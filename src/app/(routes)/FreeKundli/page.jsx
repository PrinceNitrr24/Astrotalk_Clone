import React from "react";
import Image from "next/image";
import Link from "next/link";
import FreeServicesSection from "@/components/_FreeServicesSection/FreeServicesSection";
import HoroscopeSlider from "@/components/_HoroscopeSlider/HoroscopeSlider";

const FreeKundliPage = () => {
  return (
    <>
      <div className="container ">
        <div className="relative justify-center mt-5 ">
          <h1 className=" text-center text-4xl font-bold text-black ">
            Free Kundli Online
          </h1>
          <h4 className="text-center mt-2 font-bold sm:text-base sm:text-gray-600 md:text-lg lg:text-xl">
            Get instant & accurate, Janam Kundli
          </h4>
        </div>
      </div>

      <div className="relative mt-10">
        <hr class="absolute inset-x-0 w-4/5 md:w-2/3 lg:w-4/5 xl:w-[75%] mx-auto mt-[-10px] border-t border-gray-400" />
        <Image
          src="/astro.webp"
          width={50}
          height={50}
          className="absolute left-1/2 transform -translate-x-1/2  bottom-[-13px]"
        />
      </div>
      <div class="relative pt-6 lg:pt-6">
        <h2 class="text-lg lg:text-xl font-bold text-[#555555] px-4 lg:px-[186px]">
          Free Kundli Online - Get Your Detailed Birth Chart with Predictions
        </h2>
        <p class="text-[#555555] px-4 text-justify lg:px-[186px]">
          Looking for your free Kundli from expert astrologers? Then you have
          come to the right place. The online free kundali available on
          Astrotalk is a 100% free and authentic free Kundli that has been
          prepared after consulting more than 50 expert astrologers on board.
          The free kundli is such that it can give you a glimpse into various
          aspects of your life such as your career, love life, marriage,
          business and much more. The online kundli prepared by the free Kundali
          software here is no less than any traditional Kundli and can also be
          used for purposes like matching making, kundali matching for marriage
          or simply making future predictions. <br />
          Talking about future predictions, the kundali catered by Astrotalk to
          you is such that it considers the movement of all the planets in the
          native's life from the beginning of his or her life till as far as 100
          years. Doing so helps you understand the reasons behind not only the
          ongoing circumstances but also what's to come for you in the future.
          So if in any way you are confused about life, the online kundli can be
          your saviour. Having said that, make sure you try the free online
          kundli, and let us know what you feel about it.
        </p>
      </div>

      <div className="flex ">
        <section className="bg-[#FFFFFF] flex-grow ">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="rounded-lg bg-white  p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:col-span-3 lg:mx-14 w-full lg:p-12">
                <form action="#" className="space-y-4">
                  <div>
                    <label className="" htmlFor="name">
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full rounded-lg border  border-gray-400 p-3 text-sm"
                      placeholder="Enter Name"
                      type="text"
                      id="name"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <label className="" htmlFor="gender">
                      Gender<span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full outline-1 border  border-gray-400 rounded-lg p-3 text-sm"
                      id="gender"
                      name="gender"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label>Birth details</label>
                    <div className="flex flex-col lg:flex-row lg:space-x-4 lg:flex-wrap">
                      <div className="flex flex-col">
                        <label htmlFor="day">
                          Day<span className="text-red-500">*</span>
                        </label>
                        <select
                          id="day"
                          name="day"
                          className="outline-1 rounded-lg border border-gray-400 p-3 px-4 lg:px-14 text-sm"
                        >
                          {[...Array(31).keys()].map((day) => (
                            <option key={day + 1} value={day + 1}>
                              {day + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="month">
                          Month<span className="text-red-500">*</span>
                        </label>
                        <select
                          id="month"
                          name="month"
                          className="outline-1 rounded-lg border border-gray-400 p-3 px-4 lg:px-8 text-sm"
                        >
                          {[
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ].map((month, index) => (
                            <option key={index} value={index + 1}>
                              {month}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="year">
                          Year<span className="text-red-500">*</span>
                        </label>
                        <select
                          id="year"
                          name="year"
                          className="outline-1 rounded-lg border border-gray-400 p-3 px-4 lg:px-11 text-sm"
                        >
                          {[...Array(2024 - 1928 + 1).keys()].map((year) => (
                            <option key={1928 + year} value={1928 + year}>
                              {1928 + year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label>Time details</label>
                    <div className="flex flex-col lg:flex-row lg:space-x-4 lg:flex-wrap">
                      <div className="flex flex-col">
                        <label htmlFor="hour">
                          Hour<span className="text-red-500">*</span>
                        </label>
                        <select
                          id="hour"
                          name="hour"
                          className="outline-1 rounded-lg border border-gray-400 p-3 px-4 lg:px-14 text-sm"
                        >
                          {[...Array(24).keys()].map((hour) => (
                            <option key={hour} value={hour}>
                              {hour}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="minute">
                          Minute<span className="text-red-500">*</span>
                        </label>
                        <select
                          id="minute"
                          name="minute"
                          className="outline-1 rounded-lg border border-gray-400 p-3 px-4 lg:px-14 text-sm"
                        >
                          {[...Array(60).keys()].map((minute) => (
                            <option key={minute} value={minute}>
                              {minute}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="second">
                          Second<span className="text-red-500">*</span>
                        </label>
                        <select
                          id="second"
                          name="second"
                          className="outline-1 rounded-lg border border-gray-400 p-3 px-4 lg:px-14 text-sm"
                        >
                          {[...Array(60).keys()].map((second) => (
                            <option key={second} value={second}>
                              {second}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="birthPlace" className="block">
                      Birth Place<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="birthPlace"
                      name="birthPlace"
                      placeholder="Enter your birth place"
                      className="w-full outline-1 rounded-lg border border-gray-400 p-3 text-sm"
                    />
                  </div>

                  <div>
                    <button className="w-full bg-gray-900 hover:bg-[#EBDC1F] transition text-white font-bold py-2 px-4 rounded-3xl">
                      Generate Horoscope
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Want to know more about  Kundli */}
      <div className="bg-black w-full h-44 flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-black w-full h-full">
          <Image
            src="/bgkundli.webp"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <h1 className="font-bold text-2xl sm:text-4xl text-white relative z-10 text-center  mb-4 sm:mb-0 ">
          Want to know more about kundli
        </h1>

        <Image
          className="absolute inset-y-0 left-0 w-24 sm:left-[200px] sm:w-36 mt-4 "
          src="/bgsquare.webp"
          width={100}
          height={200}
          objectPosition="cover"
        />

        <div className="mt-4 sm:mt-14 px-4 sm:px-36 relative z-10">
          <button className="text-gray-800 border px-6 py-2 rounded-3xl font-bold text-lg sm:text-xl bg-[#ECE320]  hover:shadow-[0_3px_10px_white]">
            Visit Here
          </button>
        </div>
      </div>

      <section className=" bg-[#EEEEEE] mx-auto px-4 lg:px-0">
        <div className="container">
          <h3 className=" text-lg pt-6 text-center md:text-4xl lg:text-2xl font-bold lg:pt-6  mb-4 md:mb-6">
            Online Free Kundli For Future Predictions
          </h3>
          <h4 className="text-center text-lg lg:text-xl text-gray-700  md:text-2xl mb-4 md:mb-6">
            Get Your Kundli by Date of Birth
          </h4>
          <div className="lg:mx-48">
            <p className="text-lg md:text-xl lg:text-xl text-justify mb-4 md:mb-6">
              The Kundli of a person is one of the most sought aspects of
              astrology. A Kundali entails the details about the positions of
              stars and planets at the time of your birth based on which further
              predictions are made. And with further predictions, we mean
              predictions about different aspects of one's life like love,
              career, health, business, finance, and even marriage. Simply said,
              Kundli making is a necessary thing for any individual and is
              likely to improve their decision-making capabilities gradually in
              the course of time.
            </p>

            <p className="text-lg md:text-xl text-justify lg:text-xl mb-4 md:mb-6">
              A Janam Kundli is made after studying the exact position of
              planets at the time you were born and based on the same, one’s Sun
              sign, Moon sign, and other such astrological aspects are listed.
              The Kundali is a co-existence of predictions and charts that help
              the astrologer learn about what your future would be like, the
              times you will have to grind harder, and also the times when luck
              will be by your side in abundance.
            </p>

            <p className="text-lg md:text-xl text-justify lg:text-xl mb-4 md:mb-6">
              However, with the culture shift, people are getting very
              tech-savvy and seek things under their thumb. And for the same
              reason, the Janam Kundali making process has also gone online,
              making it more pocket-friendly, accessible, and detailed. We at
              AstroTalk, for the convenience of the huge user base of ours,
              provide them with free Janam kundali online so anyone and everyone
              has the luxury of learning more about themselves and thus can plan
              their life better
            </p>

            <p className="text-lg md:text-xl lg:text-xl text-justify mb-4 md:mb-6">
              However, we also often bump into people who wonder if this online
              kundali astrology is accurate and if it has the same essence of
              the physical Kundli making process? Or is getting a Kundli made by
              a pandit or Vedic astrologer still the best option? To be honest,
              a Kundli made by a Vedic astrologer surely takes the top spot
              (which our astrologers can make for you), but an online Kundli
              software is no less when it comes to precision. Honestly, an
              online Kundli can be more detailed when compared to the physical
              ones.
            </p>

            <p className="text-lg md:text-xl text-justify lg:text-xl mb-4 md:mb-6">
              To state the obvious, just like a physical Kundli is made by
              learned Vedic astrologers and pandits, similarly, an online Kundli
              too is also prepared as per the astrological predictions by the
              astrologers. What changes is only the medium of sharing that
              information with you, i.e. digital? The digitalisation of Kundli
              is to only allow you more benefits like the availability of
              information in multiple languages.
            </p>

            <p className="text-lg md:text-xl lg:text-xl text-justify mb-4 md:mb-6">
              And anyway, one can always get their physical Janam Kundali report
              made by our astrologers, which will reach you physically.
            </p>

            <p className="text-lg md:text-xl lg:text-xl mb-4 text-justify md:mb-6">
              <strong>How To Create a Free Online Janam Kundli?</strong>
            </p>

            <p className="text-lg md:text-xl text-justify lg:text-xl mb-4 md:mb-6">
              Creating an online Kundli for yourself is relatively easy.
              Honestly, butter-easy. All you need to do to make your online
              Janam Kundli with AstroTalk is simply go to the ‘Kundli’ option
              and Insert the requested information. The requested information
              would be your date of birth, time of your birth, etc. The correct
              date and time allow precise predictions.
            </p>

            <p className="text-lg md:text-xl lg:text-xl text-justify mb-4 md:mb-6">
              Once you have filled in the details, all you need to do is click
              submit. Once you click submit, within seconds, you will find a
              detailed Janam Kundli of yourself. Besides textual content (that
              will help you understand what strong or weak traits you have), the
              Janam Kundli will also help you with charts that will showcase the
              position of the different planets in houses based on your current
              astrological situation, which reveals a whole new dimension of
              information.
            </p>

            <p className="text-lg md:text-xl text-justify lg:text-xl mb-4 md:mb-6">
              The free Janam Kundli you get on{" "}
              <Link
                href="/"
                className="text-black font-bold
              "
              >
                AstroTalk
              </Link>
              , though, is made after a precise study of all the scientific
              methods but when it comes to writing it down, the study is
              portrayed in a very simple language so you can understand it
              without any hassle. However, just in case you hit a snag or can’t
              understand what it means, simply chat or ring our astrologers to
              help you with your queries.
            </p>

            <p className="text-lg md:text-xl text-justify lg:text-xl mb-4 md:mb-6">
              Besides getting a Janam Kundli for yourself, we also offer Janam
              Kundli matching service to anyone seeking.{" "}
              <Link href="#" className="text-black font-bold">
                Janam kundli matching
              </Link>{" "}
              is most important when one plans to get married. Matching of
              kundlis is done to ensure the girl and boy planning to get married
              are compatible with each other. This, however, doesn’t mean that
              if kundli doesn't match one shouldn’t marry the other person. But
              in case kundli doesn't match, an astrologer can let you know why
              it did not, and also recommend remedies for the same.
            </p>

            <p className="text-lg md:text-xl text-justify lg:text-xl mb-4 md:mb-6">
              Janam Kundli matching is related to Gun matching. Janam Kundli of
              two people, when matched, shows how many guns of those people
              match. Based on this, marriages are fixed. With Janam Kundli
              matching, you can also understand how being Manglik of two people
              will affect each other, what could be the effect of Manglik dosh
              on you, and remedies to get rid of Manglik dosha.
            </p>

            <p className="text-lg md:text-xl text-justify lg:text-xl mb-4 md:mb-6">
              These were just a handful of times when Janam Kundli could come in
              handy. So if looking to get one for yourself, get in touch with
              our astrologers for the best advice and service.
            </p>

            <p className="text-lg md:text-xl text-justify  lg:text-xl mb-4 md:mb-6">
              To get your online Janam Kundli, Kundli prediction, and kundali
              reading, you can either{" "}
              <Link href="#" className="text-black font-bold">
                chat with our astrologer
              </Link>{" "}
              or{" "}
              <Link href="#" className="text-black font-bold">
                talk to our astrologer
              </Link>
              . For free online Kundli making, you can also visit the free Janam
              Kundli chart option and get a personalised free Janam kundali for
              yourself by our Janam Kundli maker software. You can get free
              kundali check and free Kundli prediction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#EEEEEE] mx-auto px-4 lg:px-48">
        <div className="container">
          <h3 className="text-3xl md:text-4xl lg:text-2xl mb-4 text-center font-bold md:mb-6">
            FAQ free Kundli
          </h3>
          <div>
            <p>
              <strong className="text-lg text-justify md:text-xl">
                Q 1. What is Janam Kundli?
              </strong>
            </p>

            <p className="text-base py-3 md:text-lg text-justify lg:text-xl">
              Kundli is a chart prepared in astrology depending on the precise
              date, place, and time of birth of an individual. It figures out
              the placement of all the planets and signs, along with the Sun and
              Moon at the time of your birth. Along with all this, it also shows
              the other astrological aspects and relevant information about a
              newborn individual. With all these details, astrologers calculate
              your ascendant status as well as your rising sign of the native.
              Also, it provides a diligent insight into how a person would
              become, how would you do in your life—future, and how your life’s
              scenario is in the present.
            </p>

            <p>
              <strong className="text-lg text-justify md:text-xl">
                Q 2. What is Dasamsa or D10 Chart in Kundli reading?
              </strong>
            </p>

            <p className="text-base py-3 md:text-lg text-justify lg:text-xl">
              A sign is separated into ten uniform parts to create the D10 chart
              in astrology. The Dasamsa chart is prepared to depend upon the
              10th distribution of the zodiac sign. If the Kundli analysis is
              done using the Dasamsa chart, it lets you look into your
              professional accomplishments and success with utmost detail.
            </p>

            <p>
              <strong className="text-lg text-justify md:text-xl">
                Q 3. What is Dasha in Kundli analysis?
              </strong>
            </p>

            <p className="text-base py-3 text-justify md:text-lg lg:text-xl">
              Dasha is a vital phase of a planet in the life of the native. And
              according to astrology, there are 43 different types of Dasha
              systems. When the planet is powerful or settled in its exaltation
              sign, the Dasha is known as the Poorna Dasha. However, if the
              planet is powerless or in poor condition, the Dasha is recognized
              as the Rikta Dasha.
            </p>

            <p>
              <strong className="text-lg text-justify md:text-xl">
                Q 4. How to know Mahadasha in Kundli?
              </strong>
            </p>

            <p className="text-base py-3 text-justify md:text-lg lg:text-xl">
              There is a specific procedure in Vedic astrology to find out the
              Mahadasha period. According to it, 3 Nakshatras are proportioned
              out to each planet, which makes the number of Nakshatras count to
              27 for all the nine planets. So, the Mahadasha of any planet
              depends on the position of the Moon in a particular Nakshatra.
            </p>

            <p>
              <strong className="text-lg text-justify md:text-xl">
                Q 5. What are Yogas in Kundli reading?
              </strong>
            </p>

            <p className="text-base py-3 text-justify md:text-lg lg:text-xl">
              Yogas are the positive/negative influences of the planets that are
              present in the horoscope or birth chart of an individual. It could
              be both auspicious as well as inauspicious. The inauspicious ones
              are known as the Dosha and generally impact the life of the person
              in a negative manner.
            </p>

            <p>
              <strong className="text-lg text-justify md:text-xl">
                Q 6. What are the signs of Mangal Dosh?
              </strong>
            </p>

            <p className="text-base py-3 text-justify md:text-lg lg:text-xl">
              Signs of Mangal Dosh, also known as Manglik Dosha, are believed to
              include certain astrological conditions where the planet Mars
              (Mangal) has a malefic influence. Individuals with Mangal Dosh are
              often advised to consider matching their Kundlis with someone else
              having the same dosha or perform remedies to mitigate its effects
              for a successful marriage.
            </p>
          </div>
        </div>
      </section>
      <FreeServicesSection />
      {/* <HoroscopeSlider /> */}
    </>
  );
};

export default FreeKundliPage;
