import React from "react";
import Image from "next/image";
import Image3 from "../../public/images/Images/Image3.jpg";
import Background from "../../public/images/Images/Background2.png";

import ButtonOutline from "./ui/ButtonOutline";
const FireProtection = () => {
  const points = [
    "Tűzvédelmi szabályzat: 25.000 Ft-tól",
    "Kiürítésszámítás: 20.000 Ft-tól",
    "Tűzriadó terv: 5.000 Ft-tól",
    "Az érintésvédelmi jegyzőköny ára nagyban függ az egységben lévő mérési pontok számától, ezért erre külön árajánlatot tudunk adni.",
  ];

  return (
    <div className="pt-10 md:pt-20 relative">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl flex flex-row justify-start  w-full mb-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-mono uppercase bg-gradient-to-tr from-[#20201F] to-[#666666] text-transparent bg-clip-text text-center">
            tűzvédelem
          </h2>
        </div>

        <div className="w-full  flex flex-col items-center justify-center px-8 relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center  z-[-1]"
            style={{ backgroundImage: `url(${Background.src})` }}
          ></div>

          <div className="flex items-center justify-center">
            <div className="max-w-screen-2xl flex flex-col lg:flex-row justify-between items-stretch gap-x-16">
              {/* Left Side Content */}
              <div className="flex-1 pt-20">
                <h3 className="text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary mb-4">
                  Teljes körű tűzvédelmi szolgáltatások egy helyen.
                </h3>

                <p className="text-base sm:text-lg font-semibold mb-4">
                  A tűzvédelmi szabályzat elkészítéséhez szakembereinkkel
                  időpont egyeztetés után egy alapos helyszíni bejárást tartunk.
                  Az így felvett adatok alapján megírjuk a szabályzatot, amit
                  szükség szerint kiürítés számíttással és tűzriadó tervvel
                  látunk el. Az érintésvédelmi felülvizsgálat is mindig egy
                  helyszíni felméréshez van kötve.
                </p>

                <ul className="space-y-3 list-none mb-4">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <span className="w-2 h-2 bg-dark rounded-full block shrink-0"></span>

                      <p className="text-base sm:text-lg font-semibold">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 mt-20">
                  <ButtonOutline text="Megrendelem" />
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 flex items-center mt-20 my-8  lg:mt-0">
                <div className="w-full h-full select-none">
                  <div className="relative w-full h-[1000px]">
                    <Image
                      src={Image3}
                      alt="Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireProtection;
