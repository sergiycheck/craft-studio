export const metadata = {
  title: "Craft studio",
  description: "Page description",
};

import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Newsletter from "@/components/home/newsletter";
import TeamMembers from "@/components/home/team-members";
import { ClientReviews } from "@/components/home/client-reviews";
import { SubmitProposal } from "@/components/home/submit-proposal";
import { MarqueePromotion } from "@/components/home/marquee-promotion";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientReviews />
      <Features />
      <TeamMembers />
      <SubmitProposal />
      <MarqueePromotion />
      {/* <Newsletter /> */}
    </>
  );
}
