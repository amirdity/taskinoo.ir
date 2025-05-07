import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
type User = {
  email: string;
  password: string;
};

const USERS_FILE = path.join(process.cwd(), "users.json");

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: "ایمیل و رمز عبور الزامی است" }, { status: 400 });
  }

  // خواندن کاربران
  const data = await fs.readFile(USERS_FILE, "utf-8");
  const users = JSON.parse(data);

  // چک تکراری بودن ایمیل
  if (users.find((u: User) => u.email === email)) {
    return NextResponse.json({ message: "ایمیل قبلاً ثبت شده" }, { status: 409 });
  }

  // اضافه کردن کاربر جدید
  users.push({ email, password });
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));

  return NextResponse.json({ message: "ثبت‌نام موفق بود" });
}
