import React, { useState } from "react";

const ProjectList = () => {
  // State untuk melacak proyek mana yang sedang diperbesar
  const [activeProject, setActiveProject] = useState(null);
  // State untuk melacak posisi kursor dan apakah hover aktif
  const [hoveredImage, setHoveredImage] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Data proyek (nama, tahun, dan URL gambar)
  const projects = [
    { id: 1, name: "PT.PLN(iconnect)", year: 2023, image: "/pln.jpg" },
    { id: 2, name: "PT.INTI", year: 2020, image: "https://via.placeholder.com/800x600" },
    { id: 3, name: "Project Gamma", year: 2023, image: "https://via.placeholder.com/800x600" },
    { id: 4, name: "Project Delta", year: 2020, image: "https://via.placeholder.com/800x600" },
  ];

  return (
    <div className="bg-gray-900 text-white  py-10 mt-20 shadow-md relative">
      {/* Daftar Proyek (Dua Kolom) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1  gap-9 relative">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group"
            onMouseMove={(e) => {
              // Update posisi kursor
              setCursorPosition({ x: e.clientX, y: e.clientY });
              // Tampilkan gambar saat hover
              setHoveredImage(project.image);
            }}
            onMouseLeave={() => {
              // Sembunyikan gambar saat kursor meninggalkan elemen
              setHoveredImage(null);
            }}
          >
            {/* Nama Proyek dan Tahun */}
            <div className="flex items-center justify-between mb-4 z-10 relative md:px-0 px-3">
              <h2
                className="md:text-6xl text-2xl font-bold cursor-pointer transition-all duration-300 hover:text-gray-600 p-2 rounded-lg transform hover:scale-105"
                onClick={() => setActiveProject(project.id)}
              >
                {project.name}
              </h2>
              <span className="text-2xl text-gray-400">{project.year}</span>
            </div>
            {/* Border Bawah */}
            <div className=" border-gray-300 border-b-4 pb-2 mt-4 z-0 relative"></div>
          </div>
        ))}
      </div>

      {/* Gambar Zoom View (Fullscreen) */}
      {activeProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setActiveProject(null)} // Tutup saat diklik di luar
        >
          <img
            src={projects.find((p) => p.id === activeProject)?.image}
            alt="Zoomed"
            className="max-w-full max-h-full rounded-lg shadow-2xl transform scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
      )}

      {/* Gambar Hover yang Mengikuti Kursor */}
      {hoveredImage && (
        <img
          src={hoveredImage}
          alt="Hovered"
          style={{
            position: "fixed",
            top: cursorPosition.y - 100, // Offset agar gambar tidak menutupi kursor
            left: cursorPosition.x - 150,
            width: "300px",
            height: "200px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
            pointerEvents: "none", // Agar gambar tidak mengganggu interaksi lainnya
            zIndex: 100,
          }}
        />
      )}
    </div>
  );
};

export default ProjectList;