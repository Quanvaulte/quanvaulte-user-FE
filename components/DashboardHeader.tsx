import Image from "next/image";
import CoinButton from "./common/CoinButton";
import StreaksButton from "./common/StreaksButton";
import ProfileButton from "./common/ProfileButton";

export default function DashboardHeader() {
  return (
    <header className="w-full bg-white flex justify-between items-center px-6 py-4 border-b border-gray-200">
      {/* LEFT SIDE — GREETING */}
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold text-black flex items-center gap-2">
          David, Good Morning
          <Image
            src="/SmilingFace.svg"
            alt="smile"
            width={36}
            height={36}
            className="inline-block"
          />
        </h1>
      </div>

      {/* RIGHT SIDE — ACTION BUTTONS */}
      <div className="flex items-center gap-4">
        <CoinButton />
        <StreaksButton />
        <ProfileButton />
      </div>
    </header>
  );
}
