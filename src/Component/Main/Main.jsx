import React from "react";
import bg from "../../assets/1910253.jpg";
import "./main.css";
import { Sparkles } from "../../lib/sparkles";

const Main = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-3 h-screen bg-cover bg-center bg-no-repeat"
    >
      <div
        className="relative h-screen w-screen overflow-hidden 
    [mask-image:radial-gradient(50%_50%,white,transparent)] 
    before:absolute before:inset-0 
    before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] 
    before:opacity-100 
    after:absolute after:-left-1/2 after:top-1/2 
    after:aspect-[1] after:w-[200%] after:rounded-full 
    after:border-b after:border-[#7876c566] after:bg-zinc-900 
    after:shadow-[0_0_60px_20px_rgba(120,118,197,0.5),0_0_80px_40px_rgba(156,163,255,0.4)]"
      >
        {/* Lưới */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>

        {/* Sparkles */}
        <Sparkles
          density={1000}
          size={2}
          direction="top"
          className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />

        {/* Nội dung */}
        <div className="relative z-10 text-4xl font-bold">
          Welcome to the Galaxy 🚀
        </div>
      </div>
    </section>
  );
};

export default Main;
