import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const isRoot = pathname === "/";
  const isAuthPage = pathname.startsWith("/auth");

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/account/profile", request.url));
  }

  const isPublic = isRoot || isAuthPage;
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
