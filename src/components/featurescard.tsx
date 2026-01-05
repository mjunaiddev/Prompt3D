import React from "react";
import Image from "next/image";
import FeatureImg from "@assets/features-img.png";
const Featurescard = () => {
    const featureData = [
      {
        title: "NLP-Driven Asset Generation",
        description:
          "Prompt³D merges advanced natural language parsing with 3D geometry algorithms to instantly produce rig-ready models, eliminating manual modeling.",
        img: FeatureImg,
      },
      {
        title: "Real-Time Collaboration",
        description:
          "Work with teammates across the globe seamlessly in a shared 3D workspace, enabling instant feedback and iteration.",
        img: FeatureImg,
      },
      {
        title: "AI-Powered Optimization",
        description:
          "Automatically optimize your models for performance and quality using our intelligent AI-driven tools.",
        img: FeatureImg,
      },
      {
        title: "Cross-Platform Integration",
        description:
          "Easily export assets to multiple engines and formats, ensuring compatibility with your preferred 3D pipeline.",
        img: FeatureImg,
      },
    ];
  return (
    <div className="flex gap-7 justify-center">
      {featureData.map((feature, index) => (
        <div
          key={index}
   
          className="flex flex-col gap-1 lg:gap-4 w-[340px] rounded-[30px] border border-[#FFFFFF0A]
                           bg-white/5 backdrop-blur-[50px] p-2 lg:p-6 text-white"
        >
          <Image
            src={feature.img}
            alt={feature.title}
            className="rounded-2xl"
          />

          <h3 className="text-lg lg:text-3xl font-Expletus_Sans">
            {feature.title}
          </h3>

          <p className=" text-sm lg:text-base font-Expletus_Sans">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Featurescard;
