import React, { useEffect, useState } from "react";

const Caraousel = () => {
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
  const [imageIndex, setImageIndex] = useState(0);
  const handleNext = () => {
    if (imageIndex < slider.length) {
      const nx = imageIndex + 1;
      setImageIndex(nx);
      console.log(imageIndex);
    }
    if (imageIndex >= slider.length - 1) {
      const a = imageIndex % (slider.length - 1);
      setImageIndex(a);
      console.log(imageIndex);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleNext();
    }, 5000);
  }, [handleNext]);

  return (
    <>
      {" "}
      <div className="w-screen flex flex-col justify-center items-center">
        <div className="flex w-screen overflow-hidden">
          {slider.map((item, index) => (
            <img
              src={item.url}
              id="slideImg"
              key={index}
              alt={item.alt}
              className={
                imageIndex === index
                  ? `m-2 p-5 duration-1000`
                  : `hidden duration-1000 `
              }
            />
          ))}
        </div>
        <ul className="flex gap-2">
          {slider.map((item,index) => (
            <li key={index} id="carousel-point" className={imageIndex===index?`carousel-point-active rounded-full`:`bg-gray-500 rounded-full text-gray-500`}>{item.point}</li>
          ))}
        </ul>
      </div>
      <h1 className="text-3xl font-bold text-center mt-10 uppercase">
        Categories
      </h1>
      <div className="grid grid-cols-6 items-center justify-items-center h-64 mt-10">
        <div className=" w-[90%] h-[95%] bg-slate-700 rounded-3xl my-8"></div>
        <div className=" w-[90%] h-[95%] bg-slate-700 rounded-3xl my-8"></div>
        <div className=" w-[90%] h-[95%] bg-slate-700 rounded-3xl my-8"></div>
        <div className=" w-[90%] h-[95%] bg-slate-700 rounded-3xl my-8"></div>
        <div className=" w-[90%] h-[95%] bg-slate-700 rounded-3xl my-8"></div>
        <div className=" w-[90%] h-[95%] bg-slate-700 rounded-3xl my-8"></div>
        <div className=" w-[90%] h-[95%] bg-slate-700 rounded-3xl my-8"></div>
        <div className=" w-[90%] h-[95%] bg-slate-700 rounded-3xl my-8"></div>
      </div>
    </>
  );
};

export default Caraousel;
