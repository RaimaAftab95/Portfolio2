// ScrollToTop.js
import React, { useState, useEffect } from 'react';
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div id="scroll-to-top" className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
      <a className="green-arrow" href="#header-area" onClick={scrollToTop}>
      <i className="fa-solid fa-circle-chevron-up"></i>
      </a>
    </div>
  );
};

export default ScrollToTop;
