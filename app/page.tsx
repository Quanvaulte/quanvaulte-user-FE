import { CommunitySection } from "@/components/CommunitySection";
import { CtaCard } from "@/components/CtaCard";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { PopularCourses } from "@/components/PopularCourses";
import { PricingSection } from "@/components/Pricing";
import { TestimonialCard } from "@/components/TestimonialCard";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <PopularCourses/>
      <CommunitySection />
      <CtaCard />
      <TestimonialCard />
      <PricingSection />
      <FAQ />
      <Footer />
    </div>
  );
}
