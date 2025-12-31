"use client";
import React from "react";
import Image from "next/image";
import Goggles from "@assets/goggles.png";

const Aboutus = () => {
  return (
    <div
      className="
        about
        absolute inset-0
        flex items-center justify-center
        opacity-0
        pointer-events-none
      "
    >
      <div className="relative max-w-full">
        <Image src={Goggles} alt="goggles" className="about-goggles" />

        <div
          className="
            absolute
            top-[22%]
            left-[18%]
            w-[64%]
            h-[56%]
            font-Expletus_Sans
            text-white
          "
        >
          <div className="absolute -top-10 left-36 text-[180px] text-white/30">
            01
             <h2 className="text-[64px] text-white">
            Behind <br /> Prompt³D
          </h2>
          </div>

         

          <p className="text-lg text-white/80 mb-4 max-w-[520px]">
            At Prompt³D, we believe anyone can turn their ideas into tangible 3D
            creations—no complex modeling tools required.
          </p>

          <p className="text-lg text-white/80 max-w-[520px]">
            Founded by AI enthusiasts and digital artists, Prompt³D is dedicated
            to bridging imagination and reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
