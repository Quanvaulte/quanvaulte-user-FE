import Carousel from "@/components/Carousel";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex bg-gray-50">
      <Carousel />
      <LoginForm/>
    </div>
  );
}
