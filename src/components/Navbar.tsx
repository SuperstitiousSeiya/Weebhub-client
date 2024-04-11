"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemesToggler } from "./ThemesToggler";
import { Search } from "lucide-react";

const Navbar = () => {
  const currentPath = usePathname();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Anime",
      path: "/anime",
    },
    {
      name: "Manga",
      path: "/manga",
    },
    {
      name: "Novels",
      path: "/novels",
    },
  ];

  return (
    <header className="">
      <nav className="fixed top-0 flex items-center bg-primary-foreground justify-between w-full px-6 py-4 h-[80px] z-50">
        {/* left  */}
        <div className="flex gap-8 items-center">
          <div className="logo">
            <h1 className="font-semibold text-2xl text-orange-500">WEEBHUB</h1>
          </div>

          <ul className="flex gap-8">
            {navLinks.map(({ path, name }, index) => (
              <li
                className={currentPath === path ? "text-orange-500" : ""}
                key={index}
              >
                {/* Use Link component for client-side navigation */}
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* right  */}
        <div className="flex items-center gap-2">
          <Search />
          <ThemesToggler></ThemesToggler>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
