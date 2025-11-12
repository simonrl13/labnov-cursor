import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { ResearchAreas } from "@/components/research-areas";
import { Statistics } from "@/components/statistics";
import { Awards } from "@/components/awards";
import { LatestPublication } from "@/components/latest-publication";
import { NewsUpdates } from "@/components/news-updates";
import { Partners } from "@/components/partners";
import { VisitasFeed } from "@/components/visitas-feed";
import { InstagramFeed } from "@/components/instagram-feed";
import { CTASection } from "@/components/cta-section";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <ResearchAreas />
      <Statistics />
      <Awards />
      <LatestPublication />
      <NewsUpdates />
      <Partners />
      <VisitasFeed />
      <InstagramFeed />
      <CTASection />
    </>
  );
}

