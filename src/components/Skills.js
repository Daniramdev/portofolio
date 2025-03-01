

import React from "react";

function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Skills & Abilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Front-End Development</h3>
            <p className="text-gray-700">HTML, CSS, Tailwind CSS, JavaScript, React</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Back-End Development</h3>
            <p className="text-gray-700">Flask, Django, CodeIgniter (PHP), MySQL, PostgreSQL</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">REST API & Tokenisasi</h3>
            <p className="text-gray-700">JWT, validasi data, keamanan API</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Deployment</h3>
            <p className="text-gray-700">Doker,Github,Vintres</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;