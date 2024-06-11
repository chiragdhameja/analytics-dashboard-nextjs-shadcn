import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex w-screen p-2 bg-slate-200">
      <div className="w-1/2">
        <Link href={"/"}>Logo/Home</Link>
      </div>
      <div className="flex w-1/2 justify-end">
        <div className="flex w-fit space-x-2">
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
  );
};

export default NavBar;
