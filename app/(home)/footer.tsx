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
      <div className="bg-FooterBg flex  w-[1340px] h-[260px] absolute top-28 left-1/2 -translate-x-1/2 px-20 py-10 text-white justify-between">
        <Image src={Logo} alt="logo" width={178} height={200} />
        <ul>
          <li>Menu</li>
          <li>Home</li>
          <li>Features</li>
          <li>About Us</li>
          <li>Road Map</li>
          <li>Tokenomics</li>
        </ul>
        <div className="flex flex-col items-start gap-1">
          <div>Socials</div>
          <div className="flex gap-2">
            <div className=" flex items-center justify-center w-10 h-10 border border-[#FFFFFF0A] rounded-full backdrop-blur-3xl">
              <Image src={Twitter} alt="Twitter Logo" />
            </div>
            <div className=" flex items-center justify-center w-10 h-10 border border-[#FFFFFF0A] rounded-full backdrop-blur-3xl">
              <Image src={Telegram} alt="Telegram Logo" />
            </div>
            <div className=" flex items-center justify-center w-10 h-10 border border-[#FFFFFF0A] rounded-full backdrop-blur-3xl">
              <Image src={Etherscan} alt="Etherscan Logo" />
            </div>
            <div className=" flex items-center justify-center w-10 h-10 border border-[#FFFFFF0A] rounded-full backdrop-blur-3xl">
              <Image src={Binance} alt="Binance Logo" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>Contract Address</div>
          <div>0x0000000000000000000000000000000000</div>
        </div>
      </div>

      <div className="absolute top-[50%] left-[40%] text-[465px] leading-none font-Expletus_Sans text-white/40 select-none">
        ³D
      </div>
      {/* Main title - centered across both lenses */}
      <h2 className="absolute top-[65%] left-[38%] text-[128px] font-Expletus_Sans text-white leading-none">
        Prompt³D
      </h2>
    </section>
  );
};

export default Footer;
