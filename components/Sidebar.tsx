"use client";

import {
  Home,
  PlayCircle,
  Users,
  Settings,
  Crown,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#2A42C2] text-white p-2 rounded-md shadow-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-[#2A42C2] text-white flex flex-col justify-between p-6 overflow-hidden z-40 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('/patterns/pattern.svg')] bg-cover bg-no-repeat"></div>

        {/* Sidebar Content */}
        <div className="relative z-10 flex flex-col gap-10">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold text-yellow-400 text-center">
            QuanVaulte
          </h1>

          {/* Nav Links */}
          <nav className="flex flex-col gap-6">
            <SidebarLink icon={<Home size={22} />} label="Home" active />
            <SidebarLink icon={<PlayCircle size={22} />} label="My courses" />
            <SidebarLink icon={<Users size={22} />} label="My communities" />
            <SidebarLink icon={<Settings size={22} />} label="Settings" />
          </nav>

          {/* Pro Section */}
          <div className="mt-8 bg-[#3A54DD] rounded-2xl p-4 text-center flex flex-col items-center gap-2 shadow-lg">
            <Crown className="text-yellow-400" size={40} />
            <p className="text-sm font-medium">
              Get more with <br />
              <span className="text-yellow-400 font-bold">Quanvaulte Pro</span>
            </p>
            <button className="bg-white text-[#2A42C2] font-semibold rounded-full px-5 py-1.5 hover:bg-yellow-400 transition">
              Go Pro
            </button>
          </div>
        </div>

        {/* Logout */}
        <div className="relative z-10 flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
          <LogOut size={22} className="text-orange-400" />
          <span className="text-orange-400 font-semibold">Log out</span>
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
        ></div>
      )}
    </>
  );
};

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition ${
      active ? "bg-[#3A54DD]" : "hover:bg-[#3A54DD]/60"
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </div>
);

export default Sidebar;
