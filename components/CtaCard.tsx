import Image from "next/image";
import ctaBg from "@/public/ctaBg.svg";

export function CtaCard() {
  return (
    <div className="min-h-screen bg-white font-baloo py-12 md:py-20 px-4 md:px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div
          className="relative bg-[#2C43EB] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
          style={{
            backgroundImage: `url(${ctaBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          <div className="absolute inset-0 bg-[#2C43EB]/70 backdrop-blur-sm" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left text section */}
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Empower your <span className="text-[#F9D342]">students.</span>{" "}
                Track their <span className="text-[#F9D342]">progress.</span>{" "}
                Simplify <span className="text-[#F9D342]">learning</span>
              </h1>

              <p className="text-purple-100 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Discover the Courses That Thousands of Learners Trust to
                Transform Their Skills and Advance Professionally
              </p>

              <button className="bg-white text-[#2C43EB] cursor-pointer font-semibold px-8 py-3 md:py-4 rounded-full hover:bg-purple-50 transition-colors duration-200 text-base md:text-lg">
                Get started
              </button>
            </div>

            {/* Right image stack */}
            <div className="relative flex gap-4 justify-center items-center lg:justify-end">
              {/* Image 1 */}
              <div className="relative w-44 h-56 md:w-52 md:h-64 lg:w-56 lg:h-72 flex-shrink-0">
                <Image
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                  alt="Students in classroom"
                  fill
                  className="object-cover rounded-2xl shadow-2xl shadow-[#2C43EB]/50 backdrop-blur-md"
                />
              </div>

              {/* Image 2 */}
              <div className="relative w-44 h-56 md:w-52 md:h-64 lg:w-56 lg:h-72 flex-shrink-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                  alt="Student learning"
                  fill
                  className="object-cover rounded-2xl shadow-2xl shadow-[#2C43EB]/50 backdrop-blur-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
