// import { authOptions } from "@/lib/auth/option";
// import { getServerSession } from "next-auth";
import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // console.log(session, "session");
  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Taskinoo
          </Link>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <Link href="/about" className="hover:text-black transition-colors">
              درباره ما
            </Link>
            <Link href="/contact" className="hover:text-black transition-colors">
              تماس با ما
            </Link>
            <Link href="/login" className="hover:text-black transition-colors">
              log in
            </Link>
            <Link href="/signup" className="rounded-md bg-amber-500 p-2">
              Get started
            </Link>
          </nav>
        </div>
      </header>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Taskinoo</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl">
          مدیریت دقیق و لحظه‌به‌لحظه وظایف تیم شما، فقط با Taskinoo.
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/login">
            <Button className="text-white bg-blue-600 hover:bg-blue-700">ورود</Button>
          </Link>
          <Link href="/register">
            <Button variant="outline">ثبت‌نام</Button>
          </Link>
        </div>
        <div className="mt-12 max-w-3xl">
          {/* <img
          src="/dashboard-preview.png"
          alt="Taskinoo dashboard preview"
          className="rounded-xl shadow-lg"
        /> */}
        </div>
      </main>
    </>
  );
}
