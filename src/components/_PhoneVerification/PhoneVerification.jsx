"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Link from "next/link";

const PhoneVerificationForm = ({ onClose }) => {
  const [mobileNo, setMobileNo] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleInputChange = (event) => {
    const value = event.target.value.replace(/[^\d]/, "");
    setMobileNo(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 w-full  h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white  rounded-lg p-4 md:p-8 max-w-lg w-full">
            <div className="w-full bg-[#F0DF20]  rounded-lg relative">
              <h1 className="text-xl text-row text-black rounded-md font-bold text-center py-3">
                Continue with Phone
                <i
                  className="fas fa-times absolute top-0 right-0 mt-2 mr-2 cursor-pointer w-10 h-10 py-3 text-black rounded-full hover:text-gray-500"
                  onClick={handleClose}
                ></i>
              </h1>
            </div>

            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="p-2 md:p-4 ">
                <h6 className="mb-2 text-sm md:text-base text-center">
                  You will receive a 4 digit code <br /> for verification
                </h6>
                <div className=" flex-col md:flex-row items-start md:items-center mb-2 md:mb-4">
                  <h6 className="mr-2 py-3 text-justify text-sm md:text-base">
                    Enter your phone number
                  </h6>
                  <div className="flex items-center md:ml-2">
                    <div className="mr-2">
                      <img
                        src="https://aws.astrotalk.com/assets/images/in.webp"
                        alt="flag"
                        className="w-5 h-5 md:w-8 md:h-5"
                      />
                    </div>
                    <select className="w-20  md:w-24 border rounded px-2 outline-none py-2 bg-gray-200 text-sm md:text-base">
                      <option value="+91">+91 India</option>
                    </select>
                    <input
                      type="text"
                      name="mobNo"
                      id="mobileNo"
                      value={mobileNo}
                      onChange={handleInputChange}
                      autoComplete="off"
                      inputMode="numeric"
                      className="w-full border rounded outline-none px-2 py-2 ml-2 md:ml-4 mb-2 bg-gray-200 md:mb-0 text-sm md:text-base"
                      placeholder="Enter mobile no."
                      pattern="[1-9]{1}[0-9]{9}"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#F0DF20]  text-black px-3 md:px-4 py-2 rounded-lg hover:bg-[#F0DF20] hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]   flex items-center justify-center text-sm md:text-base w-full"
                >
                  GET OTP <i className="fas fa-arrow-right ml-2 "></i>
                </button>

                <div className="text-xs md:text-sm mt-2 md:mt-4">
                  By Signing up, you agree to our{" "}
                  <Link
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-700 hover:text-blue-500"
                  >
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-700 hover:text-blue-500  "
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneVerificationForm;
