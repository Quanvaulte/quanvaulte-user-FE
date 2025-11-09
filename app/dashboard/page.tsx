"use client";

import Sidebar from "@/components/Sidebar";
import Nav from "@/components/Nav";
import CourseCard from "@/components/CourseCard";
import Heroquote from "@/components/Heroquote";

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
            <div>
              <p>Side 1</p>
              <div>
                <Heroquote />
              </div>
              <div className="flex gap-3">
                <CourseCard
                  title="Ai"
                  imageSrc="/Rob.png"
                  backgroundColor="bg-purple-500"
                  buttonText="Start a career"
                  patternClass="/Robo.png"
                />
                <CourseCard
                  title="Ai"
                  imageSrc="/Chip.png"
                  backgroundColor="bg-blue-500"
                  buttonText="Start a career"
                  patternClass="/Line1-1.png"
                />
                <CourseCard
                  title="Cybersecurity"
                  imageSrc="/Lock.png"
                  backgroundColor="bg-red-500"
                  buttonText="Start a career"
                  patternClass="/Robo.png"
                />
              </div>
              <div>video section</div>
              <div>community</div>
            </div>
            <div>
              <p>Side 2</p>
              <div>Unlock badges</div>
              <div>Leaderboards</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
