import React from "react";

const projects = [
  {
    id: 1,
    generalTitle: "Influencer Marketing Platform",
    title: "Influencer Hub",
    description:
      "A platform connecting influencers with brands for collaboration, analytics, and campaign management.",
    image: "./images/influencer-hub.webp",
    documentation: "./Final Project Documentation(InfluencerHub).pdf", // Optional
    sourceCode: "https://github.com/SoloAk21/InfluencerHub",
    tools: ["React", "Nodejs", "Expressjs", "MongoDB", "TailwindCSS"],
  },
  {
    id: 2,
    generalTitle: "AI Projects",
    title: "Aether AI",
    description:
      "Aether AI is a full-stack chat application that integrates Google OAuth for authentication, MongoDB for data storage, and Google's Gemini AI for generating text and image-based responses. The application allows users to create, save, and manage chat sessions with AI-powered responses.",
    image: "./images/aether-ai.webp",
    documentation: "", // Optional
    sourceCode: "https://github.com/SoloAk21/AetherAI.git",
    tools: ["React", "Nodejs", "MongoDB", "TailwindCSS", "Gemini"],
  },
  {
    id: 3,
    generalTitle: "Chat Applications",
    title: "YeneChat",
    description:
      "YeneChat is a secure, full-stack chat application designed for real-time messaging with end-to-end encryption. The application ensures privacy and security by encrypting messages before storing them in the database.",
    image: "./images/yene-chat.webp",
    documentation: "", // Optional
    sourceCode: "https://github.com/SoloAk21/YeneChat",
    tools: ["React", "Expressjs", "MongoDB", "TailwindCSS"],
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects">
      {projects.map((project) => (
        <div key={project.id} className="pb-10">
          {/* General Title */}
          <div className="w-fit rounded-full px-4 py-2 text-xl font-semibold">
            {project.generalTitle}
          </div>

          <div className="pl-10">
            <div className="h-7 border-l border-dashed border-zinc-900"></div>
          </div>

          <div className="space-y-6">
            <div className="group grid items-center cursor-pointer transition-all">
              <div className="flex w-full flex-col transition-all md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
                {/* Project Image */}
                <div className="flex h-56 w-full overflow-clip rounded border border-zinc-300 duration-300 group-hover:border-black group-hover:shadow-lg lg:w-[40%] xl:w-[40%] 2xl:w-[40%]">
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="h-full grayscale hover:grayscale-0 w-full  object-cover  transition-all group-hover:scale-110 "
                  />
                </div>
                <div className="my-auto h-1 w-3 border-t border-transparent group-hover:border-black lg:block xl:block 2xl:block"></div>

                {/* Project Details */}
                <div className="relative flex w-full">
                  {/* Dynamic Tools Section */}
                  <div className="absolute right-4 -mt-3 flex items-center justify-center overflow-clip rounded-full border border-black bg-white group-hover:flex lg:hidden xl:hidden 2xl:hidden">
                    {project.tools.map((tool, index) => (
                      <div
                        key={index}
                        className="border-l border-dotted border-black px-2 py-1"
                      >
                        <img
                          loading="lazy"
                          src={`/tools-icon/${tool.toLowerCase()}-colorful.svg`}
                          alt={tool}
                          className="h-4 w-5 object-contain transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex w-full flex-col justify-between rounded border border-zinc-300 px-3 py-2 group-hover:border-black group-hover:shadow-md">
                    <div className="font-semibold">{project.title}</div>
                    <div>
                      <p className="pt-1 text-sm md:pt-1 lg:pt-0 xl:pt-0 2xl:pt-0">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-x-2 pt-2 md:pt-2 lg:pt-0 xl:pt-0 2xl:pt-0">
                      {/* Live Link (Conditional Rendering) */}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="duration-120 flex items-center justify-center gap-x-2 rounded-full border border-zinc-300 px-3 py-1 text-sm transition-all hover:border-black">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide-icon lucide lucide-external-link text-zinc-700 hover:text-black"
                            >
                              <path d="M15 3h6v6" />
                              <path d="M10 14 21 3" />
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            </svg>
                            <span className="text-sm text-zinc-700 hover:text-black">
                              View Live
                            </span>
                          </div>
                        </a>
                      )}

                      {/* Source Code */}
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="duration-120 flex items-center justify-center gap-x-2 rounded-full border border-zinc-300 px-3 py-1 transition-all hover:border-black">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide-icon lucide lucide-code-xml text-zinc-700 hover:text-black"
                          >
                            <path d="m18 16 4-4-4-4" />
                            <path d="m6 8-4 4 4 4" />
                            <path d="m14.5 4-5 16" />
                          </svg>
                          <span className="text-sm text-zinc-700 hover:text-black">
                            Source Code
                          </span>
                        </div>
                      </a>

                      {/* Download Link (Conditional Rendering) */}
                      {project.documentation && (
                        <a href={project.documentation} download>
                          <div className="duration-120 flex items-center justify-center gap-x-2 rounded-full border border-zinc-300 px-3 py-1 text-sm transition-all hover:border-black">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide-icon lucide lucide-download text-zinc-700 hover:text-black"
                            >
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            <span className="text-sm text-zinc-700 hover:text-black">
                              Doc. PDF
                            </span>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
