import React, { useEffect } from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="navbar position-fixed top-0 mt-3 z-[9999]">
      <a
        onClick={() =>
          document
            .getElementById("home")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Home
      </a>
      <a
        onClick={() =>
          document
            .getElementById("project")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Project
      </a>
      <a
        onClick={() =>
          document
            .getElementById("about-me")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        About
      </a>
      <a
        onClick={() =>
          document
            .getElementById("technologies")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Technologies
      </a>
    </header>
  );
};

export default Header;
