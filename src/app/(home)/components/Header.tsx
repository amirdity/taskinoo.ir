import ThemeSwitch from "@/components/ThemeSwitch";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
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
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
