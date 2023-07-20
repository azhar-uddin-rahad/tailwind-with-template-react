import React from "react";
import logo from "../../assets/Finsweet white logo 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="bg-mainColor">
        <div className="max-w-7xl mx-auto pt-[100px]">
          <div className="flex justify-around items-start">
            <div>
              <img src={logo} alt="" />
              <p className="w-80 text-[#fff] font-poppins font-normal text-[16px] leading-[28px] my-8">
                We are always open to discuss your project and improve your
                online presence.
              </p>

              <div className="flex justify-around bg-[#FCD980] pt-[18px] pl-[37px]">
                <div>
                  <h4 className="text-mainColor font-poppins font-medium text-lg ">
                    Email me at
                  </h4>
                  <p
                    className="text-mainColor
                             font-poppins font-normal text-[16px] leading-[28px]"
                  >
                    contact@website.com
                  </p>
                </div>
                <div>
                  <h4 className="text-mainColor font-poppins font-medium text-lg">
                    Call us
                  </h4>
                  <p
                    className="text-mainColor
                             font-poppins font-normal text-[16px] leading-[28px]"
                  >
                    0927 6277 28525
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[#fff] font-poppins font-semibold text-[48px] leading-[64px]">
                Lets Talk!
              </h3>
              <p className="w-80 text-[#fff] font-poppins font-normal text-[16px] leading-[28px] my-8">
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="bg-[#fff]">
          <div className="max-w-7xl mx-auto flex justify-around py-8">
            <div>
              <p>Copyright 2022, Finsweet.com</p>
            </div>
            <div>
              <ul className="flex gap-8 text-mainColor font-poppins font-medium text-[16px]">
                <li>Home</li>
                <li>About Us</li>
                <li>Feature</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Footer;
