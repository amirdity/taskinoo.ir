import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// کلید سری برای امضای JWT
const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // بررسی ساده برای دمو
  if (email !== "test@example.com" || password !== "123456") {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  // ساخت توکن
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "7d" });

  // ارسال توکن به صورت کوکی HttpOnly
  const response = NextResponse.json({ message: "Login successful" });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // ۷ روز
  });

  return response;
}
