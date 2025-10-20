import Image from "next/image";
import studentwithlaptop from "@/public/student-with-laptop.svg";
import heroBg from "@/public/heroBg.svg";

export function HeroSection() {
  return (
    <div
      className="bg-[#2C43EB] min-h-screen relative font-baloo overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <h1 className="text-[#F9D342] text-xl md:text-6xl font-bold">
            QuanVaulte
          </h1>

          <div className="hidden md:flex items-center gap-6 text-gray-300 font-bold text-md lg:text-lg">
            <a
              href="#"
              className="hover:text-[#F9D342] transition-colors duration-200">
              Home
            </a>
            <a
              href="#"
              className="hover:text-[#F9D342] transition-colors duration-200">
              Courses
            </a>
            <a
              href="#"
              className="hover:text-[#F9D342] transition-colors duration-200">
              FAQ
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button className="text-white border-2 border-white cursor-pointer hover:bg-white hover:text-[#2C43EB] font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all duration-200 text-sm md:text-base">
            Login
          </button>
          <button className="bg-white text-[#2C43EB] hover:bg-yellow-400 cursor-pointer hover:text-[#2C43EB] font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all duration-200 text-sm md:text-base">
            Sign up
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white relative z-10">
            <div className="inline-block bg-white text-[#2C43EB] text-xs md:text-sm font-semibold px-4 py-2 rounded-md cursor-pointer mb-6 md:mb-8">
              ✓ No 1 tech learning app
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
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
                    d="M5 25
         C 0 2, 60 2, 120 15
         C 110 50, 150 45, 16 40
         C 2 40, 10 40, 5 25 Z"
                    stroke="#FCD34D"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-draw scribble-line"
                  />
                </svg>
              </span>
              to
              <br />
              Learn tech skills
              <br />
              the <span className="text-yellow-400">fun way</span>
            </h2>

            <p className="text-purple-100 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-lg leading-relaxed">
              Explore AI, Robotics, and Cybersecurity with hands-on labs and
              challenges.
            </p>

            <button className="bg-white text-[#2C43EB] hover:bg-yellow-400 cursor-pointer hover:text-[#2C43EB] font-bold px-8 md:px-10 py-3 md:py-4 rounded-full transition-all duration-200 text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transform">
              Start learning
            </button>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="relative z-10">
                <Image
                  src={studentwithlaptop}
                  alt="Student learning with laptop"
                  width={600}
                  height={700}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
