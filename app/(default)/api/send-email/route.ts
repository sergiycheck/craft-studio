import { EmailTemplate } from "../../../../components/common/email-templates/email-template";
import { Resend } from "resend";
import * as React from "react";
import { SubmitProposalSchema } from "@/components/home/submit-proposal/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();
  const body = Object.fromEntries(formData) as SubmitProposalSchema;

  //check if file is not too big

  if (body.file.size > 5 * 1024 * 1024) {
    return Response.json({ error: "File is too big" }, { status: 400 });
  }

  const attachmentContent = await body.file.arrayBuffer();

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["sergiycheck@gmail.com"],
      subject: "New proposal",
      react: EmailTemplate(body) as React.ReactElement,
      attachments: [
        {
          filename: body.file.name,
          content: Buffer.from(attachmentContent),
        },
      ],
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
