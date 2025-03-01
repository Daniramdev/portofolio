import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isRotating, setIsRotating] = useState(false); // State untuk mengontrol animasi rotasi

  useEffect(() => {
    // Simulasikan progress loading selama 5 detik
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); // Hentikan interval jika progress mencapai 100%
          setIsRotating(true); // Mulai animasi rotasi setelah progress selesai
          return 100;
        }
        return prevProgress + 1; // Tambahkan 1% setiap 50ms (total 5 detik)
      });
    }, 50);

    return () => clearInterval(interval); // Bersihkan interval jika komponen unmount
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-[3000ms] ${
        isRotating ? "animate-rotate-up" : "" // Tambahkan animasi rotasi jika isRotating === true
      }`}
      style={{
        background: `black`,
        perspective: "1000px", // Tambahkan perspektif untuk efek 3D
        transform: isRotating ? "translateY(-100%) rotateX(-90deg)" : "translateY(0) rotateX(0deg)",
        opacity: isRotating ? 0 : 1, // Fade-out saat rotasi dimulai
      }}
    >
      {/* Container Utama */}
      <div className="relative z-10 text-center">
        {/* Lingkaran Berputar */}
        <div className="relative w-24 h-24 mx-auto animate-spin">
          <div
            className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full"
            style={{
              boxShadow: "0 0 20px 5px rgba(0, 123, 255, 0.7)", // Efek glow biru
            }}
          ></div>
        </div>
        {/* Progress Bar */}
        <div className="w-full max-w-md mt-8">
          <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        {/* Persentase Progress */}
        <p className="text-white text-sm mt-2">{progress}%</p>
        {/* Teks Loading */}
        <h1 className="text-white text-4xl font-bold mt-8 relative">
          Loading
          <span className="animate-pulse">...</span>
          {/* Efek Gradient Bergerak pada Teks */}
          <span
            className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-shimmer"
            aria-hidden="true"
          >
            Loading...
          </span>
        </h1>
        {/* Pesan Tambahan */}
        <p className="text-gray-400 text-sm mt-2 animate-fade-in">
          Please wait while we prepare everything for you...
        </p>
      </div>
    </div>
  );
};

// Animasi CSS untuk rotasi ke atas
const styles = `
@keyframes rotateUp {
  0% {
    transform: translateY(0) rotateX(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%) rotateX(-90deg);
    opacity: 0;
  }
}
.animate-rotate-up {
  animation: rotateUp 2s ease-in-out forwards;
}
`;

// Menambahkan animasi CSS ke DOM
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default LoadingScreen;