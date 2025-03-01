import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Animasi Slide-Up
export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

// Animasi Opacity
export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const AboutMe = () => {
  const phrase =
    "I am a Full-Stack Web Developer with 2+ years of experience building responsive and scalable web applications. Skilled in Python, React, PHP, and Laravel, with a focus on API-based system development and performance optimization.I have expertise in implementing various security methods, such as JWT, OAuth 2.0, OpenID Connect, API Key Authentication, HMAC, and LDAP, to ensure data protection and strong authentication.I am committed to providing efficient, safe and reliable solutions, with a positive impact on business success.";
  const descriptionRef = useRef(null);
  const isInView = useInView(descriptionRef);

  return (
    <div id="about"
      ref={descriptionRef}
      className="md:px-20 px-4 mt-10 flex justify-center items-center text-start"
    >
      <div className="max-w-[1400px] flex flex-col gap-10 relative">
        {/* Animated Phrase */}
        <p className="text-xl leading-[1.3] font-bold">
          {phrase.split(" ").map((word, index) => (
            <span key={index} className="inline-flex relative overflow-hidden mr-1">
              <motion.span
                variants={slideUp}
                custom={index}
                initial="initial"
                animate={isInView ? "open" : "closed"}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>

        {/* Subtitle */}
        <motion.p
          variants={slideUp}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          className="text-lg w-4/5 font-light"
        >
        <div>Skills</div>
           {/* Front-End Development */}
           <li>
                  <span className="font-bold">Front-End Development:</span>{" "}
                  HTML, CSS, Tailwind CSS, JavaScript, React.
                </li>
                {/* Back-End Development */}
                <li>
                  <span className="font-bold">Back-End Development:</span>{" "}
                  Flask, Django, CodeIgniter (PHP), MySQL, PostgreSQL.
                </li>
                {/* REST API & Tokenisasi */}
                <li>
                  <span className="font-bold">REST API & Tokenisasi:</span>{" "}
                  JWT, validasi data, keamanan API,HMAC,API Key Authentication.
                </li>
                {/* Database */}
                <li>
                  <span className="font-bold">Database:</span> MySQL, PostgreSQL.
                </li>
            
                <li>
                  <span className="font-bold">Deploy:</span> Doker,Githu.
                </li>
        </motion.p>

        {/* Rounded Button */}
     
      </div>
    </div>
  );
};

export default AboutMe;