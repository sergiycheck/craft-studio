export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import TeamMembers from "@/components/team-members";
import { ClientReviews } from "@/components/client-reviews";
import { SubmitProposal } from "@/components/submit-proposal";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientReviews />
      <Features />
      {/* <Zigzag /> */}
      <TeamMembers />
      <SubmitProposal />
      <Newsletter />
    </>
  );
}
