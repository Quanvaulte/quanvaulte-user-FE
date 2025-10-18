import checkMark from "@/public/checkmark.svg";
import Image from "next/image";
import Link from "next/link";
interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  badge?: string;
  features: Feature[];
  colorScheme: "purple" | "magenta";
}

export function PricingCard({
  title,
  subtitle,
  price,
  badge,
  features,
  colorScheme,
}: PricingCardProps) {
  const bgColor = colorScheme === "magenta" ? "bg-[#D142F9]" : "bg-[#2C43EB]";

  // Button text color based on scheme
  const buttonTextColor =
    colorScheme === "magenta" ? "text-[#D142F9]" : "text-[#2C43EB]";

  return (
    <div
      className={`${bgColor} rounded-2xl p-6 md:p-8 text-white flex flex-col h-full shadow-xl`}>
      <div className="flex items-center justify-between font-semibold text-4xl ">
        <h3 className="text-2xl font-semibold gap-3 flex items-center">
          {title}
          {badge && (
            <span className="bg-[#379EC6]  text-white cursor-pointer text-xs font-semibold px-4 py-2 rounded-xl">
              {badge}
            </span>
          )}
        </h3>
        <p>{price}</p>
      </div>

      <p className="text-white/70 font-normal">{subtitle}</p>

      <div className="space-y-3 my-10 flex-grow">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${bgColor} backdrop-blur-sm rounded-lg p-3 md:p-4 flex items-center gap-3`}>
            <div className="flex-shrink-0">
              <Image src={checkMark} alt="check" className="w-5 h-5"/>
            </div>
            <span className="text-sm md:text-base font-medium">
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <Link href="/signup">
        <button
          className={`w-full bg-white ${buttonTextColor} font-semibold  text-base rounded-xl py-2 cursor-pointer px-8`}>
          Get started
        </button>
      </Link>
    </div>
  );
}
