import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    const handleMouseHover = () => {
      cursor.style.transform = "scale(2)";
    };

    const handleMouseLeave = () => {
      cursor.style.transform = "scale(1)";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("mouseenter", handleMouseHover);
      img.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="cursor w-6 h-6 bg-white rounded-full fixed pointer-events-none z-50"></div>;
};

export default Cursor;
