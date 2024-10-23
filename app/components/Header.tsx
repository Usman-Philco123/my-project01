import React from "react";
import Link from "next/link";

export default function Header() {
  return (
  <div className="flex bg-gray-900 text-white gap-12 justify-center items-center mx-auto p-4 font-bold">
    <Link href='/'>Home</Link>
    <Link href='/about'>About</Link>
    <Link href='/services'>Services</Link>
    <Link href='/contact'>Contact</Link>
  </div>
  )
}
