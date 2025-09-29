import React from "react";

function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto md:px-6 py-16 text-center md:text-left flex flex-col items-start"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center w-full">About Me❗</h2>

      <p className="text-lg text-gray-500 leading-relaxed">
        I’m Yeasin Arafat, a passionate{" "}
        <span className="font-semibold text-indigo-400">Frontend Developer</span>{" "}
        from Bangladesh. I specialize in creating intuitive, dynamic, and
        visually appealing web experiences. With expertise in modern
        technologies like{" "}
        <span className="font-semibold text-indigo-400">
          React, Next.js, Tailwind CSS
        </span>
        , and backend knowledge in{" "}
        <span className="font-semibold text-indigo-400">
          MongoDB and Express
        </span>
        . I love turning ideas into scalable digital solutions.
      </p>

      <p className="text-lg text-gray-500 mt-4 leading-relaxed">
        Beyond coding, I enjoy problem-solving, continuous learning, and
        exploring innovative ways to improve user experience.{" "}
        <span className="font-semibold text-indigo-400">
          My goal is to build impactful applications that make a difference.
        </span>
      </p>

      <p className="text-lg text-gray-500 mt-4 leading-relaxed">
        I have also gained hands-on experience working as an{" "}
        <span className="font-semibold text-indigo-400">
          "Assistant Developer"
        </span>{" "}
        under a senior developer in freelance projects. This role helped me
        improve my{" "}
        <span className="font-semibold text-indigo-400">
          teamwork, communication
        </span>{" "}
        skills and taught me how to write clean, maintainable code while
        following best practices in real-world development.
      </p>
    </section>
  );
}

export default About;
