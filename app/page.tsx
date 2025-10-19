import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import { PricingSection } from "@/components/Pricing";
import { TestimonialCard } from "@/components/TestimonialCard";

export default function Home() {
  return (
    <div>
      <TestimonialCard />
      <PricingSection />
      <FAQ />
      <Footer />
    </div>
  );
}
