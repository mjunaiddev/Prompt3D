"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import Navbar from "@components/navbar";
import Hero from "./(home)/hero";
import Aboutus from "./(home)/aboutus";
import Features from "./(home)/features";
import Roadmap from "./(home)/roadmap";
import Tokenomics from "./(home)/tokenomics";
import Footer from "./(home)/footer";

import Goggles from "@assets/goggles.png";

gsap.registerPlugin(ScrollTrigger);

/* --------------------------------------------------
   GOGGLES POSES (single source of truth)
-------------------------------------------------- */
const GOGGLES_POSES = {
  hero: { x: 0, y: -45, scale: 1, rotation: 0, autoAlpha: 1 },
  about: { x: 0, y: 0, scale: 1.15, rotation: 0, autoAlpha: 1 },
  features: { x: -420, y: 175, scale: 1, rotation: 45, autoAlpha: 1 },
  roadmap: { x: 920, y: -170, scale: 1, rotation: -23, autoAlpha: 1 },
  tokenomics: { x: 0, y: 10, scale: 1.5, rotation: 0, autoAlpha: 1 },
  footer: { x: 0, y: 300, scale: 1.2, rotation: 0, autoAlpha: 1 },
};

const Page = () => {
  const pinnedRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!pinnedRef.current) return;

    const ctx = gsap.context(() => {
      /* ---------- INITIAL VISIBILITY ---------- */
      gsap.set(".hero", { autoAlpha: 1 });
      gsap.set(".about", { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(".features-section", { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(".roadmap-section", { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(".tokenomics-section", { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(".footer-section", { autoAlpha: 0, pointerEvents: "none" });

      gsap.set(".clipped-video", { autoAlpha: 1 });
      gsap.set(".full-video", { autoAlpha: 0 });

      /* ---------- MAIN GOGGLES ---------- */
      gsap.set(".main-goggles", {
        ...GOGGLES_POSES.hero,
        transformOrigin: "50% 50%",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "main-scroll",
          trigger: pinnedRef.current,
          start: "top top",
          end: "+=650%",
          scrub: 1,
          pin: true,
        },
      });

      const gogglesTweenProps = (pose: any) => ({
        ...pose,
        ease: "power3.out",
        duration: 2, // smooth tween
      });

      /* ---------- HERO → ABOUT ---------- */
      tl.to(".hero", { autoAlpha: 0 }, "heroOut")
        .to(".clipped-video", { autoAlpha: 0 }, "heroOut")
        .to(".full-video", { autoAlpha: 1 }, "heroOut")
        .to(".about", { autoAlpha: 1, pointerEvents: "auto" }, "heroOut")
        .to(".main-goggles", gogglesTweenProps(GOGGLES_POSES.about), "heroOut");

      /* ---------- ABOUT → FEATURES ---------- */
      tl.to(".about", { autoAlpha: 0, pointerEvents: "none" }, "+=1")
        .to(".features-section", { autoAlpha: 1, pointerEvents: "auto" }, "<")
        .to(".main-goggles", gogglesTweenProps(GOGGLES_POSES.features), "<");

      /* ---------- FEATURES → ROADMAP ---------- */
      tl.to(".features-section", { autoAlpha: 0, pointerEvents: "none" }, "+=1")
        .to(".roadmap-section", { autoAlpha: 1, pointerEvents: "auto" }, "<")
        .to(".main-goggles", gogglesTweenProps(GOGGLES_POSES.roadmap), "<");

      /* ---------- ROADMAP → TOKENOMICS ---------- */
      tl.to(".roadmap-section", { autoAlpha: 0 }, "+=1")
        .to(".tokenomics-section", { autoAlpha: 1, pointerEvents: "auto" }, "<")
        .to(".main-goggles", gogglesTweenProps(GOGGLES_POSES.tokenomics), "<");

      /* ---------- TOKENOMICS → FOOTER ---------- */
      tl.to(".tokenomics-section", { autoAlpha: 0 }, "+=1")
        .to(".footer-section", { autoAlpha: 1, pointerEvents: "auto" }, "<")
        .to(".main-goggles", gogglesTweenProps(GOGGLES_POSES.footer), "<");
    }, pinnedRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-HeroBg min-h-screen">
      <div className="fixed left-0 right-0 top-0 z-50">
        <Navbar />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[45vh]
  bg-gradient-to-b
  from-transparent
  via-[#0b0615]/70
  to-[#0b0615]"
      />

      <section
        ref={pinnedRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {/* ---------- GLOBAL GOGGLES ---------- */}
        <Image
          src={Goggles}
          alt="goggles"
          className="main-goggles absolute inset-0 m-auto z-20"
          priority
        />

        {/* CLIPPED VIDEO */}
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

        {/* FULL VIDEO */}
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
        <Footer className="footer-section" />
      </section>
    </div>
  );
};

export default Page;
