import React from "react";
import { assets } from "../assets/assets";

const aboutSections = [
  {
    title: "Skills & Experience",
    description:
      "I'm Solomon, a recent Computer Science graduate skilled in the MERN stack, passionate about using technology to solve real-world problems through impactful projects.",
    imageSrc: assets.skillsBg,
    iconSrc: assets.skills,
    altText: "blog",
  },
  {
    title: "Work Ethic",
    description:
      "Teamwork and continuous learning are important to me. I thrive on challenges and exploring new areas within web development.",
    imageSrc: assets.teamBg,
    iconSrc: assets.team,
    altText: "podcast",
  },
  {
    title: "Vision & Goals",
    description:
      "A upward pointing arrow, a lightbulb, or a target/bullseye. Something that represents growth or achievement.",
    imageSrc: assets.visionBg,
    iconSrc: assets.vision,
    altText: "community",
  },
];

const AboutSection = () => {
  return (
    <div id="about" className="pb-10">
      <div className="w-fit rounded-full px-4 py-2 text-xl font-semibold">
        About Me
      </div>
      <div className="pl-10">
        <div className="h-7 border-l border-dashed border-zinc-900"></div>
      </div>
      <div className="flex flex-col justify-evenly gap-y-2 rounded border border-zinc-300 p-2 shadow-md hover:rounded-xl hover:border-black hover:shadow-lg md:flex-col md:gap-y-2 lg:flex-row lg:gap-x-2 xl:flex-row xl:gap-x-2 2xl:flex-row 2xl:gap-x-2">
        {aboutSections.map((section, index) => (
          <div
            key={index}
            className="group h-64 w-full overflow-clip rounded border border-zinc-400 transition-all hover:border-black hover:shadow-lg lg:w-[40%] xl:w-[40%] 2xl:w-[40%]"
          >
            <div className="flex h-full w-full flex-col justify-center">
              <div className="group/picture relative h-full w-full">
                <div className="absolute hidden h-full w-full justify-center items-center transition-all group-hover/picture:flex">
                  <img
                    loading="lazy"
                    src={section.imageSrc}
                    alt={section.altText}
                    className="h-full w-full object-cover blur grayscale transition-all duration-300 hover:grayscale-0 group-hover:blur-none"
                  />
                </div>
                <div className="absolute z-50 flex h-full w-full flex-col items-center justify-center transition-all group-hover/picture:hidden">
                  <div className="w-fit rounded-full border-black bg-white">
                    <img
                      loading="lazy"
                      src={section.iconSrc}
                      alt=""
                      width={30}
                    />
                  </div>
                  <div className="rounded-full bg-white px-4 text-black">
                    {section.title}
                  </div>
                  <div className="rounded-full bg-white px-4 pt-4 text-center text-sm text-black">
                    {section.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
