/* eslint-disable @typescript-eslint/no-unused-vars */
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

// ایجاد تابع async برای کار با کوکی‌ها
export const createClient = async (cookieStore: ReturnType<typeof cookies>) => {
  // استفاده از await برای دریافت داده‌های کوکی‌ها به صورت Promise
  const allCookies = (await cookieStore).getAll();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return allCookies;
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(async ({ name, value, options }) =>
              (await cookieStore).set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
};
