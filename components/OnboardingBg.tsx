import Image from "next/image";

export default function OnboardingBg() {
  return (
    <div className="h-full w-full">
      <Image src="/onboardingBg.png" alt="" fill />
    </div>
  );
}
