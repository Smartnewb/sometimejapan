import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { ScrollProgress } from '@/components/shared/scroll-progress';
import Hero from '@/components/sections/hero';
import ValueProposition from '@/components/sections/value-proposition';
import HowItWorks from '@/components/sections/how-it-works';
import Testimonials from '@/components/sections/testimonials';
import SocialProof from '@/components/sections/social-proof';
import FAQ from '@/components/sections/faq';
import FinalCTA from '@/components/sections/final-cta';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <Testimonials />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

