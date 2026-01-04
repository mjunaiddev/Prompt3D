"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Menu, X } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (progress: number) => {
    const st = ScrollTrigger.getById("main-scroll");
    if (!st) return;

    const targetScroll = st.start + (st.end - st.start) * progress;

    gsap.to(window, {
      scrollTo: targetScroll,
      duration: 1.2,
      ease: "power3.inOut",
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full fixed top-0 backdrop-blur-lg z-40">
      <div
        className="container mx-auto flex items-center justify-between h-16 md:h-20 lg:h-[100px] px-4 lg:px-0 relative
          after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
          after:w-[85%] after:h-[1px]
          after:bg-gradient-to-r
          after:from-transparent
          after:via-white/40
          after:to-transparent"
      >
        {/* NAV LINKS - Hidden on mobile, visible on md and up */}
        <ul className="hidden md:flex gap-4 lg:gap-6 font-Expletus_Sans font-normal text-base lg:text-xl">
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

        {/* MOBILE MENU BUTTON - Visible only on mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
          <Image
            src={Logo}
            alt="Prompt3d Logo"
            className="w-10 h-10 md:w-32 lg:w-auto md:h-auto"
          />
        </div>

        {/* ACTION BUTTONS - Hidden on mobile, visible on md and up */}
        <div className="hidden md:flex gap-2 lg:gap-3 font-Expletus_Sans font-medium text-base lg:text-xl">
          <button className="bg-white rounded-[100px] w-32 lg:w-44 py-2 lg:py-3">
            <span
              className="bg-[linear-gradient(92.78deg,#645DFF_1.42%,#ED2EFE_97.44%)]
              bg-clip-text text-transparent"
            >
              Buy Now
            </span>
          </button>

          <Link href="/dapp">
            <button className="border border-white rounded-[100px] w-32 lg:w-44 py-2 lg:py-3 text-white text-sm lg:text-base">
              Go to Dapp
            </button>
          </Link>
        </div>
      </div>

      {/* MOBILE MENU - Slides down on mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Nav Links */}
            <ul className="flex flex-col gap-4 font-Expletus_Sans font-normal text-lg mb-6">
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

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-3 font-Expletus_Sans font-medium text-base">
              <button className="bg-white rounded-[100px] w-full py-3">
                <span
                  className="bg-[linear-gradient(92.78deg,#645DFF_1.42%,#ED2EFE_97.44%)]
                  bg-clip-text text-transparent"
                >
                  Buy Now
                </span>
              </button>

              <Link href="/dapp">
                <button className="border border-white rounded-[100px] w-full py-3 text-white">
                  Go to Dapp
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
