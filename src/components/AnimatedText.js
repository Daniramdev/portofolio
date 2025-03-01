import React from 'react';


function MovingText() {
  const text = "- Dani ramdani - Freelace Web Developer - Dani ramdani- Freelace Web Developer";

  return (
    <div className="flex justify-center items-center  h-40 bg-gray-900 shadow-lg  overflow-hidden">
      {/* Container dengan overflow hidden */}
      <div className="moving-text text-white text-8xl font-semibold whitespace-nowrap">
        <span>{text}</span>
        <span>{text}</span> {/* Duplikasi teks untuk efek looping tanpa jeda */}
        <span>{text}</span> {/* Duplikasi teks untuk efek looping tanpa jeda */}
      </div>
    </div>
  );
}

export default MovingText;