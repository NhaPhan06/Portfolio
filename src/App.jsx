import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Index from "./Component/Index/Index";
import Project from "./Component/Project/Project";
import About from "./Component/About/About";
import Technologies from "./Component/Technologies/Technologies";
import Footer from "./Component/Footer/Footer";
import Contact from "./Component/Contact/Contact";
import Iridescence from "./lib/Iridescence/Iridescence";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <>
      <div className="relative">
        {/* 🔮 Iridescence background */}
        {/* <div className="absolute inset-0 z-0 pointer-events-none">
          <Iridescence
            color={[0.1, 0.2, 0.5]}
            mouseReact={false}
            amplitude={1}
            speed={2.0}
          />
        </div> */}
        <div className="relative z-10">
          <Header />
          <Main />
          {!isMobile && <Index />}
          <Project />
          <About />
          <Technologies />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
