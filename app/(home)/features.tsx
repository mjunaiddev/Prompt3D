"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Goggles from "@assets/goggles.png";
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

  // Clean ref setter to fix TypeScript error
  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) {
      cardsRef.current[index] = el;
    }
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
      <div className="absolute top-[35%] left-[7%] text-[200px] leading-none font-Expletus_Sans text-white/40 select-none">
        02
      </div>

      {/* Main title - centered across both lenses */}
      <h2 className="absolute top-[52%] left-[8%] text-6xl font-Expletus_Sans text-white leading-none">
        Distinctive <br />
        Aspects
      </h2>

      {/* Floating Goggles - positioned like in Figma */}
      <Image
        src={Goggles}
        alt="goggles"
        className="absolute top-[38%] left-[-22%] rotate-[40deg]"
      />

      {/* Cards - exactly your original layout and styling */}
      <div className="relative top-[-5%] right-[-50%] rotate-[-25deg]">
        <div className="flex gap-7 justify-center">
          {featureData.map((feature, index) => (
            <div
              key={index}
              ref={setCardRef(index)}
              className="flex flex-col gap-5 w-[340px] rounded-[30px] border border-[#FFFFFF0A]
                         bg-white/5 backdrop-blur-[50px] p-6 text-white"
            >
              <Image
                src={feature.img}
                alt={feature.title}
                className="rounded-2xl"
              />

              <h3 className="text-2xl font-Expletus_Sans">{feature.title}</h3>

              <p className="text-base opacity-80 font-Expletus_Sans">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
