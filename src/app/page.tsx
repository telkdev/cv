import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import { Education } from "./components/Education";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | Senior Front-end Engineer - CV`,
  description: RESUME_DATA.about,
  keywords: [
    "Senior Front-end Engineer",
    "Vue.js",
    "Nuxt.js",
    "TypeScript",
    "React",
    "Next.js",
    "Agentic Development",
    "Claude Code",
    "MCP Servers",
    "AI Agents",
    "Micro-frontends",
    "Core Web Vitals",
    "SSR",
    "SSG",
    "GraphQL",
    "Pinia",
    "Node.js",
    "Front-end Developer",
    "UI Architecture",
  ],
  openGraph: {
    title: `${RESUME_DATA.name} | Senior Front-end Engineer`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
    url: RESUME_DATA.personalWebsiteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} | Senior Front-end Engineer`,
    description: RESUME_DATA.about,
  },
};

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  return [
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function ResumePage() {
  return (
    <main
      className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
      id="main-content"
    >
      <article
        className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
        itemScope
        itemType="https://schema.org/Person"
      >
        <meta itemProp="name" content={RESUME_DATA.name} />
        <meta itemProp="jobTitle" content="Senior Front-end Engineer" />
        <meta itemProp="email" content={RESUME_DATA.contact.email} />
        <meta itemProp="telephone" content={RESUME_DATA.contact.tel} />
        <meta itemProp="url" content={RESUME_DATA.personalWebsiteUrl} />
        <meta itemProp="image" content={RESUME_DATA.avatarUrl} />

        <Header />

        <div className="space-y-8 print:space-y-4">
          <Summary summary={RESUME_DATA.summary} />

          <Skills skills={RESUME_DATA.skills} />

          <WorkExperience work={RESUME_DATA.work} />

          <Education education={RESUME_DATA.education} />

          <Projects projects={RESUME_DATA.projects} />
        </div>
      </article>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}
