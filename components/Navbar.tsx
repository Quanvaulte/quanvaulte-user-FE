"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import logo from "@/public/logo.svg"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-gradient-to-r from-[#4300B1] to-[#6C00FF] text-white">
      <nav className="mx-auto flex items-center justify-between px-6 py-4 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* <Image src={logo} alt="QuanVaulte" width={140} height={32} /> */}
          <p className="text-[#F9D342]">QuanVaulte</p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-gray-200 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              className="hover:text-gray-200 transition-colors">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-gray-200 transition-colors">
              FAQ
            </Link>
          </li>
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-[#4300B1] transition-all">
            Login
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 bg-white text-[#4300B1] rounded-full font-medium hover:bg-gray-100 transition-all">
            Sign up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white focus:outline-none"
          aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#5100D4] text-white px-6 py-4 space-y-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link
            href="/courses"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gray-200 transition-colors">
            Courses
          </Link>
          <Link
            href="/faq"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gray-200 transition-colors">
            FAQ
          </Link>
          <hr className="border-white/20" />
          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center border border-white py-2 rounded-full hover:bg-white hover:text-[#4300B1] transition-all">
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-white text-[#4300B1] py-2 rounded-full hover:bg-gray-100 transition-all">
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
