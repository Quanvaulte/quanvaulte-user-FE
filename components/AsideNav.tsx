"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import GoPro from "./GoPro";

export default function AsideNav() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // Auto-collapse on screen size
  useEffect(() => {
    const handleResize = () => setCollapsed(window.innerWidth < 1024);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", href: "/dashboard", src: "/home.svg" },
    { name: "My Courses", href: "/dashboard/my-courses", src: "/courses.svg" },
    {
      name: "My Communities",
      href: "/dashboard/my-communities",
      src: "/communities.svg",
    },
    { name: "Settings", href: "/dashboard/settings", src: "/settings.svg" },
  ];

  const logoutItem = { name: "Logout", href: "/logout", src: "/logout.svg" };

  return (
    <aside
      className={`
        relative h-screen bg-blue-800 text-white flex-shrink-0 
        transition-all duration-300 ease-in-out
        backdrop-blur-md
        border-r border-blue-700/30
        ${collapsed ? "w-20" : "w-64"}
      `}>
      {/* Background Overlay */}
      <Image
        src="/asideTopBg.png"
        alt="Aside Background"
        fill
        className="object-cover opacity-50 pointer-events-none"
      />

      {/* Actual Content */}
      <div className="relative z-10 h-full flex flex-col py-8 px-3">
        {/* Header / Branding */}
        <div className="flex items-center justify-center mb-12">
          {!collapsed && (
            <h1 className="font-extrabold text-3xl text-yellow-300 tracking-wide drop-shadow">
              QuanVaulte
            </h1>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group flex items-center gap-4 py-3 rounded-xl relative 
                  transition-all duration-300 cursor-pointer
                  ${collapsed ? "justify-center" : "pl-5 pr-4"}
                  ${isActive ? "bg-white/25" : "hover:bg-blue-700/70 "}
                `}>
                <div
                  className="
                    transition-transform duration-300
                    group-hover:scale-110 group-hover:rotate-3
                  ">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={26}
                    height={26}
                    className="opacity-90"
                  />
                </div>

                {!collapsed && (
                  <span
                    className={`
                      transition-all duration-300 whitespace-nowrap
                      ${
                        isActive
                          ? "font-semibold text-white"
                          : "text-blue-100 group-hover:text-white"
                      }
                    `}>
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Go Pro block */}
        <div className="mt-10 px-1">
          <GoPro />
        </div>

        {/* Logout at bottom */}
        <div className="mt-auto pt-5">
          <Link
            href={logoutItem.href}
            className={`
              group flex items-center gap-4 py-3 rounded-xl 
              transition-all duration-300 text-white
              cursor-pointer
              ${collapsed ? "justify-center" : "pl-5 pr-4"}
              hover:bg-blue-700/70
            `}>
            <div className="transition-transform duration-300 group-hover:scale-110">
              <Image
                src={logoutItem.src}
                alt={logoutItem.name}
                width={80}
                height={80}
                className="opacity-90"
              />
            </div>

            {!collapsed && (
              <span className="whitespace-nowrap font-bold text-white group-hover:text-white">
                Logout
              </span>
            )}
          </Link>
        </div>
      </div>
    </aside>
  );
}
