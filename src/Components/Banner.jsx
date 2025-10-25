import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';



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
  <motion.div
  initial={{y:30,opacity: 0 }}
  animate={{y:0, opacity:1 }}
      transition={{ duration: 0.6 }}
   className="w-11/12 bg-banner h-[400px] md:h-[600px]  mt-10 mx-auto   flex justify-center items-center"  > 
  <div
 

  
  className="w-full bg-banner py-12 rounded-2xl h-full">
    <Slider {...settings}>
      {sliderImg.map((num, index) => (
        <div key={num} className=" flex justify-center items-center">
          <div
            className={`transition-transform   w-[120px]   h-[200px] md:w-[250px] md:h-[400px] xl:w-[400px] xl:h-[500px]  duration-700 rounded-2xl overflow-hidden shadow-lg
              ${index === current ? "scale-100  z-20" : "scale-60 z-10 opacity-60"}`}
          >
            <img
              src={num}
              alt=""
              className=" h-[200px] w-[120px] md:w-[250px] md:h-[400px] xl:h-[500px] xl:w-[400px]  md:rounded-2xl"
            />
          </div>
        </div>
      ))}
    </Slider>
  </div>
</motion.div>


  );
};

export default Banner;
