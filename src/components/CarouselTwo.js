import React, { useState } from "react";

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
    {
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/a53b7f7e-37ab-4319-a1b4-5d9c0cca68601650180659343-Lancer_Desk.jpg",
      alt: "image 5",
      point: ".",
    },
    {
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg",
      alt: "image 6",
      point: ".",
    },
  ];
  return (
    <>
      <div className="flex items-center">
        <div className="flex overflow-x-hidden">
          {}
          {slider.map((item, index) => (
            <img
              src={item.url}
              alt={item.alt}
              key={index}
              className={currentIndex === index ? `block` : `hidden`}
            />
          ))}
        </div>
        <div className="flex justify-between items-center absolute w-screen px-11">
          <div className="next-btn" onClick={() => handleprev()}></div>
          <div className="prev-btn" onClick={() => handleNext()}>
          </div>
        </div>
      </div>
      <ul className="flex gap-2 justify-center my-4">
          {slider.map((item,index) => (
            <li key={index} id="carousel-point" className={currentIndex===index?`carousel-point-active rounded-full`:`bg-gray-500 rounded-full text-white`} onClick={()=>{setCurrentIndex(index)}} >{item.point}</li>
          ))}
        </ul>
    </>
  );
};

export default CarouselTwo;
