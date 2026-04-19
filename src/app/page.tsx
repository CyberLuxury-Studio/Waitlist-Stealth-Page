import { SecurityVerificationSection } from '@/components/sections/SecurityVerificationSection';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SecurityVerificationSection />
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </>
  );
}
