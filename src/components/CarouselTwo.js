import React, { useState } from "react";
import img from "../asset/MyntraWebSprite_27_01_2021.png";

const CarouselTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex < slider.length - 1) {
      const a = currentIndex + 1;
      setCurrentIndex(a);
    }
    if (currentIndex >= slider.length - 1) {
      setCurrentIndex(currentIndex % (slider.length - 1));
    }
  };
  const handleprev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slider.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const slider = [
    {
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg",
      alt: "image 1",
      point: ".",
    },
    {
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg",
      alt: "image 2",
      point: ".",
    },
    {
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/846beb79-ada7-48c3-a6c6-4448f276c2111651599573979-Sports-Shoes_Desk.jpg",
      alt: "image 3",
      point: ".",
    },
    {
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/abd2b07f-954c-43ad-ba39-bfa50527d0641650180659364-Backpacks---Luggage_Desk.jpg",
      alt: "image 4",
      point: ".",
    },
  ];
  return (
    <div>
      <div className="flex overflow-x-hidden">
        {slider.map((item, index) => (
          <img
            src={item.url}
            alt={item.alt}
            key={index}
            className={currentIndex === index ? `block` : `hidden`}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button onClick={() => handleprev()}>prev</button>
        <button onClick={() => handleNext()}>next</button>
      </div>
    </div>
  );
};

export default CarouselTwo;
