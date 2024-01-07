export const metadata = {
  title: "Craft studio",
  description: "Page description",
};

import Hero from "@/components/home/hero";
import CaseStudies from "@/components/home/case-studies";
import TeamMembers from "@/components/home/team-members";
import { ClientReviews } from "@/components/home/client-reviews";
import { SubmitProposal } from "@/components/home/submit-proposal/submit-proposal";
import { MarqueePromotion } from "@/components/home/marquee-promotion";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-10 mt-32">
      <Hero />
      <ClientReviews />
      <CaseStudies />
      <TeamMembers />
      <SubmitProposal />
      <MarqueePromotion />
      {/* <Newsletter /> */}
    </div>
  );
}
