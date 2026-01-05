"use client";

import React, { useState } from "react";
import Image from "next/image";
import Card1 from "@assets/card1.png";
import Card2 from "@assets/card2.png";
import Card3 from "@assets/card3.png";
import Card4 from "@assets/card4.png";
import NoDataImg from "@assets/nodata-img.png";

const cards = [
  { img: Card1, claimed: false },
  { img: Card2, claimed: true },
  { img: Card3, claimed: false },
  { img: Card4, claimed: false },
  { img: Card1, claimed: false },
  { img: Card2, claimed: true },
  { img: Card3, claimed: false },
  { img: Card4, claimed: false },
  { img: Card1, claimed: false },
  { img: Card2, claimed: true },
  { img: Card3, claimed: false },
  { img: Card4, claimed: false },
];

const Rewards = () => {
  const [claimedState, setClaimedState] = useState(cards.map((c) => c.claimed));

  const handleClaim = (index: number) => {
    setClaimedState((prev) =>
      prev.map((item, i) => (i === index ? true : item))
    );
  };

  return (
    <div className="container p-3 mt-7">
      <div className="max-w-[360px] md:max-w-[1340px] max-h-[630px] border border-[#B441FF] backdrop-blur-[75px] rounded-[20px] p-4 sm:p-5 md:p-7 overflow-y-auto rewards-scrollbar mx-auto">
        {cards.length === 0 ? (
          <div className="py-60">
            <Image src={NoDataImg} alt="No data" className="mx-auto" />
            <div className="text-white text-center ">No data found.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {cards.map((card, index) => (
              <div key={index} className="flex flex-col gap-6 w-[265px]">
                <Image src={card.img} alt={`Card ${index + 1}`} />

                <div className="flex justify-between">
                  <button className="border border-white text-white rounded-[10px] w-[130px] py-2">
                    View Chat
                  </button>

                  {claimedState[index] ? (
                    <button className="bg-[#ACACAC6E] text-white rounded-[10px] w-[130px]">
                      Claimed
                    </button>
                  ) : (
                    <button
                      onClick={() => handleClaim(index)}
                      className="bg-white rounded-[10px] w-[130px]"
                    >
                      <span
                        className="bg-[linear-gradient(92.78deg,#645DFF_1.42%,#ED2EFE_97.44%)]
                      bg-clip-text text-transparent"
                      >
                        Claim 100
                      </span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rewards;
