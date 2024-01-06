import { SubmitProposalSchema } from "@/components/home/submit-proposal/schema";
import * as React from "react";
import { Tailwind, Button } from "@react-email/components";

import { Body, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from "@react-email/components";

export const EmailTemplate: React.FC<Readonly<SubmitProposalSchema>> = (props) => {
  return (
    <Html>
      <Head />
      <Preview>Request form from ${props.email}</Preview>

      <Tailwind
        config={{
          theme: {
            extend: {},
          },
        }}
      >
        <Body>
          <Section>
            <Container>
              <Heading>Request form from ${props.email}</Heading>
              <Text className="text-left">
                <p className="text-md">Email: {props.email}</p>
                <p className="text-md">Company: {props.company}</p>
                <p className="text-md">Project type: {props.projectType}</p>
                <p className="text-md">Budget: {props.budget}</p>
              </Text>
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
