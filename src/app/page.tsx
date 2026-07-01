import { FeatureBento } from "@/components/landing/FeatureBento";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { NewsletterSection } from "@/components/landing/NewsletterSection";
import { SpecsSection } from "@/components/landing/SpecsSection";
import { TechnologyStory } from "@/components/landing/TechnologyStory";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <FeatureBento />
        <TechnologyStory />
        <SpecsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
