"use client";

import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";
import toast from "react-hot-toast";
import { MdEdit } from "react-icons/md";
import { createProject, updateProject } from "@/app/actions/projectAction";

export default function ProjectModal({ isDashboard = false, project }: { isDashboard?: boolean; project?: Project }) {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState<Project>({
    name: "",
    image: "",
    description: "",
    features: [],
    live: "",
    github: "",
    tech: [],
  });

  useEffect(() => {
    if (project && isDashboard) {
      setForm({
        name: project.name,
        image: project.image,
        description: project.description,
        features: project.features,
        live: project.live,
        github: project.github,
        tech: project.tech,
      });
    }
  }, [project, isDashboard]);

  const [featureInput, setFeatureInput] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function addFeatureFromInput() {
    const val = featureInput.trim();
    if (!val) return;
    setForm((s) => ({ ...s, features: [...s.features, val] }));
    setFeatureInput("");
  }

  function removeFeature(index: number) {
    setForm((s) => ({ ...s, features: s.features.filter((_, i) => i !== index) }));
  }

  function handleFeatureKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addFeatureFromInput();
    }
  }

  function resetForm() {
    setForm({ name: "", image: "", description: "", features: [], live: "", github: "", tech: [] });
    setFeatureInput("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name.trim() || !form.image.trim() || !form.description.trim() || !form.live.trim() || !form.github.trim()) {
      return toast.error("Project name, image, description, live link and github link is required");
    }

    const payload = { ...form };

    if (isDashboard) {
      handleUpdate(payload);
    } else {
      handleCreate(payload);
    }
  }

  const handleCreate = async (payload: Project) => {
    const ans = await createProject(payload);

    if (ans?.success) {
      toast.success("Project Created Successfully");
      setOpen(false);
      resetForm();
    } else {
      toast.error(ans?.error || "Failed to create project");
    }
  };

  const handleUpdate = async (payload: Project) => {
    if (!project?.id) return toast.error("Project not found");

    const ans = await updateProject(project?.id, payload);

    if (ans?.success) {
      toast.success("Project Updated Successfully");
      setOpen(false);
      resetForm();
    } else {
      toast.error(ans?.error || "Failed to update project");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isDashboard ? (
          <button className="bg-green-200 text-black font-bold rounded-sm transition-all cursor-pointer p-2" onClick={() => setOpen(true)}>
            <MdEdit size={20} color="green" />
          </button>
        ) : (
          <button className="border rounded-md border-gray-500 hover:border-gray-300 p-2 hover:text-gray-300 hover:scale-105 transition-all cursor-pointer">Create Project</button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl h-[90vh] max-w-xl bg-[#0C0F11] text-gray-200 border-gray-800 overflow-y-scroll custom-scroll">
        <DialogHeader>
          <DialogTitle className="w-full flex items-center justify-center mb-10 text-xl">{isDashboard ? "Update Project" : "Create Project"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Project Name</Label>
            <Input
              className="p-2 h-10 rounded-md  border border-gray-600 focus:outline-none focus:border-gray-400"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="MatchHearts"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              className="p-2 h-10 rounded-md  border border-gray-600 focus:outline-none focus:border-gray-400"
              id="image"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://.../image.png"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              className="p-2 rounded-md  border border-gray-600 focus:outline-none focus:border-gray-400 resize-none h-32   "
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Short project description"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Features</Label>
            <div className="flex gap-2 mb-2 flex-wrap">
              {form.features.length === 0 ? <p className="text-sm text-muted-foreground">No features yet</p> : null}
              {form.features.map((f, i) => (
                <Badge key={i} variant="secondary" className="inline-flex items-center gap-2 max-w-full break-words whitespace-normal">
                  <span className="break-words">{f}</span>
                  <button type="button" onClick={() => removeFeature(i)} className="ml-2 text-xs opacity-80">
                    ✕
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                className="p-2 h-10 rounded-md  border border-gray-600 focus:outline-none focus:border-gray-400"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                onKeyDown={handleFeatureKey}
                placeholder="Type a feature and press Enter"
              />
              <Button type="button" onClick={addFeatureFromInput}>
                Add
              </Button>
            </div>
          </div>

          {/* Tech Selection Section */}
          <div className="flex flex-col gap-2">
            <Label>Select Tech Stack</Label>

            {/* Icon grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 my-2">
              {tech.map((t, i) => {
                const isSelected = form.tech.includes(t);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setForm((prev) => {
                        const alreadySelected = prev.tech.includes(t);
                        return {
                          ...prev,
                          tech: alreadySelected ? prev.tech.filter((item) => item !== t) : [...prev.tech, t],
                        };
                      });
                    }}
                    className={`py-3 cursor-pointer border rounded-xl flex items-center justify-center transition-all hover:scale-105 
                          ${isSelected ? "bg-gray-700 border-gray-500" : "bg-transparent border-gray-600"}
                          `}
                  >
                    <img src={t} alt="tech icon" className="w-10 h-10 object-contain" />
                  </button>
                );
              })}
            </div>

            {/* Show selected count */}
            {form.tech.length > 0 && <p className="text-sm text-gray-400">{form.tech.length} technologies selected</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="live">Live URL</Label>
              <Input
                className="p-2 h-10 rounded-md  border border-gray-600 focus:outline-none focus:border-gray-400"
                id="live"
                name="live"
                value={form.live}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="github">GitHub URL</Label>
              <Input
                className="p-2 h-10 rounded-md  border border-gray-600 focus:outline-none focus:border-gray-400"
                id="github"
                name="github"
                value={form.github}
                onChange={handleChange}
                placeholder="https://github.com/your/repo"
              />
            </div>
          </div>

          <DialogFooter>
            <div className="flex items-center justify-end w-full mt-4">
              <div className="flex gap-2">
                <Button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    resetForm();
                  }}
                  className="cursor-pointer w-28"
                >
                  Cancel
                </Button>
                <Button type="submit" className="cursor-pointer w-28">
                  Create
                </Button>
              </div>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

let tech = [
  "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022223/HTML_jz3n70.png",
  "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022330/css_nu1bxx.png",
  "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022363/JavaScript_tfa58v.png",
  "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022394/tailwind_oajkz0.png",
  "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022454/react_yezqra.png",
  "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022491/node_rjzful.png",
  "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022517/express_c7t3dw.png",
  "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022536/mongo_wnhoqr.png",
  "https://res.cloudinary.com/dlrktntvb/image/upload/v1720022560/firebase_aqzyze.png",
  "https://i.ibb.co.com/7yvdvKY/g.gif",

  "https://res.cloudinary.com/dlrktntvb/image/upload/v1720024977/next_helctq.png",
  "https://res.cloudinary.com/dlrktntvb/image/upload/v1728183140/aceternity_i0e7ef.avif",
  "https://res.cloudinary.com/dlrktntvb/image/upload/v1728182960/shadcn_gn2v4p.png",
];
