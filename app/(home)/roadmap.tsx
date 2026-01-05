"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RoadmapProps = {
  className?: string;
};

const Roadmap = ({ className = "" }: RoadmapProps) => {
  const alphaRef = useRef<HTMLDivElement>(null);
  const betaRef = useRef<HTMLDivElement>(null);
  const publicRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollProgressRef = useRef(0);

  useLayoutEffect(() => {
    const alpha = alphaRef.current;
    const beta = betaRef.current;
    const pub = publicRef.current;
    const container = cardsContainerRef.current;

    if (!alpha || !beta || !pub || !container) return;

    // Capture ORIGINAL positions
    const positions = [
      { x: alpha.offsetLeft, y: alpha.offsetTop },
      { x: beta.offsetLeft, y: beta.offsetTop },
      { x: pub.offsetLeft, y: pub.offsetTop },
    ];

    let currentStep = 0;

    const updateCards = (progress: number) => {
      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      scrollProgressRef.current = progress;

      let step = 0;
      if (progress > 0.45) step = 1; // Changed from 0.33 to 0.45 - requires more scroll
      if (progress > 0.8) step = 2; // Changed from 0.66 to 0.8 - requires more scroll

      // Only animate if step changed
      if (step === currentStep) return;
      currentStep = step;

      const order =
        step === 0
          ? [0, 1, 2] // Alpha center
          : step === 1
          ? [2, 0, 1] // Beta center
          : [1, 2, 0]; // Public center

      gsap.to(alpha, {
        x: positions[order[0]].x - positions[0].x,
        y: positions[order[0]].y - positions[0].y,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(beta, {
        x: positions[order[1]].x - positions[1].x,
        y: positions[order[1]].y - positions[1].y,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(pub, {
        x: positions[order[2]].x - positions[2].x,
        y: positions[order[2]].y - positions[2].y,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    // Initialize cards to step 0
    gsap.set(alpha, { x: 0, y: 0 });
    gsap.set(beta, { x: 0, y: 0 });
    gsap.set(pub, { x: 0, y: 0 });

    // Handle wheel event for scrolling
    const handleWheel = (e: WheelEvent) => {
      if (!isHovered) return;

      e.preventDefault();
      e.stopPropagation();

      // Calculate scroll delta (scroll speed)
      const delta = e.deltaY;
      const scrollSpeed = 0.003; // Reduced for slower, more controlled scrolling

      // Update progress
      scrollProgressRef.current += delta * scrollSpeed;
      updateCards(scrollProgressRef.current);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [isHovered]);

  return (
    <section
      className={`relative w-full h-full ${className} flex items-center justify-center`}
    >
      <div className="relative w-full max-w-6xl text-white px-10">
        {/* Rings */}
        <div
          className="hidden lg:block absolute bg-RoadmapBg bg-contain bg-no-repeat
             top-[10%] left-[-28%] inset-0"
        />

        <div
          className="block lg:hidden absolute sm:w-[390px] bg-RoadmapBg bg-contain bg-no-repeat
             top-[55%] left-0 inset-0"
        />

        <div className="absolute top-[30%] right-[35%] xl:right-[-7%] text-5xl xl:text-[200px] leading-none font-Expletus_Sans text-white/40 select-none">
          03
        </div>

        <h2 className="absolute top-[33%] right-[20%] text-3xl xl:text-8xl font-Expletus_Sans text-white leading-none">
          Roadmap
        </h2>

        <div
          ref={cardsContainerRef}
          className="relative w-full h-[960px] flex items-center justify-center cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={alphaRef}
            className="absolute top-[64%]  text-center border border-[#FFFFFF0A]
                       bg-[#FFFFFF08] backdrop-blur-[50px] rounded-full
                       w-52 h-52 xl:w-[327px] xl:h-[327px] flex flex-col justify-center"
          >
            <h3 className="font-Expletus_Sans  text-base xl:text-3xl">
              Alpha Phase
            </h3>
            <p className="font-Expletus_Sans text-xs xl:text-base mt-2 xl:w-72 mx-auto">
              Basic text-to-3D model generation using standard shapes. Simple
              web UI for prompt entry and rudimentary model previews.
            </p>
          </div>

          <div
            ref={betaRef}
            className="absolute top-[75%] left-[87%] text-center border border-[#FFFFFF0A]
                       bg-[#FFFFFF08] backdrop-blur-[50px] rounded-full
                       w-52 h-52 xl:w-[327px] xl:h-[327px] flex flex-col justify-center"
          >
            <h3 className="font-Expletus_Sans text-base xl:text-3xl">
              Beta Phase
            </h3>
            <p className="font-Expletus_Sans text-xs xl:text-base mt-2 xl:w-72 mx-auto">
              Enhanced geometry generation, rigging, advanced texturing.
            </p>
          </div>

          <div
            ref={publicRef}
            className="absolute top-[75%] left-[-60%] text-center border border-[#FFFFFF0A]
                       bg-[#FFFFFF08] backdrop-blur-[50px] rounded-full
                        w-52 h-52 xl:w-[327px] xl:h-[327px] flex flex-col justify-center"
          >
            <h3 className="font-Expletus_Sans  text-base xl:text-3xl w-60 mx-auto">
              Public Launch
            </h3>
            <p className="font-Expletus_Sans text-xs xl:text-base mt-2 xl:w-72 mx-auto">
              Official release with marketplace and collaboration tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
