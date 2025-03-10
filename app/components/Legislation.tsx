import React from "react";
import Image from "next/image";
import Image6 from "../../public/images/Images/Image6.jpg";
import Background from "../../public/images/Images/Background1.png";

import ButtonOutline from "./ui/ButtonOutline";
import Button from "./ui/Button";
const Legislation = () => {
  const points = [
    "Elkerülhetők a súlyos bírságok és hatósági szankciók",
    "Biztosított a munkavállalók és fogyasztók védelme",
    "Megőrizhető a vállalkozás hírneve és piaci stabilitása",
  ];

  return (
    <div className="pt-10 md:pt-20 relative bg-dark text-white border-b-2 border-b-primary">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl flex flex-row justify-end  w-full mb-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-mono uppercase text-primary  text-center">
            jogszabályok
          </h2>
        </div>

        <div className="w-full border-t-2  border-t-primary flex flex-col items-center justify-center px-8 relative">
          <div className="flex items-center justify-center">
            {/* Background Image */}

            <div className="max-w-screen-2xl flex flex-col lg:flex-row justify-between items-stretch gap-x-16 ">
              {/* Image */}
              <div className="flex-1 flex items-center mt-20  md:mt-0 pr-8 lg:border-r-2 lg:border-r-primary pt-8 pb-10 md:pb-20">
                <div className="w-full h-full select-none">
                  <div className="relative w-full h-[800px]">
                    <Image
                      src={Image6}
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
                  A Haccp rendszerre vonatkozó jogszabályi háttér
                </h3>

                <p className="text-base sm:text-lg font-semibold mb-4">
                  Az élelmiszerbiztonsági, munkavédelmi és tűzvédelmi előírások
                  folyamatosan változnak, ezért elengedhetetlen a naprakész
                  tájékozódás. Itt megtalálod a legfontosabb jogszabályokat és
                  előírásokat, amelyek segítenek a megfelelőség biztosításában.
                </p>

                <p className="text-base sm:text-lg font-bold mb-4">
                  Miért fontos a jogszabályi megfelelés?
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
                  A legfrissebb és releváns jogszabályokat egy külön oldalon
                  gyűjtöttük össze, hogy könnyen elérhetőek és átláthatóak
                  legyenek.
                </p>

                <div className="flex items-center gap-4 mt-20">
                  <Button text="Elolvasom a jogszabályokat" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legislation;
