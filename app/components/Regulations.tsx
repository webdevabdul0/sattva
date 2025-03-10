"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

// Image sources
const regulationImages = Array.from(
  { length: 9 },
  (_, i) => `/images/regulations/regulation (${i + 1}).png`
);

// Titles for each image
const regulationTitles = [
  "HAACCP",
  "kockázatértékelés",
  "tűzvédelem",
  "munkavédelem",
  "audit",
  "oktatás",
  "jogszabályok",
  "sattva filozófia",
  "Qoodo alkalmazás",
];

const Regulations = () => {
  return (
    <div className="py-20 relative">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 5000 }}
          navigation={{
            nextEl: ".regulations-next",
            prevEl: ".regulations-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {regulationImages.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center relative">
              <div className="w-full h-full select-none cursor-pointer">
                {/* Dynamic Title */}
                <h3 className="text-lg md:text-2xl xl:text-3xl text-white font-semibold absolute bottom-3 left-3 ">
                  {regulationTitles[index]}
                </h3>
                <img
                  src={image}
                  alt={`Regulation ${index + 1}`}
                  className="h-auto w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="z-20 regulations-prev absolute left-6 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/70">
          <ChevronLeft size={32} />
        </button>
        <button className="z-20 regulations-next absolute right-6 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/70">
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Regulations;
