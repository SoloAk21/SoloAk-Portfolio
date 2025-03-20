import React from "react";

const EducationSection = () => {
  // educationData.js
  const educationData = [
    {
      id: 1,
      period: "2020 - 2025",
      institution: "Unity University",
      link: "https://uu.edu.et/",
      degree: "Computer Science Degree",
      description:
        "Unity University wasn't just a place of learning; it was my crucible. Within its walls, code bloomed into creations, clubs became communities, and late-night self-taught exploration of new technologies forged the me of today. Those years etched themselves onto my soul, shaping not just my skills, but my very being.",
    },
    {
      id: 2,
      period: "2018 - 2019",
      institution: "Ginbot 20 High School",
      link: "https://ginbot20.sims.addislearning.edu.et/",
      degree: "High School Diploma",
      description:
        "Ginbot 20 High wasn't just a school, it was where I truly began. Those years shaped me, preparing me for the unknown world beyond its walls.",
    },
  ];
  return (
    <div id="education" className="pb-10">
      <div className="w-fit rounded-full px-4 py-2 text-xl font-semibold">
        Education
      </div>
      <div className="pl-10">
        <div className="h-7 border-l border-dashed border-zinc-900"></div>
      </div>
      <div>
        {educationData.map((education) => (
          <div key={education.id}>
            <div className="w-fit rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold">
              {education.period}
            </div>
            <div className="pl-10">
              <div className="w-full border-l border-zinc-300 px-3 pb-5 pl-5 pt-3 lg:w-[80%] xl:w-[80%] 2xl:w-[80%]">
                <a href={education.link}>
                  <div className="text-lg font-bold underline-offset-4 transition-all hover:underline">
                    {education.institution}
                  </div>
                </a>
                <div className="text-sm font-semibold">{education.degree}</div>
                <div className="py-1">
                  <p className="text-sm">{education.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
