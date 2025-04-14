import React from "react";
import "./technologies.css";
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
    <section id="technologies" className="h-screen w-full flex flex-col items-center py-[30vh]">
  <h1 className="text-center text-white text-2xl">
    Technologies and Tools
  </h1>

  <div className="flex-grow flex justify-center items-center">
    <div className="flex flex-wrap justify-center gap-3 w-[80%]">
      {techs.map((tech, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 border-2 border-solid border-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
        >
          {tech.icon}
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>


  );
};

export default Technologies;
