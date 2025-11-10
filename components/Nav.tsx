"use client";

import Image from "next/image";
import { FC, useMemo } from "react";
import { BadgeCheck, Flame } from "lucide-react";

const Nav: FC = () => {
  // Dynamic greeting according to actual time
  const greeting = useMemo(() => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good morning";
    if (hours < 18) return "Good afternoon";
    return "Good evening";
  }, []);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-3 bg-white shadow-sm sticky top-0 z-40">
      {/* Left Section */}
      <div className="hidden sm:flex items-center gap-2 text-lg font-semibold text-gray-800">
        <span>{`David, ${greeting}`}</span>
        <span className="text-2xl">😎</span>
      </div>

      {/* Compact greeting for small screens */}
      <div className="flex sm:hidden items-center gap-2 text-xl font-semibold text-gray-800">
        <span>😎</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* QN Coins */}
        <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md cursor-pointer hover:opacity-90 transition">
          <span className="text-yellow-300">🪙</span>
          <span>465 QN</span>
        </div>

        {/* Streak */}
        <div className="hidden sm:flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-purple-200 transition">
          <Flame size={16} className="text-orange-500" />
          <span>4 days streak</span>
        </div>

        {/* Achievements */}
        <div className="hidden sm:flex items-center gap-2 cursor-pointer hover:opacity-90 transition">
          <BadgeCheck size={24} className="text-purple-600" />
          <div className="flex gap-1">
            <div className="bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-lg">
              2
            </div>
            <div className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
              1
            </div>
            <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
              3
            </div>
          </div>
        </div>

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer hover:opacity-90 transition">
          <Image
            src="/avatar.png"
            alt="User avatar"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
