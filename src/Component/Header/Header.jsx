import React, { useState, useEffect, useRef } from "react";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const menuRef = useRef(null);
  
  // Minimum swipe distance required (in px)
  const minSwipeDistance = 50;

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Handle clicks outside of menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle touch events for swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    // Right swipe to open menu
    if (isRightSwipe && !isMenuOpen) {
      setIsMenuOpen(true);
    }
    
    // Left swipe to close menu
    if (isLeftSwipe && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (isMobile) setIsMenuOpen(false);
  };

  // Navigation links
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "project", label: "Project" },
    { id: "about-me", label: "About" },
    { id: "technologies", label: "Technologies" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      {!isMobile && (
        <header className="navbar">
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>
      )}
      
      {/* Mobile Layout */}
      {isMobile && (
        <div 
          className="mobile-container"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Swipe indicator - small visible handle */}
          <div className="swipe-indicator">
            <div className="swipe-handle"></div>
          </div>
          
          {/* Slide-out Navigation Menu */}
          <div 
            ref={menuRef}
            className={`side-menu ${isMenuOpen ? 'open' : ''}`}
          >
            <nav>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Dark overlay when menu is open */}
          {isMenuOpen && (
            <div 
              className="menu-overlay" 
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Header;