"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { FaTimes, FaBars } from "react-icons/fa";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("sidebarOpen");
    if (stored !== null) setIsOpen(stored === "true");
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => {
      localStorage.setItem("sidebarOpen", String(!prev));
      return !prev;
    });
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} onToggle={handleToggle} />

      <main
        style={{
          marginLeft: isOpen && window.innerWidth >= 768 ? "14rem" : "0rem",
          transition: "margin-left 0.3s ease-in-out",
        }}
        className="flex-1 p-6 min-h-screen"
      >
        <div>
          <button onClick={handleToggle} className="text-2xl text-gray-400 cursor-pointer">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {children}
      </main>
    </div>
  );
}
