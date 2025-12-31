"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@components/navbar";
import Hero from "./(home)/hero";
import Aboutus from "./(home)/aboutus";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // ✅ FORCE INITIAL STATES (VERY IMPORTANT)
      gsap.set(".hero", {
        opacity: 1,
        scale: 1,
      });

      gsap.set(".about", {
        opacity: 0,
        pointerEvents: "none",
      });

      gsap.set(".about-goggles", {
        scale: 0.85,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // HERO OUT
      tl.to(".hero", {
        opacity: 0,
        scale: 0.9,
        ease: "power2.out",
      });

      // ABOUT IN (SYNCED)
      tl.to(
        ".about",
        {
          opacity: 1,
          pointerEvents: "auto",
          ease: "power2.out",
        },
        "<"
      );

      // GOGGLES COMING TOWARDS SCREEN
      tl.to(
        ".about-goggles",
        {
          scale: 1,
          ease: "power3.out",
        },
        "<"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="bg-HeroBg bg-cover min-h-screen z-30">
        <div className="fixed left-0 right-0 z-50">
          <Navbar />
        </div>

        <section
          ref={sectionRef}
          className="relative w-full h-screen overflow-hidden"
        >
          {/* 🎥 Background Video with polygon clip-path */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: "ellipse(33% 34% at 50% 38%)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/videos/bg-video.webm" type="video/webm" />
            </video>

            <div className="absolute inset-0 bg-[#D9D9D9]/10" />
          </div>

          {/* glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 32% 38% at 50% 40%, rgba(99,102,241,0.45), transparent 80%)",
            }}
          />

          <Hero />
          <Aboutus />
        </section>
      </div>
    </>
  );
};

export default Page;
