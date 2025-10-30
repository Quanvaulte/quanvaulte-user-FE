"use client";

import Image from "next/image";
import Link from "next/link";
import studentwithlaptop from "@/public/student-with-laptop.svg";
import heroBg from "@/public/heroBg.svg";

export function HeroSection() {
  return (
    <section
      className="bg-[#2C43EB] min-h-screen relative font-baloo overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* ✅ Navbar */}
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
        {/* Brand & Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/"
            className="text-[#F9D342] text-xl md:text-4xl font-bold">
            QuanVaulte
          </Link>

          <ul className="hidden md:flex items-center gap-6 text-gray-300 font-bold text-md lg:text-lg">
            <li>
              <Link
                href="/"
                className="hover:text-[#F9D342] transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-[#F9D342] transition-colors duration-200">
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-[#F9D342] transition-colors duration-200">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="/login"
            className="text-white border-2 border-white font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all duration-200 text-sm md:text-base hover:bg-white hover:text-[#2C43EB]">
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-white text-[#2C43EB] font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all duration-200 text-sm md:text-base hover:bg-[#F9D342] hover:text-[#2C43EB]">
            Sign up
          </Link>
        </div>
      </nav>

      {/* ✅ Hero Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section */}
          <div className="text-white relative z-10">
            <div className="inline-block bg-white text-[#2C43EB] text-xs md:text-sm font-semibold px-4 py-2 rounded-md mb-6 md:mb-8">
              ✓ No 1 Tech Learning App
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Join{" "}
              <span className="relative inline-block">
                <span className="relative z-10 px-1">Ubong</span>
                <svg
                  className="absolute -inset-1 w-full h-full"
                  viewBox="0 0 120 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none">
                  <path
                    d="M5 25 C 0 2, 60 2, 120 15 C 110 50, 150 45, 16 40 C 2 40, 10 40, 5 25 Z"
                    stroke="#FCD34D"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-draw scribble-line"
                  />
                </svg>
              </span>{" "}
              to
              <br />
              Learn Tech Skills
              <br />
              the <span className="text-[#F9D342]">Fun Way</span>
            </h1>

            <p className="text-purple-100 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-lg leading-relaxed">
              Explore AI, Robotics, and Cybersecurity with hands-on labs and
              challenges.
            </p>

            <Link
              href="/courses"
              className="bg-white text-[#2C43EB] font-bold px-8 md:px-10 py-3 md:py-4 rounded-full transition-all duration-200 text-base md:text-lg shadow-lg hover:bg-[#F9D342] hover:scale-105 transform">
              Start Learning
            </Link>
          </div>

          {/* Right Section */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src={studentwithlaptop}
                alt="Student learning with laptop"
                width={600}
                height={700}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
