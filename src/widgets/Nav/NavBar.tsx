import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className=" flex gap-2 w-full items-center justify-center text-lg p-4 border-b border-slate-700 mb-4">
      <Link href="/">Рейтинг</Link>
      <Link href="/students">Студенты</Link>
      <Link href="/">Специальности</Link>
      <Link href="/">Статистика</Link>
    </nav>
  );
};

export default NavBar;
