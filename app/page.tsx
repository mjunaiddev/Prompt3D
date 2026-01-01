"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@components/navbar";
import Hero from "./(home)/hero";
import Aboutus from "./(home)/aboutus";
import Features from "./(home)/features"; // We'll update this to accept props or be overlay-friendly

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(".hero", { autoAlpha: 1 });
      gsap.set(".about", { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(".features-section", { autoAlpha: 0, pointerEvents: "none" });

      gsap.set(".clipped-video", { autoAlpha: 1 });
      gsap.set(".full-video", { autoAlpha: 0 });

      gsap.set(".about-goggles", { scale: 0.85 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%", // Extended for Features reveal
          scrub: true,
          pin: true,
        },
      });

      // 1. Hero out + video switch + About in
      tl.to(".hero", { autoAlpha: 0, scale: 0.9 }, "heroOut")
        .to(".clipped-video", { autoAlpha: 0 }, "heroOut")
        .to(".full-video", { autoAlpha: 1 }, "heroOut")
        .to(".about", { autoAlpha: 1, pointerEvents: "auto" }, "heroOut")
        .to(".about-goggles", { scale: 1 }, "heroOut");

      // 2. About out + Features in (after ~150% more scroll)
      tl.to(".about", { autoAlpha: 0, pointerEvents: "none" }, "+=1") // delay in scrub units
        .to(".features-section", { autoAlpha: 1, pointerEvents: "auto" }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="bg-HeroBg min-h-screen">
        <div className="fixed left-0 right-0 top-0 z-50">
          <Navbar />
        </div>

        <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
          {/* Clipped video (Hero only) */}
          <div
            className="clipped-video absolute inset-0 z-0 overflow-hidden"
            style={{
              clipPath: "polygon(51% 2%, 70% 10%, 74% 18%, 81% 30%, 78% 67%, 23% 67%, 23% 32%, 29% 20%, 35% 1%)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src="/videos/bg-video.webm" type="video/webm" />
            </video>
          </div>

          {/* Full video (About + Features) */}
          <div className="full-video absolute inset-0 z-0">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src="/videos/bg-video.webm" type="video/webm" />
            </video>
          </div>

          <Hero />
          <Aboutus />
          <Features className="features-section" /> {/* We'll add className prop support */}
        </section>

        {/* Next sections (Roadmap, Tokenomics, Footer) go here as normal sections */}
      </div>
    </>
  );
};

export default Page;