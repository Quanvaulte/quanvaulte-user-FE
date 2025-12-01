import Image from "next/image";

export default function ProfileButton() {
  return (
    <button
      className="
        flex items-center gap-4 px-4 py-2 rounded-xl 
         transition-all duration-300 select-none
      ">
      <Image
        src="/award.svg"
        alt="award"
        width={35}
        height={35}
        className="opacity-90"
      />

      <Image
        src="/rankings.svg"
        alt="rankings"
        width={100}
        height={100}
        className="opacity-90"
      />

      <Image
        src="/profile-pic.svg"
        alt="profile avatar"
        width={60}
        height={60}
        className="rounded-full cursor-pointer"
      />
    </button>
  );
}
