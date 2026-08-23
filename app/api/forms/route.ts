import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(3),
  message: z.string().min(10),
});

const internshipSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  collegeName: z.string().min(3),
  university: z.string().min(3),
  course: z.string().min(2),
  year: z.string().min(1),
  domain: z.string().min(2),
  resumeLink: z.string().url(),
  message: z.string().optional(),
});

const requestSchema = z.discriminatedUnion("form", [
  z.object({ form: z.literal("contact"), data: contactSchema }),
  z.object({ form: z.literal("internship"), data: internshipSchema }),
]);

function getTransporter() {
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_APP_PASSWORD;

  if (!user || !password) {
    throw new Error("SMTP_USER and SMTP_APP_PASSWORD are not configured");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass: password },
  });
}

export async function POST(request: Request) {
  try {
    const body = requestSchema.parse(await request.json());
    const recipient = process.env.FORM_RECIPIENT_EMAIL || process.env.SMTP_USER;

    if (!recipient) {
      throw new Error("FORM_RECIPIENT_EMAIL or SMTP_USER is not configured");
    }

    const transporter = getTransporter();
    const subject = body.form === "contact"
      ? `Website contact: ${body.data.subject}`
      : `Internship application: ${body.data.fullName}`;
    const text = body.form === "contact"
      ? [
          `Name: ${body.data.name}`,
          `Email: ${body.data.email}`,
          `Phone: ${body.data.phone}`,
          `Subject: ${body.data.subject}`,
          "",
          body.data.message,
        ].join("\n")
      : [
          `Name: ${body.data.fullName}`,
          `Email: ${body.data.email}`,
          `Phone: ${body.data.phone}`,
          `College: ${body.data.collegeName}`,
          `University: ${body.data.university}`,
          `Course: ${body.data.course}`,
          `Current year: ${body.data.year}`,
          `Domain: ${body.data.domain}`,
          `Resume: ${body.data.resumeLink}`,
          "",
          `Cover note: ${body.data.message || "-"}`,
        ].join("\n");

    await transporter.sendMail({
      from: userAddress(),
      to: recipient,
      replyTo: body.data.email,
      subject,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Please check the form details and try again." }, { status: 400 });
    }

    console.error("Form email failed", error);
    return NextResponse.json({ error: "Unable to send your request right now. Please try again later." }, { status: 500 });
  }
}

function userAddress() {
  const user = process.env.SMTP_USER;
  if (!user) {
    throw new Error("SMTP_USER is not configured");
  }
  return user;
}
