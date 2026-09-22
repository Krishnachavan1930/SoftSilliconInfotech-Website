
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// ============================================================
// CONTACT FORM VALIDATION
// ============================================================

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(3),
  message: z.string().min(10),
});

// ============================================================
// INTERNSHIP FORM VALIDATION
// ============================================================

const internshipSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  collegeName: z.string().min(3),
  university: z.string().min(3),
  course: z.string().min(2),
  year: z.string().min(1),
  domain: z.string().min(2),

  // Resume link is now OPTIONAL.
  // User can either provide a link OR upload a file.
  resumeLink: z
    .string()
    .optional()
    .or(z.literal("")),

  message: z.string().optional(),
});

// ============================================================
// APPLY / SPARK FORM VALIDATION
// ============================================================

const applySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits"),
  program: z.string().min(2, "Please select a program"),
  location: z.string().min(2, "Please select a location"),
  duration: z.string().min(2, "Please select a duration"),
  areaOfInterest: z.string().optional(),
});

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function getString(
  formData: FormData,
  key: string
): string {
  const value = formData.get(key);

  return typeof value === "string"
    ? value.trim()
    : "";
}

function getTransporter() {
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_APP_PASSWORD;

  if (!user || !password) {
    throw new Error(
      "SMTP_USER and SMTP_APP_PASSWORD are not configured"
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

function userAddress() {
  const user = process.env.SMTP_USER;

  if (!user) {
    throw new Error(
      "SMTP_USER is not configured"
    );
  }

  return user;
}

// ============================================================
// FILE VALIDATION
// ============================================================

function validateResumeFile(
  file: File
): string | null {

  const allowedMimeTypes = [
    "application/pdf",

    "application/msword",

    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const allowedExtensions = [
    ".pdf",
    ".doc",
    ".docx",
  ];

  const fileName =
    file.name.toLowerCase();

  const hasValidExtension =
    allowedExtensions.some((extension) =>
      fileName.endsWith(extension)
    );

  const hasValidMimeType =
    allowedMimeTypes.includes(file.type);

  if (
    !hasValidExtension ||
    !hasValidMimeType
  ) {
    return "Only PDF, DOC, and DOCX resume files are allowed.";
  }

  // Maximum 5 MB
  const maxFileSize =
    5 * 1024 * 1024;

  if (file.size > maxFileSize) {
    return "Resume file must be smaller than 5 MB.";
  }

  if (file.size === 0) {
    return "The uploaded resume file is empty.";
  }

  return null;
}

// ============================================================
// POST API
// ============================================================

export async function POST(
  request: Request
) {
  try {

    // ========================================================
    // READ FORM DATA
    // ========================================================

    const formData =
      await request.formData();

    // ========================================================
    // DETERMINE FORM TYPE
    // ========================================================

    const form =
      getString(formData, "form");

    if (
      form !== "contact" &&
      form !== "internship" &&
      form !== "apply"
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid form type.",
        },
        {
          status: 400,
        }
      );
    }

    // ========================================================
    // RECIPIENT
    // ========================================================

    const recipient =
      process.env.FORM_RECIPIENT_EMAIL ||
      process.env.SMTP_USER;

    if (!recipient) {
      throw new Error(
        "FORM_RECIPIENT_EMAIL or SMTP_USER is not configured"
      );
    }

    // ========================================================
    // TRANSPORTER
    // ========================================================

    const transporter =
      getTransporter();

    let subject = "";
    let text = "";
    let replyToEmail = "";

    // ========================================================
    // CONTACT FORM
    // ========================================================

    if (form === "contact") {

      const data = {
        name: getString(
          formData,
          "name"
        ),

        email: getString(
          formData,
          "email"
        ),

        phone: getString(
          formData,
          "phone"
        ),

        subject: getString(
          formData,
          "subject"
        ),

        message: getString(
          formData,
          "message"
        ),
      };

      // Validate
      contactSchema.parse(data);

      subject =
        `Website contact: ${data.subject}`;

      replyToEmail =
        data.email;

      text = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Subject: ${data.subject}`,
        "",
        data.message,
      ].join("\n");
    }

    // ========================================================
    // INTERNSHIP FORM
    // ========================================================

    else if (
      form === "internship"
    ) {

      // ------------------------------------------------------
      // GET TEXT DATA
      // ------------------------------------------------------

      const data = {
        fullName: getString(
          formData,
          "fullName"
        ),

        email: getString(
          formData,
          "email"
        ),

        phone: getString(
          formData,
          "phone"
        ),

        collegeName: getString(
          formData,
          "collegeName"
        ),

        university: getString(
          formData,
          "university"
        ),

        course: getString(
          formData,
          "course"
        ),

        year: getString(
          formData,
          "year"
        ),

        domain: getString(
          formData,
          "domain"
        ),

        resumeLink: getString(
          formData,
          "resumeLink"
        ),

        message: getString(
          formData,
          "message"
        ),
      };

      // ------------------------------------------------------
      // VALIDATE TEXT DATA
      // ------------------------------------------------------

      internshipSchema.parse(data);

      // ------------------------------------------------------
      // GET UPLOADED RESUME
      // ------------------------------------------------------

      const resumeValue =
        formData.get("resume");

      let resumeFile:
        | File
        | null = null;

      if (
        resumeValue instanceof File &&
        resumeValue.size > 0
      ) {
        resumeFile =
          resumeValue;
      }

      // ------------------------------------------------------
      // REQUIRE LINK OR FILE
      // ------------------------------------------------------

      if (
        !data.resumeLink &&
        !resumeFile
      ) {
        return NextResponse.json(
          {
            error:
              "Please provide a resume link or upload your resume.",
          },
          {
            status: 400,
          }
        );
      }

      // ------------------------------------------------------
      // VALIDATE RESUME FILE
      // ------------------------------------------------------

      if (resumeFile) {

        const fileError =
          validateResumeFile(
            resumeFile
          );

        if (fileError) {
          return NextResponse.json(
            {
              error: fileError,
            },
            {
              status: 400,
            }
          );
        }
      }

      // ------------------------------------------------------
      // EMAIL SUBJECT
      // ------------------------------------------------------

      subject =
        `Internship application: ${data.fullName}`;

      replyToEmail =
        data.email;

      // ------------------------------------------------------
      // RESUME INFORMATION
      // ------------------------------------------------------

      let resumeInformation =
        "Resume: Not provided";

      if (data.resumeLink) {
        resumeInformation =
          `Resume Link: ${data.resumeLink}`;
      }

      if (resumeFile) {

        const fileSizeMB =
          (
            resumeFile.size /
            1024 /
            1024
          ).toFixed(2);

        resumeInformation +=
          `\nUploaded Resume: ${resumeFile.name} (${fileSizeMB} MB)`;
      }

      // ------------------------------------------------------
      // EMAIL BODY
      // ------------------------------------------------------

      text = [
        "NEW INTERNSHIP APPLICATION",
        "",
        `Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `College: ${data.collegeName}`,
        `University: ${data.university}`,
        `Course: ${data.course}`,
        `Current year: ${data.year}`,
        `Domain: ${data.domain}`,
        resumeInformation,
        "",
        `Cover note: ${data.message || "-"}`,
      ].join("\n");
    }

    // ========================================================
    // APPLY / SPARK FORM
    // ========================================================

    else if (
      form === "apply"
    ) {

      const data = {
        name: getString(
          formData,
          "name"
        ),

        email: getString(
          formData,
          "email"
        ),

        phone: getString(
          formData,
          "phone"
        ),

        program: getString(
          formData,
          "program"
        ),

        location: getString(
          formData,
          "location"
        ),

        duration: getString(
          formData,
          "duration"
        ),

        areaOfInterest:
          getString(
            formData,
            "areaOfInterest"
          ),
      };

      // Validate
      applySchema.parse(data);

      subject =
        `New Course / SPARK Query: ${data.name} - ${data.program}`;

      replyToEmail =
        data.email;

      text = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Selected Program: ${data.program}`,
        `Preferred Location: ${data.location}`,
        `Duration: ${data.duration}`,
        `Area of Interest: ${
          data.areaOfInterest || "N/A"
        }`,
      ].join("\n");
    }

    // ========================================================
    // PREPARE EMAIL
    // ========================================================

    const mailOptions: nodemailer.SendMailOptions = {
      from: userAddress(),
      to: recipient,
      replyTo: replyToEmail,
      subject,
      text,
    };

    // ========================================================
    // ATTACH RESUME
    // ========================================================

    if (
      form === "internship"
    ) {

      const resumeValue =
        formData.get("resume");

      if (
        resumeValue instanceof File &&
        resumeValue.size > 0
      ) {

        const buffer =
          Buffer.from(
            await resumeValue.arrayBuffer()
          );

        mailOptions.attachments = [
          {
            filename:
              resumeValue.name,

            content:
              buffer,

            contentType:
              resumeValue.type ||
              undefined,
          },
        ];
      }
    }

    // ========================================================
    // SEND EMAIL
    // ========================================================

    await transporter.sendMail(
      mailOptions
    );

    // ========================================================
    // SUCCESS RESPONSE
    // ========================================================

    return NextResponse.json(
      {
        success: true,
        message:
          "Your request has been submitted successfully.",
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    // ========================================================
    // ZOD VALIDATION ERROR
    // ========================================================

    if (
      error instanceof z.ZodError
    ) {

      console.error(
        "Form validation failed:",
        error.issues
      );

      return NextResponse.json(
        {
          error:
            "Please check the form details and try again.",
          details:
            error.issues,
        },
        {
          status: 400,
        }
      );
    }

    // ========================================================
    // GENERAL ERROR
    // ========================================================

    console.error(
      "Form email failed:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to send your request right now. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}
