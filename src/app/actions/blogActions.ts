"use server";

import { revalidateTag } from "next/cache";

export async function createBlogAction(formData: { title: string; image: string; excerpt: string; content: string }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Failed to create blog");
    }

    revalidateTag("blog");

    return { success: true };
  } catch (error) {
    console.error("Error creating blog:", error);
    return { success: false, error: "Something went wrong" };
  }
}

export async function updateBlogAction(id: number, formData: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Failed to update blog");

    revalidateTag("blog");

    return { success: true };
  } catch (err) {
    console.error("Error updating blog:", err);
    return { success: false, message: "Error updating blog" };
  }
}

export async function deleteBlog(id: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete blog");

    revalidateTag("blog");
    return { success: true };
  } catch (err) {
    console.error("Error deleting blog:", err);
    return { success: false, message: "Error deleting blog" };
  }
}
