"use client";

import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { BlogModel } from "../dashboard/BlogModel";
import { blog } from "@/types";

function BlogCard({ blog, className, isDashboard = false }: { blog: blog; className?: string; isDashboard?: boolean }) {
  const handleDelete = async (id: number) => {
    try {
      let ans = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`, {
        next: {
          tags: ["blog"],
        },
        method: "DELETE",
      });

      if (ans?.ok) {
        toast.success("Blog Deleted Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div key={blog.id} className={`border-2 border-gray-600 shadow-md rounded-2xl flex flex-col cursor-pointer hover:scale-105 duration-300 transition-all relative ${className}`}>
      {isDashboard && (
        <div className="absolute top-2 right-2 cursor-pointer gap-4 flex items-center">
          <BlogModel blog={blog} isDashboard={true} />
          <button className="bg-red-200 text-black font-bold rounded-sm transition-all cursor-pointer p-2" onClick={() => handleDelete(blog.id)}>
            <MdDelete size={20} color="red" />
          </button>
        </div>
      )}
      <img className="rounded-t-xl h-[12rem] object-cover overflow-hidden" src={blog.image} alt="blogs image" />
      <div className="px-6 py-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
        <p className="text-gray-400 mb-4">{blog.excerpt}</p>
        <Link
          href={`/blogs/${blog.id}`}
          className="flex items-center justify-center w-full mt-auto p-2 bg-gray-400 text-black font-bold rounded-sm hover:bg-gray-300 transition-all cursor-pointer"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
