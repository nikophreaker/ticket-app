import Link from "next/link";
import React from "react";

const NavHeader = () => {
  return (
    <nav className="flex justify-end p-8 pe-40">
      <div className="flex items-center space-x-20 text-l">
        <Link href="/">Schedule</Link>
        <Link href="/">Ticket</Link>
        <Link href="/">Contact</Link>
        <Link href="/">
          <button className="rounded-full outline outline-offset-8 outline-2 px-6 hover:outline-4">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavHeader;
