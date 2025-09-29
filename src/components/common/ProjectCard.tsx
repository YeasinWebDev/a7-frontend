import Link from "next/link";
import React from "react";
import DialogModel from "../home/ProjectModel";

function ProjectCard({ project,className }: { project: project,className?:string }) {
  return (
    <div className={`border-2 border-gray-600 rounded-xl flex flex-col cursor-pointer hover:scale-105 duration-300 transition-all ${className}`}>
      <img className="rounded-t-xl" src={project.image} alt="projects image" />
      <div className="p-2 flex flex-col flex-grow">
        <h1 className="font-semibold text-xl">{project.name}</h1>

        <div className="pt-4">
          <h1 className="font-semibold text-gray-400">Technologies:</h1>
          <div className="flex items-center gap-2 py-2 flex-wrap">
            {project.tech.map((t, index) => (
              <img key={index} className="w-8" src={t} alt="" />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 pt-4 mt-auto">
          <Link className="text-gray-500 hover:text-gray-300 font-semibold border-2 border-gray-500 hover:border-gray-300 px-3 py-2 rounded-xl" href={project.live} target="_blank">
            Live
          </Link>
          <Link className="text-gray-500 hover:text-gray-300 font-semibold border-2 border-gray-500 hover:border-gray-300 px-3 py-2 rounded-xl" href={project.github} target="_blank">
            GitHub
          </Link>
        </div>
        <DialogModel data={project} />
      </div>
    </div>
  );
}

interface project {
  name: string;
  image: string;
  description: string;
  features: string[];
  live: string;
  github: string;
  tech: string[];
}

export default ProjectCard;
