import Image from "next/image";

export default function GoPro() {
  return (
    <div
      className="
        mt-6 p-6 rounded-xl cursor-pointer text-white text-center hidden md:block font-extrabold
        bg-[#7483F2]/70 backdrop-blur
        transition-all duration-300 
        hover:scale-[1.03] hover:bg-[#7483F2]/85 active:scale-[0.97]
        shadow-lg hover:shadow-xl
        group
      ">
    
      <div
        className="
          mx-auto mb-3 w-fit 
          transition-transform duration-300
          group-hover:animate-bounce
        ">
        <Image
          src="/crown.svg"
          alt="Go Pro"
          width={48}
          height={48}
          className="mx-auto group-hover:rotate-3 transition-transform duration-300"
        />
      </div>

      
      <p className="text-lg leading-snug">
        Get more with <br />
        <span className="text-yellow-300 drop-shadow-md">QuanVaulte</span> Pro
      </p>

    
      <div className="relative mt-6 flex flex-col items-center">
        {/* Shadow Fade */}
        <div
          className="
            absolute bottom-0 w-40 h-4 
            bg-black/30 
            blur-xl 
            rounded-full
            pointer-events-none
            opacity-70
          "></div>

        {/* Floating Button */}
        <button
          className="
            relative z-10 px-10 py-2 rounded-full 
            bg-white text-blue-700 font-bold text-base
            shadow-md cursor-pointer
            transition-all duration-300 
            hover:bg-yellow-300 hover:text-blue-900
            hover:shadow-lg active:scale-95

            animate-[float_3s_ease-in-out_infinite]
          ">
          Go Pro
        </button>
      </div>
    </div>
  );
}
