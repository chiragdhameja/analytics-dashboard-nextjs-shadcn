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
      <div className="flex w-screen p-2">
        <div className="w-1/2">
          <Link href={"/"}>Logo/Home</Link>
        </div>
        <div className="flex w-1/2 justify-end">
          <div className="flex w-fit space-x-2">
            <ModeToggle />
            <Link
              href={"/users"}
              className="bg-inherit hover:bg-slate-400 px-1 border border-slate-400 shad"
            >
              Users
            </Link>
            <Link
              href={"/products"}
              className="bg-inherit hover:bg-slate-400 px-1 border border-slate-400"
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
