"use client";

import React, { useState } from "react";
import Dappnav from "@/src/components/dappnav";
import ChatScreen from "@/app/dapp/chat-screen";
import Rewards from "@/app/dapp/rewards";

export type Message = {
  id: number;
  role: "user" | "ai";
  text: string;
};

const Page = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "rewards">("chat");

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* NAVBAR */}
      <div className="fixed left-0 right-0 top-0 z-50">
        <Dappnav />
      </div>

      {/* BACKGROUND VIDEO */}
      <div className="fixed inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/bg-video.webm" type="video/webm" />
        </video>
      </div>

      {/* TAB SWITCH */}
      <div
        className="
          mt-32
          mx-auto
          flex
          justify-between
          px-2
          h-14
          w-[95%]
          sm:w-[345px]
          border
          border-[#FFFFFF1A]
          rounded-[10px]
          backdrop-blur-3xl
          text-white
          p-1
        "
      >
        <button
          onClick={() => setActiveTab("chat")}
          className={`
            flex
            justify-center
            items-center
            flex-1
            rounded-[10px]
            text-sm
            sm:text-base
            ${
              activeTab === "chat"
                ? "bg-[linear-gradient(92.78deg,#645DFF_1.42%,#ED2EFE_97.44%)] border border-[#FFFFFF1A]"
                : ""
            }
          `}
        >
          Create Vr Modals
        </button>

        <button
          onClick={() => setActiveTab("rewards")}
          className={`
            flex
            justify-center
            items-center
            flex-1
            rounded-[10px]
            text-sm
            sm:text-base
            ${
              activeTab === "rewards"
                ? "bg-[linear-gradient(92.78deg,#645DFF_1.42%,#ED2EFE_97.44%)] border border-[#FFFFFF1A]"
                : ""
            }
          `}
        >
          Rewards
        </button>
      </div>

      {/* SIDE PANEL */}
      <div
        className="
          hidden
          lg:flex
          w-[225px]
          border
          border-[#FFFFFF1A]
          flex-col
          gap-2
          p-2
          rounded-[10px]
          absolute
          top-32
          right-2
          z-20
        "
      >
        <div className="font-Expletus_Sans font-bold text-base text-white">
          Claimable Tokens: 1000 VR
        </div>

        <button className="bg-white rounded-[10px] w-full py-2">
          <span className="bg-[linear-gradient(92.78deg,#645DFF_1.42%,#ED2EFE_97.44%)] bg-clip-text text-transparent font-bold">
            Claim All
          </span>
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          mt-8
          sm:mt-10
          px-2
          sm:px-6
          lg:px-10
        "
      >
        {activeTab === "chat" && <ChatScreen />}
        {activeTab === "rewards" && <Rewards />}
      </div>
    </div>
  );
};

export default Page;
