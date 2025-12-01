import Image from "next/image";
import React from "react";

export type BadgeTheme = "purple" | "orange" | "blue" | "green";

export interface BadgeCardProps {
  icon: string;
  title: string;
  description: string;
  points: number;
  progress: number;
  theme?: BadgeTheme;
}

export default function BadgeCard({
  icon,
  title,
  description,
  points,
  progress,
  theme = "purple",
}: BadgeCardProps) {
  const themes: Record<
    BadgeTheme,
    { bg: string; title: string; progressBg: string; progressFill: string }
  > = {
    purple: {
      bg: "bg-gradient-to-br from-purple-100 to-pink-50",
      title: "text-purple-600",
      progressBg: "bg-purple-200",
      progressFill: "bg-purple-600",
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-50 to-red-50",
      title: "text-red-600",
      progressBg: "bg-red-200",
      progressFill: "bg-red-600",
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-100 to-cyan-50",
      title: "text-blue-600",
      progressBg: "bg-blue-200",
      progressFill: "bg-blue-600",
    },
    green: {
      bg: "bg-gradient-to-br from-green-100 to-emerald-50",
      title: "text-green-600",
      progressBg: "bg-green-200",
      progressFill: "bg-green-600",
    },
  };

  const currentTheme = themes[theme];

  return (
    <div
      className={`${currentTheme.bg} rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-center gap-4">
        {/* Badge Icon */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
            <Image src={icon} alt={title} fill />
          </div>

          {/* Points */}
          <div
            className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white ${currentTheme.title} text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap`}>
            {points} Qan
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className={`${currentTheme.title} font-bold text-lg mb-1`}>
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{description}</p>

          {/* Progress Bar */}
          <div
            className={`${currentTheme.progressBg} rounded-full h-2 overflow-hidden`}>
            <div
              className={`${currentTheme.progressFill} h-full rounded-full transition-all duration-300`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Completed Checkmark */}
        {progress === 100 && (
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
