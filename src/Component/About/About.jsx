import React from "react";
import "./about.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

const About = () => {
  return (
    <section
      id="about-me"
      className="h-screen w-full flex flex-col items-center py-[30vh]"
    >
      <h1 className="text-center text-white text-2xl">About</h1>

      <div className="flex-grow flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-3 w-[80%]">
          <h5>
            I’m Ed (Nha), a backend developer from Quảng Trị, Vietnam. Currently
            completing my graduation while leading projects with real-world
            impact. I believe in: - Building systems that scale. - Learning fast
            and teaching others. - Doing more with less. What I’m doing now: -
            Working on my graduation thesis. - Studying for AWS DevOps
            Certification. - Developing an AI-powered internal chatbot (offline
            model).
          </h5>
        </div>
      </div>
    </section>
  );
};

export default About;
