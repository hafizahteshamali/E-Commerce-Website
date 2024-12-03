import React from "react";
import Slider from "react-slick";
import { userFeedbackData } from "../userFeedback/FeedbackData";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default value for larger screens
    slidesToScroll: 3, // Default value for larger screens
    responsive: [
      {
        // For small screens, show 1 slide at a time
        breakpoint: 1024, // Applies to screens with width >= 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // For medium screens, show 1 slide at a time
        breakpoint: 768, // Applies to screens with width >= 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // For medium screens, show 1 slide at a time
        breakpoint: 600, // Applies to screens with width >= 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        // For very small screens, show 1 slide at a time
        breakpoint: 480, // Applies to screens with width >= 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {userFeedbackData.map((item, index) => {
        const { name, description, starsUrl } = item;
        return (
          <div
            key={index}
            className="h-[250px] !w-[90%] border-[1px] border-white rounded-lg p-5"
          >
            <ul className="flex gap-3">
              {starsUrl.map((pro, index) => {
                return (
                  <li key={index}>
                    <img className="w-6 h-6" src={pro} alt="" />
                  </li>
                );
              })}
            </ul>
            <h1 className="text-2xl text-slate-700 font-bold my-2">{name}</h1>
            <p className="text-slate-700">{description.slice(0, 150)}...</p>
          </div>
        );
      })}
    </Slider>
  );
}
