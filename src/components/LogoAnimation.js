import React from "react";

export default function LogoAnimation() {
  return (
    <div className="relative flex items-center justify-center h-40 w-40  ">
      {/* Lingkaran teks animasi */}
      <div className="absolute w-24 h-24 animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path id="textPath" d="M 100, 100
              m -75, 0
              a 75,75 0 1,1 150,0
              a 75,75 0 1,1 -150,0" />
          </defs>
          <text fill="black" fontSize="14" fontWeight="bold">
            <textPath href="#textPath" startOffset="0%">
              O R I G I N A L  W E B P O R T O F O L I O• O R I G I N A L  W E B • D A N I R A M D A N I
            </textPath>
          </text>
        </svg>
      </div>

      {/* Logo di tengah */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-gray-900 rounded-full shadow-lg">
        <p className="text-white font-bold text-xl">Dani</p>
      </div>
    </div>
  );
}
