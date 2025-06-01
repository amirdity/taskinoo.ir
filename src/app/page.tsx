// import { authOptions } from "@/lib/auth/option";
// import { getServerSession } from "next-auth";
import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "./(home)/components/Header";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // console.log(session, "session");
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Taskinoo</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl">
          مدیریت دقیق و لحظه‌به‌لحظه وظایف تیم شما، فقط با Taskinoo.
        </p>
        <p className="font-sans">فونت پیش‌فرض بدون کلاس خاص</p>
        <p className="font-noto">فونت با وزن Light (300)</p>
        <p className="font-bokor">heelllooo workd how are you ?</p>
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
      <footer className="flex justify-center w-100 h-100 items-center">
        <div className="bg-amber-400 w-20 h-20"></div>
      </footer>
    </>
  );
}
