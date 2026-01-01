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
            <div className="absolute top-[25%] left-[8%] text-[200px] leading-none font-Expletus_Sans text-white/30 select-none">
              01
            </div>

            {/* Main title - centered across both lenses */}
            <h2 className="absolute top-[52%] left-[10%] text-6xl font-Expletus_Sans text-white leading-none">
              Behind <br /> Prompt³D
            </h2>

            {/* Left paragraph - inside left lens */}
            <p className="absolute top-[20%] left-[32%] w-[625px] text-xl text-white/70 ">
              At Prompt³D, we believe anyone can turn their ideas into tangible
              3D creations—no complex modeling tools required. Our platform
              transforms plain text prompts into instantly usable assets,
              lowering the usual barriers to creativity.
            </p>

            {/* Right paragraph - inside right lens */}
            <p className="absolute top-[45%] right-[-1%] w-[440px] text-xl text-white/70 leading-5">
              Founded by AI enthusiasts and digital artists, Prompt³D is
              dedicated to bridging imagination and reality. We’re here to help
              you shape immersive experiences with just a few words.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
