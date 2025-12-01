import Image from "next/image";

export default function CoinButton() {
  return (
    <button className="bg-purple-400 text-white cursor-pointer font-bold py-2 px-4 border-2 border-purple-300 rounded-full hover:bg-purple-500 transition duration-300">
      <Image
        src="/coin.svg"
        alt="coin"
        width={20}
        height={20}
        className="inline-block mr-2 mb-1"
      />
      1000 QN
    </button>
  );
}
