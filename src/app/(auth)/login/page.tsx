import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yeasin's Portfolio || Login",
  description: "Yeasin's Portfolio",
};

async function login(formData: FormData) {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Login failed");
    }

    const data = await res.json();

    const cookieStore = await cookies();
    cookieStore.set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });

    redirect("/");
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl p-8 shadow-lg border border-gray-500">
        <h2 className="mb-6 text-center text-2xl font-bold">Login to Your Account</h2>

        <form action={login} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="mt-1 w-full rounded-lg border border-gray-500 p-2 focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="mt-1 w-full rounded-lg border border-gray-500 p-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>

          <button type="submit" className="w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-700 cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
