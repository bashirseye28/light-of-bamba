import Hero from '@/components/Home/Hero';
import FeatureGrid from '@/components/Home/FeatureGrid';
import QuoteBanner from '@/components/Home/QuoteBanner';
import AboutSection from '@/components/Home/AboutSection';
import NewsletterSection from '@/components/Home/NewsletterSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <QuoteBanner />
      <AboutSection />
      <NewsletterSection />
    </main>
  );
}