import { NextResponse } from "next/server";

export async function POST(request: any) {
  const body = await request.json();
  const { email, username, password } = body;

  const strapiRes = await fetch(
    `${process.env.API_URL}/api/auth/local/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    }
  );

  console.log(strapiRes);
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
      { status: 401 }
    );
  }
}
