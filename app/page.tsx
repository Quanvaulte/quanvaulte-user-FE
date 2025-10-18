import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import { PricingSection } from "@/components/Pricing";

export default function Home() {
  return (
    <div>
      <PricingSection />
      <FAQ />
      <Footer />
    </div>
  );
}
