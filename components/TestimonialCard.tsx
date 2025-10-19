"use client";
import Image from "next/image";
import { useState } from "react";
import left from "@/public/left.png";
import right from "@/public/right.png";
import qoute from "@/public/qoute.png";
import fanBlade from "@/public/fan-blade.svg";
import testimonialImage from "@/public/testimonial-image.svg";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I've seen a big change in Ubong since he joined this program. He's more focused, confident, and excited about learning new things.",
    name: "Mr. Adewale",
    role: "Tunde's Father",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      // testimonialImage
  },
  {
    id: 2,
    quote:
      "The transformation in my daughter has been remarkable. She's developed a genuine passion for learning and her confidence has soared.",
    name: "Mrs. Okonkwo",
    role: "Ada's Mother",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: 3,
    quote:
      "Seeing my son enthusiastic about education again has been incredible. He's not just learning, he's thriving.",
    name: "Mr. Ibrahim",
    role: "Yusuf's Father",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
];

export function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);

  const handleChange = (dir: "left" | "right") => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setRotation((prev) => prev + (dir === "right" ? 360 : -360));

    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (dir === "right")
          return prev === testimonials.length - 1 ? 0 : prev + 1;
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      });
      setAnimating(false);
    }, 500);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="bg-white py-10 md:py-20 px-4 sm:px-6 font-baloo overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            What Our Parents and Students{" "}
            <span className="text-[#9D8528]">Are Saying</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            See how learning with us has inspired confidence and success
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Fan + Image */}
          <div className="relative flex flex-col items-center justify-center w-full sm:w-3/4 md:w-1/2 lg:w-full">
            {/* Fan Blades */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-transform ease-in-out ${
                animating ? "duration-700" : "duration-0"
              }`}
              style={{ transform: `rotate(${rotation}deg)` }}>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-8rem)`,
                  }}>
                  <Image
                    src={fanBlade}
                    alt="Fan Blade"
                    width={150}
                    height={150}
                    className="opacity-50 blur-[0.5px]"
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Profile Image + Text */}
            <div className="relative z-20 flex flex-col gap-2">
              <div
                className="relative w-64 h-80 rounded-xl overflow-hidden
               shadow-[12px_12px_0_#2C43EB,0_12px_0_#2C43EB]
               transition-all duration-700">
                <Image
                  key={current.id}
                  src={current.image}
                  alt={current.name}
                  fill
                  className={`object-cover rounded-xl transition-all duration-700 transform ${
                    animating
                      ? direction === "right"
                        ? "translate-x-full opacity-0"
                        : "-translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                />
              </div>

              <div className="mt-4">
                <p className="font-bold text-gray-900 text-sm sm:text-base">
                  {current.name}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {current.role}
                </p>
              </div>
            </div>
          </div>

          {/* Quote + Buttons */}
          <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
            <div className="mb-4 flex justify-center lg:justify-start">
              <Image
                src={qoute}
                alt="quote"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
            </div>

            <blockquote
              className={`text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed mb-6 transition-opacity duration-700 ${
                animating ? "opacity-0" : "opacity-100"
              }`}>
              {current.quote}
            </blockquote>

            <div className="flex justify-center lg:justify-start gap-4">
              <button
                onClick={() => handleChange("left")}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Previous testimonial">
                <Image src={left} alt="previous" className="w-10 h-10" />
              </button>
              <button
                onClick={() => handleChange("right")}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center cursor-pointer justify-center hover:scale-110 transition-transform"
                aria-label="Next testimonial">
                <Image src={right} alt="next" className="w-10 h-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
