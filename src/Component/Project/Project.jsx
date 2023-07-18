import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/Card (1).png";
import img2 from "../../assets/Rectangle 1313.png";
import img3 from "../../assets/Card.png";
import "./Project.css";

const Project = () => {
  return (
    <div className="project-section">
      <div className="w-container mx-auto mt-[140px]">
        <div className="flex justify-between items-center mb-16">
          <h3 className="text-[#282938] font-poppins font-semibold text-[48px] leading-[64px]">
            View our projects
          </h3>
          <p className="text-[#282938] font-poppins font-medium text-[16px] leading-7 mb-12">
            <span className="mr-4">View More</span>{" "}
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </p>
        </div>
        <div className="flex mb-[90px]">
          <div className="parents w-2/3 relative">
            <div>
              <img src={img3} alt="" />
            </div>
            <div className="child h-[600px] absolute top-0 ">
              <div className="content hidden w-80 absolute bottom-0 left-12">
                <h1 className="text-[#fff] font-poppins font-semibold text-[24px] leading-9">
                  Workhub office Webflow Webflow Design
                </h1>
                <p className="w-80 text-[#fff] font-poppins font-normal text-[16px] leading-[28px] my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>

                <p className="text-[#FCD980] font-poppins font-medium text-[16px] leading-7 mb-12">
                  <span className="mr-4">View More</span>{" "}
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-wrap gap-[30px]">
            <div className="second-parent w-full relative">
              <div>
                <img src={img2} alt="" />
              </div>
              <div className="second-child">
                <div className="second-content hidden  w-60 absolute bottom-0 left-12">
                  <h1 className="text-[#fff] font-poppins font-semibold text-[24px] leading-9">
                  Unisaas Website Design
                  </h1>
                  <p className="text-[#FCD980] font-poppins font-medium text-[16px] leading-7 mb-12">
                    <span className="mr-4">View More</span>{" "}
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </p>
                </div>
              </div>
            </div>

            <div className="second-parent w-full relative">
              <div>
                <img src={img1} alt="" />
              </div>
              <div className="second-child">
                <div className="second-content hidden  w-60 absolute bottom-0 left-12">
                  <h1 className="text-[#fff] font-poppins font-semibold text-[24px] leading-9">
                  Unisaas Website Design
                  </h1>
                  <p className="text-[#FCD980] font-poppins font-medium text-[16px] leading-7 mb-12">
                    <span className="mr-4">View More</span>{" "}
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
