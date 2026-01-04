import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@assets/logo.png";

const Dappnav = () => {
  return (
    <div className="w-full fixed top-0 backdrop-blur-lg z-40">
      <div
        className="container flex justify-between items-center h-[100px] px-4 lg-px-0 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
          after:w-[85%] after:h-[1px]
          after:bg-gradient-to-r
          after:from-transparent
          after:via-white/40
          after:to-transparent"
      >
        <Link href="/">
          <Image src={Logo} alt="Prompt3d Logo" />
        </Link>
        <button className="bg-white rounded-[10px] w-36 py-3">
          <span
            className="bg-[linear-gradient(92.78deg,#645DFF_1.42%,#ED2EFE_97.44%)]
              bg-clip-text text-transparent"
          >
            0x00000
          </span>
        </button>
      </div>
    </div>
  );
};

export default Dappnav;
