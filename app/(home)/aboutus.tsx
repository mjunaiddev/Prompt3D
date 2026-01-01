"use client";

import React from "react";
import Image from "next/image";
import Goggles from "@assets/goggles.png";

const Aboutus = () => {
  return (
    <div className="about absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none">
      <div className="relative">
        <Image
          src={Goggles}
          alt="goggles"
          className="about-goggles drop-shadow-2xl"
          priority
        />

        {/* Content overlay inside the lenses */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full max-w-5xl">

            {/* Big faded 01 - inside left lens */}
            <div className="absolute top-[28%] left-[14%] text-[280px] leading-none font-Expletus_Sans text-white/10 select-none">
              01
            </div>

            {/* Main title - centered across both lenses */}
            <h2 className="absolute top-[38%] left-1/2 -translate-x-1/2 text-6xl md:text-8xl font-Expletus_Sans text-white text-center leading-tight">
              Behind <br /> Prompt³D
            </h2>

            {/* Left paragraph - inside left lens */}
            <p className="absolute top-[58%] left-[12%] w-[38%] text-base md:text-lg text-white/70 leading-relaxed">
              At Prompt³D, we believe anyone can turn their ideas into tangible 3D creations—no complex modeling tools required.
            </p>

            {/* Right paragraph - inside right lens */}
            <p className="absolute top-[58%] right-[12%] w-[38%] text-base md:text-lg text-white/70 leading-relaxed text-right">
              Founded by AI enthusiasts and digital artists, Prompt³D is dedicated to bridging imagination and reality. Our mission is to make 3D creation accessible to everyone.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;