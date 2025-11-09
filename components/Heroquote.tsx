// "use client";

// import Image from "next/image";
// import React from "react";

// function Heroquote() {
//   return (
//     <section className="relative w-[713px] h-[150px] mb-5 bg-[#1E4EF0] rounded-2xl overflow-hidden flex items-center justify-start px-6 md:px-8 py-8 text-white shadow-lg">
//       {/* Character image */}
//       <div className="relative flex-shrink-0 -ml-4 mr-4 transition-transform duration-300 hover:scale-105">
//         <Image
//           src="/bannerboy.png"
//           alt="Character illustration"
//           width={150}
//           height={150}
//           priority
//           className="object-contain w-[120px] md:w-[150px]"
//         />
//       </div>

//       {/* Quote + citation */}
//       <div className="relative flex flex-col items-center text-center">
//         <blockquote className="text-3xl md:text-4xl font-semibold whitespace-nowrap leading-snug">
//           “Coding is as fun as <span className="text-[#FFD33D]">gaming</span>”
//         </blockquote>
//         <cite className="mt-2 text-lg md:text-xl font-medium text-blue-100 text-center">
//           – Ubong
//         </cite>
//       </div>
//     </section>
//   );
// }

// export default Heroquote;

"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const quotes = [
  {
    text: 'Coding is as fun as <span class="text-[#FFD33D]">gaming</span>',
    author: "Ubong",
    image: "/bannerboy.png",
  },
  {
    text: 'Learning never exhausts the mind <span class="text-[#FFD33D]">it energizes</span>',
    author: "Sharzy",
    image: "/bannerboy.png",
  },
  {
    text: 'Debugging is like being a detective in a <span class="text-[#FFD33D]">crime movie</span>',
    author: "Sharzy",
    image: "/bannerboy.png",
  },
];

function Heroquote() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const currentQuote = quotes[currentIndex];

  return (
    <section className="relative w-full max-w-[713px] max-h-[150px] mb-5 bg-[#1E4EF0] rounded-2xl overflow-hidden flex items-center justify-start px-6 md:px-8 py-8 text-white shadow-lg transition-all duration-500 mx-auto">
      {/* Character image */}
      <div className="relative flex-shrink-0 -ml-4 mr-4 transition-transform duration-300 hover:scale-105">
        <Image
          src={currentQuote.image}
          alt="Character illustration"
          width={150}
          height={150}
          priority
          className="object-contain w-[120px] md:w-[150px]"
        />
      </div>

      {/* Quote + citation */}
      <div className="relative flex flex-col items-center text-center flex-1">
        <blockquote
          className="text-3xl md:text-4xl font-semibold leading-snug break-words"
          dangerouslySetInnerHTML={{ __html: `“${currentQuote.text}”` }}
        />
        <cite className="mt-2 text-lg md:text-xl font-medium text-blue-100 text-center">
          – {currentQuote.author}
        </cite>
      </div>
    </section>
  );
}

export default Heroquote;
