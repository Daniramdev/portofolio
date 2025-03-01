import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">

      
      {/* Hero Section */}
      <motion.section
        className="relative bg-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            Hi, I'm Dani Ramdani 👋
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8"
            variants={itemVariants}
          >
            Full-Stack Developer | Building Scalable Web Applications
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium transition duration-300 hover:bg-gray-800"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            View My Work
          </motion.a>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <img
              src="/bg.png"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div className="text-left">
              <p className="text-gray-700 leading-relaxed">
                I am a passionate Full-Stack Developer with experience in
                building scalable web applications using modern technologies. My
                expertise includes frontend frameworks like React.js and
                backend technologies like Node.js and Django.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Skills
                </h3>
                <ul className="flex flex-wrap gap-4">
                  <li className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                    React.js
                  </li>
                  <li className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Node.js
                  </li>
                  <li className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                    Tailwind CSS
                  </li>
                  <li className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                    MongoDB
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/project1.jpg"
                alt="Project 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                E-Commerce Platform
              </h3>
              <p className="text-gray-600 mb-4">
                A fully functional e-commerce website built with React.js and
                Node.js.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Source Code
                </a>
              </div>
            </motion.div>
            {/* Repeat for other projects */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <p className="text-gray-400 mb-8">
            Feel free to reach out to me for collaborations or just to say hi!
          </p>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">&copy; 2025 Dani Ramdani. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://linkedin.com/in/daniramdani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/daniramdani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              GitHub
            </a>
            <a
              href="mailto:danird1240@gmail.com"
              className="hover:text-blue-400"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;