import { PricingCard } from "./PricingCard";

export function PricingSection() {
  const plans = [
    {
      title: "Essential",
      subtitle: "For small clinics and pharmacies",
      price: "Free",
      colorScheme: "purple" as const,
      features: [
        { text: "Full EMR Access", included: true },
        { text: "Unlimited Patient Records", included: true },
        { text: "Role-Based Access", included: true },
        { text: "Appointment & Visit Management", included: true },
        { text: "Inpatient & Ward Management", included: true },
        { text: "e-Prescriptions & Pharmacy", included: true },
        { text: "Laboratory Module", included: true },
      ],
    },
    {
      title: "Gold",
      subtitle: "For small clinics and pharmacies",
      price: "$99",
      badge: "Most popular",
      colorScheme: "magenta" as const,
      features: [
        { text: "Full EMR Access", included: true },
        { text: "Unlimited Patient Records", included: true },
        { text: "Role-Based Access", included: true },
        { text: "Appointment & Visit Management", included: true },
        { text: "Inpatient & Ward Management", included: true },
        { text: "e-Prescriptions & Pharmacy", included: true },
        { text: "Laboratory Module", included: true },
      ],
    },
    {
      title: "Premium",
      subtitle: "For small clinics and pharmacies",
      price: "$129",
      colorScheme: "purple" as const,
      features: [
        { text: "Full EMR Access", included: true },
        { text: "Unlimited Patient Records", included: true },
        { text: "Role-Based Access", included: true },
        { text: "Appointment & Visit Management", included: true },
        { text: "Inpatient & Ward Management", included: true },
        { text: "e-Prescriptions & Pharmacy", included: true },
        { text: "Laboratory Module", included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 md:py-20 px-4 font-baloo md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-7xl font-normal text-gray-900 mb-3 md:mb-4">
            Affordable learning for{" "}
            <span className="text-[#9D8528] md:block ">everyone</span>
          </h1>
          <p className="text-[#606060] text-base md:text-lg">
            Learn more, spend less — flexible plans for every learner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
