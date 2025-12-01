import React from "react";
import BadgeCard, { BadgeCardProps } from "./BadgeCard";
import Image from "next/image";

export interface UnlockBadgesProps {
  badges: BadgeCardProps[];
  title?: string;
}

export default function UnlockBadges({
  badges,
  title = "Unlock Badges",
}: UnlockBadgesProps) {
  return (
    <div className="w-full max-w-md bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-3xl p-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Image src="/award.svg" alt="icon" width={28} height={28} />
        <h2 className="text-white font-bold text-lg">{title}</h2>
      </div>

      {/* Badges List */}
      <div className="space-y-3">
        {badges.map((badge, index) => (
          <BadgeCard key={index} {...badge} />
        ))}
      </div>
    </div>
  );
}
