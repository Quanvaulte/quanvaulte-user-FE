// "use client";

// import Image from "next/image";
// import { FC } from "react";
// import { ArrowRight } from "lucide-react";

// interface CourseCardProps {
//   title: string;
//   buttonText?: string;
//   imageSrc: string;
//   backgroundColor?: string;
//   patternClass?: string; // optional pattern bg (like subtle icons)
//   //   onClick?: () => void;
// }

// const CourseCard = ({
//   title,
//   buttonText = "",
//   imageSrc,
//   backgroundColor = "",
//   patternClass = "",
// }: //   onClick,
// CourseCardProps) => {
//   return (
//     <div
//       className={`relative w-[220px] h-[84.52px] rounded-xl overflow-hidden flex items-center justify-between  cursor-pointer transition-transform hover:scale-[1.02] ${backgroundColor} ${patternClass}`}
//       //   onClick={onClick}
//     >
//       <div className="flex">
//         {/* Robot / Course Image */}
//         <div className="w-[90px] h-[80px] relative">
//           <Image
//             src={imageSrc}
//             alt={title}
//             fill
//             className="object-contain drop-shadow-md"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="flex flex-col justify-center items-start ml-1 text-white">
//           <h3 className="text-2xl font-bold">{title}</h3>
//           <button className="flex items-center mt-1 text-sm font-medium group">
//             {buttonText}
//             <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
//           </button>
//         </div>
//       </div>

//       {/* Decorative blob or pattern */}
//       <div className="absolute inset-0 pointer-events-none">
//         <Image
//           src="/Line1.png"
//           alt="Decorative background pattern"
//           fill
//           className="object-cover opacity-20"
//         />
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default CourseCard;

"use client";

import Image from "next/image";
import { FC } from "react";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  buttonText?: string;
  imageSrc: string;
  backgroundColor?: string;
  patternClass?: string;
  size?: "sm" | "md" | "lg"; // 👈 new
}

const sizeClasses = {
  sm: "w-[180px] h-[70px]",
  md: "w-[230px] h-[84px]",
  lg: "w-[280px] h-[110px]",
};

const imageSize = {
  sm: "w-[70px] h-[60px]",
  md: "w-[90px] h-[80px]",
  lg: "w-[120px] h-[100px]",
};

const CourseCard: FC<CourseCardProps> = ({
  title,
  buttonText = "",
  imageSrc,
  backgroundColor = "",
  patternClass = "",
  size = "md",
}) => {
  return (
    <div
      className={`relative ${sizeClasses[size]} rounded-xl overflow-hidden flex items-center justify-between cursor-pointer transition-transform hover:scale-[1.02] ${backgroundColor} ${patternClass}`}
    >
      <div className="flex items-center">
        {/* Robot / Course Image */}
        <div className={`${imageSize[size]} relative`}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain drop-shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-start text-white z-10">
          <h3 className="text-md md:text-xl font-bold">{title}</h3>
          {buttonText && (
            <button className="flex items-center mt-1 text-sm font-medium group">
              {buttonText}
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </div>

      {/* Decorative blob / pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/Line1.png"
          alt="Decorative background pattern"
          fill
          className="object-cover opacity-20"
        />
      </div>
    </div>
  );
};

export default CourseCard;
