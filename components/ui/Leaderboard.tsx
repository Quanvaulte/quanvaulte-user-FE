"use client";

import Image from "next/image";

interface LeaderboardUser {
  id: number;
  name: string;
  avatar: string;
  points: number;
}

const leaders: LeaderboardUser[] = [
  {
    id: 1,
    name: "Bill",
    avatar: "/leaderboard-profile-1.svg",
    points: 220,
  },
  {
    id: 2,
    name: "Bill",
    avatar: "/leaderboard-profile.svg",
    points: 220,
  },
  {
    id: 3,
    name: "Bill",
    avatar: "/leaderboard-profile.svg",
    points: 220,
  },
];

export default function Leaderboard() {
  return (
    <div className="w-full bg-white text-black mt-7 rounded-xl p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Image src="award.svg" width={20} height={20} alt="" />
        <h2 className="font-semibold text-xl">Leader board</h2>
      </div>

      {/* Podium Section */}
      <div className="relative w-full flex justify-center">
        <Image
          src="/podium.svg"
          alt="podium"
          width={350}
          height={200}
          className="select-none"
        />

        {/* First Place */}
        <div className="absolute -top-2 flex flex-col items-center">
          <Image
            src={leaders[0].avatar}
            alt={leaders[0].name}
            width={55}
            height={55}
            className="rounded-full object-cover border-4 border-white"
          />
          <p className="font-semibold">{leaders[0].name}</p>
          <p className="text-sm font-semibold text-gray-600">
            {leaders[0].points} <span className="font-bold">Qan</span>
          </p>
        </div>

        {/* Second Place */}
        <div className="absolute left-6 top-10 flex flex-col items-center">
          <Image
            src={leaders[1].avatar}
            alt={leaders[1].name}
            width={50}
            height={50}
            className="rounded-full object-cover border-4 border-white"
          />
          <p className="font-semibold">{leaders[1].name}</p>
          <p className="text-sm font-semibold text-gray-600">
            {leaders[1].points} <span className="font-bold">Qan</span>
          </p>
        </div>

        {/* Third Place */}
        <div className="absolute right-2 top-14 flex flex-col items-center">
          <Image
            src={leaders[2].avatar}
            alt={leaders[2].name}
            width={50}
            height={50}
            className="rounded-full object-cover border-4 border-white"
          />
          <p className="font-semibold">{leaders[2].name}</p>
          <p className="text-sm font-semibold text-gray-600">
            {leaders[2].points} <span className="font-bold">Qan</span>
          </p>
        </div>
      </div>

      {/* Ranked List */}
      <div className="mt-6">
        {leaders.map((leader, index) => (
          <div
            key={leader.id}
            className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <p className="font-semibold text-lg">{index + 1}</p>

              <Image
                src={leader.avatar}
                alt={leader.name}
                width={42}
                height={42}
                className="rounded-full object-cover"
              />

              <p className="font-semibold">{leader.name}</p>
            </div>

            <p className="font-semibold text-gray-700">
              {leader.points}
              <span className="font-bold">Qan</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
