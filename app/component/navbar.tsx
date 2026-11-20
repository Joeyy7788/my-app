"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const topLinks = [
  { label: "Home", href: "/app" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Contact2", href: "/product" },
  { label: "Login/Sign in", href: "/login" },
];

const sidebarLinks = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact me", href: "/blog/4" },
  { label: "Contact info", href: "/use-state/" },
  { label: "product", href: "/product/" },
  { label: "Dashboard", href: "/dashboard/" },
];

export default function Navbar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const checkActive = (href: string) => {
    const cleanHref = href !== "/" && href.endsWith("/") ? href.slice(0, -1) : href;
    const cleanPath = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
    return cleanPath === cleanHref;
  };

  return (
    <>
      {/* Top Header */}
      <header className="flex bg-[#222] dark:bg-zinc-950 text-white p-5 justify-between items-center border-b border-transparent dark:border-zinc-800 transition-colors">
        <h1 className="m-0 font-bold">MyBlog.</h1>

        <div className="flex gap-8 xl:gap-14 items-center">
          <nav className="hidden md:flex gap-8 lg:gap-12 items-center">
            {topLinks.map((item) => {
              const active = checkActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition whitespace-nowrap ${
                    active
                      ? "bg-sky-500/20 text-sky-500 font-semibold px-4 py-1.5 rounded-full"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-700 text-white hover:bg-zinc-600 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300 transition whitespace-nowrap cursor-pointer"
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* Sidebar + Content */}
      <div className="flex m-5 min-h-[75vh] rounded-[15px] overflow-hidden border border-[#ddd] dark:border-zinc-800 transition-colors">
        {/* Left Sidebar */}
        <aside className="w-1/5 min-w-45 bg-[#222] dark:bg-zinc-950 text-white p-4 box-content transition-colors">
          <h2 className="mb-4 font-bold">MyBlog.</h2>

          <div className="flex flex-col gap-2">
            {sidebarLinks.map((item) => {
              const active = checkActive(item.href);
              return (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className={`p-4 rounded-lg transition ${
                    active
                      ? "bg-sky-500/20 text-sky-400 font-semibold"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </aside>

        {/* Right Content */}
        <main className="w-4/5 flex p-7 bg-[#f3f4f6] dark:bg-zinc-950/70 transition-colors">
          {children}
        </main>
      </div>
    </>
  );
}