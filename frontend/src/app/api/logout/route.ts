import { NextResponse } from "next/server";

export async function POST(req: Response) {
  // const response = NextResponse.json;

  const res = NextResponse.redirect(new URL("/", req.url));
  res.cookies.set("token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  // res.json({ message: "Logout successful" })

  return res;
}
