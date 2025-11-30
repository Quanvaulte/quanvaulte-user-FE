"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function AsideNav() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // Automatically collapse on smaller screens
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 1024);
    };

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
      className={`relative h-screen bg-blue-800 text-white flex-shrink-0 transition-all duration-200 
        ${collapsed ? "w-20" : "w-64"}
      `}>
      {/* Background */}
      <Image
        src="/asideTopBg.png"
        alt="Aside Background"
        fill
        className="object-cover opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col py-8 px-3">
        {/* Header */}
        <div className="flex items-center justify-center mb-10">
          {!collapsed && (
            <h1 className="text-yellow-300 text-center font-extrabold text-3xl whitespace-nowrap">
              QuanVaulte
            </h1>
          )}

          {/* Collapse Toggle (desktop only) */}
          {/* <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex text-yellow-300 p-2 hover:bg-blue-700 rounded transition-colors">
            {collapsed ? ">" : "<"}
          </button> */}
        </div>

        {/* Main Navigation */}
        <nav className="flex flex-col gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all 
                  ${
                    isActive
                      ? "bg-white/30 text-white font-semibold"
                      : "hover:bg-blue-700"
                  }
                  ${collapsed ? "justify-center px-0" : ""}
                `}>
                <Image src={item.src} alt={item.name} width={22} height={22} />
                {!collapsed && (
                  <span className="whitespace-nowrap">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout pinned to bottom */}
        <div className="mt-auto pt-4">
          <Link
            href={logoutItem.href}
            className={`flex items-center py-3 rounded-lg transition-all text-white hover:bg-blue-700 
              ${collapsed ? "justify-center px-0" : ""}
            `}>
            <Image
              src={logoutItem.src}
              alt={logoutItem.name}
              width={100}
              height={100}
            />
            {!collapsed && (
              <span className="whitespace-nowrap font-bold ">
                {logoutItem.name}
              </span>
            )}
          </Link>
        </div>
      </div>
    </aside>
  );
}
