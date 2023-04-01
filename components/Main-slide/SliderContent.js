import React from "react";

function SliderContent({ activeIndex, imgdata }) {
  return (
    <section>
      {imgdata.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="slide-info">
          <p className="slide-title">{slide.title}</p>
          <p className="slide-text">{slide.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}


export default SliderContent;