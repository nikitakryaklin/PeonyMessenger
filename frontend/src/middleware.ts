import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "./shared";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;
  const referer = request.headers.get("referer");
  const origin = request.nextUrl.origin;

  const isRoot = pathname === "/";
  const isAuthPage = pathname.startsWith("/auth");
  const isFaqPage = pathname.startsWith(ROUTES.faq);
  const isRulesPage = pathname.startsWith(ROUTES.rules);

  if (pathname.startsWith("/call")) {
    if (!referer || !referer.startsWith(origin)) {
      return NextResponse.redirect(new URL(ROUTES.chat, request.url));
    }
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL(ROUTES.account, request.url));
  }

  const isPublic = isRoot || isAuthPage || isFaqPage || isRulesPage;

  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\.svg|.*\\.png|.*\\.jpg|icons).*)"],
};
