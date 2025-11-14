"use client";
import React from "react";
import Image from "next/image";

interface VideosectionProps {
  thumbnail: string;
  lessonNumber: number;
  lessonsRemaining: number;
  courseTitle: string;
  progressBar: number;
  levelCompleted: number;
  lastWatched: string;
  alt: string;
}

function Videosection({
  thumbnail,
  lessonNumber,
  lessonsRemaining,
  courseTitle,
  progressBar,
  levelCompleted,
  lastWatched,
  alt,
}: VideosectionProps) {
  return (
    <div>
      <div className="max-w-[236px] max-h-[111px] rounded-[14.82px] bg-[#D9D9D9] ">
        <Image
          src={thumbnail}
          alt={alt}
          width={236}
          height={111}
          className=""
        />
      </div>
      <div>
        <div className="flex">
          <div className=" bg-[#CDC7F9] max-w-[170px] px-3 max-h-[27px]  rounded-[9px] ">
            Lesson {lessonNumber}
          </div>
          <div> {lessonsRemaining} lessons remaining </div>
        </div>
        <div>
          <p> {courseTitle} </p>
        </div>
        <div>
          <div> {progressBar}% complete </div>
          <div>
            <div> {levelCompleted} </div>
            <div> Last watched {lastWatched} </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videosection;
