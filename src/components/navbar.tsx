"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 backdrop-blur-lg z-40">
      <div
        className="container mx-auto flex items-center justify-between h-[100px] px-4 lg:px-0 border-b border-white/20 relative
                      before:absolute before:left-0 before:top-full before:w-full before:h-[1px] before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0"
      >
        <ul className="flex gap-2 font-Expletus_Sans font-normal text-xl text-white">
          <li>Home</li>
          <li>Features</li>
          <Link href={"/aboutus"}>
            <li>About Us</li>
          </Link>
          <li>Roadmap</li>
          <li>Tokenomics</li>
        </ul>
        <Image src={Logo} alt="Prompt3d Logo" />
        <div className="flex gap-3 font-Expletus_Sans font-medium text-xl">
          <button className="bg-white rounded-[100px] w-44 py-3 font-Expletus_Sans">
            <span className="bg-[linear-gradient(92.78deg,#645DFF_1.42%,#ED2EFE_97.44%)] bg-clip-text text-transparent">
              Buy Now
            </span>
          </button>

          <Link href={"/dapp"}>
            <button className="border border-white rounded-[100px] w-44 py-3 font-Expletus_Sans text-white">
              Go to Dapp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
