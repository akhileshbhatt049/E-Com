"use client";

import { useEffect, useState } from "react";
import SliderUI from "./sliderUI/page";

const images = [
  "/sliderImages/bag.jpg",
  "/sliderImages/bags.webp",
  "/sliderImages/laptop.jpg",
  "/sliderImages/samsungS25.jpg",
  "/sliderImages/googlePixel.jpg",
];

const ImageSlider = () => {
  const [slider, setSlider] = useState(0);

  const nextSlide = () => {
    setSlider((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setSlider((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSlider((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SliderUI
      images={images}
      slider={slider}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
      setSlider={setSlider}
    />
  );
};

export default ImageSlider;
