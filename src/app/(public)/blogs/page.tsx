import BlogCard from "@/components/common/BlogCard";
import { blog } from "@/types";
import React from "react";

export const metadata = {
  title: "Yeasin's Portfolio || My Blogs",
  description: "Yeasin's Portfolio",
};

async function Page() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/all`, { next: { tags: ["blog"] } }).then((res) => res.json());

  return (
    <div>
      <h1 className="flex items-center justify-center py-10 text-3xl font-bold">My BLogs</h1>
      <div className="flex flex-wrap items-center justify-center 2xl:justify-start gap-8 pb-5">
        {data && data.map((blog: blog) => <BlogCard key={blog.id} blog={blog} className="w-full md:w-[20rem] lg:w-[25rem] xl:w-[26rem]" />)}
      </div>
    </div>
  );
}

export default Page;

