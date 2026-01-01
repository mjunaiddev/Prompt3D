"use client";
import Image from "next/image";
import Goggles from "@assets/goggles.png";

type TokenomicsProps = {
  className?: string;
};

const Tokenomics = ({ className = "" }: TokenomicsProps) => {
  return (
    <section
      className={`tokenomics-section absolute inset-0 flex items-center justify-center text-white ${className}`}
    >
      <div className="scale-150">
        <Image src={Goggles} alt="goggles" priority />
      </div>
      <div className="absolute top-[35%] left-[7%] text-[200px] leading-none font-Expletus_Sans text-white/40 select-none">
        04
      </div>

      {/* Main title - centered across both lenses */}
      <h2 className="absolute top-[52%] left-[8%] text-6xl font-Expletus_Sans text-white leading-none">
        Tokenomics
      </h2>
      <div className="flex flex-col gap-5 w-[550px] absolute top-[25%] left-[58%]">
        <div className="flex flex-col gap-3 border border-[#FFFFFF0A] bg-[#FFFFFF1F] backdrop-blur-2xl rounded-2xl w-[460px] p-2 mr-auto">
          <div className="flex justify-between">
            <div>Liquidity Pool (LP)</div>
            <div>90%</div>
          </div>
          <div className="border  h-1 bg-white "></div>
        </div>
        <div className="flex flex-col gap-3 border border-[#FFFFFF0A] bg-[#FFFFFF1F] backdrop-blur-2xl rounded-2xl w-[460px] p-2 ml-auto">
          <div className="flex justify-between">
            <div>Liquidity Pool (LP)</div>
            <div>90%</div>
          </div>
          <div className="border  h-1 bg-white "></div>
        </div>
        <div className="flex flex-col gap-3 border border-[#FFFFFF0A] bg-[#FFFFFF1F] backdrop-blur-2xl rounded-2xl w-[460px] p-2 mr-auto">
          <div className="flex justify-between">
            <div>Liquidity Pool (LP)</div>
            <div>90%</div>
          </div>
          <div className="border  h-1 bg-white "></div>
        </div>
        <div className="flex flex-col gap-3 border border-[#FFFFFF0A] bg-[#FFFFFF1F] backdrop-blur-2xl rounded-2xl w-[460px] p-2 ml-auto">
          <div className="flex justify-between">
            <div>Liquidity Pool (LP)</div>
            <div>90%</div>
          </div>
          <div className="border  h-1 bg-white "></div>
        </div>
        <div className="flex flex-col gap-3 border border-[#FFFFFF0A] bg-[#FFFFFF1F] backdrop-blur-2xl rounded-2xl w-[460px] p-2 mr-auto">
          <div className="flex justify-between">
            <div>Liquidity Pool (LP)</div>
            <div>90%</div>
          </div>
          <div className="border  h-1 bg-white "></div>
        </div>
        <div className="flex flex-col gap-3 border border-[#FFFFFF0A] bg-[#FFFFFF1F] backdrop-blur-2xl rounded-2xl w-[460px] p-2 ml-auto">
          <div className="flex justify-between">
            <div>Liquidity Pool (LP)</div>
            <div>90%</div>
          </div>
          <div className="border  h-1 bg-white "></div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
