"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureImg from "@assets/features-img.png";

gsap.registerPlugin(ScrollTrigger);

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

type FeaturesProps = {
  className?: string;
};

const Features = ({ className = "" }: FeaturesProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[index] = el;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 0 },
        {
          y: 140,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`features-section absolute inset-0 ${className} opacity-0 pointer-events-none`}
    >
      {/* Background number */}
      <div className="absolute top-[25%] left-[11%] xl:top-[30%] xl:left-[9%] text-5xl xl:text-[200px] leading-none font-Expletus_Sans text-white/40 select-none">
        02
      </div>

      {/* Title */}
      <h2 className="hidden lg:block absolute top-[45%] left-[9%] text-[82px] font-Expletus_Sans text-white leading-none">
        Distinctive <br /> Aspects
      </h2>
      <h2 className="block lg:hidden absolute top-[30%] left-[11%] text-3xl font-Expletus_Sans text-white leading-none">
        Features
      </h2>

      {/* Background graphics */}
      <div className="absolute left-[50%] inset-0 bg-no-repeat bg-FeaturesBg" />

      {/* Cards */}
      <div className="relative top-[35%] right-[-70%] xl:top-[-3%] xl:right-[-50%] rotate-[-25deg] z-50">
        <div className="flex gap-3 md:gap-7 justify-center">
          {featureData.map((feature, index) => (
            <div
              key={index}
              ref={setCardRef(index)}
              className="
md:w-[340px] w-[250px]
                md:h-[340px] h-[300px] shrink-0
                flex flex-col justify-between 
                rounded-[30px]
                border border-[#FFFFFF0A]
                bg-white/5 backdrop-blur-[50px]
                p-4 lg:p-6
                text-white
              "
            >
              {/* Image */}
              <Image
                src={feature.img}
                alt={feature.title}
                className="rounded-2xl object-cover"
              />

              {/* Text */}
              <div className="flex flex-col gap-2 flex-1 justify-center">
                <h3 className="text-lg lg:text-2xl font-Expletus_Sans">
                  {feature.title}
                </h3>

                <p className="text-sm lg:text-base font-Expletus_Sans opacity-80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-[63%] top-[60%] inset-0 bg-no-repeat bg-FeaturesReverseBg" />
    </section>
  );
};

export default Features;
