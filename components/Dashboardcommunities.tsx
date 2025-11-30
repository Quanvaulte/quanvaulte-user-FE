// import React from 'react'

// interface Dashboardcommunities{
//     communityProfileImage: string
//     communityName: string
//     username: string
//     message: string
//     timestamp: number
//     notification: string
// }

// function Dashboardcommunities() {
//   return (
//     <div>Dashboardcommunities</div>
//   )
// }

// export default Dashboardcommunities

"use client";

import Image from "next/image";
import React from "react";

interface DashboardCommunitiesProps {
  communityprofileImage: string;
  communityName: string;
  username: string;
  message: string;
  time: string;
  unreadCount?: number;
  alt: string;
}

export default function DashboardCommunities({
  communityprofileImage,
  communityName,
  username,
  message,
  time,
  unreadCount,
  alt,
}: DashboardCommunitiesProps) {
  return (
    <div className="flex items-center w-full py-3 px-4 hover:bg-gray-100 transition-colors rounded-lg cursor-pointer">
      {/* Community avatar */}
      <div className="flex-shrink-0">
        <Image
          src={communityprofileImage}
          alt={alt}
          width={40}
          height={40}
          className="rounded-2xl object-cover"
        />
      </div>

      {/* Text section */}
      <div className="flex-1 ml-3">
        {/* Top row: community name + time */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm text-gray-900">{communityName}</p>
          <span className="text-xs text-gray-400">{time}</span>
        </div>

        {/* Bottom row: username and message */}
        <p className="text-gray-600 text-sm truncate max-w-[220px]">
          <span className="font-medium text-gray-800">{username}:</span>{" "}
          {message}
        </p>
      </div>

      {/* Unread badge */}
      {unreadCount && unreadCount > 0 && (
        <div className="ml-3">
          <span className="bg-purple-500 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        </div>
      )}
    </div>
  );
}
