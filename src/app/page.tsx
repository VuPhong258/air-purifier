import { FeatureBento } from "@/components/landing/FeatureBento";
import { ChatWidget } from "@/components/landing/ChatWidget";
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
      <main
        data-scroll-container
        className="relative h-dvh w-full snap-y snap-proximity overflow-y-auto overflow-x-hidden scroll-smooth"
      >
        <Hero />
        <FeatureBento />
        <TechnologyStory />
        <SpecsSection />
        <NewsletterSection />
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}
