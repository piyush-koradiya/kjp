import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/kjp/Navbar";
import { Hero } from "@/components/kjp/Hero";
import { Vision } from "@/components/kjp/Vision";
import { Manifesto } from "@/components/kjp/Manifesto";
import { Membership } from "@/components/kjp/Membership";
import { Whitepapers } from "@/components/kjp/Whitepapers";
import { CTA } from "@/components/kjp/CTA";
import { Footer } from "@/components/kjp/Footer";
import heroImage from "@/assets/hero-parliament.jpg";

const TITLE = "Kartavya Janta Party (KJP) — Duty Over Rights";
const DESCRIPTION =
  "KJP is a knowledge-economy movement of builders and scholars drafting governance blueprints for a stronger India.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImage },
      { property: "og:image:alt", content: "Indian Parliament building at golden hour — symbol of the Kartavya Janta Party's commitment to governance." },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: heroImage },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PoliticalParty",
          name: "Kartavya Janta Party",
          alternateName: "KJP",
          slogan: "Duty Over Rights. Solutions Over Rants.",
          description: DESCRIPTION,
          areaServed: "IN",
          knowsAbout: [
            "Governance",
            "Policy Whitepapers",
            "National Resilience",
            "Knowledge Economy",
            "Duty-Bound Citizenship",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Kartavya Janta Party",
          inLanguage: "en-IN",
          potentialAction: {
            "@type": "ReadAction",
            target: "/#manifesto",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Vision />
      <Manifesto />
      <Membership />
      <Whitepapers />
      <CTA />
      <Footer />
    </main>
  );
}
