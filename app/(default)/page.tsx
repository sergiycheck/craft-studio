export const metadata = {
  title: "Craft studio",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import TeamMembers from "@/components/team-members";
import { ClientReviews } from "@/components/client-reviews";
import { SubmitProposal } from "@/components/submit-proposal";
import { MarqueePromotion } from "@/components/marquee-promotion";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientReviews />
      <Features />
      <TeamMembers />
      <SubmitProposal />
      <MarqueePromotion />
      <Newsletter />
    </>
  );
}
