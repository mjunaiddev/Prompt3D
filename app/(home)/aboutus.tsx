const Aboutus = () => {
  return (
    <div className="about absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none">
      {/* Content overlay inside the lenses */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full max-w-5xl">
          {/* Big faded 01 - inside left lens */}
          <div className="absolute top-[40%] xl:top-[30%] left-[8%] xl:left-[2%] text-6xl md:text-9xl xl:text-[200px] leading-none font-Expletus_Sans text-white/40 select-none">
            01
          </div>

          {/* Main title - centered across both lenses */}
          <h2 className="absolute top-[48%] left-[8%] xl:top-[48%] xl:left-[3%] text-lg md:text-3xl xl:text-[82px] font-Expletus_Sans text-white leading-none  xl:leading-[0.95]">
            Behind <br /> Prompt³D
          </h2>

          {/* Left paragraph - inside left lens */}
          <p className="absolute top-[62%]  xl:top-[27%] xl:left-[32%] xl:w-[625px] text-sm md:text-xl text-white/70 leading-5 text-left mx-2">
            At Prompt³D, we believe anyone can turn their ideas into tangible 3D
            creations—no complex modeling tools required. Our platform
            transforms plain text prompts into instantly usable assets, lowering
            the usual barriers to creativity.
          </p>

          {/* Right paragraph - inside right lens */}
          <p className="absolute top-[80%] right-[0%] xl:top-[50%] xl:right-[-5%] w-[250px] xl:w-[440px] text-sm md:text-xl text-white/70 leading-5">
            Founded by AI enthusiasts and digital artists, Prompt³D is dedicated
            to bridging imagination and reality. We’re here to help you shape
            immersive experiences with just a few words.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
