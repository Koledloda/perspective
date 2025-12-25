import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AdvantagesSection } from '@/components/sections/AdvantagesSection';
import { CasesSection } from '@/components/sections/CasesSection';
import { WorkflowSection } from '@/components/sections/WorkflowSection';
import { CTASection } from '@/components/sections/CTASection';
import { GeographySection } from '@/components/sections/GeographySection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ProblemsSection } from '@/components/sections/ProblemsSection';
import { ContactsSection } from '@/components/sections/ContactsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AdvantagesSection />
        <ProblemsSection />
        <CasesSection />
        <WorkflowSection />
        <CTASection />
        <GeographySection />
        <TrustSection />
        <ReviewsSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
