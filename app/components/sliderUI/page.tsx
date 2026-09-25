"use client";

import Image from "next/image";
import { WiDirectionLeft } from "react-icons/wi";

const SliderUI = ({
  images,
  slider,
  nextSlide,
  prevSlide,
  setSlider,
}) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto mt-10">

      <div className="relative h-[500px] overflow-hidden rounded-3xl">

        <Image src={images[slider]} alt={`Slide ${slider + 1}`} fill className="object-cover"/>

        {/* Black Theme on image */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-4xl font-bold">
            Welcome
          </h1>

          <p className="text-lg mt-2">
            Discover something amazing
          </p>
        </div>
      </div>

      {/* Previous Button */}
      <button type="button" onClick={prevSlide} className="w-12 h-12 rounded-full bg-gray-200 text-gray-800 absolute left-5 top-60 -translate-y-2 hover:bg-white hover:scale-110 transition cursor-pointer" >
        <WiDirectionLeft className="w-10 h-10  relative left-1"/>
      </button>

      {/* Next Button */}
      <button type="button" onClick={nextSlide} className="w-12 h-12 rounded-full bg-gray-200 text-gray-800 absolute right-5 top-60 -translate-y-2 hover:bg-white hover:scale-110 transition cursor-pointer" >
        <WiDirectionLeft className="w-10 h-10  relative left-1 rotate-180"/>
      </button>

      {/* Dots */}
      <div className="flex gap-2 absolute bottom-5 left-[45%]  ">
        {images.map((_, index) => (
          <button key={index} type="button" onClick={() => setSlider(index)} className={`h-2 rounded-full transition-all cursor-pointer ${ slider === index ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80" }`} />
        ))}
      </div>
    </div>
  );
};

export default SliderUI;
