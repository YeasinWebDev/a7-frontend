import BlogCard from "@/components/common/BlogCard";
import { BlogModel } from "@/components/dashboard/BlogModel";
import { blog } from "@/types";
import React from "react";

export const metadata = {
  title: "Yeasin's Portfolio || dashboard-Blogs",
  description: "Yeasin's Portfolio || dashboard-Blogs",
};

async function page() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/all`, { next: { tags: ["blog"] } }).then((res) => res.json());
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold text-center w-full mb-5">My Blog Posts📝</h2>
      <div className="flex items-center justify-center mt-5 mb-10 w-full">
        <BlogModel />
      </div>

      <div className="flex flex-wrap items-center justify-center 2xl:justify-start gap-8 pb-5">
        {data && data.map((blog: blog) => <BlogCard isDashboard={true} key={blog.id} blog={blog} className="w-full md:w-[20rem] lg:w-[25rem] xl:w-[26rem]" />)}
      </div>
    </div>
  );
}

export default page;
