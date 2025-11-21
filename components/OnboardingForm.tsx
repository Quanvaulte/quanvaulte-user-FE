"use client";
import { useState } from "react";
import { useOnboarding } from "@/hooks/useOnboarding";
import Image from "next/image";
import { OnboardingData } from "@/hooks/useOnboarding";
import { useRouter } from "next/navigation";
export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    joiningReason: "",
    numberOfKids: "",
    progressUpdates: "",
    setGoals: "",
    externalCommunity: "",
  });
  const [finalData, setFinalData] = useState(null);

  const { onboardUser, loading, error, success } = useOnboarding();
  const router = useRouter();
  const totalSteps = 5;

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    const payload: OnboardingData = {
      name:
        formData.joiningReason === "student"
          ? "Student User"
          : formData.joiningReason === "teacher"
          ? "School User"
          : "Parent User",

      user_type: (formData.joiningReason === "teacher"
        ? "school"
        : formData.joiningReason) as "student" | "school" | "parent",

      number_of_initial_students_enroll: parseInt(formData.numberOfKids) || 1,

      progress_tracker: formData.progressUpdates.includes("Weekly")
        ? "weekly"
        : formData.progressUpdates.includes("Monthly")
        ? "monthly"
        : "daily",

      is_learning_goal: formData.setGoals === "Yes",
      is_external_community: formData.externalCommunity === "Yes",
    };

    try {
      const res = await onboardUser(payload);
      // setFinalData(res);
      // setCurrentStep(6);
      console.log("✅ Onboarding success:", res);
      alert("Onboarding Success");
      router.push("/dashboard");
    } catch (err) {
      console.error("❌ Onboarding failed:", err);
      router.push("/dashboard");
    }
  };

  const canContinue = () => {
    switch (currentStep) {
      case 1:
        return formData.joiningReason !== "";
      case 2:
        return formData.numberOfKids !== "";
      case 3:
        return formData.progressUpdates !== "";
      case 4:
        return formData.setGoals !== "";
      case 5:
        return formData.externalCommunity !== "";
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-between bg-white font-baloo ">
      <div className="relative hidden md:block h-screen w-1/2">
        <Image
          src="/onboardBg.svg"
          alt="Onboarding Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-1/2  text-black bg-white rounded-2xl px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex-1 h-2 bg-[#EAECFD] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#2C43EB] transition-all duration-300 rounded-full"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
            <span className="ml-4 text-sm font-medium text-[#2C43EB] bg-[#2C43EB33]/30 rounded-full w-10 h-10 flex items-center justify-center">
              {currentStep}/{totalSteps}
            </span>
          </div>
        </div>

        {/* Step 1: Why are you joining */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-4xl  font-baloo  font-bold mb-6">
              Why are you joining QuanVault?
            </h2>
            <div className="space-y-3">
              {[
                {
                  value: "student",
                  label: "I'm a Student",
                  desc: "Learn tech skills, earn badges, and get certified.",
                },
                {
                  value: "teacher",
                  label: "I'm a School or Teacher",
                  desc: "Enroll students, assign courses, and track progress.",
                },
                {
                  value: "parent",
                  label: "I'm a Parent",
                  desc: "Track your child's learning progress and achievements.",
                },
              ].map((option, idx) => (
                <button
                  key={option.value}
                  onClick={() => updateFormData("joiningReason", option.value)}
                  className={`w-full text-left p-4 cursor-pointer rounded-lg transition-all ${
                    formData.joiningReason === option.value
                      ? " bg-[#EAECFDA1]"
                      : "border-gray-200"
                  }`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold">
                        {idx + 1}. {option.label}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {option.desc}
                      </div>
                    </div>
                    {formData.joiningReason === option.value && (
                      <svg
                        className="w-6 h-6 text-[#2C43EB] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Number of kids */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">
              How many kids will be using quanvault
            </h2>
            <div className="space-y-3">
              {[
                "A child",
                "2 kids",
                "3 kids",
                "4 kids",
                "5 kids",
                "6 kids",
                "Others",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => updateFormData("numberOfKids", option)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    formData.numberOfKids === option ? " bg-[#EAECFDA1]" : ""
                  }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {formData.numberOfKids === option && (
                      <svg
                        className="w-6 h-6 text-[#2C43EB] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Progress updates */}
        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">
              How often do you want progress updates?
            </h2>
            <div className="space-y-3">
              {[
                "Weekly summary",
                "Monthly overview",
                "Only major milestones",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => updateFormData("progressUpdates", option)}
                  className={`w-full text-left p-4 rounded-lg  transition-all ${
                    formData.progressUpdates === option ? " bg-[#EAECFDA1]" : ""
                  }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {formData.progressUpdates === option && (
                      <svg
                        className="w-6 h-6 text-[#2C43EB] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Learning goals */}
        {currentStep === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Would you like to set learning goals or rewards for your child?
            </h2>
            <div className="space-y-3">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  onClick={() => updateFormData("setGoals", option)}
                  className={`w-full text-left p-4 rounded-lg  transition-all ${
                    formData.setGoals === option ? " bg-[#EAECFDA1]" : ""
                  }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {formData.setGoals === option && (
                      <svg
                        className="w-6 h-6 text-[#2C43EB] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: External community */}
        {currentStep === 5 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Would you like student to see external community?
            </h2>
            <div className="space-y-3">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  onClick={() => updateFormData("externalCommunity", option)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    formData.externalCommunity === option
                      ? " bg-[#EAECFDA1]"
                      : ""
                  }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {formData.externalCommunity === option && (
                      <svg
                        className="w-6 h-6 text-[#2C43EB] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {currentStep < 6 && (
          <div className="mt-8 flex gap-4">
            <button
              onClick={
                currentStep === 5
                  ? handleSubmit // ✅ submit form on final step
                  : nextStep // go to next step otherwise
              }
              disabled={!canContinue() || loading}
              className={`flex-1 py-4 rounded-full cursor-pointer font-semibold transition-colors ${
                canContinue()
                  ? "bg-[#2C43EB] text-white hover:bg-[#2C43EB]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}>
              {loading
                ? "Submitting..."
                : currentStep === 5
                ? "Finish"
                : "Continue"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
