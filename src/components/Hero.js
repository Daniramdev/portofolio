import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion"; // Pastikan useAnimation diimpor
import MagneticButton from "./MagneticButton";
import RoundedButton from "./RoundedButton";
import LogoAnimation from "./LogoAnimation";


const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // State untuk tombol "Back to Top"
  const [showButton, setShowButton] = useState(false);

  // Efek scroll untuk tombol "Back to Top"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  



  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with id 'contact' not found!");
      alert("The contact section is not available."); // Opsional: Beri tahu pengguna
    }
  };

  // Variabel animasi slideUp
  const slideUp = {
    initial: { y: "100%", opacity: 0 },
    animate: (i) => ({
      y: "0%",
      opacity: 1,
      transition: { duration: 0.4, delay: 0.4 * i },
    }),
    closed: { y: "50%", opacity: 0, transition: { duration: 0.4 } },
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero bg-center h-screen flex flex-col -mt-16  justify-center z-10 items-center text-center"
        style={{
          backgroundImage: "url('./bg.png')",
       
          backgroundRepeat: "no-repeat",
          backgroundPosition: `center`, // Animasi background position
        }}
      >
        <div ref={ref} className="flex flex-col items-center justify-center">
          {/* Judul */}
          <motion.h1
            className="md:text-6xl text-4xl font-bold md:mt-[14rem] mt-28 text-black text-opacity-80"
            variants={slideUp}
            custom={0}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            Hello, I'm Dani Ramdani
          </motion.h1>
          {/* Deskripsi */}
          <motion.p
            className="text-lg text-black text-opacity-80 mt-4"
            variants={slideUp}
            custom={1}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            A passionate developer with a focus on creating innovative solutions.
          </motion.p>
          {/* Tombol */}
          <MagneticButton>
            <motion.div
              className="w-full h-14 text-xl flex items-center justify-center mt-8"
              variants={slideUp}
              custom={2}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              <RoundedButton onClick={handleScrollToContact}>
                Get in Touch
              </RoundedButton>
            </motion.div>
          </MagneticButton>
        </div>
       
        <div className="absolute md:right-10 right-0 mt-[28rem]">
          <LogoAnimation/>
        </div>
     
      </section>

      {/* Tombol Back to Top */}

      {showButton && (
        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-16 right-0  z-40"
        >
          <MagneticButton>

          <button
            onClick={scrollToTop}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
          </MagneticButton>
        </motion.div>
      )}
  
    </div>
  );
};

export default HeroSection;