"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    title1: "Welcome to Sattva",
    title2: "Welcome to Sattva",
    description: "We prioritize quality in everything we do.",
  },
  {
    image: "/images/hero (3).jpg",
    title1: "Welcome to Sattva",
    title2: "Welcome to Sattva",
    description: "Bringing creative solutions to the industry.",
  },
  {
    image: "/images/hero (4).jpg",
    title1: "Welcome to Sattva",
    title2: "Welcome to Sattva",
    description: "Bringing creative solutions to the industry.",
  },
];

const Hero = () => {
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
              <div className="flex flex-col items-center ">
                <h1 className="text-5xl font-mono mb-4">{slide.title1}</h1>
                <h1 className="text-5xl font-mono mb-4 text-[#CDAF50]">
                  {slide.title2}
                </h1>
              </div>
              <p className="text-lg max-w-2xl">{slide.description}</p>
              <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                Learn More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button className="z-20 hero-prev absolute left-6 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/70">
        <ChevronLeft size={32} />
      </button>
      <button className="z-20 hero-next absolute right-6 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/70">
        <ChevronRight size={32} />
      </button>
    </section>
  );
};

export default Hero;
