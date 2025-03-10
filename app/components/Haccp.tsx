import React from "react";
import Image from "next/image";
import Image1 from "../../public/images/Images/Image1.jpg";
import Background from "../../public/images/Images/Background1.png";

import ButtonOutline from "./ui/ButtonOutline";
const Haccp = () => {
  const points = [
    "Személyre szabott, professzionális HACCP kézikönyv a területi hatósági ellenőrök igényeinek megfelelően, hogy biztosan megfelelj a legújabb előírásoknak.",
    "Garanciális dokumentációkészítés, hogy minden szükséges papírmunkát elvégezzünk a megfelelőség biztosítása érdekében.",
    "Folyamatos támogatás: nem csak a kezdeti tanácsadásban segítünk, hanem folyamatosan elérhetőek vagyunk, hogy bármikor válaszoljunk a kérdéseidre.",
    "Revízió lehetőségei biztosítása, hogy a kézikönyv mindig naprakész legyen, és könnyen alkalmazkodjon a változó jogszabályokhoz.",
    "Referenciáink több sikeres projektet is magukban foglalnak, amik bizonyítják szakértelmünket és elkötelezettségünket.",
    "20+ éves tapasztalat a vendéglátás és minőségbiztosítás területén, így biztos lehetsz benne, hogy nálunk nemcsak elméleti, hanem gyakorlati tudásra is támaszkodhatsz.",
  ];

  return (
    <div className="py-10 md:py-20 relative">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl flex flex-row justify-start  w-full mb-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-mono uppercase bg-gradient-to-tr from-[#20201F] to-[#666666] text-transparent bg-clip-text text-center">
            haccp
          </h2>
        </div>

        <div className="w-full bg-black/10 flex flex-col items-center justify-center px-8 relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center  z-[-1]"
            style={{ backgroundImage: `url(${Background.src})` }}
          ></div>

          <div className="flex items-center justify-center">
            <div className="max-w-screen-2xl flex flex-col lg:flex-row justify-between items-stretch gap-x-16">
              {/* Left Side Content */}
              <div className="flex-1 pt-20">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-mono mb-4">
                  Amiért minket válassz
                </h3>

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

                <p className="text-base sm:text-lg font-semibold mb-4">
                  A HACCP kézikönyvet alapos helyszíni felmérés után
                  szakembereink az általunk szerzett információk alapján
                  teljesen az egységedre szabva alakítják ki. Az árak 20.000
                  Ft-tól kezdődnek, és az egyedi igényeidtől függően
                  változhatnak.
                  <br /> Ne habozz, kérd az ingyenes állapotfelmérést! Ha bármi
                  kérdésed van, hívd kollégáinkat bizalommal, vagy töltsd ki az
                  ajánlatkérő űrlapot, és hamarosan felvesszük veled a
                  kapcsolatot!
                </p>

                <div className="flex items-center gap-4 mt-20">
                  <ButtonOutline text="Ajánlatot kérek!" />
                  <ButtonOutline text="Hívlak a részletekért!" />
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 flex items-center mt-20  lg:mt-0">
                <div className="w-full h-full select-none">
                  <div className="relative w-full h-[1000px]">
                    <Image
                      src={Image1}
                      alt="Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg font-normal my-10 md:my-20 max-w-screen-2xl">
            * A HACCP a veszélyelemzés és a kritikus szabályozási pontok
            rendszere, egy tudományosan megalapozott és módszeres rendszer,
            amely az élelmiszer biztonságáról való gondoskodás érdekében
            megállapítja a jellemző veszélyeket és kijelöli a szabályozásukra
            szolgáló intézkedéseket. Az általunk készített HACCP kézikönyv
            tartalmazza az Ön egységére vonatkozó összes kockázatot,
            szabályozást, technológiai leírást és cselekvési tervet a
            beszerzéstől a hulladékok kezeléséig kompletten. Egyéb
            információk: https://portal.nebih.gov.hu/-/vendeglatas-ghp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Haccp;
