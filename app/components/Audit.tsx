import React from "react";
import Image from "next/image";
import Image4 from "../../public/images/Images/Image4.jpg";
import Background from "../../public/images/Images/Background1.png";
import img1 from "../../public/images/Audit/Img (1).png";
import img2 from "../../public/images/Audit/Img (2).png";
import img3 from "../../public/images/Audit/Img (3).png";

import ButtonOutline from "./ui/ButtonOutline";
import Button from "./ui/Button";
const Audit = () => {
  const points = [
    "Arany: féléves audit",
    "Platina: negyedéves audit",
    "Gyémánt: havi audit",
  ];

  return (
    <div className="pt-10 md:pt-20 relative bg-dark text-white ">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl flex flex-row justify-end  w-full mb-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-mono uppercase text-primary  text-center">
            Audit
          </h2>
        </div>

        <div className="w-full border-t-2  border-y-primary flex flex-col items-center justify-center px-8 relative ">
          <div className="flex items-center justify-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-no-repeat bg-cover bg-center  z-[-1]"
              style={{ backgroundImage: `url(${Background.src})` }}
            ></div>

            <div className="max-w-screen-2xl flex flex-col md:flex-row justify-between items-stretch gap-x-16 ">
              {/* Image */}
              <div className="flex-1 flex items-center mt-20  md:mt-0 pr-8 lg:border-r-2 lg:border-r-primary pt-8 pb-8 md:pb-8">
                <div className="w-full h-full select-none">
                  <div className="relative w-full h-[1000px]">
                    <Image
                      src={Image4}
                      alt="Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Left Side Content */}
              <div className="flex-1 pt-20 pb-10 md:pb-20">
                <h3 className="text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary mb-4">
                  Teljes körű felkészítés, maximális biztonság
                </h3>

                <p className="text-base sm:text-lg font-semibold mb-4">
                  A SATTVA AUDIT egy alapos helyszíni HACCP, munka és tűvédelmi
                  szempontú felülvizsgálat és felkészítés, amely magában foglal
                  egy részletes fényképes hibalista készítését, a hibák
                  javítására irányuló cselekvési tervet és egy százalékos
                  kiértékelést. Az audit során akár 120 kockázati pontot is
                  megvizsgálunk, ezzel biztosítva a szakhatósági nem megfelelés
                  kockázatának lecsökkentését, teljes megszüntetését. A Sattva
                  Audit rendszer segítségével ügyfeleinknek átlagosan kevesebb,
                  mint három hónap alatt 90% fölé emelkedik a megfelelőségi
                  rátája.
                </p>

                <p className="text-base sm:text-lg font-semibold mb-4">
                  Az audit lehet eseti, illetve folyamatos is, ami az alábbi
                  kategóriákat öleli fel:
                </p>

                <ul className="space-y-3 list-none mb-4">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <span className="w-2 h-2 bg-white rounded-full block shrink-0"></span>

                      <p className="text-base sm:text-lg font-semibold">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="text-base sm:text-lg font-semibold mb-4">
                  Az árakról és a fenti kategóriák kedvezményeiről és
                  funkcióiról egy személyes beszélgetés során tudunk bővebb
                  információt adni.
                </p>

                <div className="flex items-center gap-4 mt-20">
                  <Button text="Megrendelem" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1  md:grid-cols-3 border-t-2 border-t-primary">
            <div className="  lg:border-r-2 lg:border-r-primary">
              <div className=" flex flex-col items-center justify-center text-center space-y-7 my-20 ">
                <Image src={img1} width={200} height={200} alt="img" />

                <h4 className="text-primary font-mono text-2xl ">Arany</h4>

                <div className="text-white">
                  <ButtonOutline text="Megrendelem" />
                </div>
              </div>
            </div>

            <div className="border-t-2 border-t-primary md:border-t-0 lg:border-r-2 lg:border-r-primary">
              <div className="w-full flex flex-col items-center justify-center text-center space-y-7 my-20">
                <Image src={img2} width={200} height={200} alt="img" />

                <h4 className="text-primary font-mono text-2xl">Platina</h4>

                <div className="text-white">
                  <ButtonOutline text="Megrendelem" />
                </div>
              </div>
            </div>

            <div className="border-t-2 border-t-primary md:border-t-0">
              {" "}
              <div className="w-full flex flex-col items-center justify-center text-center space-y-7 my-20">
                <Image src={img3} width={200} height={200} alt="img" />

                <h4 className="text-primary font-mono text-2xl">Gyémánt</h4>

                <div className="text-white">
                  <ButtonOutline text="Megrendelem" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;
