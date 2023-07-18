import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import banner from '../../assets/Illustration.png'

const Banner = () => {
  return (
    <div className="banner-section bg-mainColor">
      <div className="w-container mx-auto">
        <div className="content pt-[126px] pb-[128px] flex gap-[60px]">
          <div className="w-1/3">
            <h1 className="text-[#fff] font-poppins font-semibold text-[54px] leading-[74px]">
              Building stellar websites for early startups
            </h1>
            <p className="text-[#fff] font-poppins font-medium text-[16px] leading-7 mt-6 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <button
              className="mr-4 font-poppins font-medium text-[16px]  hover:border-2 border-[#fff] px-14 py-4 rounded-[41px] bg-[#FCD980] text-[#000]"
            >
              Contact Us
            </button>
            <button
              className="transition duration-150 ease-linear text-[#fff] font-poppins font-medium text-[16px]  hover:border-2 hover:border-[#fff] px-12 py-4 rounded-[41px] hover:bg-[#FCD980] hover:text-[#000]"
            >
              View Pricing <span className="ml-4"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
            </button>
          </div>
          <div className="">
            <img src={banner} alt="" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
