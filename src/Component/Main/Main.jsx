import React, { useRef } from "react";
import "./main.css";
import { Sparkles } from "../../lib/sparkles";
import { TimelineContent } from "../../lib/TimelineContent/framer-timeline";
import { ArrowRight } from "lucide-react";

const Main = () => {
  const heroRef = useRef(null);
  const revealVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hidden: {
      opacity: 0,
      y: 15,
    },
  };
  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      <div
        className="relative h-screen w-full 
[mask-image:radial-gradient(50%_50%,white,transparent)] 
before:absolute before:inset-0 
before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] 
before:opacity-100 
after:absolute after:-left-1/2 after:top-2/3 
after:aspect-[1] after:w-[200%] after:rounded-full 
after:border-b after:border-[#7876c566] after:bg-zinc-900 
after:shadow-[0_0_60px_20px_rgba(120,118,197,0.5),0_0_80px_40px_rgba(156,163,255,0.4)]"
      >
        {/* Lưới */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>

        {/* Sparkles */}
        <Sparkles
          density={2000}
          mousemove={false}
          size={2}
          direction="top"
          className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>

      {/* Content container with high z-index */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-8 md:px-16 lg:px-24">
        <TimelineContent
          as="h1"
          animationNum={0}
          timelineRef={heroRef}
          variants={revealVariants}
          className="text-7xl md:text-8xl lg:text-9xl font-bold mb-10 max-w-8xl text-white text-center"
          blockProps={{
            style: {
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              lineHeight: 1.1,
            },
          }}
        >
          Hello, I'm Nha Phan, a Full Stack Developer.
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={1}
          timelineRef={heroRef}
          variants={revealVariants}
          className="text-3xl md:text-4xl text-gray-300 mb-16 max-w-5xl text-center m-5"
          blockProps={{
            style: {
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              lineHeight: 1.4,
            },
          }}
        >
          I'm excited about the opportunity to work and grow together with you.{" "}
        </TimelineContent>

        <div className="flex flex-wrap gap-4">
          {/* Resume Button */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Reusume/DeveloperFresher_PhanVanPhongNha.pdf";
              link.download = "DeveloperFresher_PhanVanPhongNha.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="relative font-semibold text-base md:text-lg lg:text-xl leading-tight after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full 
      after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 
      after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            My Resume
          </button>

          {/* Contact Me Button */}
          <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-lg border-2 dark:border-[#656fe2] border-[#394481] font-semibold text-base md:text-lg lg:text-xl leading-tight">
            <div className="inline-flex h-14 translate-x-0 items-center justify-center bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f5f6f8] to-[#fafbff] px-8 gap-3 dark:text-white text-[#394481] transition-all duration-300 group-hover:-translate-x-[150%]">
              Contact me <ArrowRight />
            </div>
            <div className="absolute inline-flex h-14 w-full translate-x-[100%] items-center justify-center bg-[#394481] dark:bg-[#656fe2] px-8 gap-3 text-white transition-all duration-300 group-hover:translate-x-0">
              Contact me <ArrowRight />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
