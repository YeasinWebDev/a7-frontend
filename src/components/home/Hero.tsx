import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { IoFolderSharp } from "react-icons/io5";

function Hero() {
  return (
    <section className="w-full mt-20 flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 md:px-16">
      {/* Left Content */}
      <div className="text-center lg:text-left max-w-xl space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-200">
          Hey, I'm <span className="text-indigo-400">Yeasin</span> 👋
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">Frontend Developer</h2>
        <p className="text-gray-400 leading-relaxed">
          Passionate about building dynamic, responsive, and user-friendly web applications using modern technologies like React, Next.js, and Tailwind CSS.
        </p>

        {/* Social Links */}
        <div className="links pt-4 flex items-center gap-5 flex-wrap justify-center lg:justify-start">
          <a href="https://www.linkedin.com/in/yeasinarafat121/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 font-semibold">
            <FaLinkedin size={26} color="#2966BC" />
            <span className="hover:text-[#2966BC] text-lg">Linkedin</span>
          </a>
          <a href="https://github.com/YeasinWebDev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 font-semibold">
            <FaGithub size={26} color="gray" />
            <span className="hover:text-gray-400 text-lg">GitHub</span>
          </a>
          <a href="https://www.facebook.com/yeasinarafat.arafat.9026/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 font-semibold">
            <FaFacebook size={26} color="#1877F2" />
            <span className="hover:text-[#1877F2] text-lg">Facebook</span>
          </a>
          <a href="/Frontend_Developer_Resume_of_Yeasin Arafat.pdf" download className="flex items-center gap-2 text-gray-500 font-semibold">
            <IoFolderSharp size={26} color="red" />
            <span className="hover:text-red-500 text-lg">Resume</span>
          </a>
        </div>
      </div>

      {/* Right Content - Profile Image */}
      <div className="w-52 h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
        <img
          src="/img.jpg" 
          alt="Yeasin"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
