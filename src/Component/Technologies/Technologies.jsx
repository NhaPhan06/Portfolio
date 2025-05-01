import React from "react";
import "./technologies.css";
import GradientText from "../../lib/GradientText/GradientText";

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
      className="w-full min-h-screen flex flex-col items-center justify-center gap-20 px-4 py-10"
    >
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        className="custom-class text-3xl md:text-6xl mb-6 md:mb-0"
      >
        Technologies
      </GradientText>

      <div className="flex flex-wrap justify-center gap-2 md:gap-3 w-full md:w-[80%] max-w-4xl overflow-y-auto p-2">
        {techs.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1 md:gap-2 border-2 border-solid border-indigo-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg shadow hover:scale-105 transition text-xs md:text-base"
          >
            <span className="text-base md:text-xl">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))} 
      </div>
    </section>
  );
};

export default Technologies;
