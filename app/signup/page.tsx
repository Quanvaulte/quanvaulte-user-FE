import Carousel from "@/components/Carousel";
import SignUpForm from "@/components/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full flex bg-gray-50">
      <Carousel/>
      <SignUpForm/>
    </div>
  );
}
