import React from "react";
import "./about.css";
import GradientText from "../../lib/GradientText/GradientText";
import ImageSlide from "../../lib/ImageSlide/ImageSlide";

const About = () => {
  const images = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    },
  ];

  return (
    <section
      id="about-me"
      className="min-h-screen w-full flex flex-col items-center py-10 md:py-[20vh] px-4"
    >
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        className="custom-class text-4xl md:text-6xl mb-8 md:mb-0"
      >
        About
      </GradientText>

      <div className="flex-grow flex justify-center items-center w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 gap-4 w-full max-w-6xl">
          <div className="flex justify-center order-2 md:order-1">
            <ImageSlide />
          </div>

          <div className="flex flex-wrap justify-center items-center w-full md:w-[80%] order-1 md:order-2">
            <div className="text-sm md:text-lg leading-relaxed">
              <p className="mb-3">
                I'm Ed (Nha), a backend developer from Quảng Trị, Vietnam.
                Currently completing my graduation while leading projects with
                real-world impact.
              </p>
              <p className="mb-3">I believe in:</p>
              <ul className="list-disc pl-4 mb-3">
                <li>Building systems that scale.</li>
                <li>Learning fast and teaching others.</li>
                <li>Doing more with less.</li>
              </ul>
              <p className="mb-3">What I'm doing now:</p>
              <ul className="list-disc pl-4">
                <li>Working on my graduation thesis.</li>
                <li>Studying for AWS DevOps Certification.</li>
                <li>
                  Developing an AI-powered internal chatbot (offline model).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
