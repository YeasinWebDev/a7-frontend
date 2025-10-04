"use client";
import Link from "next/link";
import React from "react";
import DialogModel from "../home/ProjectModel";
import { Project } from "@/types";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import ProjectModal from "../dashboard/ProjectModel";

function ProjectCard({ project, className, isDashboard }: { project: Project; className?: string; isDashboard?: boolean }) {
  const handleDelete = async (id: number) => {
    try {
      let ans = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`, {
        next: {
          tags: ["project"],
        },
        method: "DELETE",
      });

      if (ans?.ok) {
        toast.success("Project Deleted Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`border-2 border-gray-600 rounded-xl flex flex-col cursor-pointer hover:scale-105 duration-300 transition-all relative ${className}`}>
      {isDashboard && (
        <div className="absolute top-2 right-2 cursor-pointer gap-4 flex items-center">
          <ProjectModal isDashboard={true} project={project} />
          <button className="bg-red-200 text-black font-bold rounded-sm transition-all cursor-pointer p-2" onClick={() => handleDelete(project.id!)}>
            <MdDelete size={20} color="red" />
          </button>
        </div>
      )}
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
          <Link
            className="text-gray-500 hover:text-gray-300 font-semibold border-2 border-gray-500 hover:border-gray-300 px-3 py-2 rounded-xl"
            href={project.github}
            target="_blank"
          >
            GitHub
          </Link>
        </div>
        <DialogModel data={project} />
      </div>
    </div>
  );
}

export default ProjectCard;
