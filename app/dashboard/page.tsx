import UnlockBadges from "@/components/ui/BadgesUnlock";
import CodingCarousel from "@/components/ui/CodingCarousel";
import CommunityList from "@/components/ui/CommunityList";
import { CourseCard } from "@/components/ui/CourseCard";
import CoursesGrid from "@/components/ui/CoursesGrid";
import { courses } from "@/data";
import { communities } from "@/data";
import { badges } from "@/data";
export default function DashboardPage() {
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

        <CommunityList communities={communities} />
      </div>

      <div className=" w-[20%] h-full ">
        <UnlockBadges badges={badges} />
      </div>
    </div>
  );
}
