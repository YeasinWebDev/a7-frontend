import ProjectCard from "@/components/common/ProjectCard";
import ProjectModal from "@/components/dashboard/ProjectModel";
import { Project } from "@/types";
import React from "react";

export const metadata = {
  title: "Yeasin's Portfolio || dashboard-project",
  description: "Yeasin's Portfolio || dashboard-project",
};

async function page() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project/all`, { next: { tags: ["project"] } }).then((res) => res.json());
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold text-center w-full mb-5">My Projects 💻</h2>
      <div className="flex items-center justify-center mt-5 mb-10 w-full">
        <ProjectModal />
      </div>

      <div className="flex flex-wrap items-center justify-center 2xl:justify-start gap-8 pb-5">
        {data && data.map((project: Project) => <ProjectCard isDashboard={true} key={project.id} project={project} className="w-full md:w-[20rem] lg:w-[25rem] xl:w-[26rem]" />)}
      </div>
    </div>
  );
}

export default page;
