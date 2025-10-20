import Image from "next/image";
import tick from "@/public/tick.svg";
import playBtn from "@/public/play-btn.svg";
interface Stat {
  value: string;
  label: string;
}

interface Feature {
  text: string;
}

const stats: Stat[] = [
  { value: "34k+", label: "Communities" },
  { value: "40k+", label: "Courses" },
  { value: "128k+", label: "Students" },
];

const features: Feature[] = [
  {
    text: "Structured, self-paced courses in AI, Cybersecurity, Robotics, and Blockchain. Learn with videos, quizzes, and assessments designed to make complex topics simple.",
  },
  {
    text: "Go beyond watching – get hands-on in safe, browser-based labs. Practice real scenarios, build skills step-by-step and learn by doing.",
  },
  {
    text: "You're not learning alone. Join forums, ask questions, share ideas, and collaborate with peers to grow together.",
  },
];

export function CommunitySection() {
  return (
    <div className="min-h-screen bg-white py-12 font-baloo md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Practice in <span className="text-[#9D8528]">labs</span>,<br />
              connect in <span className="text-[#9D8528]">community.</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-10">
              Join a community of learners to ask questions, share ideas, and
              grow together.
            </p>

            <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-100 flex items-center justify-center">
                      <Image
                        src={tick}
                        alt="Tick"
                        width={32}
                        height={32}
                        className="w-6 h-6 md:w-8 md:h-8"
                      />
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 md:gap-10 mb-8 md:mb-10">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-[#2C43EB] text-white cursor-pointer font-semibold px-8 py-3 md:py-4 rounded-full transition-colors duration-200 text-base md:text-lg">
              Start learning
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            <div className="space-y-4 md:space-y-5">
              <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                  alt="Student learning with laptop"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-30 h-30 md:w-84 md:h-84 rounded-full flex items-center justify-center    group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={playBtn}
                      alt="Play button"
                      width={100}
                      height={100}
                      className="w-20 h-20 md:w-20 md:h-20"
                    />
                  </div>
                </div>
              </div>
              <div className="aspect-[4/6] md:aspect-[4/7] rounded-2xl md:rounded-3xl bg-[#2C43EB] shadow-lg scale-90 md:scale-95 mx-auto w-[85%]"></div>
            </div>

            <div className="space-y-4 md:space-y-5 ">
              <div className="aspect-[4/6] md:aspect-[4/7] rounded-2xl md:rounded-3xl bg-[#2C43EB] shadow-lg scale-90 md:scale-95 mx-auto w-[85%]"></div>

              <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                  alt="Student with headphones"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-30 h-30 md:w-84 md:h-84 rounded-full flex items-center justify-center    group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={playBtn}
                      alt="Play button"
                      width={100}
                      height={100}
                      className="w-20 h-20 md:w-20 md:h-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
