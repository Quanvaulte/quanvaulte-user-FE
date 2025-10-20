import {  ChevronRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

import coursesBg from "@/public/coursesBg.svg";
import popularCourse from "@/public/popular-course.svg";
import robot from "@/public/robots.svg";
import ai from "@/public/ai.svg";
import cybersecurity from "@/public/cybersecurity.svg";
import bgDesign from "@/public/bgdesign.svg";
import arrowRight from "@/public/arrow-right.svg";

interface Course {
  title: string;
  bgColor: string;
  icon: StaticImageData;
  iconBg: string;
}

const courses: Course[] = [
  {
    title: "Robotics",
    bgColor: "bg-fuchsia-600",
    icon: robot,
    iconBg: "bg-gradient-to-br from-gray-100 to-gray-200",
  },
  {
    title: "AI",
    bgColor: "bg-purple-700",
    icon: ai,
    iconBg: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    title: "Cybersecurity",
    bgColor: "bg-red-600",
    icon: cybersecurity,
    iconBg: "bg-gradient-to-br from-gray-700 to-gray-900",
  },
];

export function PopularCourses() {
  return (
    <div className="bg-white py-12 md:py-20 px-4 font-baloo md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C43EB] mb-2 md:mb-3 flex items-center gap-2 md:gap-3">
              Our popular courses
              <Image
                src={popularCourse}
                alt=""
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </h2>
            <p className="text-[#737373] text-base md:text-base max-w-md">
              Discover the Courses That Thousands of Learners Trust to Transform
              Their Skills and Advance Professionally.
            </p>
          </div>

          <button className="cursor-pointer self-start sm:self-auto bg-[#2C43EB] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 text-sm md:text-base flex items-center gap-2 group shadow-lg shadow-[#2C43EB]/80 hover:shadow-xl hover:shadow-[#2C43EB]/50">
            Start learning
            <ChevronRight
              className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200"
              strokeWidth={3}
            />
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {courses.map((course, index) => {
            const bgPosition =
              index === 0
                ? "left bottom"
                : index === 1
                ? "right top"
                : "right bottom";

            return (
              <div
                key={index}
                className={`${course.bgColor} relative rounded-3xl p-6 md:p-8 overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl`}
                style={{
                  backgroundImage: `url(${coursesBg.src}), url(${bgDesign.src})`,
                  backgroundRepeat: "no-repeat, no-repeat",
                  backgroundSize: "cover, 60%",
                  backgroundPosition: `center, ${bgPosition}`,
                }}>
                <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />

                <div className="relative z-10">
                  <div className="mb-8 md:mb-10 flex">
                    <Image
                      src={course.icon}
                      alt={course.title}
                      className="w-36 h-36 md:w-44 md:h-44 object-contain opacity-90"
                    />
                  </div>

                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                    {course.title}
                  </h3>

                  <button className="text-white font-semibold cursor-pointer flex items-center gap-2 group/btn text-sm md:text-base hover:gap-3 transition-all duration-200">
                    See more
                    <Image
                      src={arrowRight}
                      alt=""
                      width={20}
                      height={20}
                      className="w-4 h-4 md:w-5 md:h-5"
                    />
                  </button>
                </div>

                <div className="absolute inset-0 opacity-10">
                  <svg
                    className="absolute bottom-0 right-0 w-48 h-48 md:w-56 md:h-56"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M50 20 Q 80 10, 100 30 T 150 40 Q 170 50, 180 70 L 180 180 Q 160 190, 140 170 T 90 160 Q 70 150, 60 130 L 60 50 Q 50 30, 50 20 Z"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
