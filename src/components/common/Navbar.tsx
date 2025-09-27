import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="navbar border-gray-600 text-gray-400 flex items-center justify-between border-b-2 h-12 overflow-hidden px-5">
      <Link href={"/"}>
        <h1 className="name font-bold cursor-pointer text-xl">Yeasin Arafat</h1>
      </Link>
      <div>
        <ul className="flex items-center justify-center gap-5 cursor-pointer">
          <Link href={"/projects"}>
            <li className="link1 hover:text-gray-300 hover:scale-105 transition-all text-lg">Project</li>
          </Link>
          <Link href={"/contact"}>
            <li className="link2 hover:text-gray-300 hover:scale-105 transition-all text-lg">Contact</li>
          </Link>
        <Link href='/SignIn' className="border p-2 rounded-md hover:text-gray-300 hover:scale-105 transition-all">
            SignIn
        </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
