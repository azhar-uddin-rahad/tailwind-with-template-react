import React from "react";
import img from "../../assets/woman-writing-on-paper-3228878.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const SendInquiry = () => {
  return (
    <div className="mt-32 mb-32">
      <div className="max-w-7xl mx-auto flex">
        <div className="1/2 relative">
          <div>
          <img src={img} alt="" />
          </div>
          <div className="absolute bg-[#1C1E53] w-full h-full z-10 top-0 opacity-75">
                <h3 className="text-[#fff] font-poppins font-semibold text-[48px] leading-[74px] w-[464px] mx-auto pt-24">Building stellar websites for early startups</h3>
                <p className="pt-6 text-[#fff] font-poppins font-medium text-lg  w-[464px] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div>
        </div>
        <div className="1/2 bg-mainColor flex items-center justify-center">
          <div className="px-24">
            <h3 className="text-4xl text-[#fff] font-poppins font-semibold mb-4">
              Send inquiry
            </h3>
            <p className="w-[350px] text-[16px] text-[#fff] font-poppins font-medium leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <form action="" className="mt-10">
              <input
                className="mb-4 w-full p-4 bg-transparent rounded-lg border-[1.5px] border-[#fff]"
                type="text"
                placeholder="Your Name"
              />
              <br />
              <input
                className="mb-4 w-full p-4 bg-transparent rounded-lg border-[1.5px] border-[#fff]"
                type="text"
                placeholder="Email"
              />
              <br />
              <input
                type="text"
                className=" w-full p-4 bg-transparent rounded-lg border-[1.5px] border-[#fff]"
                placeholder="Paste your Figma design URL"
              />

              <div className="flex justify-center items-center">
              <button className="mt-10 font-poppins font-medium text-[16px]  border-2 border-[#fff] px-[130px] py-[15px] rounded-[41px] bg-[#FCD980] text-[#000]">Send an Inquiry</button>
              </div>

              <p className="text-[#fff] text-center mt-7 font-poppins font-medium text-[16px] leading-7 mb-12">
            <span className="mr-4">Get in touch with us</span>{" "}
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendInquiry;
