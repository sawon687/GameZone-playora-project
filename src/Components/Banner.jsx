import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {
  const [current, setCurrent] = useState(0);
  const sliderImg = [
    'https://i.postimg.cc/d0fFLXZc/Screenshot-2025-10-22-120041.png','https://i.postimg.cc/sxwZWsYP/Screenshot-2025-10-22-121204.png','https://i.postimg.cc/mgWmjSCQ/Screenshot-2025-10-22-121405.png','https://i.postimg.cc/MpwhHwsh/Screenshot-2025-10-22-121342.png'
  ];
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
  pauseOnHover: false,  
  arrows: false,
  beforeChange: (oldIndex, newIndex) => setCurrent(newIndex),
};


  return (
  <div className="w-11/12 mt-15 mx-auto bg-[#181818]  py-5 rounded-2xl flex justify-center items-center"> 
  <div className="w-full">
    <Slider {...settings}>
      {sliderImg.map((num, index) => (
        <div key={num} className="px-10 flex justify-center items-center">
          <div
            className={`transition-transform duration-700 rounded-2xl overflow-hidden shadow-lg
              ${index === current ? "scale-100 z-20" : "scale-60 z-10 opacity-60"}`}
          >
            <img
              src={num}
              alt=""
              className="w-[200px]  h-[400px] md:w-[500px] md:h-[500px] object-fit rounded-2xl"
            />
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>


  );
};

export default Banner;
