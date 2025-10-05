import Link from "next/link";
import React from "react";
import ProjectCard from "../common/ProjectCard";
import { Project } from "@/types";

async function Projects() {
  const dataRow = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project/all`, { next: { tags: ["project"] } })
  const data = await dataRow.json();

  return (
    <section id="projects" className="max-w-7xl mx-auto md:px-6 py-16 text-center md:text-left flex flex-col items-start">
      <h2 className="text-2xl md:text-4xl font-bold text-center w-full mb-5">Featured Projects 💻</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {data && data.map((project: Project, index: number) => <ProjectCard key={index} project={project} />)}
      </div>
      <Link href="/projects" className="flex items-center justify-center mt-5 w-full">
        <button className="border-b border-gray-500 hover:border-gray-300 p-2 hover:text-gray-300 hover:scale-105 transition-all cursor-pointer">View All</button>
      </Link>
    </section>
  );
}

export default Projects;
