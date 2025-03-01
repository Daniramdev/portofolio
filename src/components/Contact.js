import React, { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';

export default function ContactSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false })); // Format 24-hour clock
    };

    updateTime(); // Set the initial time
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup when the component unmounts
  }, []);

  return (
    <div id="contact" className="flex flex-col items-center justify-center bg-gray-900 text-gray-400 relative py-8">
    <div className="w-full max-w-[1800px]">
      {/* Header Section */}
      <div className=" border-gray-500 px-10 relative">
      <div className="flex flex-col items-center md:items-start justify-center md:justify-start md:flex-row">
  <div className="relative w-28 h-40 mb-4  md:mb-0 md:mr-6 rounded-lg overflow-hidden bg-gray-700 ">
    <img src="/bg.png" alt="Collaborative workspace or contact-related imagery" className="w-full h-full object-cover" />
  </div>
  <h2 className="text-2xl font-semibold tracking-widest text-center mt-6 md:text-left">
    "Together, we can turn your innovative ideas into success."
  </h2>
</div>
<div className='text-center md:text-left md:ml-[8.6rem]'>

        <h2 className="text-md md:-mt-20 font-semibold tracking-widest">"Let's work side by side."</h2>
</div>

        {/* Social Links Section */}
      <div className="flex items-center justify-center md:justify-start gap-6 text-lg md:ml-[9rem] ">
      <h1>Majalaya | Bandung</h1>
      <p>{time} GMT{new Date().getTimezoneOffset() / -60}</p>
        </div>
   
      <div className=" text-gray-400 items-center justify-center md:justify-between md:flex flex-row">
      <div className='items-center justify-center md:justify-between flex px-4'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 md:ml-24">
        <MagneticButton>
        <div className="bg-gray-500 text-white w-64 px-6 py-4 rounded-full border border-transparent text-center cursor-pointer hover:opacity-80 transition duration-300 ease-in-out">
          <p className="text-sm">info@danird1240.com</p>
        </div>
        </MagneticButton>
        <MagneticButton>
        <div className="bg-gray-500 text-white w-64 px-6 py-4 rounded-full border border-transparent text-center cursor-pointer hover:opacity-80 transition duration-300 ease-in-out">
          <p className="text-sm">+62 857-032-357-67 </p>
        </div>
        </MagneticButton>
       
      </div>
</div>
   
        <div className="flex items-center justify-center md:justify-end gap-6 text-lg">
          <a href="https://www.awwwards.com" className="cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out">Facebook</a>
          <a href="https://www.instagram.com" className="cursor-pointer hover:text-pink-500 transition duration-300 ease-in-out">Instagram</a>
          <a href="https://www.linkedin.com" className="cursor-pointer hover:text-blue-600 transition duration-300 ease-in-out">LinkedIn</a>
        </div>
      </div>
       
      </div>
      

  
    </div>
  </div>

  
  );
}
