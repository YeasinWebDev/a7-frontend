"use client";

import Me from "@/lib/Me";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const path = usePathname();
  const { user, setUser } = Me();

  const handleLogOut = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/logout`, {
      credentials: "include",
    });
    setUser(null);
  };

  return (
    <div className="navbar border-gray-600 text-gray-400 flex items-center justify-between border-b-2 h-12 overflow-hidden px-5">
      <Link href={"/"}>
        <h1 className="name font-bold cursor-pointer text-xl">Yeasin Arafat</h1>
      </Link>
      <div>
        <ul className="flex items-center justify-center gap-5 cursor-pointer">
          <Link href={"/projects"}>
            <li className={`link1 hover:text-gray-300 hover:scale-105 transition-all text-lg ${path === "/projects" ? "text-gray-200 scale-105" : ""}`}>Project</li>
          </Link>
          <Link href={"/blogs"}>
            <li className={`link2 hover:text-gray-300 hover:scale-105 transition-all text-lg ${path === "/blogs" ? "text-gray-200 scale-105" : ""}`}>Blogs</li>
          </Link>
          {user && (
            <Link href={"/dashboard/blogs"}>
              <li className={`link2 hover:text-gray-300 hover:scale-105 transition-all text-lg ${path === "/dashboard" ? "text-gray-200 scale-105" : ""}`}>dashboard</li>
            </Link>
          )}
          {user ? (
            <button onClick={handleLogOut} className="border p-2 rounded-md cursor-pointer hover:text-gray-300 hover:scale-105 transition-all">
              LogOut
            </button>
          ) : (
            <Link href="/login" className="border p-2 rounded-md hover:text-gray-300 hover:scale-105 transition-all">
              SignIn
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
