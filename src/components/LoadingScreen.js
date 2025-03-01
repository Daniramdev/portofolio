import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

// Daftar pesan acak (statis)
const tips = [
  "Did you know? The first computer bug was a real moth!",
  "Tip: Keep your software updated for better security.",
  "Fun fact: The first website is still online!",
  "Pro tip: Use dark mode to reduce eye strain.",
  "Fun fact: The first computer mouse was made of wood.",
];

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [randomTip, setRandomTip] = useState("");

  useEffect(() => {
    // Pilih pesan acak
    setRandomTip(tips[Math.floor(Math.random() * tips.length)]);
  }, []); // `tips` tidak perlu dimasukkan karena sudah statis

  useEffect(() => {
    // Simulasikan progress loading selama 5 detik
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsAnimating(true); // Mulai animasi keluar
          return 100;
        }
        return prevProgress + 1; // Tambahkan 1% setiap 50ms
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      // Animasi GSAP untuk rotasi ke atas dan fade-out
      gsap.to(".loading-screen", {
        delay: 0.5,
        duration: 2,
        rotateX: -90,
        opacity: 0,
        ease: "power2.inOut",
        onComplete: () => {
          console.log("Loading screen hidden");
        },
      });
    }
  }, [isAnimating]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center loading-screen"
      style={{
        background: "linear-gradient(270deg, #1a1a1a, #2c3e50)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 10s ease infinite",
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Container Utama */}
      <div className="relative z-10 text-center">
        {/* Lingkaran Berputar dengan Glow */}
        <div className="relative w-24 h-24 mx-auto">
          <motion.div
            className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            style={{
              boxShadow: "0 0 20px 5px rgba(0, 123, 255, 0.7)",
              animation: "glow 2s infinite alternate",
            }}
          ></motion.div>
          {/* Angka Progress di Tengah Spinner */}
          <motion.p
            className="absolute inset-0 flex items-center justify-center text-white text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {progress}%
          </motion.p>
        </div>

        {/* Teks "Hallo misal" */}
        <motion.h1
          className="text-white text-4xl font-bold mt-8 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {"Loading....".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Progress Bar dengan Gradient dan Efek Cahaya */}
        <motion.div className="w-full max-w-md mt-8">
          <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="w-20 h-full bg-white opacity-50"
                style={{
                  animation: "lightMove 2s infinite linear",
                }}
              ></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Pesan Acak atau Tips */}
        <motion.p
          className="text-gray-400 text-sm mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {randomTip}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;