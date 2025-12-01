"use client";
import Image from "next/image";

export default function CodingCarousel() {
  return (
    <div className="relative bg-blue-600 min-h-47 rounded-2xl overflow-hidden p-6 flex items-center gap-6">
      {/* Background */}
      <Image
        src="/ubong.svg"
        alt="bg"
        fill
        className="object-cover opacity-80 pointer-events-none"
      />

      {/* Quote + Text Block */}
      <div className="relative left-10 top-3 z-10 flex flex-col items-center flex-1 text-center">
        {/* Quote Row */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <Image
            src="/quotes.svg"
            alt="quote-open"
            width={22}
            height={22}
            className="opacity-70 rotate-180"
          />

          <h2 className="text-xl lg:text-2xl font-semibold text-white drop-shadow">
            Coding is as fun as <span className="text-yellow-300">gaming</span>
          </h2>

          <Image
            src="/quotes.svg"
            alt="quote-close"
            width={22}
            height={22}
            className="opacity-70"
          />
        </div>

        {/* Caption */}
        <p className="text-white/90 text-sm font-medium">- Ubong</p>
      </div>
    </div>
  );
}
