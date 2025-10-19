"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import left from "@/public/left.png";
import right from "@/public/right.png";

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
      "I've seen a big change in Ubong since he joined this program. He's more focused, confident, and excited about learning new things. The courses didn't just teach him skills — they helped him discover what he truly enjoys doing. I'm really proud of his growth.",
    name: "Mr. Adewale",
    role: "Tunde's Father",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: 2,
    quote:
      "The transformation in my daughter has been remarkable. She's developed a genuine passion for learning and her confidence has soared. This program didn't just teach her technical skills, it helped her discover her true potential.",
    name: "Mrs. Okonkwo",
    role: "Ada's Mother",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: 3,
    quote:
      "As a parent, seeing my son enthusiastic about education again has been incredible. The personalized approach and engaging content have made all the difference. He's not just learning, he's thriving.",
    name: "Mr. Ibrahim",
    role: "Yusuf's Father",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
];

export function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handlePrevious = () => {
    setIsSpinning(true);
    setRotation((prev) => prev - 360);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsSpinning(true);
    setRotation((prev) => prev + 360);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (isSpinning) {
      const timer = setTimeout(() => {
        setIsSpinning(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isSpinning]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-white py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            What Our Parents and Students{" "}
            <span className="text-yellow-600">Are Saying</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            See how learning with us has inspired confidence and success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative flex items-center justify-center">
            {/* Spinning fan behind the image */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-transform ease-in-out ${
                isSpinning ? "duration-700" : "duration-0"
              }`}
              style={{
                transform: `rotate(${rotation}deg)`,
              }}>
              <svg
                viewBox="0 0 400 400"
                className="w-80 h-80 md:w-96 md:h-96 opacity-40 blur-sm">
                <g transform="translate(200, 200)">
                  {[...Array(8)].map((_, i) => (
                    <rect
                      key={i}
                      x="-15"
                      y="-300"
                      width="50"
                      height="250"
                      fill="#D9D9D9"
                      transform={`rotate(${i * 45})`}
                      rx="6"
                    />
                  ))}
                </g>
              </svg>
            </div>

            {/* Image card */}
            <div className="relative z-20 bg-white rounded-2xl shadow-xl p-2 border-4 border-purple-600 transform rotate-3">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                width={250}
                height={250}
                className="w-56 h-64 md:w-64 md:h-80 object-cover rounded-xl"
              />
            </div>

            {/* Name tag */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow-lg border-2 border-gray-100 z-30">
              <p className="font-bold text-gray-900 text-center text-sm md:text-base">
                {currentTestimonial.name}
              </p>
              <p className="text-gray-600 text-xs md:text-sm text-center">
                {currentTestimonial.role}
              </p>
            </div>
          </div>

          <div className="relative mt-16 lg:mt-0">
            <div className="mb-6">
              <svg
                viewBox="0 0 80 60"
                className="w-16 h-12 text-gray-300"
                fill="currentColor">
                <path d="M0 30 Q0 0 30 0 L30 15 Q15 15 15 30 L30 30 L30 60 L0 60 Z M50 30 Q50 0 80 0 L80 15 Q65 15 65 30 L80 30 L80 60 L50 60 Z" />
              </svg>
            </div>

            <blockquote className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8">
              {currentTestimonial.quote}
            </blockquote>

            <div className="flex gap-3">
              <button
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full cursor-pointer text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Previous testimonial">
                <Image src={left} alt="" className="w-10 h-10" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full text-white cursor-pointer flex items-center justify-center transition-colors duration-200"
                aria-label="Next testimonial">
                <Image src={right} alt="" className="w-10 h-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
