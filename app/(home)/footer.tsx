import React from "react";
import Image from "next/image";
import Goggles from "@assets/goggles.png";
import Logo from "@assets/logo.png";
import Twitter from "@assets/twitter-icon.png";
import Telegram from "@assets/telegram-icon.png";
import Etherscan from "@assets/etherscan-icon.png";
import Binance from "@assets/binance-icon.png";

type FooterProps = {
  className?: string;
};
const Footer = ({ className = "" }: FooterProps) => {
  return (
    <section className={`footer-section ${className}`}>
      <div className="hidden bg-FooterBg bg-contain bg-no-repeat md:flex  w-[700px] lg:w-[1000px] xl:w-[1340px] h-[260px] absolute top-28 left-1/2 -translate-x-1/2 px-10 xl:px-20 md:py-5 lg:py-7 xl:py-10 text-white justify-between">
        <div className=" md:py-1 lg:py-7">
          <Image src={Logo} alt="logo" />
        </div>
        <ul
          className="  bg-[linear-gradient(90.75deg,#FFFFFF_3.36%,rgba(255,255,255,0)_103.93%)]
                 bg-clip-text text-transparent text-xs lg:text-sm xl:text-lg "
        >
          <li>Menu</li>
          <li>Home</li>
          <li>Features</li>
          <li>About Us</li>
          <li>Road Map</li>
          <li>Tokenomics</li>
        </ul>
        <div className="flex flex-col items-start gap-1 text-xs lg:text-sm xl:text-lg">
          <div>Socials</div>
          <div className="flex md:gap-1 lg:gap-2">
            <div className=" flex items-center justify-center w-5 h-5 lg:w-10 lg:h-10 border border-[#FFFFFF0A] rounded-full backdrop-blur-3xl">
              <Image src={Twitter} alt="Twitter Logo" />
            </div>
            <div className=" flex items-center justify-center w-5 h-5 lg:w-10 lg:h-10 border border-[#FFFFFF0A] rounded-full backdrop-blur-3xl">
              <Image src={Telegram} alt="Telegram Logo" />
            </div>
            <div className=" flex items-center justify-center w-5 h-5 lg:w-10 lg:h-10 border border-[#FFFFFF0A] rounded-full backdrop-blur-3xl">
              <Image src={Etherscan} alt="Etherscan Logo" />
            </div>
            <div className=" flex items-center justify-center w-5 h-5 lg:w-10 lg:h-10 border border-[#FFFFFF0A] rounded-full backdrop-blur-3xl">
              <Image src={Binance} alt="Binance Logo" />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-xs lg:text-sm xl:text-lg">
          <div
            className="  bg-[linear-gradient(90.75deg,#FFFFFF_3.36%,rgba(255,255,255,0)_103.93%)]
                 bg-clip-text text-transparent"
          >
            Contract Address
          </div>
          <div>0x0000000000000000000000000000000000</div>
        </div>
      </div>

      <div className="absolute top-[50%] xl:top-[50%] left-[40%] text-9xl xl:text-[465px] leading-none font-Expletus_Sans text-white/40 select-none">
        ³D
      </div>
      {/* Main title - centered across both lenses */}
      <h2 className="absolute top-[55%] xl:top-[65%] left-[28%] xl:left-[38%] text-5xl xl:text-9xl font-Expletus_Sans text-white leading-none">
        Prompt³D
      </h2>
    </section>
  );
};

export default Footer;
