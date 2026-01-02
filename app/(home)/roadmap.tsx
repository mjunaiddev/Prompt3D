"use client";

import { useLayoutEffect, useRef } from "react";
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

  useLayoutEffect(() => {
    const alpha = alphaRef.current;
    const beta = betaRef.current;
    const pub = publicRef.current;

    if (!alpha || !beta || !pub) return;

    // Capture ORIGINAL positions
    const positions = [
      { x: alpha.offsetLeft, y: alpha.offsetTop },
      { x: beta.offsetLeft, y: beta.offsetTop },
      { x: pub.offsetLeft, y: pub.offsetTop },
    ];

    const update = () => {
      const st = ScrollTrigger.getById("main-scroll");
      if (!st) return;

      // Roadmap window
      const start = 0.45;
      const end = 0.6;

      if (st.progress < start || st.progress > end) return;

      const local = (st.progress - start) / (end - start);

      let step = 0;
      if (local > 0.33) step = 1;
      if (local > 0.66) step = 2;

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

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <section
      className={`relative w-full h-full ${className} flex items-center justify-center`}
    >
      <div className="relative w-full max-w-6xl text-white px-10">
        {/* Rings */}
        <div className="absolute bg-RoadmapBg bg-no-repeat top-[10%] left-[-28%] inset-0" />

        <div className="absolute top-[28%] right-[-7%] text-[200px] leading-none font-Expletus_Sans text-white/40 select-none">
          03
        </div>

        <h2 className="absolute top-[44%] right-[-25%] text-8xl font-Expletus_Sans text-white leading-none">
          Roadmap
        </h2>

        <div className="relative w-full h-[960px] flex items-center justify-center">
          <div
            ref={alphaRef}
            className="absolute top-[44%] left-[-3%] text-center border border-[#FFFFFF0A]
                       bg-[#FFFFFF08] backdrop-blur-[50px] rounded-full
                       w-[327px] h-[327px] flex flex-col justify-center"
          >
            <h3 className="font-Expletus_Sans text-3xl">Alpha Phase</h3>
            <p className="font-Expletus_Sans text-base mt-2 w-72 mx-auto">
              Basic text-to-3D model generation using standard shapes. Simple
              web UI for prompt entry and rudimentary model previews.
            </p>
          </div>

          <div
            ref={betaRef}
            className="absolute top-[75%] left-[37%] text-center border border-[#FFFFFF0A]
                       bg-[#FFFFFF08] backdrop-blur-[50px] rounded-full
                       w-[327px] h-[327px] flex flex-col justify-center"
          >
            <h3 className="font-Expletus_Sans text-3xl">Beta Phase</h3>
            <p className="font-Expletus_Sans text-base mt-2 w-72 mx-auto">
              Enhanced geometry generation, rigging, advanced texturing.
            </p>
          </div>

          <div
            ref={publicRef}
            className="absolute top-[75%] left-[-42%] text-center border border-[#FFFFFF0A]
                       bg-[#FFFFFF08] backdrop-blur-[50px] rounded-full
                       w-[327px] h-[327px] flex flex-col justify-center"
          >
            <h3 className="font-Expletus_Sans text-3xl w-60 mx-auto">
              Public Launch
            </h3>
            <p className="font-Expletus_Sans text-base mt-2 w-72 mx-auto">
              Official release with marketplace and collaboration tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
