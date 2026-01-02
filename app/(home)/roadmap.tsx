import Image from "next/image";
import Goggles from "@assets/goggles.png";

type RoadmapProps = {
  className?: string;
};

const Roadmap = ({ className = "" }: RoadmapProps) => {
  return (
    <section
      className={`relative w-full h-full ${className} flex items-center justify-center`}
    >
      <div className="relative w-full max-w-6xl text-white px-10">
        {/* Rings */}
        <div className="absolute top-[20%] left-[-70%] inset-0 flex items-center justify-center">
          <div className="w-[960px] h-[960px] rounded-full border-2 border-white/10 absolute" />
          <div className="w-[716px] h-[716px] rounded-full border-2 border-white/20 absolute" />
          <div className="w-[495px] h-[495px] rounded-full border-2 border-white/30 absolute" />
        </div>

        <div className="absolute top-[29%] right-[-7%] text-[200px] leading-none font-Expletus_Sans text-white/40 select-none">
          03
        </div>

        <h2 className="absolute top-[45%] right-[-25%] text-8xl font-Expletus_Sans text-white leading-none">
          Roadmap
        </h2>

        <div className="relative w-full h-[960px] flex items-center justify-center">
          <div className="absolute top-[44%] left-[-3%] text-center border border-[#FFFFFF0A] bg-[#FFFFFF08] backdrop-blur-[50px] rounded-full w-[327px] h-[327px] flex flex-col items  justify-center">
            <h3 className="font-Expletus_Sans text-3xl">Alpha Phase</h3>
            <p className="font-Expletus_Sans text-base mt-2 w-72 mx-auto">
              Basic text-to-3D model generation using standard shapes. Simple
              web UI for prompt entry and rudimentary model previews. Initial
              Economy Token Launch Early user feedback for interface and
              generation quality.
            </p>
          </div>

          <div className="absolute top-[75%] left-[37%] text-center border border-[#FFFFFF0A] bg-[#FFFFFF08] backdrop-blur-[50px] rounded-full w-[327px] h-[327px] flex flex-col items  justify-center">
            <h3 className="font-Expletus_Sans text-3xl">Beta Phase</h3>
            <p className="font-Expletus_Sans text-base mt-2 w-72 mx-auto">
              Enhanced geometry generation (procedural details, rigging,
              advanced texturing). Additional style filters and libraries
              (sci-fi, fantasy, realistic). VR integration testing, with an
              initial version of the Prompt³D metaverse.
            </p>
          </div>

          <div className="absolute top-[75%] left-[-42%] text-center border border-[#FFFFFF0A] bg-[#FFFFFF08] backdrop-blur-[50px] rounded-full w-[327px] h-[327px] flex flex-col items  justify-center">
            <h3 className="font-Expletus_Sans text-3xl w-60 mx-auto">
              Public Launch (Months 9–12)
            </h3>
            <p className="font-Expletus_Sans text-base mt-2 w-72 mx-auto">
              Official release with a robust library of models, textures, and
              style templates. Multi-user collaboration tools and basic
              marketplace functionalities. Scalability improvements for mass
              user onboarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
