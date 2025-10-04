"use server";

import { Project } from "@/types";
import { revalidateTag } from "next/cache";

export async function createProject(payload: Project) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      revalidateTag("project");
      return { success: true };
    } else {
      throw new Error("Failed to create project");
    }
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, error: "Something went wrong" };
  }
}

export async function updateProject(id: number, payload: Project) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      revalidateTag("project");
      return { success: true };
    } else {
      throw new Error("Failed to update project");
    }
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, error: "Something went wrong" };
  }
}

export async function deleteProject(id: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      revalidateTag("project");
      return { success: true };
    } else {
      throw new Error("Failed to delete project");
    }
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, error: "Something went wrong" };
  }
}
