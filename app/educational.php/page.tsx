import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function EducationalIndustryPage() {
  return (
    <ServiceDetailsPage
      title="Ed-Tech Portals & College Admission Software"
      bannerTitle="OUR EXPERTISE IN THE EDUCATIONAL INDUSTRY"
      subtitle="Admissions automation portals, LMS platforms, student databases, and institute websites."
      description="Modern educational institutions require automated solutions to handle student admissions, fee tracking, online exams, virtual lectures, and parent communications. We build robust systems for colleges and schools that simplify administrative tasks and enhance learning environments."
      image="/assets/img/services-details-image/14.png"
      pointsTitle="Education Solutions"
      points={[
        "College Admission & Enrollment Portals",
        "Learning Management Systems (LMS)",
        "Student & Staff Database Profiles",
        "Online Quiz & Grading Systems",
        "Fee Payment Gateway Integration",
        "Parent-Teacher Communication Hubs",
      ]}
    />
  );
}
