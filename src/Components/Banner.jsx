import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const slides = [1,2,3,4,5];

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    focusOnSelect: true,
    beforeChange: (oldIndex, newIndex) => setCurrent(newIndex),
    arrows: false,
  };

  return (
    <div className="w-11/12 slider-container border-2 mt-10 mx-auto "> 
  <Slider {...settings}>
    {slides.map((num, index) => (
      <div key={num} className="grid grid-cols-3 place-content-between ">
        <div className="overflow-hidden "> {/* outer div rounded + overflow-hidden */}
          <div
            className={`bg-green-500 w-[200px] h-[400px] md:w-[300px] md:h-[400px] flex items-center justify-center transition-transform duration-1000 rounded-2xl
            ${index === current ? "scale-90 z-20" : "scale-60 z-10"}`} 
           
          >
            <h3 className="text-white text-2xl font-bold">{num}</h3>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

  );
};

export default Banner;
