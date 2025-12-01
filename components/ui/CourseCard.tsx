"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

export type AccentColor = "purple" | "blue" | "red";

export interface CourseCardProps {
  image: string | StaticImageData;
  lessonNumber: number;
  lessonsRemaining: number;
  title: string;
  progress: number;
  lastWatched: string;
  accentColor?: AccentColor;
}

export const accentColors: Record<AccentColor, string> = {
  purple: "bg-purple-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
};

export const progressColors: Record<AccentColor, string> = {
  purple: "bg-purple-600",
  blue: "bg-blue-600",
  red: "bg-red-600",
};

export function CourseCard({
  image,
  lessonNumber,
  lessonsRemaining,
  title,
  progress,
  lastWatched,
  accentColor = "purple",
}: CourseCardProps) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="relative w-full h-36 bg-gray-100">
        <Image src={image} alt={title} fill className="object-cover" />

        {/* Lesson Badge */}
      </div>

      <div className="flex my-4">
        <div className=" ">
          <span
            className={`${accentColors[accentColor]} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
            Lesson {lessonNumber}
          </span>
        </div>

        {/* Lessons Remaining */}
        <div className=" bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
          {lessonsRemaining} lessons remaining
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-gray-900 font-semibold text-lg mb-3">{title}</h3>

        {/* Progress Bar */}
        <div className="mb-2">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className={`${progressColors[accentColor]} h-full rounded-full transition-all`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Progress Info */}
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-900 font-medium">
            {progress}% complete
          </span>
          <span className="text-gray-500">
            Last watched: <span className="font-medium">{lastWatched}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
