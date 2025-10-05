"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { FaTimes, FaBars } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/me`, {
        credentials: "include",
        cache: "no-store",
      });

      if (!res.ok) {
        return router.push("/login");
      }
    };

    getUser();
  }, []);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} onToggle={handleToggle} />

      <main
        style={{
          marginLeft: isOpen && window.innerWidth >= 770 ? "14rem" : "0rem",
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
