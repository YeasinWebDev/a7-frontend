import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/me`, {
    credentials: "include",
    cache: "no-store",
  });

  const { pathname } = req.nextUrl;

  // Protect dashboard route
  if (pathname.startsWith("/dashboard")) {
    if (!res) {
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
