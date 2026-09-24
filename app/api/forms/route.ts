import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

/* ============================================================
   CONTACT FORM VALIDATION
============================================================ */

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message is required"),
});

/* ============================================================
   INTERNSHIP FORM VALIDATION
============================================================ */

const internshipSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  collegeName: z.string().min(3, "College name is required"),
  university: z.string().min(3, "University is required"),
  course: z.string().min(2, "Course is required"),
  year: z.string().min(1, "Year is required"),
  domain: z.string().min(2, "Domain is required"),
  resumeLink: z.string().optional().or(z.literal("")),
  message: z.string().optional(),
});

/* ============================================================
   APPLY FORM VALIDATION
============================================================ */

const applySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  program: z.string().min(2, "Program is required"),
  location: z.string().min(2, "Location is required"),
  duration: z.string().min(2, "Duration is required"),
  areaOfInterest: z.string().optional(),
});

/* ============================================================
   HELPER FUNCTION
============================================================ */

function getString(formData: FormData, key: string): string {
  const value = formData.get(key);

  if (typeof value === "string") {
    return value.trim();
  }

  return "";
}

/* ============================================================
   SMTP TRANSPORTER
============================================================ */

function getTransporter() {
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_APP_PASSWORD;

  if (!user || !password) {
    throw new Error(
      "SMTP_USER and SMTP_APP_PASSWORD are not configured in .env.local"
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass: password,
    },
  });
}

/* ============================================================
   POST API
============================================================ */

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let formData: FormData;

    /*
     * CONTACT FORM CAN SEND JSON
     */

    if (contentType.includes("application/json")) {
      const body = await request.json();

      formData = new FormData();

      formData.append("form", body.form || "");

      if (body.data) {
        Object.entries(body.data).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            formData.append(key, String(value));
          }
        });
      }
    } else {
      /*
       * INTERNSHIP / APPLY FORM CAN SEND FORMDATA
       */

      formData = await request.formData();
    }

    const form = getString(formData, "form");

    if (
      form !== "contact" &&
      form !== "internship" &&
      form !== "apply"
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form type",
        },
        { status: 400 }
      );
    }

    const recipient =
      process.env.FORM_RECIPIENT_EMAIL ||
      process.env.SMTP_USER;

    if (!recipient) {
      throw new Error(
        "FORM_RECIPIENT_EMAIL or SMTP_USER is not configured"
      );
    }

    const transporter = getTransporter();

    let subject = "";
    let text = "";
    let replyTo = "";

    /* ============================================================
       CONTACT FORM
    ============================================================ */

    if (form === "contact") {
      const data = {
        name: getString(formData, "name"),
        email: getString(formData, "email"),
        phone: getString(formData, "phone"),
        subject: getString(formData, "subject"),
        message: getString(formData, "message"),
      };

      const validation = contactSchema.safeParse(data);

      if (!validation.success) {
        return NextResponse.json(
          {
            success: false,
            error: "Please fill all fields correctly.",
            details: validation.error.issues,
          },
          { status: 400 }
        );
      }

      subject = `Website Contact: ${data.subject}`;
      replyTo = data.email;

      text = `
NEW CONTACT FORM SUBMISSION

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}

Message:
${data.message}
      `;
    }

    /* ============================================================
       INTERNSHIP FORM
    ============================================================ */

    else if (form === "internship") {
      const data = {
        fullName: getString(formData, "fullName"),
        email: getString(formData, "email"),
        phone: getString(formData, "phone"),
        collegeName: getString(formData, "collegeName"),
        university: getString(formData, "university"),
        course: getString(formData, "course"),
        year: getString(formData, "year"),
        domain: getString(formData, "domain"),
        resumeLink: getString(formData, "resumeLink"),
        message: getString(formData, "message"),
      };

      const validation = internshipSchema.safeParse(data);

      if (!validation.success) {
        return NextResponse.json(
          {
            success: false,
            error: "Please check your internship form.",
            details: validation.error.issues,
          },
          { status: 400 }
        );
      }

      const resume = formData.get("resume");

      if (!data.resumeLink && !(resume instanceof File)) {
        return NextResponse.json(
          {
            success: false,
            error: "Please provide a resume link or upload your resume.",
          },
          { status: 400 }
        );
      }

      subject = `Internship Application: ${data.fullName}`;
      replyTo = data.email;

      text = `
NEW INTERNSHIP APPLICATION

Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
College: ${data.collegeName}
University: ${data.university}
Course: ${data.course}
Year: ${data.year}
Domain: ${data.domain}
Resume Link: ${data.resumeLink || "Uploaded file"}

Message:
${data.message || "-"}
      `;
    }

    /* ============================================================
       APPLY / SPARK FORM
    ============================================================ */

    else if (form === "apply") {
      const data = {
        name: getString(formData, "name"),
        email: getString(formData, "email"),
        phone: getString(formData, "phone"),
        program: getString(formData, "program"),
        location: getString(formData, "location"),
        duration: getString(formData, "duration"),
        areaOfInterest: getString(
          formData,
          "areaOfInterest"
        ),
      };

      const validation = applySchema.safeParse(data);

      if (!validation.success) {
        return NextResponse.json(
          {
            success: false,
            error: "Please check your application form.",
            details: validation.error.issues,
          },
          { status: 400 }
        );
      }

      subject = `New Course Application: ${data.name}`;
      replyTo = data.email;

      text = `
NEW COURSE / SPARK APPLICATION

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Program: ${data.program}
Location: ${data.location}
Duration: ${data.duration}
Area of Interest: ${data.areaOfInterest || "N/A"}
      `;
    }

    /* ============================================================
       EMAIL
    ============================================================ */

    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.SMTP_USER,
      to: recipient,
      replyTo: replyTo || undefined,
      subject,
      text,
    };

    /*
     * Attach resume if uploaded
     */

    if (form === "internship") {
      const resume = formData.get("resume");

      if (resume instanceof File && resume.size > 0) {
        const buffer = Buffer.from(
          await resume.arrayBuffer()
        );

        mailOptions.attachments = [
          {
            filename: resume.name,
            content: buffer,
            contentType: resume.type,
          },
        ];
      }
    }

    /* ============================================================
       SEND EMAIL
    ============================================================ */

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");

    return NextResponse.json(
      {
        success: true,
        message: "Your request has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("FORM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to send your request.",
      },
      { status: 500 }
    );
  }
}