import React from "react";

const tools = [
  { name: "HTML", icon: "html", description: "Markup", color: "#E34F26" },
  { name: "CSS", icon: "css", description: "Styling", color: "#1572B6" },
  {
    name: "JavaScript",
    icon: "javascript",
    description: "Scripting",
    color: "#F7DF1E",
  },
  { name: "React", icon: "react", description: "Library", color: "#61DAFB" },
  { name: "Node.js", icon: "nodejs", description: "Runtime", color: "#339933" },
  {
    name: "Git",
    icon: "git",
    description: "Version Control",
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: "github",
    description: "Repo Hosting",
    color: "#181717",
  },
  { name: "VS Code", icon: "vscode", description: "IDE", color: "#007ACC" },
  {
    name: "Postman",
    icon: "postman",
    description: "API Testing",
    color: "#FF6C37",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    description: "Database",
    color: "#47A248",
  },
  {
    name: "Express.js",
    icon: "expressjs",
    description: "Framework",
    color: "#000000",
  },
  { name: "Mongoose", icon: "mongoose", description: "ODM", color: "#880000" },
  {
    name: "Redux",
    icon: "redux",
    description: "State Mgt",
    color: "#764ABC",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
    description: "Utility-first CSS",
    color: "#38B2AC",
  },
  {
    name: "Material-UI",
    icon: "materialui",
    description: "UI Kit",
    color: "#0081CB",
  },
  {
    name: "Bootstrap",
    icon: "bootstrap",
    description: "Framework",
    color: "#7952B3",
  },
  {
    name: "Insomnia",
    icon: "insomnia",
    description: "API Client",
    color: "#4000BF",
  },
];

const ExperienceSection = () => {
  const [hoveredTool, setHoveredTool] = React.useState(null);

  return (
    <div id="tools" className="pb-10">
      <div className="w-fit rounded-full px-4 py-2 text-xl font-semibold">
        Daily Essential Tools I Use
      </div>
      <div className="pl-10">
        <div className="h-7 border-l border-dashed border-zinc-900"></div>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-4 rounded border border-zinc-300 p-4 shadow-sm transition-all hover:rounded-lg sm:grid-cols-3 md:grid-cols-4">
          {tools.map((tool, index) => (
            <a
              key={index}
              href="#"
              className="flex relative items-center gap-2 cursor-pointer border border-zinc-300 px-3 py-2 text-center transition-all rounded-md group"
              onMouseEnter={() => setHoveredTool(index)}
              onMouseLeave={() => setHoveredTool(null)}
              style={{
                color: hoveredTool === index ? tool.color : "inherit",
                borderColor: hoveredTool === index ? "#000000" : "#ccc",
              }}
            >
              {/* Default image */}
              <img
                loading="lazy"
                src={`/tools-icon/${tool.icon}.svg`}
                width={30}
                alt={tool.name}
                className="transition-all opacity-70 absolute group-hover:opacity-0"
              />
              {/* Hover image */}
              <img
                loading="lazy"
                src={`/tools-icon/${tool.icon}-colorful.svg`}
                width={30}
                alt={tool.name}
                className="transition-all opacity-0 group-hover:opacity-100"
              />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium leading-tight group-hover:text-current">
                  {tool.name}
                </span>
                <span className="text-sm font-light leading-tight group-hover:text-current">
                  {tool.description}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
