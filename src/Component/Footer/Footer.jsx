import React from "react";
import FuzzyText from "../../lib/FuzzyText/FuzzyText";
import GlitchText from "../../lib/GlitchText/GlitchText";

const Footer = () => {
  return (
    <footer className="h-[10vh]">
      <div className="flex justify-center items-center p-3 bg-black">
        <GlitchText
        className="text-xl"
        >
          Made By Nha Phan
        </GlitchText>
      </div>
    </footer>
  );
};

export default Footer;
