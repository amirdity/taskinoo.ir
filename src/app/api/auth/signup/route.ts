// src/app/api/auth/signup/route.ts

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
// import { createClient } from "@/lib/supabase/server"; // مسیر رو مطابق پروژه خودت تنظیم کن

export async function POST(req: Request) {
  const cookieStore = cookies();
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: "ایمیل و رمز عبور الزامی است" }, { status: 400 });
  }

  const supabase = await createClient(cookieStore);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    if (error.message.includes("already registered")) {
      return NextResponse.json({ message: "ایمیل قبلاً ثبت شده" }, { status: 409 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "ثبت‌نام موفق بود", user: data.user });
}
