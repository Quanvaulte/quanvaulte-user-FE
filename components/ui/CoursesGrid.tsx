import { ChevronRight } from "lucide-react";
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
    bgColor: "bg-blue-700",
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
export default function CoursesGrid() {
  return (
    <div className="flex gap-4 justify-between">
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
            className={`${course.bgColor} relative mt-8 rounded-3xl w-1/3 px-4 py-2 overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02] shadow-md hover:shadow-xl min-h-[50px]`}
            style={{
              backgroundImage: `url(${coursesBg.src}), url(${bgDesign.src})`,
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundSize: "cover, 50%",
              backgroundPosition: `center, ${bgPosition}`,
            }}>
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Icon */}
              <div className="mb-4">
                <Image
                  src={course.icon}
                  alt={course.title}
                  className="w-24 h-24 md:w-28 md:h-28 object-contain opacity-90"
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                {course.title}
              </h3>

              {/* CTA */}
              <button className="text-white font-semibold flex items-center gap-2 group/btn text-sm md:text-base hover:gap-3 transition-all duration-200">
                Start a Course
                <Image
                  src={arrowRight}
                  alt=""
                  width={18}
                  height={18}
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </button>
            </div>

            {/* Decorative SVG */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg
                className="absolute bottom-0 right-0 w-40 h-40 md:w-48 md:h-48"
                viewBox="0 0 200 200">
                <path
                  d="M50 20 Q 80 10, 100 30 T 150 40 Q 170 50, 180 70 L 180 180 Q 160 190, 140 170 T 90 160 Q 70 150, 60 130 L 60 50 Q 50 30, 50 20 Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-30"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
