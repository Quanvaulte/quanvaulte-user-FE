"use client";

import Sidebar from "@/components/Sidebar";
import Nav from "@/components/Nav";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 lg:ml-72 flex flex-col">
        {/* Navbar */}
        <Nav />

        {/* Page Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="mt-4 text-gray-600">...</p>
        </main>
      </div>
    </div>
  );
}
