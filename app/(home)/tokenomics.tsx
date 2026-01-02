"use client";
import Image from "next/image";
import Goggles from "@assets/goggles.png";

type TokenomicsProps = {
  className?: string;
};

const Tokenomics = ({ className = "" }: TokenomicsProps) => {
  const tokenomicsData = [
    { label: "Liquidity Pool (LP)", percentage: 90 },
    { label: "Ecosystem & Operations", percentage: 3 },
    { label: "Team & Advisors", percentage: 2 },
    { label: "Marketing & Partnerships", percentage: 2 },
    { label: "Development Grants", percentage: 2 },
    { label: "Community Rewards", percentage: 1 },
  ];
  return (
    <section
      className={`tokenomics-section absolute inset-0 flex items-center justify-center text-white ${className}`}
    >
     
      <div className="absolute top-[25%] left-[15%]">
        <div className="text-[200px] leading-none font-Expletus_Sans text-white/40 select-none">
          04
        </div>
        {/* Main title - centered across both lenses */}
        <h2 className="text-6xl font-Expletus_Sans text-white leading-none">
          Tokenomics
        </h2>
        <p className="text-[40px] font-Expletus_Sans text-white leading-none">
          Prompt³D Token (PR³D)
        </p>
        <p className="text-6xl font-Expletus_Sans text-white leading-none">
          999,000,000
        </p>
      </div>
      <div className="flex flex-col gap-5 w-[550px] absolute top-[25%] left-[58%]">
        {tokenomicsData.map((item, index) => (
          <div
            key={index}
            className={`relative border border-[#FFFFFF0A] bg-[#FFFFFF1F] backdrop-blur-2xl rounded-2xl px-3 py-2
              ${index % 2 === 0 ? "mr-auto" : "ml-auto"} 
              w-[460px] shadow-lg`}
          >
            {/* Label and Percentage */}
            <div className="flex justify-between items-center mb-1">
              <span className="font-Expletus_Sans text-lg">{item.label}</span>
              <span className="font-Expletus_Sans text-lg font-bold">
                {item.percentage}%
              </span>
            </div>

            {/* Progress Bar Container */}
            <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
              {/* Animated Fill */}
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-white"
                style={{
                  width: `${item.percentage}%`,
                  transition: "width 2s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tokenomics;
