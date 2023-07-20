import React from "react";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  const dataArr = [
    {
      id: 1,
      img: img1,
      date: "19 Jan 2022",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      details:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    {
      id: 3,
      img: img2,
      date: "19 Jan 2022",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      details:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    {
      id: 2,
      img: img3,
      date: "19 Jan 2022",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      details:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <h3 className="text-[#282938] font-poppins font-semibold text-[48px] leading-[64px]">
        Our Blog
      </h3>
      <div className="flex gap-8">
        {dataArr.map((item, index) => (
          <div key={index}>
            <div>
              <img src={item.img} alt="" />
            </div>
            <p className="text-[#282938] font-poppins font-medium text-[16px] leading-7 mt-10 mb-4">
              {item.date}
            </p>
            <h3 className="text-[#282938] font-poppins font-semibold text-2xl mb-4">
              {item.title}
            </h3>
            <p className="w-80 text-[#282938] font-poppins font-normal text-[16px] leading-[28px] my-8">
              {item.details}
            </p>
            <p className="text-[#282938] font-poppins font-semibold text-[16px] leading-7 mb-12">
              <span className="mr-4">Read More</span>{" "}
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
