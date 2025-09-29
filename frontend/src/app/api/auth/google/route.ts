import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  const body = await req.json();
  const { accessToken } = body;

  const response = await fetch(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const gooole_user = await response.json();

  const strapiRegister = await fetch(
    `${process.env.API_URL}/api/auth/local/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: gooole_user.email,
        username: gooole_user.email,
        password: gooole_user.sub,
      }),
    }
  );

  const data = await strapiRegister.json();

  if (strapiRegister.ok) {
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
    const strapiLogin = await fetch(`${process.env.API_URL}/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: gooole_user.email,
        password: gooole_user.sub,
      }),
    });

    const data = await strapiLogin.json();

    const response = NextResponse.json({ data });

    response.cookies.set("token", data.jwt, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  }
}
