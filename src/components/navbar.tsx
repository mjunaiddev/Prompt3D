"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Logo from "@assets/logo.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SECTION_SCROLL = {
  home: 0,
  features: 0.3,
  about: 0.15,
  roadmap: 0.55,
  tokenomics: 0.75,
};

const Navbar = () => {
  const scrollToSection = (progress: number) => {
    const st = ScrollTrigger.getById("main-scroll");
    if (!st) return;

    const targetScroll =
      st.start + (st.end - st.start) * progress;

    gsap.to(window, {
      scrollTo: targetScroll,
      duration: 1.2,
      ease: "power3.inOut",
    });
  };

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
        {/* NAV LINKS */}
        <ul className="flex gap-6 font-Expletus_Sans font-normal text-xl">
          <li
            onClick={() => scrollToSection(SECTION_SCROLL.home)}
            className="cursor-pointer bg-[linear-gradient(90.75deg,#FFFFFF_3.36%,rgba(255,255,255,0)_103.93%)]
              bg-clip-text text-transparent"
          >
            Home
          </li>

          <li
            onClick={() => scrollToSection(SECTION_SCROLL.features)}
            className="cursor-pointer bg-[linear-gradient(90.75deg,#FFFFFF_3.36%,rgba(255,255,255,0)_103.93%)]
              bg-clip-text text-transparent"
          >
            Features
          </li>

          <li
            onClick={() => scrollToSection(SECTION_SCROLL.about)}
            className="cursor-pointer bg-[linear-gradient(90.75deg,#FFFFFF_3.36%,rgba(255,255,255,0)_103.93%)]
              bg-clip-text text-transparent"
          >
            About Us
          </li>

          <li
            onClick={() => scrollToSection(SECTION_SCROLL.roadmap)}
            className="cursor-pointer bg-[linear-gradient(90.75deg,#FFFFFF_3.36%,rgba(255,255,255,0)_103.93%)]
              bg-clip-text text-transparent"
          >
            Roadmap
          </li>

          <li
            onClick={() => scrollToSection(SECTION_SCROLL.tokenomics)}
            className="cursor-pointer bg-[linear-gradient(90.75deg,#FFFFFF_3.36%,rgba(255,255,255,0)_103.93%)]
              bg-clip-text text-transparent"
          >
            Tokenomics
          </li>
        </ul>

        {/* LOGO */}
        <Image src={Logo} alt="Prompt3d Logo" />

        {/* ACTION BUTTONS */}
        <div className="flex gap-3 font-Expletus_Sans font-medium text-xl">
          <button className="bg-white rounded-[100px] w-44 py-3">
            <span className="bg-[linear-gradient(92.78deg,#645DFF_1.42%,#ED2EFE_97.44%)]
              bg-clip-text text-transparent">
              Buy Now
            </span>
          </button>

          <Link href="/dapp">
            <button className="border border-white rounded-[100px] w-44 py-3 text-white">
              Go to Dapp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
