import Link from "next/link";
import React from "react";
import ProjectCard from "../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto md:px-6 py-16 text-center md:text-left flex flex-col items-start">
      <h2 className="text-2xl md:text-4xl font-bold text-center w-full mb-5">Featured Projects 💻</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">{data && data.map((project, index) => <ProjectCard key={index} project={project} />)}</div>
      <Link href="/projects" className="flex items-center justify-center mt-5 w-full">
        <button className="border-b border-gray-500 hover:border-gray-300 p-2 hover:text-gray-300 hover:scale-105 transition-all cursor-pointer">View All</button>
      </Link>
    </section>
  );
}

export default Projects;

const data = [
  {
    name: "Work Wave",
    image: "https://res.cloudinary.com/dlrktntvb/image/upload/v1728182092/Screenshot_2024-10-06_083321_imjgeo.png",
    description:
      "Work Wave is an all-in-one HR and Payroll Management System designed to streamline HR processes, manage employee payroll, and ensure compliance across departments. Built with Next.js, MongoDB, Stripe, ShadCN UI, and Aeternity UI, this platform provides HR teams with the tools to oversee their workforce efficiently and elegantly.",
    features: [
      "HR Dashboard: Quick access to key statistics, payroll data, and compliance updates.",
      "Sleek UI: Modern and responsive design implemented with ShadCN UI and Aeternity UI.",
    ],
    live: "https://work-wave-omega.vercel.app",
    github: "https://github.com/YeasinWebDev/WorkWave",
    tech: [
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720024977/next_helctq.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022394/tailwind_oajkz0.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022536/mongo_wnhoqr.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1728183140/aceternity_i0e7ef.avif",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1728182960/shadcn_gn2v4p.png",
    ],
  },
  {
    name: "Foodi",
    image: "https://res.cloudinary.com/dlrktntvb/image/upload/v1724689629/Screenshot_2024-08-26_222216_nbuqfi.png",
    description:
      "Foodi is a dynamic and user-friendly e-commerce application tailored for food enthusiasts. Built with the MERN stack (MongoDB, Express, React, Node.js), Foodi offers a seamless platform where users can explore a diverse range of food items, manage their favorites, and securely purchase their preferred dishes.",
    features: [
      "User Dashboard: A personalized space where users can easily add, update, and delete their favorite food items, allowing for complete control over their food choices",
      "Secure Payments: Integrated with Stripe, the app ensures secure and seamless payment processing, giving users confidence in their transactions",
    ],
    live: "https://foodi-client-lemon.vercel.app",
    github: "https://github.com/YeasinWebDev/Foodi-client",
    tech: [
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022223/HTML_jz3n70.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022330/css_nu1bxx.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022363/JavaScript_tfa58v.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022394/tailwind_oajkz0.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022454/react_yezqra.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022491/node_rjzful.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022517/express_c7t3dw.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022536/mongo_wnhoqr.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022560/firebase_aqzyze.png",
      "https://i.ibb.co.com/7yvdvKY/g.gif",
    ],
  },
  {
    name: "MatchHearts",
    image: "https://res.cloudinary.com/dlrktntvb/image/upload/v1724817687/Screenshot_2024-08-27_225909_iwk2yh.png",
    description: "MatchHearts is a comprehensive online dating platform designed to facilitate meaningful connections between individuals seeking romantic relationships.",
    features: [
      "Secure Messaging: Communicate safely with our secure messaging system.",
      "Dashboard with two roles - Normal user, Admin",
      "Advanced Search Filters: Find your ideal partner quickly with advanced filters.",
    ],
    live: "https://m-12-a9ab6.web.app",
    github: "https://github.com/YeasinWebDev/MatchHearts-client-public",
    tech: [
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022223/HTML_jz3n70.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022330/css_nu1bxx.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022363/JavaScript_tfa58v.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022394/tailwind_oajkz0.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022454/react_yezqra.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022491/node_rjzful.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022517/express_c7t3dw.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022536/mongo_wnhoqr.png",
      "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022560/firebase_aqzyze.png",
      "https://i.ibb.co.com/7yvdvKY/g.gif",
    ],
  },
];
