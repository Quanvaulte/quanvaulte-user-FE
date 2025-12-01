import CodingCarousel from "@/components/ui/CodingCarousel";
import { CourseCard } from "@/components/ui/CourseCard";
import CoursesGrid from "@/components/ui/CoursesGrid";

export default function DashboardPage() {
  const courses: Array<{
    image: string;
    lessonNumber: number;
    lessonsRemaining: number;
    title: string;
    progress: number;
    lastWatched: string;
    accentColor: "purple" | "blue" | "red";
  }> = [
    {
      image: "/courses-placeholder.svg",
      lessonNumber: 6,
      lessonsRemaining: 56,
      title: "How to pusha cyber levels",
      progress: 30,
      lastWatched: "yesterday",
      accentColor: "purple",
    },
    {
      image: "/courses-placeholder.svg",
      lessonNumber: 5,
      lessonsRemaining: 56,
      title: "How to pusha cyber levels",
      progress: 30,
      lastWatched: "yesterday",
      accentColor: "blue",
    },
    {
      image: "/courses-placeholder.svg",
      lessonNumber: 5,
      lessonsRemaining: 56,
      title: "How to pusha cyber levels",
      progress: 30,
      lastWatched: "yesterday",
      accentColor: "red",
    },
  ];

  return (
    <div className="flex w-full gap-4">
      <div className="  h-full w-[80%]">
        <CodingCarousel />
        <CoursesGrid />

        <p className="text-black font-bold my-6">Continue where You stopped</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      <div className="bg-amber-300 w-[20%] h-full "></div>
    </div>
  );
}
