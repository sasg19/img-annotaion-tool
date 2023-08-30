import React, { useState } from "react";
import { ImgSource } from "./ImgSource";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

import DrawAnnotations from "./DrawAnnotation";
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [imageAnnotations, setImageAnnotations] = useState([
    { imageid: "", annotations: [] },
  ]);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const handleSave = () => {
    console.log(imageAnnotations);
  };

  return (
    <div className="flex flex-col gap-4 p-10 justify-center items-center h-screen w-full overflow-auto">
      <section className="slider">
        <ArrowLongLeftIcon
          className="left-arrow h-10 w-10 text-black"
          onClick={prevSlide}
        />
        <ArrowLongRightIcon
          className="right-arrow h-10 w-10 text-black"
          onClick={nextSlide}
        />
        {ImgSource.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <>
                  {/* <img src={slide.image} alt="retail image" className="image" /> */}
                  <DrawAnnotations
                    image={slide.image}
                    setImageAnnotations={setImageAnnotations}
                  />
                </>
              )}
            </div>
          );
        })}
      </section>

      <button
        className="h-16 w-52 border border-solid rounded bg-red-100"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default ImageSlider;
