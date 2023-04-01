import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Arrows from "./SideArrows";
import imgdata from "./imgdata";
import "./MainSlide.css";

const len = imgdata.length - 1;

function MainSlide(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container" id="main">
      <SliderContent activeIndex={activeIndex} imgdata={imgdata} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      </div>
      );
    }
    
    export default MainSlide;