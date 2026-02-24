import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const introParagraphs = [
  "Artivo Group (“we”, “our”, “us”) is a business name registered under Irisone Group Pty Ltd (ABN 87 664 854 291). We are committed to protecting your privacy and ensuring the security of your personal and project-related information.",
  "This Privacy Policy outlines how we collect, use, store, and safeguard information when you interact with us through our website, email, online forms, or during service engagement. By using our website or services, you consent to the practices described in this Privacy Policy.",
];

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "We collect information necessary to communicate with clients, assess project requirements, and deliver design and R&D services.",
    ],
    subSections: [
      {
        heading: "1.1 Personal Information",
        paragraphs: ["We may collect:"],
        bullets: [
          "Name",
          "Email address",
          "Phone number",
          "Company name",
          "Job title",
          "Country/Region",
          "Business contact details",
        ],
        footnote: "Personal information is collected when you:",
        secondaryBullets: [
          "Submit an enquiry",
          "Fill out a contact form",
          "Request a proposal",
          "Engage our services",
          "Book a meeting",
          "Communicate with us via email, WhatsApp, social media, or online platforms",
        ],
      },
      {
        heading: "1.2 Project & Technical Information",
        paragraphs: ["Depending on the project, we may collect:"],
        bullets: [
          "CAD files (STEP, STL, DWG, SolidWorks, etc.)",
          "Product specifications",
          "Technical drawings",
          "R&D notes",
          "Electronic schematics",
          "Prototype details",
          "Engineering data",
          "Manufacturing information",
          "Documentation, images, or videos relevant to your concept",
        ],
        postNote: "This information is used strictly for the purpose of delivering our services.",
      },
      {
        heading: "1.3 Website Usage Data",
        paragraphs: ["We may automatically collect:"],
        bullets: [
          "IP address",
          "Browser type and version",
          "Device information",
          "Pages visited",
          "Time spent on the website",
          "Traffic and interaction data",
          "Cookies and tracking data (see our Cookies Policy)",
        ],
      },
      {
        heading: "1.4 Communication Records",
        paragraphs: ["We may store:"],
        bullets: [
          "Emails",
          "Meeting summaries",
          "WhatsApp/Teams/Instagram messages (only if voluntarily shared)",
          "Project discussions and history",
          "Call notes",
        ],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    paragraphs: ["We use your information to:"],
    bullets: [
      "Respond to enquiries",
      "Provide quotations and proposals",
      "Understand project needs",
      "Deliver design, engineering, and R&D services",
      "Develop concepts, models, prototypes, and technical documentation",
      "Coordinate with suppliers and manufacturers (if required)",
      "Improve our website and service quality",
      "Send updates or notices related to your project",
    ],
    postNote:
      "We do not use your project information for marketing or public portfolios without your explicit written consent.",
  },
  {
    title: "3. How We Protect Your Information",
    paragraphs: [
      "We take confidentiality and security seriously, especially for R&D material. Measures include:",
    ],
    bullets: [
      "Encrypted cloud storage",
      "Secure file transfer protocols",
      "Access restrictions for team members",
      "Confidentiality agreements internally",
      "Mandatory NDA conditions for sensitive projects",
      "Controlled third-party access (only when required)",
      "Strict internal data-handling procedures",
    ],
    postNote: "Your files, ideas, and documents remain confidential and protected.",
  },
  {
    title: "4. Sharing Your Information",
    paragraphs: ["We do not sell or rent your personal or project information. Information may be shared only in the following cases:"],
    subSections: [
      {
        heading: "4.1 With Trusted Service Providers",
        paragraphs: ["Such as:"],
        bullets: [
          "Prototyping labs",
          "Fabrication partners",
          "Manufacturers",
          "Testing facilities",
          "IT and cloud service providers",
          "Third-party specialists assisting with project delivery",
        ],
        postNote:
          "All providers are required to maintain confidentiality and follow secure handling procedures.",
      },
      {
        heading: "4.2 For Legal Compliance",
        paragraphs: ["We may disclose information if required to:"],
        bullets: [
          "Comply with Australian law",
          "Respond to court orders or government requests",
          "Protect our legal rights",
          "Prevent fraud or security issues",
        ],
      },
    ],
  },
  {
    title: "5. Cookies & Tracking",
    paragraphs: [
      "Our website may use cookies to improve functionality, user experience, and analytics. For more details, refer to our Cookies Policy.",
    ],
  },
  {
    title: "6. Data Retention",
    paragraphs: [
      "We retain personal and project data only as long as necessary to:",
    ],
    bullets: [
      "Deliver services",
      "Maintain project history for future updates or revisions",
      "Meet legal obligations",
      "Resolve disputes",
    ],
    postNote:
      "You may request deletion of your data unless retention is required by law.",
  },
  {
    title: "7. Your Rights",
    paragraphs: ["Depending on your location, you may request:"],
    bullets: [
      "Access to your information",
      "Correction of inaccurate data",
      "Deletion of personal information",
      "Restriction of processing",
      "A copy of your stored data",
      "Opt-out from marketing communications",
    ],
    postNote: "Requests may be sent to connect@artivo.com.au.",
  },
  {
    title: "8. Third-Party Links",
    paragraphs: [
      "Our website may include links to external websites. We are not responsible for their privacy practices or content.",
    ],
  },
  {
    title: "9. Children’s Privacy",
    paragraphs: [
      "Our services are not directed toward individuals under 16. We do not knowingly collect information from minors.",
    ],
  },
  {
    title: "10. International Transfers",
    paragraphs: [
      "Client data may be securely accessed or stored through international cloud servers. We ensure appropriate protection in accordance with Australian privacy laws.",
    ],
  },
  {
    title: "11. Updates to This Policy",
    paragraphs: [
      "We may update this Privacy Policy at any time. Changes will be reflected with a new “Last Updated” date at the top of this page.",
    ],
  },
  {
    title: "12. Governing Law",
    paragraphs: [
      "This Privacy Policy is governed by the laws of Australia and New Zealand.",
    ],
  },
  {
    title: "13. Acceptance",
    paragraphs: [
      "By engaging our services, you agree to the terms outlined in this Privacy Policy.",
    ],
  },
  {
    title: "14. Contact Us",
    paragraphs: [
      "If you have questions about our Privacy Policy, you may contact us:",
      "Email: connect@artivo.com.au",
      "Website: www.artivo.com.au",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-24 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Artivo Group - Privacy Policy</h1>
          <p className="text-gray-700 font-medium">
            Artivo Group — Irisone Group Pty Ltd (ABN 87 664 854 291)
          </p>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            {introParagraphs.map((paragraph, index) => (
              <p key={`intro-${index}`}>{paragraph}</p>
            ))}
          </div>
        </header>

        <section className="space-y-10">
          {sections.map((section, sectionIndex) => (
            <article key={section.title} className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
              {section.paragraphs && (
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${section.title}-paragraph-${paragraphIndex}`}>{paragraph}</p>
                  ))}
                </div>
              )}
              {section.bullets && (
                <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                  {section.bullets.map((item, bulletIndex) => (
                    <li key={`${section.title}-bullet-${bulletIndex}`}>{item}</li>
                  ))}
                </ul>
              )}
              {section.subSections &&
                section.subSections.map((subSection, subIndex) => (
                  <div key={`${section.title}-sub-${subIndex}`} className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-700">{subSection.heading}</h3>
                    {subSection.paragraphs && (
                      <div className="space-y-2 text-gray-600 leading-relaxed">
                        {subSection.paragraphs.map((paragraph, paragraphIndex) => (
                          <p key={`${subSection.heading}-paragraph-${paragraphIndex}`}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                    {subSection.bullets && (
                      <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                        {subSection.bullets.map((item, bulletIndex) => (
                          <li key={`${subSection.heading}-bullet-${bulletIndex}`}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {subSection.footnote && (
                      <p className="text-gray-600 leading-relaxed">{subSection.footnote}</p>
                    )}
                    {subSection.secondaryBullets && (
                      <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                        {subSection.secondaryBullets.map((item, bulletIndex) => (
                          <li key={`${subSection.heading}-secondary-${bulletIndex}`}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {subSection.postNote && (
                      <p className="text-gray-600 leading-relaxed">{subSection.postNote}</p>
                    )}
                  </div>
                ))}
              {section.postNote && (
                <p className="text-gray-600 leading-relaxed">{section.postNote}</p>
              )}
            </article>
          ))}
        </section>

        <footer className="space-y-4 text-gray-600 leading-relaxed">
          <p>Last Updated: 12 November 2025</p>
        </footer>
      </main>
      <Footer />
    </div>
  );
}
