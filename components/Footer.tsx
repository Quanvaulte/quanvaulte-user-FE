export default function Footer() {
  const footerItems = ["Home", "Email Marketing", "Courses", "FAQ"];

  return (
    <footer className="bg-[#040718] text-center flex flex-col gap-6 py-16 px-4 md:py-24 md:px-8 font-baloo">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-snug">
        Let the learning begin with{" "}
        <span className="text-[#F9D342] font-bold">Quanvaulte</span> today
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
        <button
          className="rounded-[40px] border-2 border-white shadow-[inset_0_-6px_10px_rgba(255,255,255,0.1)] text-white text-base sm:text-lg font-bold py-3 px-10 sm:px-12 cursor-pointer hover:bg-white/10 transition"
        >
          Login
        </button>
        <button
          className="bg-white rounded-[40px] text-[#2C43EB] text-base sm:text-lg font-bold py-3 px-10 sm:px-12 cursor-pointer hover:bg-[#f1f1f1] transition"
        >
          Get started
        </button>
      </div>

      {/* Footer Links */}
      <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-10 text-gray-300 text-sm sm:text-base mt-8">
        {footerItems.map((item) => (
          <li
            key={item}
            className="hover:text-[#F9D342] cursor-pointer transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <p className="text-gray-400 text-xs sm:text-sm mt-4">
        Copyright © {new Date().getFullYear()}. Quanvaulte. All rights reserved.
      </p>
    </footer>
  );
}
