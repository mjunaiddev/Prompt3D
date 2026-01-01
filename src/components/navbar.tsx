"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 backdrop-blur-lg z-40">
      <div
        className="container mx-auto flex items-center justify-between h-[100px] px-4 lg:px-0 relative
             after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
             after:w-[85%] after:h-[1px]
             after:bg-gradient-to-r
             after:from-transparent
             after:via-white/40
             after:to-transparent"
      >
        <ul className="flex gap-6 font-Expletus_Sans font-normal text-xl">
          {["Home", "Features", "About Us", "Roadmap", "Tokenomics"].map(
            (item) => (
              <li
                key={item}
                className="inline-block cursor-pointer
                 bg-[linear-gradient(90.75deg,#FFFFFF_3.36%,rgba(255,255,255,0)_103.93%)]
                 bg-clip-text text-transparent"
              >
                {item}
              </li>
            )
          )}
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
