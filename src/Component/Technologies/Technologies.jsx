import React from "react";
import "./technologies.css";
import GradientText from "../../lib/GradientText/GradientText"

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

const Technologies = () => {
  const techs = [
    { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
    { icon: <SiReact className="text-cyan-400" />, name: "ReactJS" },
    { icon: <SiNextdotjs className="text-white" />, name: "NextJS" },
    { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
    { icon: <SiReact className="text-cyan-400" />, name: "ReactJS" },
    { icon: <SiNextdotjs className="text-white" />, name: "NextJS" },
    { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
    { icon: <SiReact className="text-cyan-400" />, name: "ReactJS" },
    { icon: <SiNextdotjs className="text-white" />, name: "NextJS" },
    { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
    { icon: <SiReact className="text-cyan-400" />, name: "ReactJS" },
    { icon: <SiNextdotjs className="text-white" />, name: "NextJS" },
    // Thêm các tech khác tương tự
  ];

  return (
    <section
      id="technologies"
      className="min-h-screen w-full flex flex-col items-center py-10 md:py-[20vh] px-4"
    >
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        className="custom-class text-4xl md:text-6xl mb-8 md:mb-0"
      >
        Technologies
      </GradientText>

      <div className="flex-grow flex justify-center items-center w-full">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 w-full md:w-[80%] max-w-4xl overflow-y-auto max-h-[60vh] md:max-h-none p-2">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 md:gap-2 border-2 border-solid border-indigo-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg shadow hover:scale-105 transition text-sm md:text-base"
            >
              <span className="text-lg md:text-xl">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;