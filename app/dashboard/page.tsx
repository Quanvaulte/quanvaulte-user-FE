import CodingCarousel from "@/components/ui/CodingCarousel";
import CoursesGrid from "@/components/ui/CoursesGrid";

export default function DashboardPage() {
  return (
    <div className="flex w-full gap-4">
      <div className="  h-full w-[80%]">
        <CodingCarousel />
        <CoursesGrid />

        <p className="text-black font-bold my-6">Continue where You stopped</p>
      </div>

      <div className="bg-amber-300 w-[20%] h-full "></div>
    </div>
  );
}
