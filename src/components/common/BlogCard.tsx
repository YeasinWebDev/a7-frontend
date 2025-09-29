import Link from "next/link";
import React from "react";

function BlogCard({ blog,className }: { blog: blog,className?:string }) {
  return (
    <div key={blog.id} className={`border-2 border-gray-600 shadow-md rounded-2xl flex flex-col cursor-pointer hover:scale-105 duration-300 transition-all ${className}`}>
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

interface blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

export default BlogCard;
