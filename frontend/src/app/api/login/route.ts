import { NextResponse } from "next/server";

export async function POST(request: any) {
  const body = await request.json();
  const { identifier, password } = body;

  const strapiRes = await fetch("http://localhost:1337/api/auth/local", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: identifier,
      password: password,
    }),
  });

  const data = await strapiRes.json();

  if (strapiRes.ok) {
    const response = NextResponse.json({ data });

    response.cookies.set("token", data.jwt, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  } else {
    return NextResponse.json(
      { error: data.error?.message || "Ошибка входа" },
      { status: 401 },
    );
  }
}
