import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
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
    <motion.section
      id="experience"
      className="py-16 px-4 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl font-bold mb-4"
        variants={itemVariants}
      >
        Experience
      </motion.h2>
      <motion.div
        className="max-w-2xl mx-auto text-left space-y-6"
        variants={itemVariants}
      >
        <div>
          <h3 className="text-xl font-semibold">PLN (Iconnet) — Full-Stack Developer</h3>
          <p className="text-sm text-gray-500">Okt 2023 – Des 2023</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Membangun aplikasi web responsif dengan Django dan React.</li>
            <li>Optimasi kecepatan load time sebesar 35%.</li>
            <li>Merancang dashboard interaktif dengan Highcharts.</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;