"use client";

import Sidebar from "@/components/Sidebar";
import Nav from "@/components/Nav";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-72 flex flex-col">
        {/* Navbar */}
        <Nav />

        {/* Page Content */}
        <main className="flex-1 p-6">
          <div className="flex">
            <div>Side 1</div>
            <div>Side 2</div>
          </div>
        </main>
      </div>
    </div>
  );
}
