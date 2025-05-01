import React from "react";
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from "../Carousel/carousel";
function ImageSlide() {
  const OPTIONS = { loop: true };
  return (
    <>
      <Carousel options={OPTIONS} isAutoPlay={true} className="w-5/5 mx-auto">
        <SliderContainer className="gap-2">
          <Slider className="w-full">
            <div className="bg-red-500 rounded-xl h-[400px] w-full"></div>{" "}
          </Slider>
          <Slider className="w-full">
            <div className="bg-blue-500 rounded-xl h-[400px] w-full"></div>{" "}
          </Slider>
          <Slider className="w-full">
            <div className="bg-green-500 rounded-xl h-[400px] w-full"></div>{" "}
          </Slider>
          <Slider className="w-full">
            <div className="bg-yellow-500 rounded-xl h-[400px] w-full"></div>{" "}
          </Slider>
        </SliderContainer>
        <div className="flex justify-center py-4">
          <SliderDotButton />
        </div>
      </Carousel>
    </>
  );
}
export default ImageSlide;
