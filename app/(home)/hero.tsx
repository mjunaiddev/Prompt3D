"use client";
import React from "react";
import Image from "next/image";
import Goggles from "@assets/goggles.png";

const Hero = () => {
  return (
    <div
      className="hero absolute inset-0 z-10 flex flex-col items-center justify-center"
    >
      {/* <Image src={Goggles} alt="goggles" /> */}
      <p className="font-Expletus_Sans text-3xl bg-gradient-to-b from-white via-gray-300/60 to-gray-300/10 text-transparent bg-clip-text">
        Transforming Words into
      </p>
      <h1 className="font-Expletus_Sans text-[54px] text-white">
        Worlds With Prompt³D
      </h1>      
    </div>
  );
};

export default Hero;
