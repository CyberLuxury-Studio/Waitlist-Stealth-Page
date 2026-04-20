import { SecurityVerificationSection } from '@/components/sections/SecurityVerificationSection';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { DemoSandbox } from '@/components/sections/DemoSandbox';
import { LiveActivity } from '@/components/sections/LiveActivity';
import { PricingSection } from '@/components/sections/PricingSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/sections/Footer';
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";



export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SecurityVerificationSection />
      <FeaturesSection />
      <DemoSandbox />
      <PricingSection />
      <CtaSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <LiveActivity />
    </>
  );
}
