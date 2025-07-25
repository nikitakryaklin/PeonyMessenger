import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { url, cookies } = request;

  const { pathname } = request.nextUrl;

  // Разрешаем доступ к публичным маршрутам
  const publicPaths = [
    "/",
    "/auth/login",
    "/auth/register",
    "/favicon.ico",
    "/_next",
    "/api",
  ];

  const isPublic = publicPaths.some((path) => pathname.startsWith(path));

  if (isPublic) {
    return NextResponse.next();
  }

  const sessions = cookies.get("token")?.value;
  console.log(sessions, "dsa");

  const isAuthPage = pathname.startsWith("/auth/");

  if (isAuthPage) {
    if (sessions) {
      return NextResponse.redirect(new URL("/account/profile", url));
    }

    return NextResponse.next();
  }

  if (!sessions) {
    return NextResponse.redirect(new URL("/", url));
  }
}

export const config = {
  matcher: ["/:path*"],
};
