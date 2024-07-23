import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/modetoggle";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-row w-screen p-2">
        <div className="flex w-1/2">
          <Link href={"/"} className="flex items-center">
            <img src="https://i.imgur.com/DefTjZ9.png" className="w-10 h-10" />
            <p className="ml-2">Data Analyser</p>
          </Link>
        </div>
        <div className="flex w-1/2 justify-end">
          <div className="flex w-fit space-x-2">
            <ModeToggle />
            <Link
              href={"/users"}
              className="bg-inherit hover:bg-slate-400 p-1.5 border border-slate-400"
            >
              Users
            </Link>
            <Link
              href={"/products"}
              className="bg-inherit hover:bg-slate-400 p-1.5 border border-slate-400"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NavBar;
