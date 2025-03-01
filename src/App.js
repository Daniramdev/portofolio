import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectsSection from "./components/Projects";
import HeroSection from "./components/Hero";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import MovingText from "./components/AnimatedText";
import LoadingScreen from "./components/LoadingScreen";
import ProjectList from "./components/ProjectList";
import AboutMe from "./components/About";
import Chatbot from "./components/ChatBot";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan proses loading selama 5 detik
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading menjadi false setelah 5 detik
    }, 5000);

    return () => clearTimeout(timer); // Bersihkan timer jika komponen unmount
  }, []);

  return (
    <>
      {/* Tampilkan Loading Screen jika isLoading === true */}
      {isLoading && <LoadingScreen />}
      {/* Tampilkan Halaman Utama jika isLoading === false */}
      {!isLoading && (
        <>
          <Header />
          <HeroSection />
          <Chatbot/>
          <MovingText />
          <AboutMe />
          <ProjectList />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;