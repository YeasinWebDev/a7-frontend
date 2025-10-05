import ProjectCard from "@/components/common/ProjectCard";
import { Project } from "@/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Yeasin's Portfolio || My Projects",
  description: "Yeasin's Portfolio",
};

async function Page() {
  const dataRow = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project/all`, { next: { tags: ["project"] } });
  const data = await dataRow.json();

  return (
    <div>
      <h1 className="flex items-center justify-center py-10 text-3xl font-bold">My Projects</h1>
      <div className="flex flex-wrap items-start gap-8 pb-5">
        {data && data.map((project: Project, index: number) => <ProjectCard key={index} project={project} className="w-full md:w-[20rem] lg:w-[25rem] xl:w-[26rem]" />)}
      </div>
    </div>
  );
}

export default Page;
