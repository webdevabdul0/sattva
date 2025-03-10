import React from "react";
import Image from "next/image";
import Image2 from "../../public/images/Images/Image2.jpg";
import Background from "../../public/images/Images/Background1.png";

import ButtonOutline from "./ui/ButtonOutline";
import Button from "./ui/Button";
const RiskAssessment = () => {
  const points = [
    "Munkahelyi kockázatértékelés: 20.000 Ft-tól",
    "Kémiai kockázatértékelés: 20.000 Ft-tól",
    "Egyéni védőeszközök juttatási rendje: 15.000 Ft-tól",
    "Orvosi vizsgálatok rendje: 15.000 Ft-tól (külön ajánlat)",
    "Munkavédelmi szabályzat: 15.000 Ft-tól",
  ];

  return (
    <div className="pt-10 md:pt-20 relative bg-dark text-white border-b-2 border-b-primary">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl flex flex-row justify-end  w-full mb-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-mono uppercase text-primary  text-center">
            kockázatértékelés
          </h2>
        </div>

        <div className="w-full border-t-2  border-t-primary flex flex-col items-center justify-center px-8 relative">
          <div className="flex items-center justify-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-no-repeat bg-cover bg-center  z-[-1]"
              style={{ backgroundImage: `url(${Background.src})` }}
            ></div>

            <div className="max-w-screen-2xl flex flex-col lg:flex-row justify-between items-stretch gap-x-16 ">
              {/* Image */}
              <div className="flex-1 flex items-center mt-20  md:mt-0 pr-8 lg:border-r-2 lg:border-r-primary pt-8 pb-10 md:pb-20">
                <div className="w-full h-full select-none">
                  <Image
                    src={Image2}
                    width={300}
                    height={500} // This is a placeholder; Next.js will auto-scale it
                    className="w-full h-full object-cover "
                    alt="Image"
                  />
                </div>
              </div>

              {/* Left Side Content */}
              <div className="flex-1 pt-20 pb-10 md:pb-20">
                <h3 className="text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary mb-4">
                  Minél gyorsabban azonosítod a kockázatokat, annál biztosabban
                  növekszel.
                </h3>

                <p className="text-base sm:text-lg font-semibold mb-4">
                  A kockázatértékelésben a szakembereink minőségileg és
                  mennyiségileg értékelik a munkavállalók egészségét és
                  biztonságát veszélyeztető kockázatokat, különös tekintettel az
                  alkalmazott munkaeszközökre, veszélyes anyagokra és
                  keverékekre, a munkavállalókat érő terhelésekre, valamint a
                  munkahelyek kialakítására.
                  <br /> A kockázatértékelés során azonosítjuk a várható
                  veszélyeket (veszélyforrásokat, veszélyhelyzeteket), valamint
                  a veszélyeztetettek körét, felbecsüljük a veszély jellege
                  (baleset, egészségkárosodás) szerint a veszélyeztetettség
                  mértékét. <br />
                  <br />
                  Tartalmi követelménye:
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

                <div className="flex items-center gap-4 mt-20">
                  <Button text="Megrendelem" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;
