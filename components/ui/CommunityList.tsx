"use client";

import React from "react";
import Image from "next/image";
import CommunityItem, { CommunityItemProps } from "./CommunityItem";

export interface CommunityListProps {
  communities: CommunityItemProps[];
  title?: string;
}

export default function CommunityList({
  communities,
  title = "Your communities",
}: CommunityListProps) {
  return (
    <div className="w-full mt-8 bg-white rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
        <Image src="/award.svg" alt="icon" width={24} height={24} />
        <h2 className="text-gray-900 font-semibold text-base">{title}</h2>
      </div>

      {/* Community List */}
      <div className="divide-y divide-gray-100">
        {communities.map((community, index) => (
          <CommunityItem key={index} {...community} />
        ))}
      </div>
    </div>
  );
}
