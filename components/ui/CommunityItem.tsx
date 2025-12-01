"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

export interface CommunityItemProps {
  avatar: string | StaticImageData;
  name: string;
  lastMessage: string;
  author: string;
  time: string;
  unreadCount: number;
}

export default function CommunityItem({
  avatar,
  name,
  lastMessage,
  author,
  time,
  unreadCount,
}: CommunityItemProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
      {/* Left Section */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Avatar */}
        <div className="relative w-10 h-10 flex-shrink-0">
          <Image
            src={avatar}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 font-semibold text-sm mb-0.5">{name}</h3>
          <p className="text-gray-600 text-sm truncate">
            <span className="font-medium">{author}:</span> {lastMessage}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-3">
        <span className="text-gray-400 text-xs">{time}</span>

        {unreadCount > 0 && (
          <div className="bg-purple-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {unreadCount}
          </div>
        )}
      </div>
    </div>
  );
}
