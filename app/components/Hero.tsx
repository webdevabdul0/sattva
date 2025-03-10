"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./ui/Button";

const slides = [
  {
    image: "/images/hero (1).jpg",
    title1: "Biztonság és szakértelem ",
    title2: "kompromisszumok nélkül.",
    description:
      "A Sattva.hu tapasztalt szakemberei segítenek vállalkozásod számára a legfrissebb HACCP és munkavédelmi előírásoknak való megfelelésben, biztosítva a zökkenőmentes működést.",
  },
  {
    image: "/images/hero (2).jpg",
    title1: "Élelmiszerbiztonság egyszerűen.",
    title2: "Felelj meg minden előírásnak!",
    description:
      "A Sattva.hu tapasztalt szakemberei segítenek vállalkozásod számára a legfrissebb HACCP és munkavédelmi előírásoknak való megfelelésben, biztosítva a zökkenőmentes működést.",
  },
  {
    image: "/images/hero (3).jpg",
    title1: "Alapos ellenőrzés, nulla kockázat.",
    title2: "Készülj fel profi módon!",
    description:
      "A Sattva.hu tapasztalt szakemberei segítenek vállalkozásod számára a legfrissebb HACCP és munkavédelmi előírásoknak való megfelelésben, biztosítva a zökkenőmentes működést.",
  },
  {
    image: "/images/hero (4).jpg",
    title1: "Biztonságos munkahely,",
    title2: "nyugodt munkavégzés!",
    description:
      "A Sattva.hu tapasztalt szakemberei segítenek vállalkozásod számára a legfrissebb HACCP és munkavédelmi előírásoknak való megfelelésben, biztosítva a zökkenőmentes működést.",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-screen">
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Next.js Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title1}
                layout="fill"
                objectFit="cover"
                priority={index === 0} // Prioritize first image for better LCP
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
              <div className="flex flex-col items-center">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-mono mb-2 uppercase">
                  {slide.title1}
                </h1>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-mono mb-14 text-[#CDAF50] uppercase">
                  {slide.title2}
                </h1>
              </div>
              <p className="text-base sm:text-lg max-w-2xl mb-6">
                {slide.description}
              </p>
              <Button text="Kérj ingyenes konzultációt" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300  ${
              activeIndex === index ? "bg-primary w-5" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="z-20 hidden sm:flex hero-prev absolute left-6 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/70">
        <ChevronLeft size={32} />
      </button>
      <button className="z-20 hero-next hidden sm:flex absolute right-6 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/70">
        <ChevronRight size={32} />
      </button>
    </section>
  );
};

export default Hero;
