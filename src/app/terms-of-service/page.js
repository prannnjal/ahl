import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const introDetails = {
  title: "Artivo Group - Terms & Conditions",
  subtitle: "Artivo Group (Irisone Group Pty Ltd — ABN 87 664 854 291)",
  description:
    "These Terms & Conditions (“Terms”) govern the use of services provided by Artivo Group, a business name under Irisone Group Pty Ltd (ABN 87 664 854 291) (“we”, “our”, “us”). By engaging our services, you (“Client”) agree to the following:",
};

const sections = [
  {
    heading: "1. Scope of Services",
    description: "Artivo Group provides a range of design and R&D solutions, including but not limited to:",
    bullets: [
      "Industrial Design",
      "Electronic Design",
      "Sustainable Design",
      "Prototyping",
      "Process Optimisation",
      "Manufacturing Setup",
      "R&D Consultation",
      "Product Development Support",
      "Engineering Documentation",
    ],
    footnote: "All services will be outlined in a formal proposal, quotation, or agreement.",
  },
  {
    heading: "2. Quotes & Proposals",
    bullets: [
      "All quotes are valid for 14 days unless stated otherwise.",
      "A project begins only after written approval and initial deposit (if applicable).",
      "Any additional work outside the agreed scope will incur additional fees.",
    ],
  },
  {
    heading: "3. Payments",
    bullets: [
      "Payments must be made according to the milestones defined in the proposal.",
      "A deposit (typically 30–50%) may be required before work commences.",
      "Late payments may incur a 5% monthly surcharge.",
      "Work may be paused until overdue payments are resolved.",
    ],
  },
  {
    heading: "4. Intellectual Property (IP)",
    bullets: [
      "All IP created before full payment remains the property of Artivo Group.",
      "Upon receiving full payment, final deliverables and associated IP become the Client’s property unless otherwise stated.",
      "Artivo retains the right to reuse non-confidential methodologies, tools, processes, or frameworks.",
    ],
  },
  {
    heading: "5. Confidentiality",
    bullets: [
      "All project files, CAD models, R&D data, documents, drawings, and discussions are treated as confidential (covered further in the NDA section).",
    ],
  },
  {
    heading: "6. Project Timelines",
    bullets: [
      "Timelines are estimated based on available information.",
      "Delays caused by the Client (late approvals, missing files, unclear communication) may extend delivery dates.",
    ],
  },
  {
    heading: "7. Client Responsibilities",
    description: "The Client agrees to:",
    bullets: [
      "Provide accurate and complete project information",
      "Supply required files and documents in the correct format",
      "Give timely feedback and approvals",
      "Ensure all submitted materials do not violate third-party rights",
    ],
  },
  {
    heading: "8. Limitation of Liability",
    description: "Artivo Group is not liable for:",
    bullets: [
      "Manufacturing defects from third-party vendors",
      "Component or material delays",
      "Misuse of designs beyond intended application",
      "Improper assembly, installation, or modification after delivery",
      "Regulatory failures unless compliance services were explicitly included",
    ],
    footnote:
      "Total liability shall not exceed the total fees paid by the Client.",
  },
  {
    heading: "9. Termination",
    description: "Either party may terminate work if:",
    bullets: [
      "The other party breaches the Terms",
      "Payments remain overdue",
      "External conditions prevent continued work",
    ],
    footnote:
      "Upon termination, the Client must pay for completed work to date.",
  },
  {
    heading: "10. Governing Law",
    bullets: ["This Agreement is governed by the laws of Australia and New Zealand."],
  },
  {
    heading: "11. Acceptance",
    bullets: [
      "By engaging our services, the Client agrees to these Terms & Conditions.",
    ],
  },
  {
    heading: "12. Contact Us",
    description: "If you have questions about our Terms & Conditions, you may contact us:",
    bullets: [
      "Email: info@ahlelevators.com",
      "Website: www.ahlelevators.com",
    ],
  },
];

const lastUpdated = "12 November 2025";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-24 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">{introDetails.title}</h1>
          <p className="text-gray-700 font-medium">{introDetails.subtitle}</p>
          <p className="text-gray-600 leading-relaxed">{introDetails.description}</p>
        </header>

        <section className="space-y-10">
          {sections.map((section, index) => (
            <article key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">{section.heading}</h2>
              {section.description && (
                <p className="text-gray-600 leading-relaxed">{section.description}</p>
              )}
              {section.bullets && (
                <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                  {section.bullets.map((item, bulletIndex) => (
                    <li key={`${section.heading}-bullet-${bulletIndex}`}>{item}</li>
                  ))}
                </ul>
              )}
              {section.footnote && (
                <p className="text-gray-600 leading-relaxed">{section.footnote}</p>
              )}
            </article>
          ))}
        </section>

        <footer className="space-y-4 text-gray-600 leading-relaxed">
          <p>Last Updated: {lastUpdated}</p>
        </footer>
      </main>
      <Footer />
    </div>
  );
}
