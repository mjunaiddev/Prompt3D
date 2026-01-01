"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@components/navbar";
import Hero from "./(home)/hero";
import Aboutus from "./(home)/aboutus";
import Features from "./(home)/features";
import Roadmap from "./(home)/roadmap";
import Tokenomics from "./(home)/tokenomics";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const pinnedRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!pinnedRef.current) return;

    const ctx = gsap.context(() => {
      // ---------- INITIAL STATES ----------
      gsap.set(".hero", { autoAlpha: 1 });
      gsap.set(".about", { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(".features-section", { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(".roadmap-section", { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(".tokenomics-section", { autoAlpha: 0, pointerEvents: "none" });

      gsap.set(".clipped-video", { autoAlpha: 1 });
      gsap.set(".full-video", { autoAlpha: 0 });

      gsap.set(".about-goggles", { scale: 0.85 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedRef.current,
          start: "top top",
          end: "+=550%",
          scrub: true,
          pin: true,
        },
      });

      // ---------- HERO → ABOUT ----------
      tl.to(".hero", { autoAlpha: 0, scale: 0.9 }, "heroOut")
        .to(".clipped-video", { autoAlpha: 0 }, "heroOut")
        .to(".full-video", { autoAlpha: 1 }, "heroOut")
        .to(".about", { autoAlpha: 1, pointerEvents: "auto" }, "heroOut")
        .to(".about-goggles", { scale: 1 }, "heroOut");

      // ---------- ABOUT → FEATURES ----------
      tl.to(".about", { autoAlpha: 0, pointerEvents: "none" }, "+=1").to(
        ".features-section",
        { autoAlpha: 1, pointerEvents: "auto" },
        "<"
      );

      // ---------- FEATURES → ROADMAP ----------
      tl.to(
        ".features-section",
        { autoAlpha: 0, pointerEvents: "none" },
        "+=1"
      ).to(".roadmap-section", { autoAlpha: 1, pointerEvents: "auto" }, "<");
      // ROADMAP → TOKENOMICS
      tl.to(".roadmap-section", { autoAlpha: 0 }, "+=1").to(
        ".tokenomics-section",
        { autoAlpha: 1, pointerEvents: "auto" },
        "<"
      );
    }, pinnedRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="bg-HeroBg min-h-screen">
        <div className="fixed left-0 right-0 top-0 z-50">
          <Navbar />
        </div>

        <section
          ref={pinnedRef}
          className="relative w-full h-screen overflow-hidden"
        >
          {/* CLIPPED VIDEO (Hero only) */}
          <div
            className="clipped-video absolute inset-0 z-0 overflow-hidden"
            style={{
              clipPath:
                "polygon(51% 2%, 70% 10%, 74% 18%, 81% 30%, 78% 67%, 23% 67%, 23% 32%, 29% 20%, 35% 1%)",
            }}
          >
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/videos/bg-video.webm" type="video/webm" />
            </video>
          </div>

          {/* FULL VIDEO (About + Features + Roadmap) */}
          <div className="full-video absolute inset-0 z-0">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/videos/bg-video.webm" type="video/webm" />
            </video>
          </div>

          <Hero />
          <Aboutus />
          <Features className="features-section" />
          <Roadmap className="roadmap-section" />

          <Tokenomics className="tokenomics-section" />
        </section>
      </div>
    </>
  );
};

export default Page;
