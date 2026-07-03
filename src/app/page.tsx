import { FeatureBento } from "@/components/landing/FeatureBento";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { NewsletterSection } from "@/components/landing/NewsletterSection";
import { SpecsSection } from "@/components/landing/SpecsSection";
import { TechnologyStory } from "@/components/landing/TechnologyStory";
import { siteConfig } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "vi-VN",
    },
    {
      "@type": "Product",
      name: siteConfig.name,
      description: siteConfig.description,
      brand: { "@type": "Brand", name: siteConfig.name },
      category: "Air Purifier",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        priceCurrency: "VND",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main
        data-scroll-container
        className="relative w-full overflow-x-hidden"
      >
        <Hero />
        <FeatureBento />
        <TechnologyStory />
        <SpecsSection />
        <NewsletterSection />
        <Footer />
      </main>
    </>
  );
}
