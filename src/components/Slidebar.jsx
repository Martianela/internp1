import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
const Slidebar = () => {
  const sliderData = [
    {
      id: 1,
      url: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg",
    },
    {
      id: 2,
      url: "https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581__340.jpg",
    },
    {
      id: 3,
      url: "https://cdn.pixabay.com/photo/2017/10/10/07/48/beach-2836300__340.jpg",
    },
    {
      id: 4,
      url: "https://cdn.pixabay.com/photo/2017/08/01/01/17/beach-2562563__340.jpg",
    },
  ];
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  console.log(length);
  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className=" mx-auto px-4 py-10 relative flex justify-center max-w-[800px]  w-full items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />
      {sliderData.map((item, index) => (
        <div
          className={
            index === slide ? "opecity-100 w-full h-full" : "opecity-0 "
          }
        >
          {index === slide && (
            <img
              className="w-full h-full rounded-md object-fill"
              src={item.url}
              alt="/"
            ></img>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slidebar;
