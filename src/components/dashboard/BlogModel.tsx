"use client";

import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import toast from "react-hot-toast";
import { blog } from "@/types";
import { MdEdit } from "react-icons/md";
import { createBlogAction, updateBlogAction } from "@/app/actions/blogActions";

export const BlogModel = ({ blog, isDashboard }: { blog?: blog; isDashboard?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Form state
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    excerpt: "",
    content: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Blog Data:", formData);

    if (isDashboard) {
      await updateBlog();
    } else {
      await createBlog();
    }
  };

  const createBlog = async () => {
    const result = await createBlogAction(formData);

    if (result.success) {
      toast.success("Blog Created Successfully");
      setIsOpen(false);
      setFormData({ title: "", image: "", excerpt: "", content: "" });
    } else {
      toast.error(result.error || "Failed to create blog");
    }
  };

  const updateBlog = async () => {
    if (!blog?.id) return toast.error("Blog ID is missing");

    const result = await updateBlogAction(blog?.id, formData);
    if (result.success) {
      toast.success("Blog Updated Successfully");
      setIsOpen(false);
    } else {
      toast.error(result.message || "Failed to update blog");
    }
  };

  useEffect(() => {
    if (blog && isDashboard) {
      setFormData({
        title: blog.title,
        image: blog.image,
        excerpt: blog.excerpt,
        content: blog.content,
      });
    }
  }, [blog]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {isDashboard ? (
          <button className="bg-green-200 text-black font-bold rounded-sm transition-all cursor-pointer p-2" onClick={() => setIsOpen(true)}>
            <MdEdit size={20} color="green" />
          </button>
        ) : (
          <button className="border rounded-md border-gray-500 hover:border-gray-300 p-2 hover:text-gray-300 hover:scale-105 transition-all cursor-pointer">Create Blog</button>
        )}
      </DialogTrigger>

      <DialogContent className="w-[800px] h-[80vh] overflow-y-scroll bg-[#0C0F11] text-gray-200 border-gray-800 custom-scroll">
        <DialogHeader className="mx-auto">
          <DialogTitle className="text-xl font-bold">{isDashboard ? "Update" : "Create"} Blog</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:p-4">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="p-2 rounded-md  border border-gray-600 focus:outline-none focus:border-gray-400"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Image */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="p-2 rounded-md  border border-gray-600 focus:outline-none focus:border-gray-400"
              placeholder="Enter image link"
              required
            />
          </div>

          {/* Excerpt */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Excerpt</label>
            <input
              type="text"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              className="p-2 rounded-md  border border-gray-600 focus:outline-none focus:border-gray-400"
              placeholder="Short summary..."
              required
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={6}
              className="p-2 rounded-md  border border-gray-600 focus:outline-none focus:border-gray-400 resize-none"
              placeholder="Write your blog content here..."
              required
            />
          </div>

          <button type="submit" className="p-2 mt-2 bg-gray-600 text-white rounded-md transition-all cursor-pointer">
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
