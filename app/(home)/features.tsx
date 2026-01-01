"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Goggles from "@assets/goggles.png";
import FeatureImg from "@assets/features-img.png"; // Replace with actual card images later

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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 200, autoAlpha: 0 },
        {
          y: -100, // Parallax upward
          autoAlpha: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=100",
            end: "bottom top+=100",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`absolute inset-0 flex flex-col justify-center ${className} opacity-0 pointer-events-none`}
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-start gap-8 text-white mb-20">
          <div className="text-[180px] leading-none opacity-20 font-Expletus_Sans">
            02
          </div>
          <div className="pt-12">
            <h2 className="text-6xl md:text-7xl font-Expletus_Sans">
              Distinctive <br /> Aspects
            </h2>
          </div>
        </div>

        {/* Floating Goggles */}
        <Image
          src={Goggles}
          alt="goggles"
          className="absolute right-[-200px] top-[100px] w-[900px] rotate-[-20deg] opacity-80 pointer-events-none drop-shadow-2xl"
          priority
        />

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl">
          {featureData.map((feature, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                if (el !== null) {
                  cardsRef.current[index] = el;
                }
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-white shadow-2xl"
            >
              <Image
                src={feature.img}
                alt={feature.title}
                className="rounded-2xl mb-6"
              />
              <h3 className="text-3xl font-Expletus_Sans mb-4">
                {feature.title}
              </h3>
              <p className="text-lg opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
