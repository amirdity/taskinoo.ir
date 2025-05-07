/* eslint-disable @typescript-eslint/no-unused-vars */
// app/dashboard/page.tsx
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function DashboardPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: todos } = await (await supabase).from("todos").select();

  return <ul></ul>;
}
