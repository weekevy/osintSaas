

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "http://localhost:5173",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Credentials": "true",
};

const SECRET_KEY = "YOUR_SECRET_KEY"; // change this to a strong secret

// Preflight request
export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

// Login POST
export async function POST(req) {
  const { username, password } = await req.json();

  // simple validation
  if (!username || !password) {
    return NextResponse.json(
      { message: "Username and password cannot be empty" },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  if (username === "admin" && password === "admin") {
    // create JWT
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });

    // set cookie
    const cookieHeader = serialize("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 3600,
      sameSite: "lax",
    });

    return NextResponse.json(
      { message: "Login successful" },
      { status: 200, headers: { ...CORS_HEADERS, "Set-Cookie": cookieHeader } }
    );
  } else {
    return NextResponse.json(
      { message: "Invalid Credentials" },
      { status: 401, headers: CORS_HEADERS }
    );
  }
}

// Logout API
export async function GET() {
  const cookieHeader = serialize("token", "", {
    httpOnly: true,
    path: "/",
    maxAge: -1,
    sameSite: "lax",
  });

  return NextResponse.json(
    { message: "Logged out" },
    { status: 200, headers: { ...CORS_HEADERS, "Set-Cookie": cookieHeader } }
  );
}

