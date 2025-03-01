import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function RoundedButton({ children, backgroundColor = "#141d4b", ...attributes }) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  // Initialize GSAP timeline on component mount
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter") // Expand and move up
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit"); // Shrink and move further up
  }, []);

  // Handle mouse enter event
  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId); // Clear any existing timeout
    timeline.current.tweenFromTo('enter', 'exit'); // Play the animation forward
  };

  // Handle mouse leave event
  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play(); // Reverse the animation after a delay
    }, 300);
  };

  return (
    <div
      className="relative overflow-hidden rounded-full border border-gray-500 cursor-pointer flex items-center justify-center px-16 py-4"
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      {...attributes}
    >
      {/* Text */}
      <p className="relative z-10 transition-colors duration-400 text-black hover:text-white">
        {children}
      </p>

      {/* Circle */}
      <div
        ref={circle}
        style={{ backgroundColor }}
        className="absolute w-full h-[150%] rounded-full top-full left-[-25%] transform  z-0"
      ></div>
    </div>
  );
} 



//  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
//       <RoundedButton backgroundColor="#FF5733">
//         <p>Hover Me</p>
//       </RoundedButton>
//     </div>
